import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { Experience } from "../typinga";
import { urlFor } from "../sanity";

type Props = { exprience: Experience };

export default function ExprienceCard({ exprience }: Props) {
  return (
    <article
      className="flex flex-col rounded-lg  items-center space-y-7 flex-shrink-0
    w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10
    "
    >
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1.2,
        }}
        viewport={{
          once: true,
        }}
        className="object-center  w-32 h-32 rounded-full
        object-cover md:rounded-lg md:w-64 md:h-64 xl:w-[200px] xl:h-[200px]
        "
        alt="Majid Ghasemi"
        src="/images/avatar.jpeg"
        width="500"
        height="500"
      />

      <div className="px-0 md:mx-10 text-left">
        <h4 className="text-4xl font-light"> {exprience?.jobTitle}</h4>
        <p className="font-bold text-2xl">{exprience?.company}</p>
        <div className="pt-2 flex flex-row">
          {exprience?.technologies.map((technology) => (
            <Image
              key={technology._id}
              alt="javascript"
              src={urlFor(technology.Image).url()}
              className=" w-12 h-12 object-cover"
              width="80"
              height="50"
            />
          ))}
        </div>
        <p className="py-2 text-gray-500">
          {new Date(exprience.dateStarted).toDateString()} -{" "}
          {exprience.isCurrentlyWorking
            ? "Present"
            : new Date(exprience.dateStarted).toDateString()}
        </p>
        <div>
          <ul className="h-96 overflow-y-scroll list-disc space-y-4 ml-5 text-lg">
            {exprience.points.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}
