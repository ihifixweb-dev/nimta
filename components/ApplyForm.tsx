'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { programmeOptions } from '@/lib/data/apply-options';

export default function ApplyForm() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setShowModal(false);
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
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

    if (!valid) return;

    setShowModal(true);
    form.reset();
  };

  return (
    <>
      <div className="form-card">
        <h3>Expression of Interest</h3>
        <p>
          Fields marked * are required. Your information is protected under our
          data policy.
        </p>
        <form id="appForm" onSubmit={handleSubmit} noValidate>
          <div className="fg">
            <div className="fld">
              <label htmlFor="fn">First Name *</label>
              <input id="fn" type="text" placeholder="e.g. Amina" required />
            </div>
            <div className="fld">
              <label htmlFor="ln">Last Name *</label>
              <input id="ln" type="text" placeholder="e.g. Hassan" required />
            </div>
            <div className="fld">
              <label htmlFor="em">Email Address *</label>
              <input
                id="em"
                type="email"
                placeholder="your@email.com"
                required
              />
            </div>
            <div className="fld">
              <label htmlFor="ph">Phone Number *</label>
              <input
                id="ph"
                type="tel"
                placeholder="+234 800 000 0000"
                required
              />
            </div>
            <div className="fld full">
              <label htmlFor="cat">Applicant Category *</label>
              <select id="cat" required defaultValue="">
                <option value="">Select your category</option>
                {programmeOptions.categories.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </div>
            <div className="fld full">
              <label htmlFor="crs">Programme of Interest *</label>
              <select id="crs" required defaultValue="">
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
              <label htmlFor="del">Preferred Delivery Mode *</label>
              <select id="del" required defaultValue="">
                <option value="">Select mode</option>
                {programmeOptions.deliveryModes.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </div>
            <div className="fld full">
              <label htmlFor="qual">Highest Qualification *</label>
              <select id="qual" required defaultValue="">
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
          <button type="submit" className="fsubmit">
            Submit My Application
          </button>
        </form>
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
