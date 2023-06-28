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

export const greetings: GreetingsType = {
  name: 'Huong Le',
  title: "Hi all, I'm Huong Le",
  description:
    "I'm passionate Full Stack web developer having an experience of web applications with Python, Django, React.js, Next.js. I have a growth mindset and wish to learn from everyone that I have a chance to work with.",
  resumeLink:
    'https://www.linkedin.com/in/huong295/',
};

export const openSource = {
  githubUserName: 'huong295',
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  url: 'https://github.com/huong295',
  linkedin: 'https://www.linkedin.com/in/huong295/',
  github: 'https://github.com/huong295',
  facebook: 'https://www.facebook.com/thanhhuong.le.56808/',
  
};

export const skillsSection: SkillsSectionType = {
  title: 'What I do',
  subTitle: 'CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK',
  data: [
    {
      title: 'Full Stack Development',
      lottieAnimationFile: '/lottie/skills/fullstack.json', // Path of Lottie Animation JSON File
      skills: [
        emoji(
          '⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js'
        ),
        emoji('⚡ Building responsive static websites using Next.js'),
        emoji('⚡ Building RESTful APIs in Django & Django REST Framework'),
      ],
      softwareSkills: [
        {
          skillName: 'HTML-5',
          fontAwesomeClassName: 'vscode-icons:file-type-html',
        },
        {
          skillName: 'CSS-3',
          fontAwesomeClassName: 'vscode-icons:file-type-css',
        },
        {
          skillName: 'JavaScript',
          fontAwesomeClassName: 'logos:javascript',
        },
        {
          skillName: 'Reactjs',
          fontAwesomeClassName: 'vscode-icons:file-type-reactjs',
        },
        {
          skillName: 'Nextjs',
          fontAwesomeClassName: 'vscode-icons:file-type-light-next',
        },
        {
          skillName: 'Python',
          fontAwesomeClassName: 'logos:python',
        },
        {
          skillName: 'Django',
          fontAwesomeClassName: 'vscode-icons:file-type-django',
        },

        {
          skillName: 'Redux',
          fontAwesomeClassName: 'logos:redux',
        },
        {
          skillName: 'NPM',
          fontAwesomeClassName: 'logos:npm-icon',
        },
        {
          skillName: 'Yarn',
          fontAwesomeClassName: 'logos:yarn',
        },
      ],
    },
  
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: 'Frontend/Design', //Insert stack or technology you have experience in
    progressPercentage: '90', //Insert relative proficiency in percentage
  },
  {
    Stack: 'Backend',
    progressPercentage: '50',
  },
  {
    Stack: 'Programming',
    progressPercentage: '60',
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: 'University Of Information Technology',
    subHeader: 'Bachelor of Information System',
    duration: 'September 2020 - April 2024',
    desc: 'GPA:3.04',
    
    grade: 'Grade A',
    descBullets: [
      "1st RUNNER-UP Contest Female Development Inspiration Tournament held by Code Like A Girl",
      "'Sinh vien 5 tot' - Faculty Level",
    ],
  },
  
];

export const experience: ExperienceType[] = [
  {
    role: 'Software Developer',
    company: 'WEBDEV STUDIO - CLUB',
    companyLogo: '/img/icons/common/dusecaSoftware.jpg',
    date: 'Apr 2022 – Jun 2022',
    desc: 'I worked as frontend web developer to design web based admin dashboards for mulitple apps using Django, Bootstrap, jQuery, Chart.js and some other libraries.',
  },
  
  
];

export const projects: ProjectType[] = [
  {
    name: 'Furniture Ecommerce',
    desc: 'Furniture Ecommerce built with react.js and next.js Taiwinds that helps you do a lot of bussiness fuctions like user registration and user login, users can search items by filtering out their preferences, they can add the items to their cart and they can buy it by providing an address and they can also pay online ',
    github: 'https://github.com/huong295/Naver_Capstone_Project',
    link: 'https://naver-capstone-project.vercel.app/',
  },
  {
    name: 'Shoppe Page',
    desc: 'Landing Page ',
    github: 'https://github.com/huong295/F8_SHOPEE',
    link:"https://huong295.github.io/F8_SHOPEE/"
  },
  
  {
    name: 'Weather Forcast Page',
    desc: 'Landing page',
    github: 'https://github.com/BiAndTi/WeatherForcast_ReactJS_Project.git',
  },
];
/*
export const feedbacks: FeedbackType[] = [
  {
    name: '',
    feedback:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.',
  },
  {
    name: 'John Smith',
    feedback:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.',
  },
];
*/
// option to hide or show the ContactUs component
export const showContactUs: boolean = true;

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: 'THANH HUONG LE',
  description:
    'A passionate Full Stack Web Developer and Project Manager.',
  author: 'THANH HUONG LE',
  image: 'https://github.com/settings/profile',
  url: 'https://developer-portfolio-1hanzla100.vercel.app',
  keywords: [
    'huong295',
    'Huong Le',
    'Portfolio',
    'Huong Le Portfolio ',

  ],
};