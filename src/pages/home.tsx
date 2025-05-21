import Projects from '../component/home/project'
import Hero from '../component/home/Hero'
import Contact from '../component/home/Contact'
import Skills from '../component/home/Skillss'
import { Helmet } from 'react-helmet';

const Home = () =>{

  return <>

   <Helmet>
  <title>Développeur Web Fullstack | React, TypeScript, Node.js, Paris - Rahal Abdelghani</title>

  <meta
    name="description"
    content="Développeur web fullstack freelance à Paris. Création de sites web et d'applications performantes avec React, TypeScript, Node.js, MongoDB, SQL et Docker. Spécialiste UX/UI."
  />
  <meta
    name="keywords"
    content="Développeur web Paris, freelance React Paris, TypeScript, Node.js, UX/UI, MongoDB, SQL, Docker, création site vitrine, application web Paris, développeur fullstack, site responsive, Next.js, développeur web freelance"
  />

  <meta property="og:title" content="Développeur Web Fullstack Freelance à Paris - Rahal Abdelghani" />
  <meta
    property="og:description"
    content="Freelance en développement web à Paris. Sites modernes, applications performantes en React, TypeScript, Node.js. UX/UI Design inclus."
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://www.abdelghani-dev.fr/" />
  <meta property="og:image" content="https://www.abdelghani-dev.fr/logo512.png" />
</Helmet>

  <Hero/>
  <Projects/>
  <Skills/>
  <Contact/>
  </>
}

export default Home