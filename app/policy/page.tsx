import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import type { PolicySection } from '@/lib/data/policy';
import { policySections, policyUpdated } from '@/lib/data/policy';

export const metadata: Metadata = {
  title: 'Programme Policy & Terms',
};

function decodeEntities(text: string) {
  return text.replace(/&#(\d+);/g, (_, code) =>
    String.fromCharCode(Number(code)),
  );
}

function PolicySectionContent({ section }: { section: PolicySection }) {
  const { paragraphs, lists } = section.content;
  const listMap = new Map(lists.map((list) => [list.afterParagraph, list]));
  const blocks: React.ReactNode[] = [];

  if (paragraphs.length === 0 && listMap.has(0)) {
    const list = listMap.get(0)!;
    blocks.push(
      <ListBlock key="list-0" type={list.type} items={list.items} />,
    );
  }

  paragraphs.forEach((paragraph, index) => {
    blocks.push(
      <p key={`p-${index}`}>{decodeEntities(paragraph)}</p>,
    );
    const list = listMap.get(index + 1);
    if (list) {
      blocks.push(
        <ListBlock
          key={`list-${index + 1}`}
          type={list.type}
          items={list.items}
        />,
      );
    }
  });

  return <>{blocks}</>;
}

function ListBlock({
  type,
  items,
}: {
  type: 'ul' | 'ol';
  items: string[];
}) {
  const Tag = type;
  return (
    <Tag>
      {items.map((item) => (
        <li key={item.slice(0, 40)}>{decodeEntities(item)}</li>
      ))}
    </Tag>
  );
}

export default function PolicyPage() {
  return (
    <>
      <PageHero
        breadcrumb="Programme Policy"
        kicker="Governance"
        title="Programme Policy & Terms"
        description="Effective Date: 1 January 2025 · Version 1.2 · Governing Law: Federal Republic of Nigeria · Issued by the NIMTA Registrar's Office"
      />

      <section className="sec">
        <div className="wrap">
          <div className="policy-wrap">
            <div className="pupd">{policyUpdated}</div>
            <div className="ptoc">
              <h4>Contents</h4>
              <ol>
                {policySections.map((section) => (
                  <li key={section.id}>
                    <Link href={`#${section.id}`}>{section.title.replace(/^\d+\.\s*/, '')}</Link>
                  </li>
                ))}
              </ol>
            </div>

            {policySections.map((section) => (
              <div key={section.id} className="psec" id={section.id}>
                <h3>{section.title}</h3>
                <PolicySectionContent section={section} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
