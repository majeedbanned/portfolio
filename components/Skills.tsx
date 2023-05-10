import { motion } from "framer-motion";
import React from "react";
import { Skill } from "./Skill";
import { Skill as SkillType } from "../typinga";

type Props = { skills: SkillType[] };

export const Skills = ({ skills }: Props) => {
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
  bg-yellow-500
  "
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-2xl">
        Skills
      </h3>
      <h3 className="top-36 uppercase absolute tracking-[3px] text-sm">
        Proficiency
      </h3>

      <div className="grid grid-cols-4 gap-5">
        {skills.map((skill) => (
          <Skill skill={skill} key={skill._id} />
        ))}

        {/* <Skill title="Javascript" />
        <Skill title="Javascript" />
        <Skill title="Javascript" />
        <Skill title="Javascript" />
        <Skill title="Javascript" />
        <Skill title="Javascript" />
        <Skill title="Javascript" /> */}
        {/* <Skill title="Javascript" directionLeft />
        <Skill title="Javascript" directionLeft />
        <Skill title="Javascript" directionLeft />
        <Skill title="Javascript" directionLeft />
        <Skill title="Javascript" directionLeft />
        <Skill title="Javascript" directionLeft /> */}
      </div>
    </motion.div>
  );
};
