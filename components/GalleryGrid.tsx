'use client';

import { useState } from 'react';
import ImgSlot from '@/components/ImgSlot';
import { galleryFilters, galleryItems } from '@/lib/data/gallery';

export default function GalleryGrid() {
  const [filter, setFilter] = useState<string>('all');

  const visible = galleryItems.filter(
    (item) => filter === 'all' || item.category === filter,
  );

  return (
    <>
      <div className="sec-head-row">
        <p className="lede" style={{ fontSize: '0.9rem', maxWidth: 420 }}>
          Filter by category, or browse everything. Recommended, professional
          photography, landscape 4:3 for spaces and portrait 3:4 for people.
        </p>
        <div className="filters" role="tablist">
          {galleryFilters.map((tab) => (
            <button
              key={tab.id}
              type="button"
              className={`ftab${filter === tab.id ? ' on' : ''}`}
              onClick={() => setFilter(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="gal-g" id="galG">
        {visible.map((item) => (
          <div key={item.title} className="gitem" data-gcat={item.category}>
            <ImgSlot label="Image Slot" alt={item.title} />
            <div className="gcap">
              <b>{item.title}</b>
              <span>{item.label}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
