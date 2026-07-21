import type { Metadata } from 'next';
import AdmissionSteps from '@/components/AdmissionSteps';
import CtaBand from '@/components/CtaBand';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import ScholarshipTiers from '@/components/ScholarshipTiers';
import { admissionDocumentGroups } from '@/lib/data/admissions-docs';

export const metadata: Metadata = {
  title: 'Admissions & Scholarships',
};

const docIcons = [
  <svg key="edu" viewBox="0 0 24 24">
    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
    <path d="M6 12v5c3 3 9 3 12 0v-5" />
  </svg>,
  <svg key="id" viewBox="0 0 24 24">
    <rect x="3" y="4" width="18" height="16" rx="2" />
    <circle cx="12" cy="10" r="3" />
    <path d="M7 18c0-2.2 2.2-4 5-4s5 1.8 5 4" />
  </svg>,
  <svg key="photo" viewBox="0 0 24 24">
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <circle cx="9" cy="9" r="2" />
    <path d="M21 15l-5-5L5 21" />
  </svg>,
  <svg key="letter" viewBox="0 0 24 24">
    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
  </svg>,
  <svg key="idcard" viewBox="0 0 24 24">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <circle cx="9" cy="11" r="2.5" />
    <path d="M5 18c0-2 1.8-3.5 4-3.5s4 1.5 4 3.5" />
    <line x1="15" y1="9" x2="19" y2="9" />
    <line x1="15" y1="13" x2="19" y2="13" />
  </svg>,
  <svg key="book" viewBox="0 0 24 24">
    <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
  </svg>,
];

function getDocIcon(groupIndex: number, docIndex: number) {
  if (groupIndex === 0) return docIcons[docIndex];
  return docIcons[docIndex + 3];
}

export default function AdmissionsPage() {
  return (
    <>
      <PageHero
        breadcrumb="Admissions"
        kicker="Admissions & Scholarships"
        title={
          <>
            Open to everyone.
            <br />
            Generous to the families who serve.
          </>
        }
        description="Admission to NIMTA is honest and straightforward. Anyone with an SSCE result can apply, and every applicant is held to the same standard. And because of who founded this institute, the children of those who serve get a special thank-you."
      />

      <section className="sec" id="tiers">
        <div className="wrap">
          <div className="sec-head">
            <div className="kicker">Scholarships &amp; Fees</div>
            <h2 className="h-major">
              Here&apos;s how it works. Nothing hidden.
            </h2>
            <p className="lede" style={{ marginTop: 20 }}>
              NIMTA was founded by the Nigerian Army Officers&apos; Wives
              Association, and giving back to military families is part of who we
              are. If your parent wears or has worn this nation&apos;s uniform,
              some or all of your training is on us. If not, you&apos;re every
              bit as welcome, and you&apos;ll get the same facilitators, the
              same equipment, and the same standard.
            </p>
          </div>
          <Reveal as="div">
            <ScholarshipTiers />
          </Reveal>
        </div>
      </section>

      <section className="sec sec-alt" id="documents">
        <Reveal className="">
          <div className="wrap">
            <div className="sec-head">
              <div className="kicker">Required Documents</div>
              <h2 className="h-major">What to have ready.</h2>
              <p className="lede" style={{ marginTop: 20 }}>
                Getting your documents together early is the single best thing you
                can do to speed up your admission. Here&apos;s the complete list.
                There&apos;s nothing beyond what you see here.
              </p>
            </div>
            <div className="docs-g" style={{ marginTop: 0 }}>
              {admissionDocumentGroups.map((group, groupIndex) => (
                <div
                  key={group.title}
                  className={`docs-card ${group.variant}`}
                >
                  <h4>{group.title}</h4>
                  <p>{group.description}</p>
                  {group.documents.map((doc, docIndex) => (
                    <div key={doc.title} className="doc-row">
                      <div className="doc-i">
                        {getDocIcon(groupIndex, docIndex)}
                      </div>
                      <div className="doc-t">
                        <b>{doc.title}</b>
                        <span>{doc.description}</span>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <section className="sec" id="process">
        <Reveal className="">
          <div className="wrap">
            <div className="sec-head">
              <div className="kicker">The Process</div>
              <h2 className="h-major">
                Seven steps from here to your first day.
              </h2>
            </div>
            <AdmissionSteps />
          </div>
        </Reveal>
      </section>

      <CtaBand
        title="Documents ready? Then you're closer than you think."
        description="Send in your application and you'll hear from us within five working days."
        primaryHref="/apply"
        primaryLabel="Start Your Application"
      />
    </>
  );
}
