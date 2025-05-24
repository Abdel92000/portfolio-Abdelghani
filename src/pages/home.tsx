import Projects from '../component/home/project'
import Hero from '../component/home/Hero'
import Contact from '../component/home/Contact'
import Skills from '../component/home/Skillss'
import { Helmet } from 'react-helmet';
import Faq from '../component/home/Faq';
import Marquee from '../component/home/Marquee';
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
  <meta property="og:image" content="https://www.abdelghani-dev.fr/imgdeveloppeur.jpg" />
  <link rel="canonical" href="https://www.abdelghani-dev.fr/" />

 <script type="application/ld+json">
    {`
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Quelles technologies utilises-tu pour développer un site web ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "J’utilise React, TypeScript, Node.js, MongoDB, GitHub Actions, CI/CD..."
          }
        },
        {
          "@type": "Question",
          "name": "Est-ce que tu es disponible pour une alternance à Paris ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Oui, je suis dispo dès septembre 2025 pour une alternance dans le cadre de ma formation CDA DevOps."
          }
        },
        {
          "@type": "Question",
          "name": "Proposes-tu des sites pour des freelances ou des PME ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Oui, je conçois des sites modernes et optimisés pour freelances, PME ou artisans."
          }
        },
        {
          "@type": "Question",
          "name": "Comment te contacter pour un projet web ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Vous pouvez me contacter via le formulaire du site ou par email à abdelghani.rahal123@gmail.com."
          }
        }
      ]
    }
    `}
  </script>

 <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Rahal Abdelghani",
              "jobTitle": "Développeur Web Fullstack",
              "url": "https://www.abdelghani-dev.fr/",
              "image": "https://www.abdelghani-dev.fr/imgdeveloppeur.jpg",
              "sameAs": [
                "https://www.linkedin.com/in/abdelghani-dev",
                "https://github.com/Abdel92000"
              ],
              "description": "Développeur web fullstack à Paris, spécialisé en React, Node.js, TypeScript, UX/UI. Disponible pour une alternance dès septembre 2025 dans le cadre d'une formation CDA DevOps.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Paris",
                "addressCountry": "FR"
              },
              "knowsAbout": [
                "React",
                "Node.js",
                "TypeScript",
                "MongoDB",
                "MySQL",
                "CI/CD",
                "UX/UI",
                "Docker",
                "Next.js"
              ]
            }
          `}
        </script>

   <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Rahal Abdelghani – Développeur Web Fullstack",
        "url": "https://www.abdelghani-dev.fr",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://www.abdelghani-dev.fr/?s={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      }
    `}
  </script>
</Helmet>
<Marquee/>
  <Hero/>
  <Projects/>
  <Skills/>
  <Contact/>
  <Faq/>

  </>
}

export default Home