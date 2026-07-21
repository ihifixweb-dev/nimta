import type { Metadata } from 'next';
import CtaBand from '@/components/CtaBand';
import GalleryGrid from '@/components/GalleryGrid';
import PageHero from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'Gallery',
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        breadcrumb="Gallery"
        kicker="Gallery"
        title="See it for yourself."
        description="The labs, the studios, the kitchens, the people, and the moments that matter. Every frame below is a slot ready for your photography team."
      />

      <section className="sec">
        <div className="wrap">
          <GalleryGrid />
        </div>
      </section>

      <CtaBand
        title="Picture yourself here. Then make it real."
        description="The next set of photos on this page could include you."
        primaryHref="/apply"
        primaryLabel="Start Your Application"
      />
    </>
  );
}
