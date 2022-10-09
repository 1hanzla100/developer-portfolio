import emoji from "react-easy-emoji";

export const greetings = {
  name: 'Tarik "Fujin" Ermis',
  title: "Greetings, I'm Tarik",
  subtitle:
    "a passionate Full Stack Web Developer, Mobile App Developer and Blockchain Developer",
  description:
    "having an experience of building all kinds of Applications with JavaScript / Reactjs / Vuejs / Nodejs / React-Native / Solidity / Python / PHP and many other cool libraries and frameworks.",
  resumeLink: "https://techrez.io/resume/tarik-ermis",
};

export const openSource = {
  githubUserName: "xfujin",
};

export const contact = {};

export const socialLinks = {
  twitter: "https://twitter.com/fujin74",
  github: "https://github.com/xfujin",
  linkedin: "https://www.linkedin.com/in/tarikermis",
};

export const skillsSection = {
  title: "Provided Services",
  subTitle:
    "No Mountain is too high to climb. No matter if you want a Webapp, Webshop, Mobile App or even a Blockchain Solution, I will bring it to life.",
  skills: [
    emoji(
      "⚡ Develop highly interactive Full-Stack-Applications, Mobile Applications & Webshops tailored to your needs"
    ),
    emoji(
      "⚡ Setup and Development of Blockchain Applications with Smart-Contract Integration"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase / AWS / Digital Ocean"
    ),
    emoji("⚡ Search Engine Optimization ( SEO )"),
    emoji("⚡ And Much More! Contact me for Custom Individualized Solutions"),
  ],

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "vscode-icons:file-type-html",
    },

    {
      skillName: "css3",
      fontAwesomeClassname: "vscode-icons:file-type-css",
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "logos:sass",
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "logos:javascript",
    },
    {
      skillName: "TypeScript",
      fontAwesomeClassname: "logos:typescript-icon",
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "vscode-icons:file-type-reactjs",
    },
    {
      skillName: "vuejs",
      fontAwesomeClassname: "vscode-icons:file-type-vue",
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "logos:nodejs-icon",
    },
    {
      skillName: "SEO",
      fontAwesomeClassname: "logos:google",
    },
    {
      skillName: "solidity",
      fontAwesomeClassname: "vscode-icons:file-type-solidity",
    },
    {
      skillName: "flutter",
      fontAwesomeClassname: "logos:flutter",
    },
    {
      skillName: "react-native",
      fontAwesomeClassname: "vscode-icons:file-type-reactjs",
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "vscode-icons:file-type-swift",
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "vscode-icons:file-type-npm",
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "vscode-icons:file-type-sql",
    },
    {
      skillName: "mongoDB",
      fontAwesomeClassname: "vscode-icons:file-type-mongo",
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "logos:aws",
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "logos:firebase",
    },
    {
      skillName: "python",
      fontAwesomeClassname: "logos:python",
    },
    {
      skillName: "git",
      fontAwesomeClassname: "logos:git-icon",
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "logos:docker-icon",
    },
  ],
};

export const SkillBars = [
  {
    Stack: "Frontend/Design",
    progressPercentage: "95",
  },
  {
    Stack: "Backend",
    progressPercentage: "90",
  },
  {
    Stack: "Programming",
    progressPercentage: "99",
  },
  {
    Stack: "Blockchain / Smart Contracts",
    progressPercentage: "80",
  },
];

export const educationInfo = [
  {
    schoolName: "Technisch Gewerbliches Berufs-Bildungs-Zentrum 1 Saarbrücken",
    subHeader:
      "Specialised Computer Technology Scientist for Application Development",
    duration: "Aug 2016 - Jun 2019",
  },
  {
    schoolName: "Fachoberschule Technische Informatik BBZ Völklingen",
    subHeader: "Allgemeine Fachhochschulreife",
    duration: "Aug 2014 - Jul 2016",
  },
];

