export type AdmissionDocument = {
  title: string;
  description: string;
};

export type AdmissionDocumentGroup = {
  variant: 'general' | 'army';
  title: string;
  description: string;
  documents: AdmissionDocument[];
};

export const admissionDocumentGroups: AdmissionDocumentGroup[] = [
  {
    variant: 'general',
    title: 'Every Applicant',
    description: 'These three documents come with every application, whoever you are.',
    documents: [
      {
        title: 'Certificate or Statement of Result',
        description:
          'WAEC, NECO, NABTEB or an equivalent recognised qualification.',
      },
      {
        title: 'Valid Means of Identification',
        description:
          "National ID (NIN), voter's card, driver's licence, or international passport.",
      },
      {
        title: 'Recent Passport Photograph',
        description:
          'One digital passport photograph on a plain background, taken within the last six months.',
      },
    ],
  },
  {
    variant: 'army',
    title: 'Applying for the Full Scholarship?',
    description:
      'Children of Nigerian Army officers add these three documents to confirm eligibility. All three are needed.',
    documents: [
      {
        title: '1. Letter of Introduction',
        description:
          'A formal letter from your parent\'s unit or command, identifying you as their child or ward.',
      },
      {
        title: "2. Parent's ID Card",
        description:
          "A clear copy of the serving or retired officer's valid Nigerian Army identity card.",
      },
      {
        title: '3. Part Two Order',
        description:
          'The relevant Part Two Order documenting the family relationship, as maintained in official Army records.',
      },
    ],
  },
];
