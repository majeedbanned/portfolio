import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { PageInfo } from "../typinga";
import { urlFor } from "../sanity";

type Props = { pageInfo: PageInfo };

export const About = ({ pageInfo }: Props) => {
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
      viewport={{
        once: true,
      }}
      className="flex mx-auto px-10 max-w-7xl items-center justify-evenly flex-col relative text-center md:flex-row md:text-left h-screen"
    >
      <h3 className="absolute top-24 tracking-[20px] text-gray-300 text-2xl uppercase">
        About
      </h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1.2,
        }}
        viewport={{
          once: true,
        }}
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full
        object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[400px] xl:h-[400px]
        "
        alt="Majid Ghasemi"
        src={urlFor(pageInfo.profilePic).url()}
        width="500"
        height="500"
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4
          className="text-4xl font-semi
        "
        >
          Background
        </h4>
        <p className="text-base">{pageInfo?.bkInformation}</p>
      </div>
    </motion.div>
  );
};
