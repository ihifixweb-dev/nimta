import Link from 'next/link';

type CtaBandProps = {
  title: React.ReactNode;
  description: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export default function CtaBand({
  title,
  description,
  primaryHref = '/apply',
  primaryLabel = 'Apply Now',
  secondaryHref,
  secondaryLabel,
}: CtaBandProps) {
  return (
    <section className="cta-band">
      <div className="wrap">
        <div className="cta-band-in">
          <div>
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            {secondaryHref && secondaryLabel && (
              <Link href={secondaryHref} className="btn btn-ghost-w">
                {secondaryLabel}
              </Link>
            )}
            <Link href={primaryHref} className="btn btn-ink">
              {primaryLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
