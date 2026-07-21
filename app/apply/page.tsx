import type { Metadata } from 'next';
import Link from 'next/link';
import ApplyForm from '@/components/ApplyForm';

export const metadata: Metadata = {
  title: 'Apply',
};

const applyPoints = [
  'Nothing to pay at this stage. This is simply you raising your hand.',
  "If a scholarship applies to you, it's confirmed in writing before you pay anything.",
  'An SSCE result is the only academic requirement. You bring the rest.',
];

export default function ApplyPage() {
  return (
    <section className="apply-dark">
      <div className="wrap">
        <div className="apply-g">
          <div className="apply-left">
            <div className="pcrumb">
              <Link href="/">Home</Link> &nbsp;/&nbsp; Apply
            </div>
            <div className="kicker">Admissions Now Open</div>
            <h2>
              Start something
              <br />
              <em>you&apos;ll be proud of.</em>
            </h2>
            <p>
              This part is easy. Tell us who you are and what you&apos;d like to
              learn. It takes about ten minutes, and there&apos;s nothing to pay
              right now. Within five working days, our admissions team will send
              you your full application pack, and if a scholarship applies to
              you, we&apos;ll confirm it in writing.
            </p>
            <div className="apply-points">
              {applyPoints.map((point) => (
                <div key={point} className="apply-pt">
                  <div className="apply-pt-i">
                    <svg viewBox="0 0 24 24">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>
          <ApplyForm />
        </div>
      </div>
    </section>
  );
}
