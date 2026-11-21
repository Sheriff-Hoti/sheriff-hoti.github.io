export const SITE_TITLE = 'Sherif Hoti';
export const SITE_DESCRIPTION =
  'Sherif Hoti is a Full Stack Software Engineer in Prishtina, Kosovo with 4+ years building web applications with TypeScript, React, Java, Spring Boot and Express.js.';
export const SITE_URL = 'https://sheriff-hoti.github.io';

export const LINKS = [
  { label: 'GitHub', href: 'https://github.com/Sheriff-Hoti' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/sherif-hoti-92479b25a/' },
];

export const RESUME_PDF = '/Sherif-Hoti-Resume.pdf';

// Structured data (JSON-LD) describing the person this site is about.
// Google requires it to match what's visible on the page, so keep it in sync
// with src/pages/index.md.
export const PERSON = {
  '@type': 'Person',
  name: SITE_TITLE,
  url: `${SITE_URL}/`,
  jobTitle: 'Full Stack Software Engineer',
  description: SITE_DESCRIPTION,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Prishtina',
    addressCountry: 'XK',
  },
  knowsAbout: [
    'Full stack development',
    'TypeScript',
    'JavaScript',
    'Java',
    'React',
    'Next.js',
    'Node.js',
    'Express.js',
    'Spring Boot',
    'BullMQ',
    'PostgreSQL',
    'SQLite',
    'Redis',
    'Amazon Web Services (AWS)',
    'Terraform',
    'GitHub Actions',
    'TeamCity',
    'Agentic AI',
    'C#',
    'Vue',
    'Solid',
  ],
  knowsLanguage: ['sq', 'en'],
  sameAs: LINKS.map(({ href }) => href),
};
