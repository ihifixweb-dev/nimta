'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import {
  applicationDocumentFields,
  genderOptions,
  programmeOptions,
} from '@/lib/data/apply-options';

const formEndpoint = process.env.NEXT_PUBLIC_NIMTA_FORM_URL ?? '';

const MAX_DOCUMENT_SIZE_BYTES = 5 * 1024 * 1024;
const ACCEPTED_DOCUMENT_TYPES = ['application/pdf', 'image/jpeg', 'image/png'];
const ACCEPTED_DOCUMENT_EXTENSIONS = '.pdf,.jpg,.jpeg,.png';
const STANDARD_APPLICANT_CATEGORY = 'Standard Admission (No Scholarship)';

export type ApplyFormVariant = 'scholarship' | 'standard';

type ToastState = {
  type: 'success' | 'error';
  title: string;
  message: string;
} | null;

type DocumentPayload = {
  label: string;
  filename: string;
  mimeType: string;
  base64: string;
};

function parseSubmissionResponse(raw: string) {
  const trimmed = raw.trim();
  if (!trimmed) {
    return null;
  }

  try {
    return JSON.parse(trimmed) as { success?: boolean; message?: string };
  } catch {
    return null;
  }
}

function readFileAsBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result;
      if (typeof result === 'string') {
        resolve(result.split(',').pop() ?? '');
      } else {
        reject(new Error(`Unable to read ${file.name}.`));
      }
    };
    reader.onerror = () => reject(reader.error ?? new Error(`Unable to read ${file.name}.`));
    reader.readAsDataURL(file);
  });
}

