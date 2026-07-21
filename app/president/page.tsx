import type { Metadata } from 'next';
import Link from 'next/link';
import ImgSlot from '@/components/ImgSlot';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import { images } from '@/lib/data/images';

export const metadata: Metadata = {
  title: "A Message From the President",
};

const letterParagraphs = [
  'It is my distinct privilege to welcome you to the NAOWA Institute of Management and Technology, and to address you at what I consider one of the most consequential moments in any life, the moment a person decides what to make of their own potential.',
  'Permit me to speak plainly about the world you are preparing to enter. It is a world that rewards demonstrable competence above credentials, connections, or circumstance. The modern economy asks a single question of everyone who seeks a place within it, it asks what can you do, and how well can you do it? NIMTA exists to help you achieve that answer that commands respect.',
  'For over six decades, the Nigerian Army Officers\' Wives Association has stood beside those who serve this nation. In that time, we have observed a truth that now informs everything this Institute does, excellence is not an accident of birth. It is the predictable outcome of rigorous training, sustained discipline, and an environment that refuses to accommodate mediocrity. Ordinary people, held to an extraordinary standard, become extraordinary. This is not sentiment. It is the founding conviction of this institution, and the daily experience of those who train here.',
  'I will be candid about what this Institute will require of you. Our facilitators are accomplished professionals in the disciplines they teach, and they will hold you to the standards of industry rather than the comforts of the classroom. You will be stretched beyond familiar limits. You will be corrected with precision and assessed with honesty. There will be moments when the work challenges you profoundly. Growth has never occurred within the boundaries of comfort, and we did not build this institution to leave you as we found you.',
  'In return, this Institute makes you a commitment, and I hold every member of it accountable to that commitment. Every hour you invest here will be converted into enduring capability. You will be trained by practitioners of genuine distinction, you will receive a truthful account of your progress at every stage and you will graduate bearing not merely a certificate, but a body of work, a tangible proof of competence that speaks for itself in any room in the world.',
  'You should also understand our heritage. This Institute was founded by the Nigerian Army Officers\' Wives Association, and service is woven into its character. In honour of the families who serve this nation, we extend a full scholarship to the children of Nigerian Army officers on their first programme, and a fifty percent scholarship to the children of soldiers and other ranks on their first programme. This is our gratitude, rendered in opportunity. Yet let there be no misunderstanding. NIMTA\'s doors are open to every Nigerian with the requisite qualification and the resolve to work. A place here is earned by ambition, not inherited by association.',
  'My charge to you is therefore a simple one. Do not wait until you feel ready. Readiness is not a feeling. It is a decision, confirmed daily through disciplined effort. Choose your craft. Commit to it entirely. And allow this institution to do for you what it has done for so many who once stood precisely where you stand today.',
  'I look forward to the day your name will be called at graduation, when the recognition you receive will owe nothing to fortune, and everything to what you have built.',
];

export default function PresidentPage() {
  return (
    <>
      <PageHero
        breadcrumb="President's Message"
        kicker="A Message From the President"
        title="Before you apply, read this."
        description="Dr Safiyyah Hassan Shaibu, President of the Nigerian Army Officers' Wives Association, on what this institute will ask of you, and what it will give you in return."
      />

      <section className="sec sec-alt">
        <div className="wrap">
          <Reveal className="letter-frame">
            <div className="letter-band" aria-hidden="true" />
            <div className="letter-body">
              <div className="letter-photo">
                <ImgSlot
                  label="Portrait"
                  src={images.presidentPortrait}
                  alt="Dr Safiyyah Hassan Shaibu, President of NAOWA"
                  sizes="(max-width: 768px) 80vw, 300px"
                />
              </div>
              <div className="letter-office">
                <h3>
                  A Message From the President of the
                  <br />
                  Nigerian Army Officers&apos; Wives Association · NAOWA
                </h3>
                <div className="letter-rule" />
              </div>

              <p className="letter-sal">
                To the aspirants of the NIMTA Empowerment Training Scheme,
              </p>

              <p className="letter-p">{letterParagraphs[0]}</p>
              <p className="letter-p">{letterParagraphs[1]}</p>
              <p className="letter-p">{letterParagraphs[2]}</p>
              <p className="letter-p">{letterParagraphs[3]}</p>

              <p className="letter-p em">
                We do not lower our standards to accommodate doubt. We raise our
                students until the standard becomes their nature.
              </p>

              {letterParagraphs.slice(4).map((paragraph) => (
                <p key={paragraph.slice(0, 40)} className="letter-p">
                  {paragraph}
                </p>
              ))}

              <p className="letter-sal" style={{ marginTop: 32 }}>
                With every confidence in your success,
              </p>

              <div className="letter-sig">
                <div>
                  <ImgSlot
                    label="Signature"
                    src={images.presidentSignature}
                    alt="Signature of Dr Safiyyah Hassan Shaibu"
                    className="letter-sig-img"
                    sizes="180px"
                  />
                  <div className="letter-sig-name">
                    Dr Safiyyah Hassan Shaibu
                  </div>
                  <div className="letter-sig-title">
                    President
                    <br />
                    Nigerian Army Officers&apos; Wives Association
                  </div>
                </div>
                <ImgSlot
                  label="NAOWA Logo"
                  src={images.naowaCrest}
                  alt="Nigerian Army Officers' Wives Association logo"
                  className="letter-crest-slot"
                  sizes="140px"
                />
              </div>
            </div>
          </Reveal>

          <div style={{ textAlign: 'center', marginTop: 56 }}>
            <Link href="/apply" className="btn btn-ink">
              Begin Your Application
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
