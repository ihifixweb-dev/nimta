import { images } from './images';

export type HeroSlide = {
  src: string;
  alt: string;
  label: string;
};

export const heroSlides: HeroSlide[] = [
  {
    src: images.heroStudents,
    alt: 'Black Nigerian students collaborating on software development',
    label: 'Software Development',
  },
  {
    src: images.deptFashion,
    alt: 'Fashion design student working on a garment',
    label: 'Fashion Design',
  },
  {
    src: images.deptCulinary,
    alt: 'Culinary arts student preparing food in a training kitchen',
    label: 'Culinary Arts',
  },
  {
    src: images.galleryAppDemo,
    alt: 'Student presenting a UI/UX design project',
    label: 'UI/UX Design',
  },
  {
    src: images.deptTechnology,
    alt: 'Student training in a technology and data lab',
    label: 'Data Analytics',
  },
  {
    src: images.galleryWeddingCake,
    alt: 'Pastry and baking student decorating a cake',
    label: 'Pastry & Baking',
  },
  {
    src: images.deptEnterprise,
    alt: 'Student learning digital marketing and business skills',
    label: 'Digital Marketing',
  },
  {
    src: images.deptBeauty,
    alt: 'Make-up artistry student working on a client',
    label: 'Make-Up Artistry',
  },
  {
    src: images.galleryFashionCollection,
    alt: 'Hair styling and beauty training in session',
    label: 'Hair Styling',
  },
  {
    src: images.galleryGraduationCeremony,
    alt: 'Graduates celebrating practical skills training',
    label: 'Graphic Design',
  },
  {
    src: images.deptCulinary,
    alt: 'Event catering and culinary service training',
    label: 'Event Catering',
  },
  {
    src: images.galleryAppDemo,
    alt: 'Student using AI tools for productivity in class',
    label: 'AI Productivity',
  },
];
