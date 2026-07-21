/**
 * NIMTA Apply Form -> Google Sheets
 *
 * SETUP
 * 1. Create a new Google Sheet (or open an existing one).
 * 2. Extensions -> Apps Script -> paste this file -> Save.
 * 3. Run setupSheet once (select setupSheet, click Run, approve permissions).
 * 4. Deploy -> New deployment -> Web app
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 5. Copy the Web app URL into your site .env.local:
 *    NEXT_PUBLIC_NIMTA_FORM_URL=https://script.google.com/macros/s/AKfycby0HQ8sv5kPfzNqXyzh35ONOP90SRf33XPgfjgQzAp3jmqcUIun1V5YBBFfA9S169YouA/exec
 *
 * Sheet: https://docs.google.com/spreadsheets/d/1K2nOHztgdTXtVQlsbNewq9Jcbc_S_rB85jNKFr9F6r4/edit
 */

/** NIMTA applications spreadsheet */
var SPREADSHEET_ID = '1K2nOHztgdTXtVQlsbNewq9Jcbc_S_rB85jNKFr9F6r4';

/** Tab gid from the sheet URL (fallback if name lookup fails) */
var SHEET_GID = 1951210370;

/** Change this if you want a custom tab name */
var SHEET_NAME = 'Applications';

/** Column headers written on first run */
var HEADERS = [
  'Timestamp',
  'First Name',
  'Last Name',
  'Email Address',
  'Phone Number',
  'Applicant Category',
  'Programme of Interest',
  'Preferred Delivery Mode',
  'Highest Qualification',
  'Message',
];

/**
 * Run once from the Apps Script editor to create headers.
 */
function setupSheet() {
  var sheet = getSheet_();
  ensureHeaders_(sheet);
  Logger.log('Sheet ready: ' + sheet.getName());
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
    var sheet = getSheet_();
    ensureHeaders_(sheet);

    var row = [
      new Date(),
      clean_(payload.firstName),
      clean_(payload.lastName),
      clean_(payload.email),
      clean_(payload.phone),
      clean_(payload.category),
      clean_(payload.programme),
      clean_(payload.deliveryMode),
      clean_(payload.qualification),
      clean_(payload.message),
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
  var sheet = getSheet_();
  ensureHeaders_(sheet);

  return jsonResponse_(true, 'NIMTA apply form endpoint is active.', {
    sheetName: sheet.getName(),
    rowCount: sheet.getLastRow(),
  });
}

function getSheet_() {
  var spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
  var sheet = spreadsheet.getSheetById(SHEET_GID);

  if (!sheet) {
    sheet = spreadsheet.getSheetByName(SHEET_NAME);
  }

  if (!sheet) {
    sheet = spreadsheet.insertSheet(SHEET_NAME);
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
