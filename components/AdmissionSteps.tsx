'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { admissionSteps } from '@/lib/data/steps';

export default function AdmissionSteps() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sentinelRefs = useRef<(HTMLDivElement | null)[]>([]);
  const active = admissionSteps[activeIndex];

  const updateActiveStep = useCallback(() => {
    const sentinels = sentinelRefs.current.filter(Boolean) as HTMLDivElement[];
    if (!sentinels.length) return;

    const anchor = window.innerHeight * 0.42;
    let nextIndex = 0;

    for (let i = 0; i < sentinels.length; i++) {
      const { top } = sentinels[i].getBoundingClientRect();
      if (top <= anchor) {
        nextIndex = i;
      }
    }

    setActiveIndex(nextIndex);
  }, []);

  useEffect(() => {
    updateActiveStep();
    window.addEventListener('scroll', updateActiveStep, { passive: true });
    window.addEventListener('resize', updateActiveStep);
    return () => {
      window.removeEventListener('scroll', updateActiveStep);
      window.removeEventListener('resize', updateActiveStep);
    };
  }, [updateActiveStep]);

  return (
    <div className="steps-g">
      <nav className="steps-nav" aria-label="Admission steps">
        {admissionSteps.map((step, index) => (
          <div
            key={step.num}
            className={`step${index === activeIndex ? ' on' : ''}`}
            aria-current={index === activeIndex ? 'step' : undefined}
          >
            <div className="step-no">{step.num}</div>
            <div className="step-tx">
              <h4>{step.title}</h4>
              <p>{step.summary}</p>
            </div>
          </div>
        ))}
      </nav>

      <div className="steps-scroll">
        <div className="step-panel" aria-live="polite">
          <div className="step-panel-no">{active.num}</div>
          <h3>{active.title}</h3>
          <p>{active.description}</p>
        </div>
        {admissionSteps.map((_, index) => (
          <div
            key={index}
            ref={(el) => {
              sentinelRefs.current[index] = el;
            }}
            className="step-sentinel"
            aria-hidden="true"
          />
        ))}
      </div>

      <div className="steps-mobile">
        {admissionSteps.map((step) => (
          <article key={step.num} className="step-panel step-panel-static">
            <div className="step-panel-no">{step.num}</div>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
