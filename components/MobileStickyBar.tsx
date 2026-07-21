import Link from 'next/link';
import { mobileSticky } from '@/lib/data/navigation';

export default function MobileStickyBar() {
  return (
    <div className="mstick">
      <div className="mstick-in">
        <div className="mstick-t">
          <strong>{mobileSticky.headline}</strong>
          {mobileSticky.detail}
        </div>
        <Link className="mstick-b" href={mobileSticky.ctaHref}>
          {mobileSticky.ctaLabel}
        </Link>
      </div>
    </div>
  );
}