export const experience = [
  {
    role: "Lead Developer",
    company: "LendeXe Finance",
    companylogo: "/img/icons/common/lendexe.png",
    date: "Mar 2022 – present",
    descBullets: [
      "planning and implementing the Smart Contract Code of the Protocol using Solidity",
      "creating pixel perfect Web3 focused User Interfaces in React.js",
      "implementing and maintaining a Web3 focused Backend + API using Express.js & MongoDB",
      "implementing automation tools and chatbots via Python & JavaScript",
      "planning and maintaining DevOps",
    ],
  },
  {
    role: "Software Engineer",
    company: "Integr8 media GmbH",
    companylogo: "/img/icons/common/integr8.webp",
    date: "Aug 2021 – Mar 2022",
    descBullets: [
      "full stack mobile apps running on React Native",
      "implementing automation tools via Python",
      "integrating and managing cloud apps on Microsoft Azure / AWS",
      "machine Learning Chatbot implementation in RASA / BotKit",
      "full stack web apps in Vue.Js, Nuxt.Js, Express.Js and MongoDB",
    ],
  },
  {
    role: "Full Stack Web Developer",
    company: "N4 Group Germany",
    companylogo: "/img/icons/common/n4.jpg",
    date: "May 2017 – May 2018",
    descBullets: [
      "Fully responsive React.Js front-ends",
      "Rest-API integration",
      "performant and scalable backends in Express.Js",
      "serverside-rendering with React-Redux",
      "setting up and integrating PostgreSQL / MySQL Databases",
      "automated testing and deployment with gitlab-ci and Docker / Kubernetes",
    ],
  },
  {
    role: "Apprentice Web Developer",
    company: "SUMITS Deutschland GmbH",
    companylogo: "/img/icons/common/sumits.jfif",
    date: "Aug 2016 - Mar 2018",
    desc: "Full Management of Websites created in Wordpress, involving the creation, design, deployment and developing own plugins.",
  },
];

export const projects = [
  {
    name: "LendeXe Finance",
    desc: "Web3 DeFi Lending Protocol on the IOTA Ecosystem.",
    link: "https://lendexe.fi/",
  },
  {
    name: "Statement Clo.",
    desc: "Implementing a full revamp of a clothing brand shop in Shopify, including custom liquid codes and adjusting the theme.",
    link: "https://statement-clo.de/",
  },
  {
    name: "OdinBoost | Game Service Shop",
    desc: "Fully individualized Webshop based on Vuejs, Expressjs and MongoDB. SEO Score of 90% on Seobility.",
    link: "https://odinboost.com/",
  },
  {
    name: "Mega Elo Boost | Game Service Shop",
    desc: "Fully individualized Webshop based on Vuejs, Expressjs and MongoDB. SEO Score of 92% on Seobility.",
    link: "https://megaeloboost.com/",
  },
  {
    name: "Moria Elo Boost | Game Service Shop",
    desc: "Fully individualized Webshop based on Vuejs, Expressjs and MongoDB. SEO Score of 89% on Seobility.",
    link: "https://moriaeloboost.com/",
  },
];

export const feedbacks = [
  {
    name: "OdinBoost, Inc. - CEO",
    feedback:
      "It's always a pleasure to work with Tarik, he's been working with me for a couple of years now, taking all the time he can to respond to the customer's requests, doing it as quickly and with the highest standards of quality as possible. Thank you from the bottom of my heart, Tarik.",
  },
  {
    name: "MegaEloBoost - CEO",
    feedback:
      "Thanks to Tarik, our website has become even better than we imagined. With his work, he completely renewed our site, created it from scratch and gave us an incredible increase in traffic. Now our site has high SEO scores and is at the top of organic search results, we would like to thank Tarik for all this devoted work.",
  },
  {
    name: "MoriaEloBoost - CEO",
    feedback:
      "We have been working with Tarik since May 2020. What we have noticed from the very first day of our cooperation is that he is a very professional and hardworking person. In these 2 years, he has quickly solved every problem we have encountered and has been able to keep us happy at all times. We are incredibly pleased to have worked with Tarik, who is the best in his field.",
  },
];
