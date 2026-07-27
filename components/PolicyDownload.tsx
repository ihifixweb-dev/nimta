'use client';

import { generatePolicyDocument } from '@/lib/data/policy';

function downloadPolicy() {
  const content = generatePolicyDocument();
  const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = 'NIMTA_Programme_Policy_and_Terms.txt';
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
  URL.revokeObjectURL(url);
}

export default function PolicyDownload() {
  return (
    <div className="policy-download">
      <button type="button" className="btn-dl" onClick={downloadPolicy}>
        <svg viewBox="0 0 24 24">
          <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" y1="15" x2="12" y2="3" />
        </svg>
        Download Programme Policy
      </button>
    </div>
  );
}
