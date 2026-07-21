export type CurriculumDetail = {
  dur: string;
  fee: string;
  del: string;
  tools: string;
  mods: string[];
  cap: string;
  out: string[];
  ass: string;
};

const curriculumData: Record<string, CurriculumDetail> = {
  'NIMTA-T00': {
    dur: '4 Weeks',
    fee: '₦100,000',
    del: 'In-Person (Abuja) | Online (Live + Recorded)',
    tools:
      'Microsoft Word, Microsoft Excel, Microsoft PowerPoint, Email, Web Browsers, File Management',
    mods: [
      'Module 1 (Week 1). The Computer and You\n  - Parts of a computer and safe handling\n  - Files, folders and organised storage\n  - Typing practice and keyboard shortcuts\n  - Saving, backing up and finding your work',
      'Module 2 (Week 2). Microsoft Word Essentials\n  - Creating, formatting and saving documents\n  - Letters, reports and CVs\n  - Tables, images and page layout\n  - Printing and sharing as PDF',
      'Module 3 (Week 3). Microsoft Excel Essentials\n  - Rows, columns and worksheets\n  - Lists, budgets and simple records\n  - Basic formulas, SUM, AVERAGE, COUNT\n  - Sorting, filtering and simple charts',
      'Module 4 (Week 4). PowerPoint, Email and the Internet\n  - Building a clear, confident presentation\n  - Professional email writing and etiquette\n  - Searching, downloading and staying safe online\n  - Final practical, a complete document, budget sheet and presentation',
    ],
    cap: 'Produce and present a complete mini project, a formatted Word document, an Excel budget, and a PowerPoint presentation delivered to the class.',
    out: [
      'Operate a computer confidently for study and work',
      'Produce professional documents in Microsoft Word',
      'Build and manage simple spreadsheets in Excel',
      'Create and deliver a clear PowerPoint presentation',
      'Use email and the internet safely and professionally',
    ],
    ass: '100% practical. Weekly hands-on tasks and one final presented project. This course is the foundation for all Department of Technology programmes.',
  },
  'NIMTA-T01': {
    dur: '6 Months (24 Weeks)',
    fee: '₦450,000',
    del: 'In-Person (Abuja) | Online (Live + Recorded)',
    tools:
      'VS Code, HTML/CSS/JS, React, Node.js, MongoDB, Git & GitHub, Postman, Vercel, Netlify, Figma',
    mods: [
      'Module 1 (Weeks 1-2). Digital Foundations\n  - Computer basics and file management\n  - How the internet works, DNS, HTTP, servers\n  - VS Code and developer tools\n  - Command Line Interface fundamentals',
      'Module 2 (Weeks 3-8). Front-End Development\n  - HTML5 semantic markup\n  - CSS3, Flexbox, Grid, animations\n  - Responsive design\n  - JavaScript fundamentals and DOM\n  - Building sites from real design mockups',
      'Module 3 (Weeks 9-12). JavaScript Deep Dive & React\n  - ES6+ JavaScript\n  - Promises, async/await, fetch API\n  - React components, props, state, hooks\n  - React Router and SPA architecture',
      'Module 4 (Weeks 13-18). Back-End Development\n  - Node.js and Express.js\n  - RESTful API design\n  - MongoDB with Mongoose\n  - JWT authentication, bcrypt security\n  - Uploads, environment variables, middleware',
      'Module 5 (Weeks 19-22). Deployment & DevOps\n  - Git workflow, branching, pull requests\n  - Deploying to Render, Vercel, Netlify\n  - Domains and SSL\n  - Cloud storage, performance basics',
      'Module 6 (Weeks 23-24). Capstone & Career\n  - Full-stack capstone build and deployment\n  - Portfolio and GitHub optimisation\n  - Resume and LinkedIn for tech\n  - Freelancing platforms, mock interviews',
    ],
    cap: 'Build and deploy a complete full-stack application with a live URL and full documentation, reviewed by an industry panel.',
    out: [
      'Build front-end interfaces with HTML, CSS, JavaScript and React',
      'Develop back-end services with Node.js and databases',
      'Deploy applications to cloud hosting',
      'Use Git and GitHub professionally',
      'Earn as a freelancer or junior developer',
    ],
    ass: '60% project submissions | 20% weekly practical challenges | 20% capstone and panel review | 100% practical, no written exams',
  },
  'NIMTA-T02': {
    dur: '3 Months (12 Weeks)',
    fee: '₦320,000',
    del: 'In-Person (Abuja) | Online (Live + Recorded)',
    tools: 'Figma, FigJam, Maze, Notion, Google Forms, Behance, Canva',
    mods: [
      'Module 1 (Weeks 1-2). Design Thinking Foundations\n  - UI vs UX\n  - Empathize, Define, Ideate, Prototype, Test\n  - User research methods\n  - Competitive analysis',
      'Module 2 (Weeks 3-4). UX Research & Information Architecture\n  - Personas and journey maps\n  - Site maps and IA\n  - Card sorting, tree testing\n  - Usability heuristics',
      'Module 3 (Weeks 5-6). Wireframing & Prototyping\n  - Low and mid fidelity wireframes\n  - Interactive prototyping in Figma\n  - Usability testing and iteration',
      'Module 4 (Weeks 7-9). Visual Design & UI Systems\n  - Typography, colour, grids\n  - Components, auto-layout, design systems\n  - Responsive design\n  - Microinteractions',
      'Module 5 (Weeks 10-12). Portfolio & Professional Practice\n  - Writing case studies\n  - Portfolio on Behance\n  - Presenting to clients and teams\n  - Pricing and proposals, Dev Mode handoff',
    ],
    cap: 'Design a complete mobile application from discovery to final prototype, with a research report and a written case study.',
    out: [
      'Conduct user research and synthesize design decisions',
      'Design wireframes, prototypes and high-fidelity UI in Figma',
      'Present a portfolio of three case studies',
      'Apply design systems and accessibility standards',
      'Communicate design decisions to stakeholders',
    ],
    ass: '60% case studies | 25% weekly challenges | 15% final portfolio presentation | 100% practical',
  },
};

