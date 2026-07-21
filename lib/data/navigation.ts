export type NavLink = {
  label: string;
  href: string;
  variant?: 'default' | 'apply';
};

export type FooterLink = {
  label: string;
  href: string;
  external?: boolean;
};

export type FooterColumn = {
  title: string;
  links: FooterLink[];
};

export type DepartmentFilter = {
  id: 'all' | 'tech' | 'fashion' | 'culinary' | 'beauty' | 'enterprise';
  label: string;
};

export type AnnounceBar = {
  headline: string;
  detail: string;
  ctaLabel: string;
  ctaHref: string;
};

export const announceBar: AnnounceBar = {
  headline: 'Admissions Now Open',
  detail: 'January 2026 Cohort · Scholarships available for children of serving personnel',
  ctaLabel: 'Begin your application',
  ctaHref: '/apply',
};

export const navLinks: NavLink[] = [
  { label: 'The Institute', href: '/about' },
  { label: "President's Message", href: '/president' },
  { label: 'Programmes', href: '/programmes' },
  { label: 'Admissions', href: '/admissions' },
  { label: 'Our People', href: '/team' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'News', href: '/news' },
  { label: 'Apply Now', href: '/apply', variant: 'apply' },
];

export const departmentFilters: DepartmentFilter[] = [
  { id: 'all', label: 'All' },
  { id: 'tech', label: 'Technology' },
  { id: 'fashion', label: 'Fashion' },
  { id: 'culinary', label: 'Culinary' },
  { id: 'beauty', label: 'Beauty' },
  { id: 'enterprise', label: 'Enterprise' },
];

export const tickerItems: string[] = [
  'Software Development',
  'Fashion Design',
  'Culinary Arts',
  'UI/UX Design',
  'Data Analytics',
  'Pastry & Baking',
  'Digital Marketing',
  'Computer Appreciation',
  'Cybersecurity',
  'Make-Up Artistry',
  'AI Productivity',
  'Hair Styling',
  'Graphic Design',
  'Event Catering',
];

export const footerColumns: FooterColumn[] = [
  {
    title: 'Academics',
    links: [
      { label: 'Technology', href: '/programmes#tech' },
      { label: 'Fashion & Textiles', href: '/programmes#fashion' },
      { label: 'Culinary Arts', href: '/programmes#culinary' },
      { label: 'Beauty & Wellness', href: '/programmes#beauty' },
      { label: 'Enterprise', href: '/programmes#enterprise' },
    ],
  },
  {
    title: 'Admissions',
    links: [
      { label: 'Scholarship Tiers', href: '/admissions#tiers' },
      { label: 'Required Documents', href: '/admissions#documents' },
      { label: 'How to Apply', href: '/admissions#process' },
      { label: 'Apply Now', href: '/apply' },
      { label: 'Programme Policy', href: '/policy' },
    ],
  },
  {
    title: 'The Institute',
    links: [
      { label: 'About NIMTA', href: '/about' },
      { label: "President's Message", href: '/president' },
      { label: 'Our People', href: '/team' },
      { label: 'Gallery', href: '/gallery' },
      { label: 'News & Stories', href: '/news' },
      { label: 'NAOWA', href: 'https://naowa.ng', external: true },
      { label: 'NBTE Accreditation', href: '/about#accreditation' },
    ],
  },
];

export const footerBrand = {
  name: 'NIMTA',
  subtitle: 'Empowerment Training Scheme',
  description:
    'A NAOWA institution. Training the next generation of skilled, self-reliant Nigerians with the discipline this nation was built on.',
};

export const footerContact = {
  phone: '+234 814 128 3720',
  phoneHref: 'tel:+2348141283720',
  email: 'admissions@nimta.edu.ng',
  emailHref: 'mailto:admissions@nimta.edu.ng',
  address: 'Mambilla Barracks Road, Asokoro, Abuja',
};

export const footerBottom = {
  copyright: '© 2025 NIMTA. NAOWA Institute of Management and Technology. All rights reserved.',
  links: [
    { label: 'Terms & Policy', href: '/policy' },
    { label: 'Privacy Notice', href: '/policy#pp10' },
    { label: 'Accreditation', href: '/about#accreditation' },
  ],
};

export const mobileSticky = {
  headline: 'Admissions Now Open',
  detail: 'SSCE minimum · Scholarships available',
  ctaLabel: 'Apply Now',
  ctaHref: '/apply',
};
