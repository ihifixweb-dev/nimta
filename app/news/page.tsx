import type { Metadata } from 'next';
import CtaBand from '@/components/CtaBand';
import NewsGrid from '@/components/NewsGrid';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import { newsArticles } from '@/lib/data/news';

export const metadata: Metadata = {
  title: 'News & Stories',
};

export default function NewsPage() {
  return (
    <>
      <PageHero
        breadcrumb="News & Stories"
        kicker="News & Stories"
        title="From the Institute."
        description="Announcements, graduation ceremonies, graduate stories and updates from across NIMTA's five departments. Post slots below are ready for your content team."
      />

      <section className="sec">
        <div className="wrap">
          <Reveal>
            <NewsGrid articles={newsArticles} />
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Want your own story on this page?"
        description="It starts with one application."
        primaryHref="/apply"
        primaryLabel="Apply Now"
      />
    </>
  );
}
