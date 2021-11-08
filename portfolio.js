import emoji from "react-easy-emoji";

export const greetings = {
	name: "Kharharee Lane",
	title: "Hello Everyone, I'm Kharharee",
	description:
		"A passionate Full Stack Web Developer having an experience of building Web applications with JavaScript / Reactjs / Nodejs / Python / Django and some other cool libraries and frameworks.",
	resumeLink: "https://drive.google.com/file/d/1eVQB3zQIcp-cpPX6YZLZ7UgDZ-HTNmkO/view?usp=sharing",
};

export const openSource = {
	githubUserName: "kharharee",
};

export const contact = {};

export const socialLinks = {

	github: "https://github.com/kharharee",
	linkedin: "https://www.linkedin.com/in/kharharee-lane-05113a184/",
};

export const skillsSection = {
	title: "What I do",
	subTitle:
		"FRESH FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
	skills: [
		emoji(
			"⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
		),
		emoji(
			"⚡ Becoming more proficient in Back End Development"
		),
		emoji(
			"⚡ Maintaining a consistent learning flow of new DEV tools"
		),
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
			skillName: "nodejs",
			fontAwesomeClassname: "logos:nodejs-icon",
		},
		{
			skillName: "flutter",
			fontAwesomeClassname: "logos:flutter",
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
	],
};

export const SkillBars = [
	{
		Stack: "Frontend/Design", //Insert stack or technology you have experience in
		progressPercentage: "90", //Insert relative proficiency in percentage
	},
	{
		Stack: "Backend",
		progressPercentage: "80",
	},
	{
		Stack: "Programming",
		progressPercentage: "60",
	},
];

export const educationInfo = [
	{
		schoolName: "DigitalCrafts - Atlanta",
		subHeader: "Full Stack Development Course",
		duration: "July 2021 - October 2021",
		desc: "A full tech program dedicated to Web Development",
		
	},
	{
		schoolName: "Strayer University",
		subHeader: "Bachelor of Science in Computer Science",
		duration: "August 2019",
		desc: "Currently attending",
		
	},
];

export const projects = [
	{
		name: "RECIPEDIA",
		desc: "Member of a 5-person team building a recipe app that allows users to search for recipes based on meal type, diet, ingredient, and cuisines.Responsibilities included building JavaScript functionality to get recipe information from Spoonacular API, site design, and task management. Built with using HTML, CSS, JavaScript, Google API, Spoonacular API, Bootstrap",
		link: "https://recipedia.one/",
	},
	{
		name: "Movie Scoop",
		desc: "Member of a 4-person Software Engineering team that built an amazing movie review application that allows the users and guest to search for their favorite film and participate with review posting.Responsibilities included time management, site design, and API implementation. Built with CSS Sass, JavaScript, Node.js, Express, Mustache HTML: Templates, and IMDB API",
		link: "https://movie-scoop-01284.herokuapp.com/",
	},
	{
		name: "eVentures",		
		desc: "Member of a 5-person team building an activity based app that allows users to search for Activites (even with a twist!) based on participants, type, duration , price, and location. Responsibilities included building client/server js, created our own database, site design, and task management. Built with using HTML, CSS, JavaScript, Beekeeper, Bootstrap",
		link: "https://eventurefun.surge.sh/",
	},
];

export const feedbacks = [
	{
		name: "Oprah Winfrey",
		feedback:
			"We have been very happy with our new website! It looks professional and very easy to navigate. Our experience with the customer service with Kharharee LAne has been great. He handle things very efficiently and are available for any questions we have. They also keep us updated on daily reports so we know how our site is doing. I would recommend that u have choose hanzla web developer services for u.",
	},
	{
		name: "Jackie Aina",
		feedback:
			"The website is very nice, everything was perfectly made as I need. It just loads in moments, without giving you the chance to wait. the quality is also very amazing. I am using it without any problem. Great job",
	},
];
