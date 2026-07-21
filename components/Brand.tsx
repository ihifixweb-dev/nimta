import Image from 'next/image';
import Link from 'next/link';
import { images } from '@/lib/data/images';

type BrandProps = {
  dark?: boolean;
  asLink?: boolean;
  name?: string;
  subtitle?: string;
};

export default function Brand({
  dark = false,
  asLink = true,
  name = 'NIMTA',
  subtitle = 'NAOWA Institute of Management & Technology',
}: BrandProps) {
  const content = (
    <>
      <div className="brand-logo">
        <Image
          src={images.logo}
          alt="NAOWA Institute of Management and Technology, Abuja"
          width={52}
          height={52}
          priority
        />
      </div>
      <div>
        <div
          className="brand-name"
          style={dark ? { color: '#fff' } : undefined}
        >
          {name}
        </div>
        <div
          className="brand-sub"
          style={dark ? { color: 'rgba(255,255,255,0.4)' } : undefined}
        >
          {subtitle}
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
