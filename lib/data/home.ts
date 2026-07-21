import type { ProgrammeCategory } from './programmes';
import type { NewsImageType } from './news';
import { departmentImageMap, newsImageMap } from './images';

export type DepartmentCard = {
  departmentNum: string;
  title: string;
  description: string;
  programmeCount: string;
  href: string;
  category?: ProgrammeCategory;
  imageLabel: string;
  svgPathHint: string;
  image: string;
};

export type GuidanceCard = {
  departmentNum: string;
  title: string;
  description: string;
  ctaLabel: string;
  href: string;
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

export type HomeNewsTeaser = {
  category: string;
  date: string;
  title: string;
  excerpt: string;
  imageType: NewsImageType;
  href: string;
  image: string;
};

export const departments: DepartmentCard[] = [
  {
    departmentNum: 'Department 01',
    title: 'Technology',
    description:
      'Code, design, data, security, and AI. Eight programmes that put you right where the world is heading, starting from your very first computer lesson if that\'s where you are.',
    programmeCount: '8 Programmes',
    href: '/programmes#tech',
    category: 'tech',
    imageLabel: 'Technology Lab',
    svgPathHint: 'M6 8h36v26M16 42h16M24 34v8M14 20l5 5-5 5M24 30h8',
    image: departmentImageMap[0],
  },
  {
    departmentNum: 'Department 02',
    title: 'Fashion & Textiles',
    description:
      'From your first stitch to your first collection. Garment construction, pattern drafting, and the heritage art of Nigerian textile design, taught hands-on in a working studio.',
    programmeCount: '3 Programmes',
    href: '/programmes#fashion',
    category: 'fashion',
    imageLabel: 'Fashion Studio',
    svgPathHint: 'M24 8c-4 0-8 3-8 8v6l-6 2v16h28V24l-6-2v-6c0-5-4-8-8-8z',
    image: departmentImageMap[1],
  },
  {
    departmentNum: 'Department 03',
    title: 'Culinary Arts',
    description:
      'You cook from day one. Over 100 Nigerian and continental dishes, professional baking, and the business side of feeding people well enough that they keep coming back.',
    programmeCount: '3 Programmes',
    href: '/programmes#culinary',
    category: 'culinary',
    imageLabel: 'Training Kitchen',
    svgPathHint: 'M10 20c0-8 5-14 14-14s14 6 14 14c0 6-3 10-8 12v6H18v-6c-5-2-8-6-8-12z',
    image: departmentImageMap[2],
  },
  {
    departmentNum: 'Department 04',
    title: 'Beauty & Wellness',
    description:
      'Hair and make-up artistry taught on real clients from your second week. You leave with a portfolio, a price list, and customers who already know your name.',
    programmeCount: '2 Programmes',
    href: '/programmes#beauty',
    category: 'beauty',
    imageLabel: 'Beauty Studio',
    svgPathHint: 'M24 18a10 10 0 110 20 10 10 0 010-20z',
    image: departmentImageMap[3],
  },
  {
    departmentNum: 'Department 05',
    title: 'Enterprise',
    description:
      'The skill that multiplies every other skill. Pricing, selling, registering and running a business that lasts. So important, we\'ve made it part of every single programme.',
    programmeCount: 'Built Into Every Programme',
    href: '/programmes#enterprise',
    category: 'enterprise',
    imageLabel: 'Enterprise Hub',
    svgPathHint: 'M6 40L20 26l8 8L42 20',
    image: departmentImageMap[4],
  },
];

export const guidanceCard: GuidanceCard = {
  departmentNum: 'Still deciding?',
  title: 'Talk to us first.',
  description:
    'Tell us what you enjoy and where you want your life to go. We\'ll give you an honest recommendation, even if it means telling you to start smaller.',
  ctaLabel: 'Get Guidance',
  href: '/apply',
};

export const testimonials: Testimonial[] = [
  {
    quote:
      'I almost didn\'t apply because I thought a place like this wasn\'t for someone like me. I only had my WAEC result. Two months into Digital Marketing, I was running a real campaign for a real business. Today I have three clients who pay me every month. NIMTA didn\'t just teach me a skill. It taught me to stop underrating myself.',
    name: 'Amina O.',
    role: 'Digital Marketing Graduate · Abuja',
  },
  {
    quote:
      'The scholarship got me through the door, but I\'ll be honest, it\'s the training that changed my life. My facilitator pushed me harder than anyone ever has. When my capsule collection sold out before graduation, I finally understood why. Now I run my own label and I hold my two apprentices to the same standard she held me to.',
    name: 'Fatima B.',
    role: 'Fashion Design Graduate · Kaduna',
  },
  {
    quote:
      'What surprised me most was how honest everyone was. My instructor is a working developer, and he told me the truth about the industry from week one, then trained me to meet it. My final project got me a job offer before I even collected my certificate. People ask if I got lucky. No. I got trained.',
    name: 'Emmanuel K.',
    role: 'Software Development Graduate · Lagos',
  },
];

export const homeNewsTeaser: HomeNewsTeaser[] = [
  {
    category: 'Announcement',
    date: 'Placeholder Date',
    title: 'Admissions are open for the January intake. Here\'s what to have ready.',
    excerpt:
      'Key dates, the documents you\'ll need, and how to secure your place early.',
    imageType: 'News Image',
    href: '/news',
    image: newsImageMap['News Image'],
  },
  {
    category: 'Graduation',
    date: 'Placeholder Date',
    title: 'Graduation day: a new class walks the stage with portfolios in hand',
    excerpt:
      'Highlights, award winners and starter pack presentations from our latest ceremony.',
    imageType: 'Graduation Image',
    href: '/news',
    image: newsImageMap['Graduation Image'],
  },
  {
    category: 'Graduate Story',
    date: 'Placeholder Date',
    title: 'Ninety days from her SSCE result to her first paying client',
    excerpt:
      'How one graduate turned a six-week programme into steady monthly income.',
    imageType: 'Story Image',
    href: '/news',
    image: newsImageMap['Story Image'],
  },
];

export const heroFacts = [
  { value: '17', label: 'Programmes' },
  { value: '5', label: 'Departments' },
  { value: '99%', label: 'Practical Training' },
];