export default function ApplyForm({
  variant = 'scholarship',
}: {
  variant?: ApplyFormVariant;
}) {
  const isScholarship = variant === 'scholarship';
  const [showModal, setShowModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [toast, setToast] = useState<ToastState>(null);
  const toastTimerRef = useRef<number | null>(null);

  const showToast = (nextToast: Exclude<ToastState, null>) => {
    if (toastTimerRef.current) {
      window.clearTimeout(toastTimerRef.current);
    }

    setToast(nextToast);

    toastTimerRef.current = window.setTimeout(() => {
      setToast(null);
      toastTimerRef.current = null;
    }, 6000);
  };

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setShowModal(false);
        setToast(null);
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      if (toastTimerRef.current) {
        window.clearTimeout(toastTimerRef.current);
      }
    };
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitError('');
    setToast(null);

    const form = event.currentTarget;
    let valid = true;

    form.querySelectorAll<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>(
      '[required]',
    ).forEach((field) => {
      if (!field.value.trim()) {
        field.style.borderColor = '#C8102E';
        valid = false;
        field.addEventListener(
          'input',
          () => {
            field.style.borderColor = '';
          },
          { once: true },
        );
      }
    });

    if (!valid) {
      showToast({
        type: 'error',
        title: 'Please complete all required fields',
        message: 'Fill in every field marked with an asterisk before submitting.',
      });
      return;
    }

    if (!formEndpoint) {
      const message =
        'Form endpoint is not configured yet. Please contact admissions@nimta.edu.ng.';
      setSubmitError(message);
      showToast({
        type: 'error',
        title: 'Submission unavailable',
        message,
      });
      return;
    }

    const formData = new FormData(form);

    const documentEntries = isScholarship
      ? applicationDocumentFields
          .map((field) => ({ field, file: formData.get(field.key) as File | null }))
          .filter(
            (entry): entry is { field: (typeof applicationDocumentFields)[number]; file: File } =>
              !!entry.file && entry.file.size > 0,
          )
      : [];

    for (const { file } of documentEntries) {
      if (file.size > MAX_DOCUMENT_SIZE_BYTES) {
        showToast({
          type: 'error',
          title: 'File too large',
          message: `${file.name} is larger than 5MB. Please upload a smaller file.`,
        });
        return;
      }

      if (!ACCEPTED_DOCUMENT_TYPES.includes(file.type)) {
        showToast({
          type: 'error',
          title: 'Unsupported file type',
          message: `${file.name} must be a PDF or image (JPG/PNG).`,
        });
        return;
      }
    }

    let documents: DocumentPayload[] = [];

    try {
      documents = await Promise.all(
        documentEntries.map(async ({ field, file }) => ({
          label: field.label,
          filename: file.name,
          mimeType: file.type || 'application/octet-stream',
          base64: await readFileAsBase64(file),
        })),
      );
    } catch (error) {
      const message =
        error instanceof Error ? error.message : 'Unable to read one of your files.';
      showToast({ type: 'error', title: 'File upload failed', message });
      return;
    }

    const payload = {
      applicationType: variant,
      firstName: String(formData.get('firstName') ?? ''),
      lastName: String(formData.get('lastName') ?? ''),
      email: String(formData.get('email') ?? ''),
      phone: String(formData.get('phone') ?? ''),
      gender: String(formData.get('gender') ?? ''),
      location: String(formData.get('location') ?? ''),
      category: isScholarship
        ? String(formData.get('category') ?? '')
        : STANDARD_APPLICANT_CATEGORY,
      programme: String(formData.get('programme') ?? ''),
      deliveryMode: programmeOptions.deliveryMode,
      qualification: String(formData.get('qualification') ?? ''),
      message: isScholarship ? String(formData.get('message') ?? '') : '',
      documents,
    };

    setIsSubmitting(true);

    try {
      const response = await fetch(formEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify(payload),
      });

      const raw = await response.text();
      const result = parseSubmissionResponse(raw);
      const succeeded = response.ok && (result?.success ?? raw.length > 0);

      if (!succeeded) {
        throw new Error(
          result?.message ?? 'Unable to submit your application. Please try again.',
        );
      }

      form.reset();
      setShowModal(true);
      showToast({
        type: 'success',
        title: 'Application submitted',
        message:
          'Thank you. Our admissions team will be in touch soon.',
      });
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : 'Unable to submit your application. Please try again.';

      setSubmitError(message);
      showToast({
        type: 'error',
        title: 'Submission failed',
        message,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className={`form-card${isSubmitting ? ' form-card--loading' : ''}`}>
        {isSubmitting ? (
          <div className="form-submit-overlay" aria-hidden="true">
            <div className="form-submit-overlay-in">
              <span className="fsubmit-spinner" />
              Submitting your application...
            </div>
          </div>
        ) : null}

        <h3>Expression of Interest</h3>
        <p>
          Fields marked * are required. Your information is protected under our
          data policy.
        </p>
        <form id="appForm" onSubmit={handleSubmit} noValidate aria-busy={isSubmitting}>
          <fieldset disabled={isSubmitting} style={{ border: 'none', padding: 0, margin: 0 }}>
            <div className="fg">
              <div className="fld">
                <label htmlFor="fn">First Name *</label>
                <input
                  id="fn"
                  name="firstName"
                  type="text"
                  placeholder="e.g. Amina"
                  required
                />
              </div>
              <div className="fld">
                <label htmlFor="ln">Last Name *</label>
                <input
                  id="ln"
                  name="lastName"
                  type="text"
                  placeholder="e.g. Hassan"
                  required
                />
              </div>
              <div className="fld">
                <label htmlFor="em">Email Address *</label>
                <input
                  id="em"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div className="fld">
                <label htmlFor="ph">Phone Number *</label>
                <input
                  id="ph"
                  name="phone"
                  type="tel"
                  placeholder="+234 800 000 0000"
                  required
                />
              </div>
              <div className="fld">
                <label htmlFor="gen">Gender *</label>
                <select id="gen" name="gender" required defaultValue="">
                  <option value="">Select gender</option>
                  {genderOptions.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              </div>
              <div className="fld">
                <label htmlFor="loc">Location *</label>
                <input
                  id="loc"
                  name="location"
                  type="text"
                  placeholder="e.g. Abuja, FCT"
                  required
                />
              </div>
              {isScholarship ? (
                <div className="fld full">
                  <label htmlFor="cat">Applicant Category *</label>
                  <select id="cat" name="category" required defaultValue="">
                    <option value="">Select your category</option>
                    {programmeOptions.categories.map((option) => (
                      <option key={option}>{option}</option>
                    ))}
                  </select>
                </div>
              ) : null}
              <div className="fld full">
                <label htmlFor="crs">Programme of Interest *</label>
                <select id="crs" name="programme" required defaultValue="">
                  <option value="">Select a programme</option>
                  {programmeOptions.programmeGroups.map((group) => (
                    <optgroup key={group.label} label={group.label}>
                      {group.options.map((option) => (
                        <option key={option}>{option}</option>
                      ))}
                    </optgroup>
                  ))}
                </select>
              </div>
              <div className="fld full">
                <label htmlFor="qual">Highest Qualification *</label>
                <select id="qual" name="qualification" required defaultValue="">
                  <option value="">Select qualification</option>
                  {programmeOptions.qualifications.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              </div>
              {isScholarship ? (
                <>
                  <div className="fld full">
                    <label>Supporting Documents (Optional)</label>
                    <p className="fdocs-note">
                      Only needed if you are claiming a scholarship category above. Accepted
                      formats: PDF, JPG, PNG. Max 5MB each.
                    </p>
                    <div className="fdocs">
                      {applicationDocumentFields.map((field) => (
                        <div key={field.key} className="fdoc">
                          <label htmlFor={field.key}>{field.label}</label>
                          <input
                            id={field.key}
                            name={field.key}
                            type="file"
                            accept={ACCEPTED_DOCUMENT_EXTENSIONS}
                          />
                          <span className="fdoc-hint">{field.hint}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="fld full">
                    <label htmlFor="msg">Why do you need this scholarship? *</label>
                    <textarea
                      id="msg"
                      name="message"
                      placeholder="Tell us about your circumstances and why the scholarship matters to you."
                      required
                    />
                  </div>
                </>
              ) : null}
            </div>
            <div className="fnote">
              By submitting, you confirm that you have read and accept the{' '}
              <Link href="/policy">NIMTA Programme Policy and Terms</Link>. Your
              information is processed securely and used only for your
              application.
            </div>
            {submitError ? (
              <p style={{ color: '#C8102E', marginBottom: 16 }} role="alert">
                {submitError}
              </p>
            ) : null}
            <button type="submit" className="fsubmit" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <span className="fsubmit-spinner" aria-hidden="true" />
                  Submitting...
                </>
              ) : (
                'Submit My Application'
              )}
            </button>
          </fieldset>
        </form>
      </div>

      <div
        className={`form-toast${toast ? ' show' : ''}${toast ? ` ${toast.type}` : ''}`}
        role={toast?.type === 'error' ? 'alert' : 'status'}
        aria-live="polite"
      >
        {toast ? (
          <>
            <strong>{toast.title}</strong>
            <span>{toast.message}</span>
          </>
        ) : null}
      </div>

      <div
        id="smodal"
        role="dialog"
        aria-modal="true"
        className={showModal ? 'open' : ''}
      >
        <div className="scard">
          <div className="sicon">
            <svg viewBox="0 0 24 24">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <h3>We have your application.</h3>
          <p>
            Thank you for raising your hand. Our admissions team will be in
            touch with your full application pack, and your scholarship
            confirmation in writing if one applies to you.
          </p>
          <button
            type="button"
            className="sclose"
            onClick={() => setShowModal(false)}
          >
            Close
          </button>
        </div>
      </div>
    </>
  );
}
