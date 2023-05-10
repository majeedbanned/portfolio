import React from "react";
import { Typewriter, useTypewriter, Cursor } from "react-simple-typewriter";
import { BCircles } from "./BCircles";
import Image from "next/image";
import Link from "next/link";
import { PageInfo } from "../typinga";
type Props = {
  pageInfo: PageInfo;
};

export const Hero = ({ pageInfo }: Props) => {
  const [text, count] = useTypewriter({
    words: [pageInfo.name, "Full stack  web Developer", "Mobile Developer"],
    loop: true,
    delaySpeed: 200,
  });
  //console.log(pageInfo);
  return (
    <div className="h-screen flex flex-col justify-center items-center space-y-8 text-center overflow-hidden">
      <BCircles />

      <Image
        className="reltive mx-auto object-cover rounded-full h-32 w-32"
        alt="Majid Ghasemi"
        src="/images/avatar.jpeg"
        width="100"
        height="100"
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 tracking-[15px]">
          Software Developer
        </h2>
        <h1>
          <span className="text-5xl px-10 lg:text-6xl font-semibold">
            {text}
          </span>
          <Cursor cursorColor="red" />
        </h1>

        <div className="pt-5 ">
          <Link href="#exprience">
            <button className="herocls"> Experience</button>
          </Link>
          <Link href="#about">
            <button className="herocls">About</button>
          </Link>
          <Link href="#skills">
            <button className="herocls">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="herocls">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
