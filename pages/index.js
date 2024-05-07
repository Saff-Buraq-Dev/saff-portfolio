import dynamic from "next/dynamic";
import Head from "next/head";
import About from "../src/components/About";
import Blog from "../src/components/Blog";
import Contact from "../src/components/Contact";
import Home from "../src/components/Home";
import Resume from "../src/components/Resume";
import AboutMe from "../src/components/sections/AboutMe";
import BlogSection from "../src/components/sections/Blog";
import Clients from "../src/components/sections/Clients";
import ContactForm from "../src/components/sections/ContactForm";
import ContactInfo from "../src/components/sections/ContactInfo";
import FunFact from "../src/components/sections/FunFact";
import Quote from "../src/components/sections/Quote";
import ResumeSection from "../src/components/sections/Resume";
import Services from "../src/components/sections/Services";
import Skills from "../src/components/sections/Skills";
import TypingAnimation from "../src/components/TypingAnimation";
import Work from "../src/components/Work";
import ContentContainer from "../src/layout/ContentContainer";
import Header from "../src/layout/Header";
import Layout from "../src/layout/Layout";
const RecentWorks = dynamic(
  () => import("../src/components/sections/RecentWorks"),
  {
    ssr: false,
  }
);

const bio = `<p>
<strong>Hello! I’m Safouene Gharbi.</strong>
Aspiring Cloud Developer with a demonstrated history of designing and deploying dynamically scalable, highly available, fault-tolerant, and reliable full-stack applications on AWS. Proficient in Docker containers, DevOps practices, Java, Python, Typescript, Software as a Service (SaaS), Microservices, and CI/CD pipelines.
</p>`;

const services = [
  {
    icon: "fa fa-html5",
    title: "Front-end",
    desc: "Crafting responsive and intuitive user interfaces using the latest front-end technologies to enhance user engagement.",
  },
  {
    icon: "fa fa-code",
    title: "Back-End",
    desc: "Developing robust server-side logic and APIs using modern technologies to power seamless user experiences.",
  },
  {
    icon: "fa fa-cloud",
    title: "Cloud",
    desc: "Architecting and managing scalable cloud solutions across major providers, optimizing for performance and cost.",
  },
  {
    icon: "fa fa-server",
    title: "DevOps",
    desc: "Automating and streamlining operations and development workflows to enhance productivity and ensure continuous deployment.",
  },
];

const animationText = [
  "Cloud Developer",
  "DevOps Engineer",
  "Full Stack Developer",
];

const Index3 = () => {
  return (
    <Layout bg={"gradient"}>
      <Head>
        <link rel="stylesheet" href="css/new-skin/new-skin.css" />
        <link rel="stylesheet" href="css/demos/demo-3-colors.css" />
        <link rel="stylesheet" href="css/new-skin/classic-skin.css" />
      </Head>
      <Header noSideBarBtn animationText={animationText} />
      <Home>
        <div className="profile no-photo">
          {/* profile image */}
          <div
            className="slide"
            style={{ backgroundImage: "url(images/dev.webp)" }}
          />
          {/* profile titles */}
          <div className="title">Safouene Gharbi</div>

          <TypingAnimation data={animationText} />
          {/* profile socials */}
          <div className="social">
            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/safouene-gharbi/">
              <span className="fa fa-linkedin" />
            </a>
            <a target="_blank" rel="noreferrer" href="https://github.com/Saff-Buraq-Dev">
              <span className="fa fa-github" />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://stackoverflow.com/users/14980057/saff-gh"
            >
              <span className="fa fa-stack-overflow" />
            </a>
          </div>
          {/* profile buttons */}
          <div className="lnks">
            <a href="saff-en.pdf" className="lnk" download>
              <span className="text">Download CV</span>
              <span className="ion ion-android-download" />
            </a>
          </div>
        </div>
      </Home>
      <ContentContainer>
        <About>
          <AboutMe bio={bio} />
          <Services serviceList={services} />
          <Clients />
          <FunFact />
        </About>
        <Resume>
          <ResumeSection />
          <Skills />
          <Quote />
        </Resume>
        <Work>
          <RecentWorks />
        </Work>
        {/*
        <Blog>
          <BlogSection />
        </Blog>
        */}
        <Contact>
          <ContactInfo />
          <ContactForm />
        </Contact>
      </ContentContainer>
    </Layout>
  );
};
export default Index3;
