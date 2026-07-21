export type NewsCategory =
  | 'Announcement'
  | 'Graduation'
  | 'Graduate Story'
  | 'Blog'
  | 'Event'
  | 'Press';

export type NewsImageType =
  | 'News Image'
  | 'Graduation Image'
  | 'Story Image'
  | 'Blog Image'
  | 'Event Image'
  | 'Press Image';

export type NewsArticle = {
  category: NewsCategory;
  date: string;
  title: string;
  excerpt: string;
  imageType: NewsImageType;
};

export const newsArticles: NewsArticle[] = [
  {
    category: 'Announcement',
    date: 'Placeholder Date',
    title: 'Admissions open for the January cohort: what you need to know',
    excerpt:
      'Key dates, document requirements, and how to secure your place before the cohort fills. Placeholder summary text for the first featured post.',
    imageType: 'News Image',
  },
  {
    category: 'Graduation',
    date: 'Placeholder Date',
    title: 'Combined graduation ceremony celebrates a new class of skilled graduates',
    excerpt:
      'Highlights, award winners and starter pack presentations from the most recent NIMTA graduation. Placeholder summary text for the second post.',
    imageType: 'Graduation Image',
  },
  {
    category: 'Graduate Story',
    date: 'Placeholder Date',
    title: 'From SSCE to a paying skill: one graduate\'s ninety-day journey',
    excerpt:
      'How one NIMTA graduate turned a six-week programme into steady income. Placeholder summary text for the third featured story.',
    imageType: 'Story Image',
  },
  {
    category: 'Blog',
    date: 'Placeholder Date',
    title: 'Blog post slot: title goes here',
    excerpt:
      'Placeholder summary. Replace with an article on skills, careers, or life at NIMTA written by your content team.',
    imageType: 'Blog Image',
  },
  {
    category: 'Event',
    date: 'Placeholder Date',
    title: 'Event slot: open day, exhibition or workshop title',
    excerpt:
      'Placeholder summary. Use this slot for upcoming open days, exhibitions, employer visits and community events.',
    imageType: 'Event Image',
  },
  {
    category: 'Press',
    date: 'Placeholder Date',
    title: 'Press slot: media coverage and official statements',
    excerpt:
      'Placeholder summary. Use this slot for press releases, NAOWA statements and media features about the Scheme.',
    imageType: 'Press Image',
  },
];
