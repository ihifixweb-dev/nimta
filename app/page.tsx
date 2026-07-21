import type { Metadata } from 'next';
import Link from 'next/link';
import CtaBand from '@/components/CtaBand';
import HeroVisual from '@/components/HeroVisual';
import ImgSlot from '@/components/ImgSlot';
import Reveal from '@/components/Reveal';
import ScholarshipTiers from '@/components/ScholarshipTiers';
import { images } from '@/lib/data/images';
import {
  departments,
  guidanceCard,
  heroFacts,
  homeNewsTeaser,
  testimonials,
} from '@/lib/data/home';
import { tickerItems } from '@/lib/data/navigation';

export const metadata: Metadata = {
  title: 'Home',
};

export default function HomePage() {
  return (
    <>
      <header id="hero">
        <div className="hero-grid-lines" aria-hidden="true" />
        <div className="wrap">
          <div className="hero-in">
            <div>
              <div className="hero-open-badge">
                <span className="hero-open-dot" />
                <span>Admissions Now Open · July 2026 Session</span>
              </div>
              <h1 className="hero-h">
                Excellence is a skill.
                <br />
                <em>We teach it here.</em>
              </h1>
              <p className="hero-p">
                NIMTA is a vocational institute for people who want to be
                genuinely good at what they do. Pick your field. Software,
                design, fashion, food, beauty, business. We train you properly,
                push you further than you thought you could go, and make sure you
                leave with work you are proud to put your name on.
              </p>
              <div className="hero-cta">
                <Link href="/programmes" className="btn btn-ink">
                  Explore Programmes
                </Link>
                <Link href="/apply" className="btn btn-ghost-w">
                  Apply Now
                </Link>
              </div>
              <div className="hero-facts">
                {heroFacts.map((fact) => (
                  <div key={fact.label} className="hero-fact">
                    <div className="hero-fact-n">{fact.value}</div>
                    <div className="hero-fact-l">{fact.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <HeroVisual />
          </div>
        </div>
      </header>

      <div className="ticker" aria-hidden="true">
        <div className="ticker-t">
          {[...tickerItems, ...tickerItems].map((item, index) => (
            <span key={`${item}-${index}`} className="ticker-i">
              {item}
            </span>
          ))}
        </div>
      </div>

      <Reveal className="sec">
        <div className="wrap">
          <div className="about-g">
            <div className="about-imgs">
              <ImgSlot
                label="Campus Photograph"
                src={images.campusMain}
                alt="NIMTA main campus in Asokoro, Abuja"
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
              <div className="kicker">The Institute</div>
              <h2 className="h-major">
                Some places teach you a bit of everything. We build you fully.
              </h2>
              <p className="lede" style={{ margin: '22px 0 18px' }}>
                Most training centres hand you a manual and a certificate. NIMTA
                is different, and deliberately so. Here, you spend your days
                doing the actual work, guided by facilitators who earn their
                living doing it too. By the time you graduate, you are not
                hoping you are good enough. You know you are, and you can
                prove it.
              </p>
              <div style={{ marginTop: 32 }}>
                <Link href="/about" className="btn btn-ghost">
                  Get to Know the Institute
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal className="sec sec-alt">
        <div className="wrap">
          <div className="about-g">
            <div>
              <div className="kicker">A Message From the President</div>
              <h2 className="h-major">
                &ldquo;We do not lower our standards to accommodate doubt. We
                raise our students until the standard becomes their nature.&rdquo;
              </h2>
              <p className="lede" style={{ margin: '22px 0 28px' }}>
                Dr Safiyyah Hassan Shaibu, President of NAOWA, has a message for
                everyone thinking about joining this institute. It is honest,
                it is personal, and it will tell you exactly what kind of
                place this is.
              </p>
              <Link href="/president" className="btn btn-ink">
                Read Her Message
              </Link>
            </div>
            <div className="about-imgs">
              <ImgSlot
                label="Portrait: Dr Safiyyah Hassan Shaibu"
                src={images.presidentPortrait}
                alt="Dr Safiyyah Hassan Shaibu, President of NAOWA"
                className="president-portrait"
                sizes="(max-width: 900px) 100vw, 420px"
              />
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal className="sec">
        <div className="wrap">
          <div className="sec-head-row">
            <div>
              <div className="kicker">What You Can Learn</div>
              <h2 className="h-major">
                Five departments. One standard, excellent or not yet.
              </h2>
            </div>
            <p
              className="lede"
              style={{ maxWidth: 380, fontSize: '0.92rem' }}
            >
              Every department is run by people still active in their industry.
              Choose the craft that fits your hands, your mind, and the life
              you are building.
            </p>
          </div>
          <div className="schools-g">
            {departments.map((dept) => (
              <Link key={dept.title} className="school" href={dept.href}>
                <div className="school-img">
                  <ImgSlot
                    label={dept.imageLabel}
                    src={dept.image}
                    alt={dept.title}
                  />
                </div>
                <div className="school-b">
                  <div className="school-n">{dept.departmentNum}</div>
                  <div className="school-t">{dept.title}</div>
                  <div className="school-d">{dept.description}</div>
                  <div className="school-f">
                    <span className="school-c">{dept.programmeCount}</span>
                    <div className="school-go">
                      <svg viewBox="0 0 16 16">
                        <path d="M3 8h10M9 4l4 4-4 4" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
            <Link
              className="school"
              href={guidanceCard.href}
              style={{ background: 'var(--ink)' }}
            >
              <div
                className="school-b"
                style={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  padding: '48px 28px',
                }}
              >
                <div
                  className="school-n"
                  style={{ color: 'rgba(255,255,255,0.5)' }}
                >
                  {guidanceCard.departmentNum}
                </div>
                <div className="school-t" style={{ color: 'var(--white)' }}>
                  {guidanceCard.title}
                </div>
                <div
                  className="school-d"
                  style={{ color: 'rgba(255,255,255,0.6)' }}
                >
                  {guidanceCard.description}
                </div>
                <span
                  className="btn btn-ink"
                  style={{
                    alignSelf: 'flex-start',
                    padding: '12px 26px',
                    fontSize: '0.82rem',
                    background: 'var(--white)',
                    color: 'var(--ink)',
                  }}
                >
                  {guidanceCard.ctaLabel}
                </span>
              </div>
            </Link>
          </div>
        </div>
      </Reveal>

      <Reveal className="sec sec-alt">
        <div className="wrap">
          <div className="sec-head">
            <div className="kicker">Our Give-Back</div>
            <h2 className="h-major">
              Founded by the Army family. Open to absolutely everyone.
            </h2>
            <p className="lede" style={{ marginTop: 20 }}>
              Anyone can study at NIMTA. That is the first thing to know.
              The second is that because this institute was founded by the
              Nigerian Army Officers&apos; Wives Association, we set something
              special aside for the children of those who serve. It is our
              way of saying thank you to the families who have given so much.
            </p>
          </div>
          <ScholarshipTiers />
          <div style={{ marginTop: 40, textAlign: 'center' }}>
            <Link href="/admissions" className="btn btn-ink">
              See How Admission Works
            </Link>
          </div>
        </div>
      </Reveal>

      <Reveal className="sec">
        <div className="wrap">
          <div className="sec-head">
            <div className="kicker">Graduate Voices</div>
            <h2 className="h-major">
              Do not take our word for it. Take theirs.
            </h2>
          </div>
          <div className="voices-g">
            {testimonials.map((voice) => (
              <div key={voice.name} className="voice">
                <p className="voice-x">{voice.quote}</p>
                <div className="voice-a">
                  <div className="voice-av">
                    <svg viewBox="0 0 24 24">
                      <circle cx="12" cy="8" r="4" />
                      <path d="M4 20c0-5 3.6-9 8-9s8 4 8 9" />
                    </svg>
                  </div>
                  <div>
                    <div className="voice-n">{voice.name}</div>
                    <div className="voice-r">{voice.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal className="sec sec-alt">
        <div className="wrap">
          <div className="sec-head-row">
            <div>
              <div className="kicker">News &amp; Stories</div>
              <h2 className="h-major">Life at NIMTA.</h2>
            </div>
            <Link
              href="/news"
              className="btn btn-ghost"
              style={{ padding: '12px 26px', fontSize: '0.82rem' }}
            >
              View All Posts
            </Link>
          </div>
          <div className="news-g">
            {homeNewsTeaser.map((article) => (
              <Link key={article.title} href={article.href} className="news-c">
                <div className="news-img">
                  <ImgSlot
                    label={article.imageType}
                    src={article.image}
                    alt={article.title}
                  />
                </div>
                <div className="news-b">
                  <div className="news-meta">
                    <span className="news-cat">{article.category}</span>
                    <span className="news-date">{article.date}</span>
                  </div>
                  <div className="news-t">{article.title}</div>
                  <div className="news-x">{article.excerpt}</div>
                  <span className="news-more">
                    Read More{' '}
                    <svg viewBox="0 0 16 16">
                      <path d="M3 8h10M9 4l4 4-4 4" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Reveal>

      <CtaBand
        title={
          <>
            You already know what you want to learn.
            <br />
            Come and learn it properly.
          </>
        }
        description="The application takes about ten minutes, and there is nothing to pay at this stage."
        primaryHref="/apply"
        primaryLabel="Start Your Application"
      />
    </>
  );
}
