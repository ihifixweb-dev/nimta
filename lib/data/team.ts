import { images } from './images';

export type TeamMember = {
  role: string;
  name: string;
  credentials: string;
  bio: string;
  isLeadership?: boolean;
  image: string;
};

export const leadership: TeamMember[] = [
  {
    role: 'Rector',
    name: '[Full Name]',
    credentials: '[Qualifications, e.g. PhD, MBA]',
    bio: '[Two to three lines: background, years of experience, and what they are responsible for at NIMTA.]',
    isLeadership: true,
    image: images.teamLeadership[0],
  },
  {
    role: 'Registrar',
    name: '[Full Name]',
    credentials: '[Qualifications]',
    bio: '[Two to three lines: oversees admissions, records and certification. Background and years of service.]',
    isLeadership: true,
    image: images.teamLeadership[1],
  },
  {
    role: 'RSM (Regimental Sergeant Major)',
    name: '[Full Name]',
    credentials: '[Rank and service record]',
    bio: '[Two to three lines: oversees discipline, order and campus standards. Service background.]',
    isLeadership: true,
    image: images.teamLeadership[2],
  },
  {
    role: 'Director of Studies',
    name: '[Full Name]',
    credentials: '[Qualifications]',
    bio: '[Two to three lines: leads curriculum quality, facilitator standards and assessment across all departments.]',
    isLeadership: true,
    image: images.teamLeadership[3],
  },
  {
    role: 'Bursar',
    name: '[Full Name]',
    credentials: '[Qualifications, e.g. ACA, ACCA]',
    bio: "[Two to three lines: manages fees, scholarships and the institute's finances with full accountability.]",
    isLeadership: true,
    image: images.teamLeadership[4],
  },
  {
    role: 'Head of Admissions & Student Welfare',
    name: '[Full Name]',
    credentials: '[Qualifications]',
    bio: '[Two to three lines: your first point of contact from application to orientation, and your advocate throughout.]',
    isLeadership: true,
    image: images.teamLeadership[5],
  },
];

export const facilitators: TeamMember[] = [
  {
    role: 'Technology · [Specialty, e.g. Software Development]',
    name: '[Full Name]',
    credentials: '[Years of experience] · [Current role or company]',
    bio: '[One to two lines on their industry track record and what they are known for as a teacher.]',
    image: images.teamFacilitators[0],
  },
  {
    role: 'Fashion & Textiles · [Specialty]',
    name: '[Full Name]',
    credentials: '[Years of experience] · [Label or atelier]',
    bio: '[One to two lines on their industry track record and what they are known for as a teacher.]',
    image: images.teamFacilitators[1],
  },
  {
    role: 'Culinary Arts · [Specialty]',
    name: '[Full Name]',
    credentials: '[Years of experience] · [Kitchen or brand]',
    bio: '[One to two lines on their industry track record and what they are known for as a teacher.]',
    image: images.teamFacilitators[2],
  },
  {
    role: 'Beauty & Wellness · [Specialty]',
    name: '[Full Name]',
    credentials: '[Years of experience] · [Studio or brand]',
    bio: '[One to two lines on their industry track record and what they are known for as a teacher.]',
    image: images.teamFacilitators[3],
  },
  {
    role: 'Enterprise · Business Development',
    name: '[Full Name]',
    credentials: '[Years of experience] · [Business or role]',
    bio: '[One to two lines on their industry track record and what they are known for as a teacher.]',
    image: images.teamFacilitators[4],
  },
  {
    role: '[Department] · [Specialty]',
    name: '[Full Name]',
    credentials: '[Years of experience] · [Current role]',
    bio: '[Additional facilitator slot. Duplicate this card for as many facilitators as needed.]',
    image: images.teamFacilitators[5],
  },
];
