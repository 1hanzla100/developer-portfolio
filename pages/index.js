import Head from "next/head";
import dynamic from "next/dynamic";

const Navigation = dynamic(() => import("../components/Navigation"));
const Greetings = dynamic(() => import("../containers/Greetings"));
const Skills = dynamic(() => import("../containers/Skills"));
const Proficiency = dynamic(() => import("../containers/Proficiency"));
const Education = dynamic(() => import("../containers/Education"));
const Experience = dynamic(() => import("../containers/Experience"));
const Projects = dynamic(() => import("../containers/Projects"));
const Feedbacks = dynamic(() => import("../containers/Feedbacks"));
const GithubProfileCard = dynamic(() =>
	import("../components/GithubProfileCard")
);
import { openSource } from "../portfolio";

export default function Home({ githubProfileData }) {
	return (
		<div>
			<Head>
				<title>Hanzla Tauqeer</title>
				<meta name="title" content="Hanzla's Portfolio" />
				<meta name="author" content="Hanzla" />
				<meta
					name="description"
					content="A passionate Full Stack Web Developer and Mobile App Developer."
				/>
				<meta
					name="keywords"
					content="Hanzla, Hanzla Tauqeer, @1hanzla100, 1hanzla100, Portfolio, Hanzla Portfolio , Hanzla Tauqeer Portfolio, web developer, full stack, full stack web developer, mobile app developer, android developer, django, flask, django rest framework, nodejs , expressjs, reactjs , contextapi, redux, flutter"
				/>
				<link rel="canonical" href="https://hanzla.netlify.app" />
				{/* Open Graph / Facebook */}
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://hanzla.netlify.app" />
				<meta property="og:title" content="Hanzla's Portfolio" />
				<meta
					property="og:description"
					content="A passionate Full Stack Web Developer and Mobile App Developer."
				/>
				<meta
					property="og:image"
					content="https://avatars3.githubusercontent.com/u/59178380?v=4"
				/>
				<meta property="og:site_name" content="Hanzla's Portfolio" />
				{/* Twitter */}
				<meta property="twitter:card" content="summary_large_image" />
				<meta
					property="twitter:url"
					content="https://hanzla.netlify.app"
				/>
				<meta property="twitter:title" content="Hanzla's Portfolio" />
				<meta
					property="twitter:description"
					content="A passionate Full Stack Web Developer and Mobile App Developer."
				/>
				<meta
					property="twitter:image"
					content="https://avatars3.githubusercontent.com/u/59178380?v=4"
				/>
				<link rel="manifest" href="/manifest.json" />
				{/* Favicon */}
				<link
					rel="apple-touch-icon"
					sizes="120x120"
					href="./favicon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="./favicon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="./favicon.png"
				/>
				<script
					async
					src="https://code.iconify.design/1/1.0.4/iconify.min.js"
				></script>
			</Head>
			<Navigation />
			<Greetings />
			<Skills />
			<Proficiency />
			<Education />
			<Experience />
			<Feedbacks />
			<Projects />
			<GithubProfileCard prof={githubProfileData} />
		</div>
	);
}

export async function getStaticProps(context) {
	const githubProfileData = await fetch(
		`https://api.github.com/users/${openSource.githubUserName}`
	).then((res) => res.json());

	return {
		props: { githubProfileData },
	};
}
