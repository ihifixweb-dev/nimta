import Link from 'next/link';
import { announceBar } from '@/lib/data/navigation';

export default function AnnounceBar() {
  return (
    <div className="announce">
      <strong>{announceBar.headline}</strong>
      &nbsp;&middot;&nbsp; {announceBar.detail}{' '}
      <Link href={announceBar.ctaHref}>{announceBar.ctaLabel}</Link>
    </div>
  );
}
