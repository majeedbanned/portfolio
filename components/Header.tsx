import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";
import { Socials } from "../typinga";
type Props = {
  socials: Socials[];
};

const Header = ({ socials }: Props) => {
  // console.log("ss");
  return (
    <header className="sticky xl:items-center p-5 top-2 z-20 mx-auto flex items-start justify-between max-w-7xl">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 2,
        }}
        className="flex flex-row items-center"
      >
        {socials.map((social) => {
          return (
            <SocialIcon
              key={social?._id}
              fgColor="gray"
              bgColor="transparent"
              url={social?.url}
            />
          );
        })}
      </motion.div>
      <Link href="#contact">
        <motion.div
          initial={{
            y: -200,
            scale: 0,
            opacity: 0,
          }}
          animate={{
            y: 0,
            scale: 1,
            opacity: 1,
          }}
          transition={{
            duration: 1.5,
          }}
          className="flex flex-row items-center cursor-pointer"
        >
          <SocialIcon
            className="cursor-pointer"
            network="email"
            fgColor="gray"
            bgColor="transparent"
          ></SocialIcon>
          <p className="uppercase  text-gray-400 hidden  md:inline-flex text-sm ">
            contact me
          </p>
        </motion.div>
      </Link>
    </header>
  );
};
export default Header;
