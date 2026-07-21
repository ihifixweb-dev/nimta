import Link from 'next/link';

type BrandProps = {
  dark?: boolean;
  asLink?: boolean;
};

export function CrestIcon() {
  return (
    <svg viewBox="0 0 28 28">
      <path d="M14 2L3 8v6c0 7 5 12 11 14 6-2 11-7 11-14V8L14 2z" />
    </svg>
  );
}

export default function Brand({ dark = false, asLink = true }: BrandProps) {
  const content = (
    <>
      <div className="crest">
        <CrestIcon />
      </div>
      <div className="crest-red" />
      <div>
        <div
          className="brand-name"
          style={dark ? { color: '#fff' } : undefined}
        >
          NIMTA
        </div>
        <div
          className="brand-sub"
          style={dark ? { color: 'rgba(255,255,255,0.4)' } : undefined}
        >
          NAOWA Institute of Management &amp; Technology
        </div>
      </div>
    </>
  );

  if (asLink) {
    return (
      <Link href="/" className="brand">
        {content}
      </Link>
    );
  }

  return <div className="brand">{content}</div>;
}
