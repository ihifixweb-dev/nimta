'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import type { HeroSlide } from '@/lib/data/home';

type HeroSlideshowProps = {
  slides: HeroSlide[];
  intervalMs?: number;
};

export default function HeroSlideshow({
  slides,
  intervalMs = 4000,
}: HeroSlideshowProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) return;

    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % slides.length);
    }, intervalMs);

    return () => window.clearInterval(timer);
  }, [slides.length, intervalMs]);

  return (
    <div className="hero-slideshow" aria-live="polite">
      {slides.map((slide, slideIndex) => (
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
  );
}
