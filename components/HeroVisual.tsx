'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { heroSlides } from '@/lib/data/hero-slides';

export default function HeroVisual() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (heroSlides.length <= 1) return;

    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % heroSlides.length);
    }, 4000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="hero-visual">
      <div className="hero-img">
        <div className="hero-slideshow" aria-live="polite">
          {heroSlides.map((slide, slideIndex) => (
            <div
              key={slide.label}
              className={`hero-slide${slideIndex === index ? ' active' : ''}`}
              aria-hidden={slideIndex !== index}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                priority={slideIndex === 0}
                sizes="(max-width: 900px) 100vw, 45vw"
                className="hero-slide-photo"
              />
              <span className="hero-slide-label">{slide.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
