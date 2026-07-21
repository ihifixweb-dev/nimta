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
  'Every great life I have ever witnessed began the same way: with a person who decided to take themselves seriously. Not loudly. Not perfectly. Just seriously. If you are reading this page, I believe that decision is already stirring somewhere in you. I want you to know that this institute was built for exactly that moment.',
  'Let me tell you plainly what NIMTA is, because I would rather you come with your eyes open. This is not a place you pass through to collect a certificate. This is a place you come to be built. Your facilitators are professionals who hold themselves to a high standard, and they will hold you to the same one. You will be stretched. You will be corrected. There will be days the work humbles you. I make no apology for any of it, because I have lived long enough to know a simple truth: nobody has ever grown inside their comfort.',
  'So come with your whole heart. Come ready to practise, to repeat, to fail small and try again, because that is how mastery is actually formed. Excellence here is not a word we hang on the wall. It is the ordinary, daily standard of this house, and something remarkable happens to people who live inside a standard like that: it becomes theirs. By the time you graduate, excellence will no longer be something you admire in others. It will be something people recognise in you.',
  'And in return, I make you this promise on behalf of every facilitator, every staff member, and every woman of this Association: we will not waste your time. Every hour you give this institute will be turned into skill you keep for the rest of your life. You will leave here with far more than a certificate. You will leave with proof of what you can do, and with the quiet, unshakeable confidence of a person who earned their place.',
  'You should also know our story. This institute was founded by the Nigerian Army Officers\' Wives Association, and service runs deep in everything we do. That is why we set aside scholarships for the children of those who wear this nation\'s uniform. It is our thank-you to families who have given more than most people will ever know. But hear me clearly: our doors are open to every young Nigerian with an SSCE result and the will to work. Whoever you are, wherever you come from, if you are ready to become excellent at something, you belong here.',
  'The world is not short of people with potential. It is short of people who did something with it. Come and become one of them. I look forward to shaking your hand on your graduation day.',
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
                  alt="Dr Safiyyah Hassan Shaibu"
                />
              </div>
              <div className="letter-office">
                <h3>A Message From the President</h3>
                <p>
                  Nigerian Army Officers&apos; Wives Association · NAOWA
                </p>
                <div className="letter-rule" />
              </div>

              <p className="letter-sal">My dear young ones,</p>

              <p className="letter-p">{letterParagraphs[0]}</p>
              <p className="letter-p">{letterParagraphs[1]}</p>

              <p className="letter-p em">
                We will not lower the standard to make you comfortable. We will
                raise you until you meet it.
              </p>

              {letterParagraphs.slice(2).map((paragraph) => (
                <p key={paragraph.slice(0, 40)} className="letter-p">
                  {paragraph}
                </p>
              ))}

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
                  label="NAOWA Crest"
                  src={images.naowaCrest}
                  alt="NAOWA institutional crest"
                  className="letter-crest-slot"
                  sizes="110px"
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
