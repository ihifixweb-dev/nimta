export type AdmissionStep = {
  num: string;
  title: string;
  summary: string;
  description: string;
};

export const admissionSteps: AdmissionStep[] = [
  {
    num: '01',
    title: 'Register online',
    summary:
      'About ten minutes. Your details, your category, your chosen programme.',
    description:
      "The form takes about ten minutes. You tell us who you are, which category you fall under, and which programme you want. That is genuinely all we need to begin, and there is nothing to pay at this stage.",
  },
  {
    num: '02',
    title: 'Submit your documents',
    summary:
      'Upload your SSCE result, ID and photograph, plus scholarship documents if they apply to you.',
    description:
      "Upload your SSCE certificate or statement of result, a valid means of identification, and one passport photograph. Children of Army officers also upload their Letter of Introduction, their parent's ID card, and the relevant Part Two Order.",
  },
  {
    num: '03',
    title: 'Verification',
    summary:
      'Our admissions team confirms your documents within five working days.',
    description:
      'Our admissions team reviews and confirms your documents within five working days. Military affiliation claims are cross-checked against official records. Honest applications move quickly.',
  },
  {
    num: '04',
    title: 'Receive your admission letter',
    summary:
      'Your letter states your fee, any scholarship, and your payment deadline. All in writing.',
    description:
      'You receive a formal admission letter stating your scholarship tier, your exact fee, and your payment deadline. Everything in writing, before you commit a single naira.',
  },
  {
    num: '05',
    title: 'Confirm your place',
    summary:
      'Pay through official channels only. Your seat is secured within two business days.',
    description:
      'Pay through the official NIMTA account or payment gateway only. Once your payment is confirmed, your seat in the cohort is locked in within two business days.',
  },
  {
    num: '06',
    title: 'Orientation',
    summary:
      'Two days on campus, or a full digital onboarding pack if you are studying online.',
    description:
      'In-person students attend a two-day orientation on campus. Online students receive their learning platform access, class schedule and full resource pack by email.',
  },
  {
    num: '07',
    title: 'Train. Build. Graduate.',
    summary:
      'Show up, do the work, pass your practicals, and walk across that stage.',
    description:
      'Attend your classes, complete every practical project, hold your attendance above 80%, and cross the graduation stage with your certificate and your portfolio in hand.',
  },
];
