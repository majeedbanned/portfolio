import { motion } from "framer-motion";
import React from "react";
import ExprienceCard from "./ExprienceCard";
import { Experience } from "../typinga";

type Props = { expriences: Experience[] };

export const WorkExpreince = ({ expriences }: Props) => {
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
      className="flex mx-auto px-10 max-w-7xl items-center justify-evenly flex-col relative text-center md:flex-row md:text-left h-screen"
    >
      <h3 className="absolute top-24 tracking-[20px] text-gray-300 text-2xl uppercase">
        Exprience
      </h3>

      <div
        className="flex w-full space-x-5 overflow-x-scroll
      p-10 opacity-40 hover:opacity-100 transition-opacity
      snap-x snap-mandatory duration-200 cursor-pointer overflow-hidden
      scrollbar scrollbar-track-gray-500/20 scrollbar-thumb-gray-500
      "
      >
        {expriences?.map((exprience) => {
          return <ExprienceCard key={exprience._id} exprience={exprience} />;
        })}
      </div>
    </motion.div>
  );
};
