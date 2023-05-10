import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import { Skill as SkillType } from "../typinga";
import { urlFor } from "../sanity";

type Props = {
  directionLeft: boolean | undefined;
  // title: string;
  skill: SkillType;
};

export const Skill = ({ directionLeft, skill }: Props) => {
  return (
    <div className="group relative flex cursor-pointer top-10">
      <motion.div
        //   className="filter group-hover:grayscale-0"
        initial={{
          opacity: 0,
          x: directionLeft ? -200 : 200,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 1,
        }}
      >
        <Image
          alt="javascript"
          src={urlFor(skill?.Image).url()}
          className=" rounded-full object-cover border w-20 h-20 xl:w-24 xl:h-24  transition
          ease-in-out filter group-hover:grayscale
          "
          width="80"
          height="80"
        />
        <p className="text-gray-600 text-center mt-2">{skill.title}</p>
      </motion.div>
    </div>
  );
};
