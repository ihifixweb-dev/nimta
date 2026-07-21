'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { programmeOptions } from '@/lib/data/apply-options';

const formEndpoint = process.env.NEXT_PUBLIC_NIMTA_FORM_URL ?? '';

type ToastState = {
  type: 'success' | 'error';
  title: string;
  message: string;
} | null;

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

export default function ApplyForm() {
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
    const payload = {
      firstName: String(formData.get('firstName') ?? ''),
      lastName: String(formData.get('lastName') ?? ''),
      email: String(formData.get('email') ?? ''),
      phone: String(formData.get('phone') ?? ''),
      category: String(formData.get('category') ?? ''),
      programme: String(formData.get('programme') ?? ''),
      deliveryMode: programmeOptions.deliveryMode,
      qualification: String(formData.get('qualification') ?? ''),
      message: String(formData.get('message') ?? ''),
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
          'Thank you. Our admissions team will contact you within five working days.',
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
              <div className="fld full">
                <label htmlFor="cat">Applicant Category *</label>
                <select id="cat" name="category" required defaultValue="">
                  <option value="">Select your category</option>
                  {programmeOptions.categories.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              </div>
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
              <div className="fld full">
                <label htmlFor="msg">
                  Anything you would like us to know? (Optional)
                </label>
                <textarea
                  id="msg"
                  name="message"
                  placeholder="Tell us a little about yourself, or ask a question."
                />
              </div>
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
            touch within five working days with your full application pack, and
            your scholarship confirmation in writing if one applies to you.
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
