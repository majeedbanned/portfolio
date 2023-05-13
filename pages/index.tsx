import type { GetStaticProps, GetServerSideProps, NextPage } from "next";
import Head from "next/head";

import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { WorkExpreince } from "../components/WorkExpreince";
import { Skills } from "../components/Skills";
import { Projects } from "../components/Projects";
import { Contact } from "../components/Contact";
import Link from "next/link";

import {
  Skill,
  PageInfo,
  Experience,
  Projects as ProjectType,
  Socials,
} from "../typinga";
import { fetchPageInfo } from "../utils/fetchPageInfo";
import { fetchExperiences } from "../utils/fetchExprience";
import { fetchProjects } from "../utils/fetchProjects";
import { fetchSkills } from "../utils/fetchSkills";
import { fetchSocials } from "../utils/fetchSocials";

type Props = {
  pageInfo: PageInfo;
  expriences: Experience[];
  skills: Skill[];
  projects: ProjectType[];
  socials: Socials[];
};
//
const Home = ({ pageInfo, projects, expriences, skills, socials }: Props) => {
  // return (
  //   <div className="text-3xl text-red-500 font-bold animate-pulse">
  //     Hello world!a
  //   </div>
  // );
  return (
    <div
      className=" z-0 snap-y snap-mandatory overflow-y-scroll overflow-x-hidden
        bg-[rgb(36,36,36)] text-white h-screen
        scrollbar scrollbar-track-gray-500/20 scrollbar-thumb-gray-500/20
        "
    >
      <Head>
        <title></title>
      </Head>

      {/* <Header socials={socials} /> */}
      <section id="hero" className="snap-start">
        <Hero pageInfo={pageInfo} />
      </section>
      {/* Aboout */}
      <section id="about" className="snap-center">
        <About pageInfo={pageInfo} />
      </section>
      {/* exprience */}
      <section id="exprience" className="snap-center">
        <WorkExpreince expriences={expriences} />
      </section>
      {/* skils */}
      <section id="skills" className="snap-start">
        <Skills skills={skills} />
      </section>
      {/* Project */}
      <section id="projects" className="snap-start">
        <Projects projects={projects} />
      </section>

      {/* contact me */}

      <section id="contact" className="snap-start">
        <Contact />
      </section>

      <Link href="#hero">
        <footer
          className="sticky bottom-5 w-full cursor-pointer
      "
        >
          <div className="flex items-center justify-center">Top</div>
        </footer>
      </Link>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const expriences: Experience[] = await fetchExperiences();
  const projects: ProjectType[] = await fetchProjects();
  const skills: Skill[] = await fetchSkills();
  const socials: Socials[] = await fetchSocials();

  return {
    props: {
      pageInfo,
      expriences,
      projects,
      skills,
      socials,
    },
    revalidate: 10,
  };
};
//export const revalidate = 10;
