import type { Metadata } from 'next';
import CourseList from '@/components/CourseList';
import PageHero from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'Programmes',
};

export default function ProgrammesPage() {
  return (
    <>
      <PageHero
        breadcrumb="Programmes"
        kicker="Programmes"
        title={
          <>
            Seventeen programmes.
            <br />
            Each one tailored for holistic growth.
          </>
        }
        description="Every programme here is 99% hands-on, led by working professionals, and finishes with a portfolio you can show, not just a certificate you can frame. Open any programme below to see exactly what you will learn, and download the full curriculum if you want the detail."
      />

      <section className="sec">
        <div className="wrap">
          <CourseList />
        </div>
      </section>
    </>
  );
}
