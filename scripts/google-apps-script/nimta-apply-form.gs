/**
 * NIMTA Apply Form -> Google Sheets
 *
 * SETUP
 * 1. Create a new Google Sheet (or open an existing one).
 * 2. Extensions -> Apps Script -> paste this file -> Save.
 * 3. Create (or reuse) a Google Drive folder to hold uploaded documents,
 *    copy its ID from the URL, and paste it into DRIVE_PARENT_FOLDER_ID below.
 *    Leave it blank to disable document uploads (rows are still saved).
 * 4. Run setupSheet once (select setupSheet, click Run, approve permissions,
 *    including Drive access).
 * 5. Deploy -> New deployment -> Web app
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 6. Copy the Web app URL into your site .env.local:
 *    NEXT_PUBLIC_NIMTA_FORM_URL=https://script.google.com/macros/s/AKfycby0HQ8sv5kPfzNqXyzh35ONOP90SRf33XPgfjgQzAp3jmqcUIun1V5YBBFfA9S169YouA/exec
 *
 * Sheet: https://docs.google.com/spreadsheets/d/1K2nOHztgdTXtVQlsbNewq9Jcbc_S_rB85jNKFr9F6r4/edit
 *
 * The site posts two kinds of applications, routed to separate tabs by
 * payload.applicationType (see SHEET_NAMES_BY_TYPE below):
 *   - "scholarship" (the /apply page)          -> "Scholarship" tab
 *   - "standard"    (the /apply/standard page) -> "Applications" tab
 * Both tabs are created automatically on first run if they don't already
 * exist (leaves any other tabs untouched).
 *
 * NOTE: if a tab already has data, ensureHeaders_ will NOT retrofit new
 * columns (it only writes headers on an empty sheet). Add "Gender",
 * "Location", and "Documents Folder" to its existing header row by hand.
 */

/** NIMTA applications spreadsheet */
var SPREADSHEET_ID = '1K2nOHztgdTXtVQlsbNewq9Jcbc_S_rB85jNKFr9F6r4';

/** Which tab each application type is written to */
var SHEET_NAMES_BY_TYPE = {
  scholarship: 'Scholarship',
  standard: 'Applications',
};

/** Drive folder ID that per-applicant document folders are created inside. Leave blank to skip uploads. */
var DRIVE_PARENT_FOLDER_ID = '1fObM7eo_TfHJzmy-i3-RbqklwUu_GAlX';

/** Column headers written on first run */
var HEADERS = [
  'Timestamp',
  'First Name',
  'Last Name',
  'Email Address',
  'Phone Number',
  'Gender',
  'Location',
  'Applicant Category',
  'Programme of Interest',
  'Preferred Delivery Mode',
  'Highest Qualification',
  'Message',
  'Documents Folder',
];

/**
 * Run once from the Apps Script editor to create both tabs and their headers.
 */
function setupSheet() {
  Object.keys(SHEET_NAMES_BY_TYPE).forEach(function (type) {
    var sheet = getSheet_(SHEET_NAMES_BY_TYPE[type]);
    ensureHeaders_(sheet);
    Logger.log('Sheet ready: ' + sheet.getName());
  });
}

/**
 * Web app entry point for form POST requests.
 */
function doPost(e) {
  try {
    if (!e || !e.postData || !e.postData.contents) {
      return jsonResponse_(false, 'Missing request body.');
    }

    var payload = JSON.parse(e.postData.contents);
    var sheetName =
      SHEET_NAMES_BY_TYPE[payload.applicationType] || SHEET_NAMES_BY_TYPE.standard;
    var sheet = getSheet_(sheetName);
    ensureHeaders_(sheet);

    var applicantName =
      (clean_(payload.firstName) + ' ' + clean_(payload.lastName)).trim() || 'Applicant';
    var documentsFolderUrl = saveDocuments_(payload.documents, applicantName);

    var row = [
      new Date(),
      clean_(payload.firstName),
      clean_(payload.lastName),
      clean_(payload.email),
      clean_(payload.phone),
      clean_(payload.gender),
      clean_(payload.location),
      clean_(payload.category),
      clean_(payload.programme),
      clean_(payload.deliveryMode),
      clean_(payload.qualification),
      clean_(payload.message),
      documentsFolderUrl,
    ];

    sheet.appendRow(row);

    return jsonResponse_(true, 'Application saved.');
  } catch (error) {
    return jsonResponse_(false, String(error));
  }
}

/**
 * Optional health check. Open the deployment URL in a browser to verify it works.
 */
function doGet() {
  var summary = Object.keys(SHEET_NAMES_BY_TYPE).map(function (type) {
    var sheet = getSheet_(SHEET_NAMES_BY_TYPE[type]);
    ensureHeaders_(sheet);
    return { type: type, sheetName: sheet.getName(), rowCount: sheet.getLastRow() };
  });

  return jsonResponse_(true, 'NIMTA apply form endpoint is active.', {
    sheets: summary,
  });
}

/**
 * Uploads base64-encoded documents into a new subfolder of
 * DRIVE_PARENT_FOLDER_ID and returns the folder's URL, or '' if there is
 * nothing to save (no documents, or DRIVE_PARENT_FOLDER_ID is unset).
 */
function saveDocuments_(documents, applicantName) {
  if (!documents || !documents.length || !DRIVE_PARENT_FOLDER_ID) {
    return '';
  }

  var parent = DriveApp.getFolderById(DRIVE_PARENT_FOLDER_ID);
  var stamp = Utilities.formatDate(
    new Date(),
    Session.getScriptTimeZone(),
    'yyyy-MM-dd HH:mm:ss',
  );
  var folder = parent.createFolder(applicantName + ' - ' + stamp);

  documents.forEach(function (doc) {
    if (!doc || !doc.base64) {
      return;
    }

    var bytes = Utilities.base64Decode(doc.base64);
    var blob = Utilities.newBlob(
      bytes,
      doc.mimeType || 'application/octet-stream',
      doc.filename || doc.label || 'document',
    );
    folder.createFile(blob);
  });

  return folder.getUrl();
}

function getSheet_(sheetName) {
  var spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
  var sheet = spreadsheet.getSheetByName(sheetName);

  if (!sheet) {
    sheet = spreadsheet.insertSheet(sheetName);
  }

  return sheet;
}

function ensureHeaders_(sheet) {
  if (sheet.getLastRow() > 0) {
    return;
  }

  sheet.appendRow(HEADERS);

  var headerRange = sheet.getRange(1, 1, 1, HEADERS.length);
  headerRange.setFontWeight('bold');
  headerRange.setBackground('#f3f3f3');
  sheet.setFrozenRows(1);
  sheet.autoResizeColumns(1, HEADERS.length);
}

function clean_(value) {
  if (value === null || value === undefined) {
    return '';
  }

  return String(value).trim();
}

function jsonResponse_(success, message, extra) {
  var body = {
    success: success,
    message: message,
  };

  if (extra) {
    Object.keys(extra).forEach(function (key) {
      body[key] = extra[key];
    });
  }

  return ContentService.createTextOutput(JSON.stringify(body)).setMimeType(
    ContentService.MimeType.JSON,
  );
}
