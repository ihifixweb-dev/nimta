import Link from 'next/link';

type PageHeroProps = {
  breadcrumb: string;
  kicker: string;
  title: React.ReactNode;
  description: React.ReactNode;
};

export default function PageHero({
  breadcrumb,
  kicker,
  title,
  description,
}: PageHeroProps) {
  return (
    <header className="phero">
      <div className="wrap">
        <div className="pcrumb">
          <Link href="/">Home</Link> &nbsp;/&nbsp; {breadcrumb}
        </div>
        <h1>{title}</h1>
        <div className="kicker">{kicker}</div>
        <p>{description}</p>
      </div>
    </header>
  );
}
