export type ScholarshipTier = {
  variant: 'a' | 'b' | 'c';
  tag: string;
  percent: string;
  name: string;
  description: string;
  note: string;
};

export const scholarshipTiers: ScholarshipTier[] = [
  {
    variant: 'a',
    tag: 'Children of Soldiers & Other Ranks',
    percent: '100%',
    name: 'Soldiers and other ranks',
    description:
      'If your parent is a Soldier and other ranks, your first programme here is completely covered. Tuition, training, materials access. All of it. Choose your programme well, because this one is on us.',
    note: 'One full scholarship per person, on your first programme only. Anything after that is at the standard fee.',
  },
  {
    variant: 'b',
    tag: 'Children of Army Officers',
    percent: '50%',
    name: 'Nigerian Army',
    description:
      'If your parent serves or has served in the Nigerian Army, in any of the nation\'s uniformed services, half your tuition is covered on your first application.',
    note: '50% off your first application only. From your second application onward, the standard fee applies.',
  },
  {
    variant: 'c',
    tag: 'Everyone Else',
    percent: 'Open',
    name: 'Standard Admission',
    description:
      'No uniform in your family? You are just as welcome here. Every naira of your fee goes into the quality of your own training, the facilitators, the equipment, the small class sizes.',
    note: 'Standard programme fees apply. Ask the Admissions Office about flexible payment options.',
  },
];
