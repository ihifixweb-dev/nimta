export type GalleryCategory =
  | 'campus'
  | 'training'
  | 'work'
  | 'grad'
  | 'events';

export type GalleryFilter = {
  id: 'all' | GalleryCategory;
  label: string;
};

export type GalleryItem = {
  category: GalleryCategory;
  title: string;
  label: string;
};

export const galleryFilters: GalleryFilter[] = [
  { id: 'all', label: 'All' },
  { id: 'campus', label: 'Campus' },
  { id: 'training', label: 'Training' },
  { id: 'work', label: 'Student Work' },
  { id: 'grad', label: 'Graduation' },
  { id: 'events', label: 'Events' },
];

export const galleryItems: GalleryItem[] = [
  {
    category: 'campus',
    title: 'Main Campus, Asokoro',
    label: 'Campus',
  },
  {
    category: 'campus',
    title: 'Reception & Admin Block',
    label: 'Campus',
  },
  {
    category: 'training',
    title: 'Technology Lab in Session',
    label: 'Training',
  },
  {
    category: 'training',
    title: 'Fashion Studio at Work',
    label: 'Training',
  },
  {
    category: 'training',
    title: 'Training Kitchen Service Day',
    label: 'Training',
  },
  {
    category: 'training',
    title: 'Beauty Studio, Live Client Session',
    label: 'Training',
  },
  {
    category: 'work',
    title: 'Student Capsule Collection',
    label: 'Student Work',
  },
  {
    category: 'work',
    title: 'Wedding Cake Showcase',
    label: 'Student Work',
  },
  {
    category: 'work',
    title: 'Capstone App Demo Day',
    label: 'Student Work',
  },
  {
    category: 'grad',
    title: 'Graduation Ceremony',
    label: 'Graduation',
  },
  {
    category: 'grad',
    title: 'Certificate Presentation',
    label: 'Graduation',
  },
  {
    category: 'events',
    title: 'Open Day & Exhibitions',
    label: 'Events',
  },
];
