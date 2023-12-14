import dynamic from 'next/dynamic';
const Navigation = dynamic(() => import('../components/Navigation'));
const Greetings = dynamic(() => import('../containers/Greetings'));
const Skills = dynamic(() => import('../containers/Skills'));
const Proficiency = dynamic(() => import('../containers/Proficiency'));
const Education = dynamic(() => import('../containers/Education'));
const GithubProfileCard = dynamic(
  () => import('../components/GithubProfileCard')
);
const Certificate = dynamic(()=> import ('../containers/Certificate'))
import { openSource, showContactUs } from '../portfolio';
import SEO from '../components/SEO';
import Contact from '../components/ContactUs';
import { GithubUserType } from '../types';

export default function Home({
  githubProfileData,
}: {
  githubProfileData: any;
}) {
  return (
    <div>
      <SEO />
      <Navigation />
      <Greetings />
      <Skills />
      <Proficiency />
      <Education />
      <Certificate/>
      {showContactUs ? <Contact /> : null}
      <GithubProfileCard {...githubProfileData} />
    </div>
  );
}

// Home.prototype = {
//   githubProfileData: PropTypes.object.isRequired,
// };

export async function getStaticProps() {
  const githubProfileData: GithubUserType = await fetch(
    `https://api.github.com/users/${openSource.githubUserName}`
  ).then((res) => res.json());

  return {
    props: { githubProfileData },
  };
}
