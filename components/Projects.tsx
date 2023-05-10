import { motion } from "framer-motion";
import React from "react";
import { Skill } from "./Skill";
import { Projects as ProjectsType } from "../typinga";
import { urlFor } from "../sanity";

type Props = { projects: ProjectsType[] };

export const Projects = ({ projects }: Props) => {
  //const projects = [1, 2, 3, 4];
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      className="h-screen
  flex relative flex-col text-center md:text-left xl:flex-row
  max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0
  mx-auto items-center
  
  "
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-2xl">
        Projects
      </h3>
      {/* <h3 className="top-36 uppercase absolute tracking-[3px] text-sm">
        Proficiency
      </h3> */}

      <div
        className="w-full flex overflow-x-scroll overflow-y-hidden relative
      snap-x snap-mandatory z-20
      scrollbar scrollbar-track-gray-500/20 scrollbar-thumb-gray-500/20
      "
      >
        {projects.map((project) => {
          return (
            <div
              key={project._id}
              className="w-screen flex-shrink-0 snap-center
             flex items-center flex-col space-y-5 justify-center p-22
             md:p-44 h-screen"
            >
              <motion.img
                initial={{
                  opacity: 0,
                  y: -200,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.5,
                }}
                className="h-48 w-48"
                alt="d"
                src={urlFor(project.Image).url()}
              />
              <div className="space-y-10 md:px-10 max-w-6xl">
                <h4 className="text-4xl font-semibold text-center">
                  {project.title}
                </h4>
                <p className="text-lg text-center md:text-left">
                  {project.summery}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div
        className="w-full bg-yellow-100/10 absolute top-[30%]
      h-[500px] left-0 -skew-y-12 
      "
      ></div>
    </motion.div>
  );
};
