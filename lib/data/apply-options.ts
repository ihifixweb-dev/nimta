export type ScholarshipEligibility = {
  percent: string;
  title: string;
  who: string[];
  proof: string;
};

export const scholarshipEligibility: ScholarshipEligibility[] = [
  {
    percent: '100%',
    title: 'Children of Soldiers and Other Ranks Personnel',
    who: [
      'You are the biological or legally adopted child of a serving or retired member of the Nigerian uniformed services at any rank other than a commissioned Army officer.',
      'This includes soldiers and other ranks of the Nigerian Army, and personnel of the Nigerian Navy, Nigerian Air Force, Nigerian Police Force, and recognised paramilitary services.',
      'Half your tuition is covered on your first application. From your second application onward, the standard fee applies.',
    ],
    proof:
      "To confirm it, you send proof of your parent's service, such as a clear copy of their service identity card or a letter from their unit or command.",
  },
  {
    percent: '50%',
    title: 'Children of Officers including Nigerian Army Officers',
    who: [
      'You are the biological or legally adopted child of a commissioned officer of the Nigerian Army, serving or retired.',
      'Your first programme is fully covered. Tuition on one programme of your choosing, at no cost to you.',
      'One full scholarship per person. Any programme after your first is at the standard fee.',
    ],
    proof:
      "To confirm it, you send three things with your application: a letter of introduction from your parent's unit or command, a clear copy of their Nigerian Army identity card, and the relevant Part Two Order showing the family relationship.",
  }
];

export const scholarshipEligibilityNote =
  'Every claim is verified against official records before a scholarship is confirmed in writing. If neither category applies to you, you are still very welcome here, and you apply at the standard fee.';

export const genderOptions = ['Female', 'Male', 'Prefer not to say'];

export type ApplicationDocumentField = {
  key: 'docLetterOfIntroduction' | 'docPartTwoOrder' | 'docParentIdCard';
  label: string;
  hint: string;
};

export const applicationDocumentFields: ApplicationDocumentField[] = [
  {
    key: 'docLetterOfIntroduction',
    label: 'Letter of Introduction',
    hint: "From your parent's unit or command, identifying you as their child or ward.",
  },
  {
    key: 'docPartTwoOrder',
    label: 'Part Two Order',
    hint: 'The official Nigerian Army record documenting the family relationship.',
  },
  {
    key: 'docParentIdCard',
    label: "Parent's ID Card",
    hint: "A clear copy of the serving or retired officer or personnel's valid ID card.",
  },
];

export const programmeOptions = {
  categories: [
    'Child of Soldiers or Other Ranks Personnel (100% Scholarship, First Application)',
    'Child of Officers including Nigerian Army Officers (50% Scholarship, First Programme)',
  ],
  programmeGroups: [
    {
      label: 'Department of Technology',
      options: [
        'NIMTA-T00 · Computer Appreciation & Digital Essentials',
        'NIMTA-T01 · Software Development (Full Stack Web)',
        'NIMTA-T02 · UI/UX Product Design',
        'NIMTA-T03 · Data Analytics & Business Intelligence',
        'NIMTA-T04 · Digital Marketing & Social Media Management',
        'NIMTA-T05 · Cybersecurity Fundamentals',
        'NIMTA-T06 · AI Tools for Productivity & Business',
        'NIMTA-T07 · Graphic Design & Visual Communication',
      ],
    },
    {
      label: 'Department of Fashion & Textiles',
      options: [
        'NIMTA-F01 · Fashion Design & Garment Construction',
        'NIMTA-F02 · Pattern Drafting & Grading',
        'NIMTA-F03 · Textile Dyeing, Printing & Fabric Decoration',
      ],
    },
    {
      label: 'Department of Culinary Arts',
      options: [
        'NIMTA-C01 · Professional Culinary Arts',
        'NIMTA-C02 · Pastry, Baking & Confectionery',
        'NIMTA-C03 · Event Catering Management',
      ],
    },
    {
      label: 'Department of Beauty & Wellness',
      options: [
        'NIMTA-B01 · Professional Hair Styling & Braiding',
        'NIMTA-B02 · Professional Make-Up Artistry',
      ],
    },
    {
      label: 'Department of Enterprise',
      options: [
        'NIMTA-E01 · Business Development & Entrepreneurship',
      ],
    },
  ],
  deliveryMode: 'In-Person (Main Campus, Asokoro, Abuja)',
  qualifications: [
    'WAEC / NECO / NABTEB / GCE',
    'OND',
    'HND',
    "Bachelor's Degree",
    'Postgraduate Degree',
    'Other',
  ],
};
