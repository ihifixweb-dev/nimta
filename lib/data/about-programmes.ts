import { images } from './images';

export type AboutProgrammeHighlight = {
  name: string;
  department: string;
  image: string;
  imageAlt: string;
  since: string;
  description: string;
  href: string;
};

export const aboutProgrammeHighlights: AboutProgrammeHighlight[] = [
  {
    name: 'Software Development (Full Stack Web)',
    department: 'Department of Technology',
    image: images.galleryAppDemo,
    imageAlt: 'NIMTA software development students presenting a deployed web application',
    since: 'Training developers since 2012',
    description:
      'From the earliest cohorts in 2010, NIMTA has put laptops in front of young Nigerians and asked them to build something real. Sixteen years on, our software development track has produced graduates who deploy working applications before they collect their certificates. You train in a live lab, present to facilitators who write code for a living, and leave with a GitHub profile that proves you can deliver.',
    href: '/programmes#tech',
  },
  {
    name: 'Fashion Design & Garment Construction',
    department: 'Department of Fashion & Textiles',
    image: images.galleryFashionCollection,
    imageAlt: 'NIMTA fashion design graduate presenting a capsule collection',
    since: 'Collections on the runway since 2011',
    description:
      'The fashion studio at NIMTA has been cutting, stitching and finishing garments for sixteen years. Participants work on real bodies, draft patterns from scratch, and present capsule collections to an audience before graduation day. Many of our earliest alumni still run labels today, and several return to mentor the cohorts that follow them.',
    href: '/programmes#fashion',
  },
  {
    name: 'Professional Culinary Arts',
    department: 'Department of Culinary Arts',
    image: images.galleryWeddingCake,
    imageAlt: 'NIMTA culinary arts students finishing a tiered celebration cake',
    since: 'Kitchens running since 2010',
    description:
      'Our training kitchens have been active since the institute opened. Participants cook Nigerian and continental dishes from week one, work service during open days and catering jobs, and finish with the confidence to feed paying customers. Over sixteen years, NIMTA culinary graduates have gone on to run canteens, bakeries and event catering businesses across Abuja and beyond.',
    href: '/programmes#culinary',
  },
  {
    name: 'Professional Make-Up Artistry',
    department: 'Department of Beauty & Wellness',
    image: images.deptBeauty,
    imageAlt: 'NIMTA make-up artistry students practising on live clients',
    since: 'Beauty training since 2013',
    description:
      'Make-up at NIMTA is taught on real clients from the second week, not on mannequins alone. For more than a decade, participants have built portfolios of bridal, editorial and everyday looks while learning to price, consult and retain customers. Graduates leave with photographs of work they have already been paid for, not just practice shots from a classroom.',
    href: '/programmes#beauty',
  },
  {
    name: 'Digital Marketing & Social Media Management',
    department: 'Department of Technology',
    image: images.galleryOpenDay,
    imageAlt: 'NIMTA open day with prospective students and programme facilitators',
    since: 'Campaigns live since 2014',
    description:
      'As social media reshaped how Nigerian businesses reach customers, NIMTA added digital marketing to its technology department and kept it practical. Participants run real campaigns for real businesses during training, measure results, and learn to charge for the work. Sixteen years of institute history means sixteen years of adapting our programmes to what the market actually pays for.',
    href: '/programmes#tech',
  },
];
