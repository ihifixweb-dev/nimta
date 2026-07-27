import type { Metadata } from 'next';
import Link from 'next/link';
import CtaBand from '@/components/CtaBand';
import ImgSlot from '@/components/ImgSlot';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import { aboutProgrammeHighlights } from '@/lib/data/about-programmes';
import { images } from '@/lib/data/images';

export const metadata: Metadata = {
  title: 'About the Institute',
};

const principles = [
  {
    title: '1. You learn by doing.',
    text: 'Ninety-nine percent of your time here is spent on the work itself. Coding. Cutting. Cooking. Styling. Selling. Theory earns its place only when it makes your hands better.',
  },
  {
    title: '2. Your instructors do this for a living.',
    text: 'Every facilitator at NIMTA is an active professional in the field they teach. They know what the market pays for this year, not what a textbook said a decade ago.',
  },
  {
    title: '3. You graduate with proof.',
    text: 'A certificate says you attended. A portfolio proves you can deliver. Every NIMTA graduate leaves with both, and it is the second one that gets you hired.',
  },
];

const marks = [
  '99% Practical',
  'Industry Instructors',
  'NBTE Approved',
  'Portfolio by Graduation',
  'In-Person Only',
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        breadcrumb="About the Institute"
        kicker="An institution that keeps its word."
        title="NAOWA Institute of Management and Technology"
        description="Established in 2010 under the Nigerian Army Officers' Wives Association. Approved by the National Board for Technical Education. Built on one conviction that competence, not connection, is what changes a young person's life."
      />

      <Reveal className="sec">
        <div className="wrap">
          <div className="about-g">
            <div className="about-imgs">
              <ImgSlot
                label="Campus Photograph"
                src={images.campusMain}
                alt="NIMTA campus building"
              />
              <div className="about-cred">
                <b>Est. 2010</b>
                <span>
                  NBTE approved. Sixteen years of training people
                  properly.
                </span>
              </div>
            </div>
            <div>
              <div className="kicker">Who We Are</div>
              <h2 className="h-major">
                Built by the Army community. Open to the nation.
              </h2>
              <p className="lede" style={{ margin: '22px 0 18px' }}>
                For sixteen years, NIMTA has trained the sons and daughters of
                those who serve this country. We do not promise certificates. We
                promise competence. Every programme here is built the way the
                Army builds anything worth keeping, with structure, with
                standards, and with an unshakeable focus on the outcome.
              </p>
              <p
                style={{
                  fontSize: '0.9rem',
                  color: 'var(--stone)',
                  lineHeight: 1.85,
                }}
              >
                You will train under working professionals, not career
                lecturers. You will spend your days doing the work, not copying
                notes. And you will leave with something no one can take from
                you, a skill, a portfolio, and the confidence of a person who has
                earned both.
              </p>
              <div className="about-marks">
                {marks.map((mark) => (
                  <span key={mark} className="mark">
                    {mark}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal className="sec sec-alt">
        <div className="wrap">
          <div className="sec-head">
            <div className="kicker">How We Train</div>
            <h2 className="h-major">We have three principles</h2>
          </div>
          <div className="voices-g principles-g">
            {principles.map((principle) => (
              <div key={principle.title} className="voice principle-voice">
                <h3 className="principle-title">{principle.title}</h3>
                <p className="principle-text">{principle.text}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal className="sec">
        <div className="wrap">
          <div className="sec-head">
            <div className="kicker">Sixteen Years of Training</div>
            <h2 className="h-major">
              Five programmes. <br />Thousands of participants. <br /> One standard throughout.
            </h2>
            <p className="lede" style={{ marginTop: 20 }}>
              NIMTA has run practical, hands-on programmes since 2010. These are
              five of the tracks where participants have trained, built portfolios,
              and gone on to earn from what they learned here.
            </p>
          </div>

          <div className="about-prog-list">
            {aboutProgrammeHighlights.map((programme, index) => (
              <article
                key={programme.name}
                className={`about-prog${index % 2 === 1 ? ' about-prog--reverse' : ''}`}
              >
                <div className="about-prog-img">
                  <ImgSlot
                    label={programme.department}
                    src={programme.image}
                    alt={programme.imageAlt}
                    style={{ aspectRatio: '4/3' }}
                  />
                </div>
                <div className="about-prog-body">
                  <div className="about-prog-since">{programme.since}</div>
                  <h3 className="about-prog-title">{programme.name}</h3>
                  <div className="about-prog-dept">{programme.department}</div>
                  <p>{programme.description}</p>
                  <Link href={programme.href} className="about-prog-link">
                    View programme details
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal className="sec sec-alt" as="section">
        <div className="wrap" id="accreditation">
          <div className="about-g">
            <div>
              <div className="kicker">Standing &amp; Accreditation</div>
              <h2 className="h-major">
                We are recognised, regulated and respected globally
              </h2>
              <p className="lede" style={{ margin: '22px 0 18px' }}>
                NIMTA operates under the auspices of the Nigerian Army
                Officers&apos; Wives Association (NAOWA), an organisation with
                over six decades of humanitarian service, and holds approval from
                the National Board for Technical Education (NBTE).
              </p>
              <p
                style={{
                  fontSize: '0.9rem',
                  color: 'var(--stone)',
                  lineHeight: 1.85,
                }}
              >
                Our certificates are signed by the Director-General of NIMTA and
                the President of NAOWA, carry a unique verifiable serial number,
                and are backed by an institution whose name has meant something
                in this country for more than sixty years.
              </p>
              <div
                style={{
                  marginTop: 32,
                  display: 'flex',
                  gap: 14,
                  flexWrap: 'wrap',
                }}
              >
                <Link href="/programmes" className="btn btn-ink">
                  Explore Programmes
                </Link>
                <Link href="/admissions" className="btn btn-ghost">
                  Admissions Details
                </Link>
              </div>
            </div>
            <div className="about-imgs">
              <ImgSlot
                label="Certificate Presentation Photo"
                src={images.certificatePresentation}
                alt="NIMTA certificate presentation ceremony"
                style={{ aspectRatio: '4/3' }}
              />
            </div>
          </div>
        </div>
      </Reveal>

      <CtaBand
        title="Curious what we actually teach?"
        description="Seventeen programmes across five departments. Every curriculum downloadable."
        primaryHref="/programmes"
        primaryLabel="View All Programmes"
        imageSrc={images.deptTechnology}
        imageAlt="NIMTA technology training session"
      />
    </>
  );
}
