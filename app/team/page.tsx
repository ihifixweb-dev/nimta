import type { Metadata } from 'next';
import ImgSlot from '@/components/ImgSlot';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import { facilitators, leadership } from '@/lib/data/team';

export const metadata: Metadata = {
  title: 'Our People',
};

function TeamCard({
  member,
  isLeadership = false,
}: {
  member: (typeof leadership)[number];
  isLeadership?: boolean;
}) {
  return (
    <div className={`tcard${isLeadership ? ' lead' : ''}`}>
      <div className="tcard-img">
        <ImgSlot label="Photo" alt={member.role}>
          <svg viewBox="0 0 48 48">
            <circle cx="24" cy="16" r="9" />
            <path d="M8 42c0-8 7-13 16-13s16 5 16 13" />
          </svg>
        </ImgSlot>
      </div>
      <div className="tcard-b">
        <div className="tcard-role">{member.role}</div>
        <div className="tcard-name">{member.name}</div>
        <div className="tcard-cred">{member.credentials}</div>
        <div className="tcard-bio">{member.bio}</div>
      </div>
    </div>
  );
}

export default function TeamPage() {
  return (
    <>
      <PageHero
        breadcrumb="Our People"
        kicker="Our People"
        title="The people who will build you."
        description="Training is only ever as good as the people delivering it. These are the leaders who set NIMTA's standard, and the facilitators who hold you to it every single day."
      />

      <Reveal className="sec">
        <div className="wrap">
          <div className="sec-head">
            <div className="kicker">Leadership &amp; Administration</div>
            <h2 className="h-major">The team that runs the house.</h2>
          </div>
          <div className="team-g">
            {leadership.map((member) => (
              <TeamCard key={member.role} member={member} isLeadership />
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal className="sec sec-alt">
        <div className="wrap">
          <div className="sec-head-row">
            <div>
              <div className="kicker">Facilitators</div>
              <h2 className="h-major">
                Taught by people who do this for a living.
              </h2>
            </div>
            <p
              className="lede"
              style={{ maxWidth: 400, fontSize: '0.92rem' }}
            >
              Every facilitator at NIMTA is an active professional in the field
              they teach. They bring this year&apos;s industry into the
              classroom, not last decade&apos;s textbook.
            </p>
          </div>
          <div className="team-g">
            {facilitators.map((member) => (
              <TeamCard key={member.role + member.name} member={member} />
            ))}
          </div>
        </div>
      </Reveal>
    </>
  );
}
