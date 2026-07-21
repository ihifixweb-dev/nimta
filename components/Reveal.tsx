'use client';

import { createElement, useEffect, useRef } from 'react';

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
};

export default function Reveal({
  children,
  className = '',
  as: Tag = 'section',
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.06 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return createElement(
    Tag,
    { ref, className: `reveal${className ? ` ${className}` : ''}` },
    children,
  );
}
