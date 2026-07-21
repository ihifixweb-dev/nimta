'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { generateCurriculum } from '@/lib/data/curriculum';
import { departmentFilters } from '@/lib/data/navigation';
import type { Programme, ProgrammeCategory } from '@/lib/data/programmes';
import { programmes } from '@/lib/data/programmes';

const hashMap: Record<string, ProgrammeCategory> = {
  tech: 'tech',
  fashion: 'fashion',
  culinary: 'culinary',
  beauty: 'beauty',
  enterprise: 'enterprise',
};

function downloadCurriculum(code: string, name: string) {
  const content = generateCurriculum(code, name);
  const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = `NIMTA_${code}_Curriculum.txt`;
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
  URL.revokeObjectURL(url);
}

export default function CourseList() {
  const [filter, setFilter] = useState<'all' | ProgrammeCategory>('all');
  const [openCode, setOpenCode] = useState<string | null>(null);

  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hashMap[hash]) {
      setFilter(hashMap[hash]);
    }
  }, []);

  const toggleCourse = (code: string) => {
    setOpenCode((current) => (current === code ? null : code));
  };

  const visible = programmes.filter(
    (programme) => filter === 'all' || programme.category === filter,
  );

  return (
    <>
      <div className="sec-head-row">
        <p className="lede" style={{ fontSize: '0.9rem', maxWidth: 460 }}>
          Browse the full list, or filter by department. Two things to know.
          Computer Appreciation is the foundation for every technology programme,
          and Business Development is built into every programme we run, because
          we do not just train you to be skilled. We train you to be paid.
        </p>
        <div className="filters" role="tablist">
          {departmentFilters.map((tab) => (
            <button
              key={tab.id}
              type="button"
              className={`ftab${filter === tab.id ? ' on' : ''}`}
              onClick={() => {
                setFilter(tab.id);
                setOpenCode(null);
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="clist" id="clist">
        {visible.map((programme) => (
          <CourseItem
            key={programme.code}
            programme={programme}
            open={openCode === programme.code}
            onToggle={() => toggleCourse(programme.code)}
          />
        ))}
      </div>
    </>
  );
}

function CourseItem({
  programme,
  open,
  onToggle,
}: {
  programme: Programme;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className={`citem${open ? ' open' : ''}`}
      data-cat={programme.category}
      id={programme.num === '01' && programme.category === 'tech' ? 'tech' : undefined}
    >
      <div className="chead" onClick={onToggle} onKeyDown={(e) => e.key === 'Enter' && onToggle()} role="button" tabIndex={0}>
        <div className="cnum">{programme.num}</div>
        <div className="cinfo">
          <div className="ccode">
            {programme.code} &middot; {programme.departmentLabel}
          </div>
          <div className="cname">{programme.name}</div>
          <div className="cmeta">
            <span className="cpill">{programme.duration}</span>
            <span className="cpill">{programme.delivery}</span>
            {programme.tags.map((tag) => (
              <span key={tag.text} className={`tag tag-${tag.variant}`}>
                {tag.text}
              </span>
            ))}
          </div>
        </div>
        <div className="cright">
          <div className="cfee">
            <b>{programme.fee}</b>
            <span>Full Fee</span>
          </div>
          <div className="cchev">
            <svg viewBox="0 0 16 16">
              <path d="M4 6l4 4 4-4" />
            </svg>
          </div>
        </div>
      </div>
      <div className="cbody">
        <div className="cbody-in">
          <div className="cgrid">
            <div>
              <h5>What you will walk away with</h5>
              <ul>
                {programme.outcomes.map((outcome) => (
                  <li key={outcome}>{outcome}</li>
                ))}
              </ul>
            </div>
            <div>
              <h5>Curriculum modules</h5>
              <ul>
                {programme.modules.map((module) => (
                  <li key={module}>{module}</li>
                ))}
              </ul>
            </div>
          </div>
          {programme.note && (
            <p
              style={{
                fontSize: '0.85rem',
                color: 'var(--slate)',
                lineHeight: 1.8,
                marginTop: 24,
                padding: '16px 20px',
                background: 'var(--paper)',
                borderLeft: '3px solid var(--ink)',
              }}
            >
              {programme.note}
            </p>
          )}
          <div className="cacts">
            <button
              type="button"
              className="btn-dl"
              onClick={() => downloadCurriculum(programme.code, programme.name)}
            >
              <svg viewBox="0 0 24 24">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download Curriculum
            </button>
            <Link href="/apply" className="btn-ap">
              Apply for This Programme
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
