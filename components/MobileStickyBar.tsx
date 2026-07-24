import ApplyLink from '@/components/ApplyLink';
import { mobileSticky } from '@/lib/data/navigation';

export default function MobileStickyBar() {
  return (
    <div className="mstick">
      <div className="mstick-in">
        <div className="mstick-t">
          <strong>{mobileSticky.headline}</strong>
          {mobileSticky.detail}
        </div>
        <ApplyLink className="mstick-b" href={mobileSticky.ctaHref}>
          {mobileSticky.ctaLabel}
        </ApplyLink>
      </div>
    </div>
  );
}
