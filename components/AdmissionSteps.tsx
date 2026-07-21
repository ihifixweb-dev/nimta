'use client';

import { useState } from 'react';
import { admissionSteps } from '@/lib/data/steps';

export default function AdmissionSteps() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = admissionSteps[activeIndex];

  return (
    <div className="steps-g">
      <div>
        {admissionSteps.map((step, index) => (
          <div
            key={step.num}
            className={`step${index === activeIndex ? ' on' : ''}`}
            onClick={() => setActiveIndex(index)}
            onKeyDown={(e) => e.key === 'Enter' && setActiveIndex(index)}
            role="button"
            tabIndex={0}
          >
            <div className="step-no">{step.num}</div>
            <div className="step-tx">
              <h4>{step.title}</h4>
              <p>{step.summary}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="step-panel" id="stepPanel">
        <div className="step-panel-no">{active.num}</div>
        <h3>{active.title}</h3>
        <p>{active.description}</p>
      </div>
    </div>
  );
}