const defaultCurriculum: CurriculumDetail = {
  dur: 'See programme page',
  fee: 'See website',
  del: 'In-Person and/or Online',
  tools: 'Listed in the programme details on the NIMTA website.',
  mods: [
    'Full module-by-module curriculum available from NIMTA Admissions at admissions@nimta.edu.ng',
  ],
  cap: 'Details available from NIMTA Admissions.',
  out: ['Practical, portfolio-based outcomes. Full list available on request.'],
  ass: '99% practical, portfolio and project-based.',
};

export function generateCurriculum(code: string, name: string): string {
  const d = curriculumData[code] ?? defaultCurriculum;
  const line = '--------------------------------------------------------------------------------';
  const dline = '================================================================================';

  return (
    dline +
    '\nNIMTA EMPOWERMENT TRAINING SCHEME\nNAOWA Institute of Management and Technology\nMambilla Barracks Road, Asokoro, Abuja | admissions@nimta.edu.ng\n' +
    dline +
    '\n\nCOURSE CURRICULUM DOCUMENT\n\nCourse Code     ' +
    code +
    '\nCourse Name     ' +
    name +
    '\nDuration        ' +
    d.dur +
    '\nFull Fee        ' +
    d.fee +
    '\nDelivery        ' +
    d.del +
    '\nEntry           SSCE or equivalent. No degree required. No prior experience needed.\n\n' +
    line +
    '\nTOOLS AND TECHNOLOGIES\n' +
    line +
    '\n' +
    d.tools +
    '\n\n' +
    line +
    '\nCURRICULUM MODULES\n' +
    line +
    '\n' +
    d.mods.join('\n\n') +
    '\n\n' +
    line +
    '\nCAPSTONE PROJECT\n' +
    line +
    '\n' +
    d.cap +
    '\n\n' +
    line +
    '\nLEARNING OUTCOMES\n' +
    line +
    '\n' +
    d.out.map((o, i) => i + 1 + '. ' + o).join('\n') +
    '\n\n' +
    line +
    '\nASSESSMENT\n' +
    line +
    '\n' +
    d.ass +
    '\n\n' +
    line +
    '\nSCHOLARSHIP TIERS\n' +
    line +
    '\nTier One. Children of Nigerian Army Officers (1st application) - 100% Scholarship\n             Required documents include Letter of Introduction, Parent\'s ID Card, Part Two Order\nTier Two. Children of Soldiers and Other Ranks (1st and 2nd programme) - 50% Scholarship\nTier Three. General Public - Standard Fee\n\n' +
    line +
    '\nHOW TO APPLY\n' +
    line +
    '\n1. Register on the NIMTA website\n2. Submit your documents (SSCE result, ID, passport photo, plus Tier One documents if applicable)\n3. Receive your admission letter within 5 working days\n4. Pay your applicable fee within 7 working days of the offer\n5. Attend orientation and begin your programme\n\nContact admissions@nimta.edu.ng | +234 814 128 3720\n\n' +
    dline +
    '\nNIMTA reserves the right to update curricula to reflect industry developments.\n' +
    dline +
    '\n'
  );
}
