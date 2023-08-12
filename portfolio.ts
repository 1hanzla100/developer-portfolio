import emoji from 'react-easy-emoji';
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from './types/sections';

const yearsOfExperience = new Date().getFullYear() - 2015;

export const greetings: GreetingsType = {
  name: 'Simone Mosi',
  title: "Hi all, I'm Simone",
  description: `Software Engineer with ${yearsOfExperience}+ years of experience specializing in System Design, Backend Development and Security`,
  resumeLink: undefined,
};

export const openSource = {
  githubUserName: 'simomosi',
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  // url: 'https://simomosi.github.io/',
  github: 'https://github.com/simomosi',
  linkedin: 'https://www.linkedin.com/in/simonemosi/',
};

export const skillsSection: SkillsSectionType = {
  title: 'What I am',
  subTitle: 'Computer Science Enthusiast',
  data: [
    {
      title: 'Software Engineer',
      lottieAnimationFile: '/extra_lottie/business-meeting.json', // Path of Lottie Animation JSON File
      skills: [
        emoji('⚡ Talk with People'),
        emoji('⚡ Collect Complete and Accurate Software Requirements'),
        emoji('⚡ Design Systems'),
        emoji('⚡ Guide my Team to our goal'),
        emoji('⚡ Write clear documentation'),
      ],
      softwareSkills: [
        {
          skillName: 'UML',
          iconifyTag: 'fa-solid:project-diagram',
        },
        {
          skillName: 'Jira',
          iconifyTag: 'logos:jira',
        },
        {
          skillName: 'LaTeX',
          iconifyTag: 'file-icons:latex',
        },
        {
          skillName: 'Confluence',
          iconifyTag: 'logos:confluence',
        },
        {
          skillName: 'Markdown',
          iconifyTag: 'logos:markdown',
        },
      ],
    },
    {
      title: 'Full Stack Developer',
      lottieAnimationFile: '/lottie/skills/fullstack.json', // Path of Lottie Animation JSON File
      skills: [
        emoji('⚡ Write Reliable & Optimized Software'),
        emoji('⚡ Build Web-apps'),
        emoji('⚡ Ensure Privacy & Security'),
        emoji('⚡ Build APIs'),
        emoji('⚡ Database Administrator'),
        emoji('⚡ Automate Test & Deploy'),
      ],
      softwareSkills: [
        {
          skillName: 'PHP',
          iconifyTag: 'bxl:php',
        },
        {
          skillName: 'Java',
          iconifyTag: 'logos:java',
        },
        {
          skillName: 'JavaScript',
          iconifyTag: 'logos:javascript',
        },
        {
          skillName: 'Python',
          iconifyTag: 'logos:python',
        },
        {
          skillName: 'NPM',
          iconifyTag: 'logos:npm-icon',
        },
        {
          skillName: 'Yarn',
          iconifyTag: 'logos:yarn',
        },
      ],
    },
    {
      title: 'Software Architect',
      lottieAnimationFile: '/lottie/skills/cloudinfra.json', // Path of Lottie Animation JSON File
      skills: [
        emoji('⚡ Experience of working on multiple platforms'),
        emoji(
          '⚡ Hosting and maintaining websites along with integration of databases'
        ),
        emoji(
          '⚡ Building CI/CD pipelines for automated testing & deployment using Github Actions'
        ),
      ],
      softwareSkills: [
        // ? Check README To get icon details
        {
          skillName: 'PostgreSQL',
          iconifyTag: 'logos:postgresql',
        },
        {
          skillName: 'Github',
          iconifyTag: 'akar-icons:github-fill',
        },
        {
          skillName: 'Docker',
          iconifyTag: 'logos:docker-icon',
        },
        {
          skillName: 'Github Actions',
          iconifyTag: 'logos:github-actions',
        },
        {
          skillName: 'Nginx',
          iconifyTag: 'logos:nginx',
        },
      ],
    },
    {
      title: 'Blockchain Developer',
      lottieAnimationFile: '/lottie/skills/ethereum.json', // Path of Lottie Animation JSON File
      skills: [
        emoji(
          '⚡ Experience in developing Smart Contract using Solidity & Ethereum'
        ),
        emoji(
          '⚡ Build Scripts for automated testing & deployment of Smart Contracts'
        ),
        emoji('⚡ Experience of using Openzeppelin Smart Contract Standards'),
        emoji('⚡ Develop NFT Smart Contracts using ERC-721 Token Standard'),
      ],
      softwareSkills: [
        {
          skillName: 'Ethereum',
          iconifyTag: 'logos:ethereum',
        },
        {
          skillName: 'Solidity',
          iconifyTag: 'logos:solidity',
        },
        {
          skillName: 'Web3js',
          iconifyTag: 'logos:web3js',
        },
        {
          skillName: 'Metamask',
          iconifyTag: 'logos:metamask-icon',
        },
        {
          skillName: 'Ganache',
          iconifyTag: 'logos:ganache-icon',
        },
        {
          skillName: 'IPFS',
          iconifyTag: 'simple-icons:ipfs',
        },
      ],
    }
  ],
};

