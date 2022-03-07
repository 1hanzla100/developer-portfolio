import dynamic from "next/dynamic";
import PropTypes from "prop-types";
const Navigation = dynamic(() => import("../components/Navigation"));
const ImprintContent = dynamic(() => import("../containers/ImprintContent"));

const GithubProfileCard = dynamic(() =>
    import("../components/GithubProfileCard")
);
import { openSource } from "../portfolio";
import SEO from "../components/SEO";

export default function Imprint({ githubProfileData }) {
    return (
        <div>
            <SEO
                data={{
                    title: 'Tarik "Fujin" Ermis | Full Stack Developer',
                    description:
                        "A passionate Full Stack Web Developer, Mobile App Developer and Blockchain Developer.",
                    image: "https://avatars.githubusercontent.com/u/31302793?v=4",
                    url: "https://fujin-solutions.com",
                    keywords: [
                        "Tarik",
                        "Tarik Ermis",
                        "@fujin74",
                        "fujin74",
                        "fujin",
                        "Portfolio",
                        "Tarik Portfolio ",
                        "Tarik Ermis Portfolio",
                        "web developer",
                        "full stack",
                        "full stack web developer",
                        "mobile app developer",
                        "android developer",
                        "blockchain developer",
                        "nuxt",
                        "vue.js",
                        "nodejs",
                        "expressjs",
                        "reactjs ",
                        "webshop",
                        "redux",
                        "react-native",
                    ],
                }}
            />
            <Navigation />
            <ImprintContent />
            <GithubProfileCard prof={githubProfileData} />
        </div>
    );
}

Imprint.prototype = {
    githubProfileData: PropTypes.object.isRequired,
};

export async function getStaticProps(_) {
    const githubProfileData = await fetch(
        `https://api.github.com/users/${openSource.githubUserName}`
    ).then((res) => res.json());

    return {
        props: { githubProfileData },
    };
}
