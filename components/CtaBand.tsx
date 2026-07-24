import ApplyLink from '@/components/ApplyLink';
import Image from 'next/image';
import Link from 'next/link';
import { isApplyHref } from '@/lib/is-apply-href';
import { images } from '@/lib/data/images';

type CtaBandProps = {
  title: React.ReactNode;
  description: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  imageSrc?: string;
  imageAlt?: string;
};

export default function CtaBand({
  title,
  description,
  primaryHref = '/apply',
  primaryLabel = 'Apply Now',
  secondaryHref,
  secondaryLabel,
  imageSrc = images.heroStudents,
  imageAlt = 'NIMTA students training on campus',
}: CtaBandProps) {
  const PrimaryLink = isApplyHref(primaryHref) ? ApplyLink : Link;

  return (
    <section className="cta-band">
      <div className="wrap">
        <div className="cta-card">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes="(max-width: 900px) 100vw, 1200px"
            className="cta-card-photo"
          />
          <div className="cta-card-overlay" aria-hidden="true" />
          <div className="cta-card-content">
            <h2>{title}</h2>
            <p>{description}</p>
            <div className="cta-card-actions">
              <PrimaryLink href={primaryHref} className="cta-card-btn">
                {primaryLabel}
                <svg viewBox="0 0 16 16" aria-hidden="true">
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </PrimaryLink>
              {secondaryHref && secondaryLabel ? (
                <Link href={secondaryHref} className="cta-card-btn cta-card-btn--ghost">
                  {secondaryLabel}
                </Link>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