export const SkillBars: SkillBarsType[] = [];

export const educationInfo: EducationType[] = [
  {
    schoolName: 'M.Sc. in Computer Science',
    subHeader: '',
    duration: '2017 - 2019',
    grade: '110/110 Cum Laude',
    desc: 'Details:',
    descBullets: [
      'Thesis about GDPR & Privacy',
      'Paper about Advanced Semantic Queries and their Explanation',
    ],
  },
  {
    schoolName: 'B.Sc. in Computer Science',
    subHeader: '',
    duration: '2013 - 2016',
    grade: '108/110',
    desc: 'Details:',
    descBullets: [
      'Thesis: Development of a Game Engine specialized in Showrooms/Virtual Realities creation',
    ],
  },
];

export const experience: ExperienceType[] = [
  {
    role: 'Software Architect and Software Engineer',
    company: 'Bidoo',
    companyLogo: '/my_companies_logo/bidoo-logo.jpg',
    date: 'May 2020 - Today',
    desc: 'Bidoo offers a live auction platform which requires fast and efficient algorithms',
    descBullets: [
      'Designed and developed from scratch an E-Commerce which supports the famous Auction site',
      'Designed and developed the whole Payments Processing Platform',
      'Created a Business Intelligence tool to lead to successful business decisions',
      'Developed a software for Access Control List management to handle user roles and permissions in the company intranet',
    ],
  },
  {
    role: 'Software Architect',
    company: 'Deloitte',
    companyLogo: '/my_companies_logo/deloitte-logo.png',
    date: 'Dec 2019 - May 2020',
    desc: 'Deloitte is one of the Big Four companies. I worked with their main clients: banks',
    descBullets: [
      'Designed the Strong Customer Authentication (SCA) implementation in order to limit frauds in online payments with credit and debit cards (systems PSD2 compliant)',
      'Designed the integration between foreign banks and italian systems in order to support italian payments (i.e. Checks/MAV/RAV/F23 etc)',
      'Developed a software for the ETL phase in a Fraud Reporting project to handle giant files with low resources',
    ],
  },
  {
    role: 'Software Engineer',
    company: 'FIAT Chrysler Automobiles',
    companyLogo: '/my_companies_logo/fca-logo.jpg',
    date: 'Nov 2018 - Dec 2019',
    desc: "FIAT required high security, information confidentiality and integrity. I developed a Web Application for FCA's World Class Manufacturing process",
  },
  {
    role: 'Full Stack Software Engineer',
    company: '',
    companyLogo: '/my_companies_logo/freelancer-logo.svg',
    date: 'Oct 2015 - Sep 2018',
    desc: 'Worked with 6 different companies',
    descBullets: [
      'Developed a software which offers services like international mobile top-up and international shipments',
      'Designed different management softwares for company assets, human resources etc',
      'Developed a software capable of projecting costs to determine short to long term gains, thus guiding the company in its decision making processes',
      '...and much more! Ask me for my resume!',
    ],
  },
];

export const projects: ProjectType[] = [
  {
    name: 'Dynamic Forms',
    desc: 'DynamicForms is a client library to automate progressive filtering and initialisation of dynamic fields in an easy and fast way',
    github: 'https://github.com/simomosi/dynamic-forms',
    link: 'https://simomosi.github.io/dynamic-forms/',
  },
  {
    name: 'MachineLearning MNIST',
    desc: 'A Neural Network to recognise hand‑written digits which are stored in the MNIST database',
    github: 'https://github.com/simomosi/MachineLearning-MNIST',
  },
  {
    name: 'ComputerVision Algorithms',
    desc: 'A software which uses Computer Vision algorithms for noise reduction in photos',
    github: 'https://github.com/simomosi/ComputerVision-Algorithms',
  },
  {
    name: 'Treasure Hunt',
    desc: 'Online multiplayer treasure hunt game',
    github: 'https://github.com/simomosi/treasure_hunt',
  },
];

export const feedbacks: FeedbackType[] = [];

// option to hide or show the ContactUs component
export const showContactUs: boolean = false;

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  author: 'Simone Mosi',
  title: 'Portfolio | simomosi',
  description: 'A passionate Software Engineer.',
  image: 'https://avatars.githubusercontent.com/u/37104045?v=4',
  url: 'simomosi.github.io',
  keywords: [
    'simomosi',
    'simomosi portfolio',
    'Simone Mosi',
    'Simone Mosi Portfolio',
    'Portfolio',
    'Software Developer',
    'Software Developer Portfolio',
    'Software Developer CV',
  ],
};
