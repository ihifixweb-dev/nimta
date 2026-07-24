import ApplyLink from '@/components/ApplyLink';
import { announceBar } from '@/lib/data/navigation';

export default function AnnounceBar() {
  return (
    <div className="announce">
      <strong>{announceBar.headline}</strong>
      &nbsp;&middot;&nbsp; {announceBar.detail}{' '}
      <ApplyLink href={announceBar.ctaHref}>{announceBar.ctaLabel}</ApplyLink>
    </div>
  );
}
