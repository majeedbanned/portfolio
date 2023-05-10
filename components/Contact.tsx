import { motion } from "framer-motion";
import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Props = {};

type FormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};
export const Contact = (props: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data);

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
        Contact Me
      </h3>
      <div className=" flex flex-col space-y-10">
        <h4 className="text-4xl text-center font-semibold">Lets Talk</h4>

        <div className="space-y-2">
          <div className="flex  space-x-5 items-center">
            <PhoneIcon className="w-7 h-7 animate-pulse" />
            <p>+989177204118</p>
          </div>

          <div className="flex space-x-5 items-center">
            <EnvelopeIcon className="w-7 h-7 animate-pulse" />
            <p>majeed.ghasemi@gmail.comœ</p>
          </div>

          <div className="flex space-x-5 items-center">
            <MapPinIcon className="w-7 h-7 animate-pulse" />
            <p>+989177204118</p>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            action=""
            className="flex flex-col space-y-2 w-full mx-auto  "
          >
            <div className=" flex space-x-2">
              <input
                placeholder="Name"
                {...register("name")}
                className="contactsInput"
                type="text"
              />
              <input
                {...register("email")}
                placeholder="Email"
                className="contactsInput"
                type="text"
              />
            </div>
            <input
              {...register("subject")}
              placeholder="Subject"
              className="contactsInput"
              type="text"
            />
            <textarea
              {...register("message")}
              placeholder="Message"
              className="contactsInput"
            ></textarea>
            <button
              type="submit"
              className="bg-yellow-600 rounded-sm p-3 font-semibold text-lg"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  );
};
