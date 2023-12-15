import emoji from 'react-easy-emoji';
import {
  EducationType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
  CertificateType
} from './types/sections';




export const greetings: GreetingsType = {
  name: 'Vyshnav',
  title: "Hi all, I'm Vyshnav",
  description:
    `Motivated and dedicated computer
    science student seeking an
    opportunity to apply my skills and
    knowledge in a professional setting
    proficient with modern frontend
    libraries and frameworks including
    React and Next.js.`,
  resumeLink:
    'https://cyan-amara-80.tiiny.site/',
};

export const openSource = {
  githubUserName: 'vyshnav001',
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  url: 'https://github.com/Vyshnav001',
  linkedin: '',
  github: 'https://github.com/Vyshnav001',
  instagram: '',
  facebook: '',
  twitter: 'https://twitter.com/Vyshnav39869228',
};

export const skillsSection: SkillsSectionType = {
  title: 'What I do',
  subTitle: 'CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK',
  data: [
    {
      title: 'Full Stack Development',
      lottieAnimationFile: 'https://lottie.host/f669f613-d8a2-4fda-a4ec-b591c20419ca/2ti4SzNjTE.json', // Path of Lottie Animation JSON File
      skills: [
        emoji(
          '⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js'
        ),
        emoji('⚡ Building responsive static websites using Next.js'),
        emoji('⚡ Building RESTful APIs in Node js & Node js REST Framework'),
        emoji('⚡ Building Full-stack website using MERN stack'),
      ],
      softwareSkills: [
        {
          skillName: 'HTML-5',
          iconifyTag: 'vscode-icons:file-type-html',
        },
        {
          skillName: 'CSS-3',
          iconifyTag: 'vscode-icons:file-type-css',
        },
        {
          skillName: 'JavaScript',
          iconifyTag: 'logos:javascript',
        },
        {
          skillName: 'Reactjs',
          iconifyTag: 'vscode-icons:file-type-reactjs',
        },
        {
          skillName: 'Nextjs',
          iconifyTag: 'vscode-icons:file-type-light-next',
        },
        {
          skillName: 'Python',
          iconifyTag: 'logos:python',
        },
        {
          skillName: 'Node js',
          iconifyTag: 'vscode-icons:file-type-node',
        },
        {
          skillName: 'Postman',
          iconifyTag: 'vscode-icons:file-type-postman',
        },
        {
          skillName: 'Tailwind css',
          iconifyTag: 'vscode-icons:file-type-tailwind',
        },
        {
          skillName: 'MongoDB',
          iconifyTag: 'vscode-icons:file-type-mongo',
        },
       

        {
          skillName: 'Redux',
          iconifyTag: 'logos:redux',
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
    // {
    //   title: 'Cloud Infra-Architecture',
    //   lottieAnimationFile: '/lottie/skills/cloudinfra.json', // Path of Lottie Animation JSON File
    //   skills: [
    //     emoji('⚡ Experience of working on multiple cloud platforms'),
    //     emoji(
    //       '⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases'
    //     ),
    //     emoji(
    //       '⚡ Building CI/CD pipelines for automated testing & deployment using Github Actions'
    //     ),
    //   ],
    //   softwareSkills: [
    //     // ? Check README To get icon details
    //     {
    //       skillName: 'AWS',
    //       iconifyTag: 'logos:aws',
    //     },
    //     {
    //       skillName: 'Azure',
    //       iconifyTag: 'logos:microsoft-azure',
    //     },
    //     {
    //       skillName: 'Heroku',
    //       iconifyTag: 'logos:heroku-icon',
    //     },
    //     {
    //       skillName: 'PostgreSQL',
    //       iconifyTag: 'logos:postgresql',
    //     },
    //     {
    //       skillName: 'Github',
    //       iconifyTag: 'akar-icons:github-fill',
    //     },
    //     {
    //       skillName: 'Docker',
    //       iconifyTag: 'logos:docker-icon',
    //     },
    //     {
    //       skillName: 'Github Actions',
    //       iconifyTag: 'logos:github-actions',
    //     },
    //     {
    //       skillName: 'Cloudinary',
    //       iconifyTag: 'logos:cloudinary',
    //     },
    //     {
    //       skillName: 'Nginx',
    //       iconifyTag: 'logos:nginx',
    //     },
    //     {
    //       skillName: 'Sentry',
    //       iconifyTag: 'logos:sentry-icon',
    //     },
    //   ],
    // },
    // {
    //   title: 'Blockchain',
    //   lottieAnimationFile: '/lottie/skills/ethereum.json', // Path of Lottie Animation JSON File
    //   skills: [
    //     emoji(
    //       '⚡ Experience in developing Smart Contract using Solidity & Ethereum'
    //     ),
    //     emoji(
    //       '⚡ Building Scripts for automated testing & deployment of Smart Contracts using Brownie & Infura'
    //     ),
    //     emoji(
    //       '⚡ Experience of using Openzeppelin Smart Contract Standards & Chainlink Oracles'
    //     ),
    //     emoji('⚡ Developing NFT Smart Contracts using ERC-721 Token Standard'),
    //     emoji(
    //       '⚡ Building Dapps with React.js & Solidity using Web3.js, Moralis & IPFS'
    //     ),
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: 'Ethereum',
    //       iconifyTag: 'logos:ethereum',
    //     },
    //     {
    //       skillName: 'Solidity',
    //       iconifyTag: 'logos:solidity',
    //     },
    //     {
    //       skillName: 'Web3js',
    //       iconifyTag: 'logos:web3js',
    //     },
    //     {
    //       skillName: 'Metamask',
    //       iconifyTag: 'logos:metamask-icon',
    //     },
    //     {
    //       skillName: 'Ganache',
    //       iconifyTag: 'logos:ganache-icon',
    //     },
    //   ],
    // },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: 'Frontend/Design', //Insert stack or technology you have experience in
    progressPercentage: '90', //Insert relative proficiency in percentage
  },
  {
    Stack: 'Backend',
    progressPercentage: '70',
  },
  {
    Stack: 'Programming',
    progressPercentage: '60',
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: 'St joseph Engineering College',
    subHeader: 'BE in Computer Science',
    duration: '2022 - present',
    desc: 'Member of Sceptix Club',
    // grade: 'Grade A',
    // descBullets: [
    //   'Lorem ipsum dolor sit amet, consectetur adipdfgiscing elit',
    //   'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    // ],
  },
];
export const certificates : CertificateType[] = [
  {
    name:"Introduction to Backend Develeopment",
    img:"/img/icons/common/meta.jpg",
    // des:"Lorem ipsum dolor sit amet, consectetur adipdfgiscing elitLorem ipsum dolor sit amet, consectetur adipdfgiscing elitLorem ipsum dolor sit amet, consectetur adipdfgiscing elit"
  },
  
]
// export const experience: ExperienceType[] = [
//   {
//     role: 'Frontend Developer',
//     company: 'Duseca Software',
//     companyLogo: '/img/icons/common/dusecaSoftware.jpg',
//     date: 'Apr 2022 – Jun 2022',
//     desc: 'I worked as frontend web developer to design web based admin dashboards for mulitple apps using Django, Bootstrap, jQuery, Chart.js and some other libraries.',
//   },
//   {
//     role: 'API Engineer',
//     company: 'Duseca Software',
//     companyLogo: '/img/icons/common/dusecaSoftware.jpg',
//     date: 'Jan 2022 – Mar 2022',
//     desc: 'I worked as API Engineer on a Kale App. Kale is a community platform for the creation of social reviews based on verified transactions. I built Fully Optimized and High Performance RESTful APIs using Django, DjangoRESTFramework, PostgresSQL, JWT Authentication, AWS, Integrated Plaid APIs for Fetching Bank Transactions, Integrated Sentry for monitoring Django Server and deployed the API on Heroku Server.',
//     // descBullets: [
//     // 	"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
//     // 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
//     // ],
//   },
//   {
//     role: 'Full Stack Developer',
//     company: 'Bleed-AI',
//     companyLogo: '/img/icons/common/bleedAI.jpg',
//     date: 'Sept 2021 - Oct 2021',
//     desc: 'Worked as django web developer to create a website in which I integrated computer vision AI model (built by the team of BleedAI) to process YouTube URLs and show Real Time processing on Website using Django Channels WebSockets , threading for running multiple instances of AI Model, jQuery for UI rendering and deployed it on Heroku server.',
//   },
//   {
//     role: 'Backend Developer',
//     company: 'Wapidu',
//     companyLogo: '/img/icons/common/wapidu.jpg',
//     date: 'Sept 2021',
//     desc: 'Worked as a Django Developer to integrate Stripe payment gateway in wapidu.com and Created REST APIs using Django REST Framework to integrate Django Stripe backend to Vue.js Frontend and Deployed it on Azure based Docker container registry.',
//   },
// ];

// export const projects: ProjectType[] = [
//   {
//     name: 'developer-portfolio',
//     desc: 'Software Developer Portfolio Template built with react.js and next.js bootstrap that helps you showcase your work and skills as a software developer.',
//     github: 'https://github.com/1hanzla100/developer-portfolio',
//     link: 'https://developer-portfolio-1hanzla100.vercel.app/',
//   },
//   {
//     name: 'AtlasMart',
//     desc: 'With Atlas Mart, it’s easy to find the products with the best price and ship them straight to your door.',
//     github: 'https://github.com/1hanzla100/Django-React-Marketplace',
//   },
//   {
//     name: 'Technota (Forum)',
//     desc: 'Get hands-on experience in technical skills with Technota',
//     github: 'https://github.com/1hanzla100/django-react-forum',
//   },
//   {
//     name: 'Shopaza (Ecommerce)',
//     desc: 'Now your reach to all your favorite entertainment and luxury items is just one touch apart',
//     github: 'https://github.com/1hanzla100/Django-ecommerce',
//   },
// ];

// export const feedbacks: FeedbackType[] = [
//   {
//     name: 'John Smith',
//     feedback:
//       'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.',
//   },
//   {
//     name: 'John Smith',
//     feedback:
//       'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.',
//   },
// ];

// option to hide or show the ContactUs component
export const showContactUs: boolean = false;

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: 'Vyshnav',
  description:
    'A passionate Full Stack Web Developer',
  author: 'Vyshnav',
  image: 'https://avatars.githubusercontent.com/u/120462272?s=400&u=4396ebf03519c21c92ab77aa548d7ea061f08a8d&v=4',
  url: 'https://developer-portfolio-1hanzla100.vercel.app',
  keywords: [
    'Vyshnav',
    'Vyshnav k',
    'vyshnav001',
    'Portfolio',
    'Vyshnav Portfolio ',
  ],
};
