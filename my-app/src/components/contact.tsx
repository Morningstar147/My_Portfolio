"use client"

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion"
import { useSectionInView } from "@/lib/useInView";
import SubmitBtn from "./submit-btn";

import { Fade } from "react-awesome-reveal";


export default function Contact() {
  const { ref } = useSectionInView("#contact");

  return (
    <motion.section
    ref={ref}
    id="contact"
    >
      <Fade direction="up" delay={400} cascade damping={1e-1} triggerOnce={true}>
        <SectionHeading>
          {"Contact Me"}
        </SectionHeading>
      </Fade>

      <Fade direction="up" delay={600} cascade damping={1e-1}>
        <p className="text-gray-700 -mt-6 dark:text-white/80">
          {"Feel free to contact me directly through this form"}
        </p>
      </Fade>

      <Fade direction="up" delay={800} cascade damping={1e-1}>
        <form className="mt-10 flex flex-col dark:text-black">
        <input
        className="h-14 px-4 rounded-lg borded-lg borderBlack dark:bg-white dark:bg-orange-50"
        type="email" 
        required
        maxLength={500}
        placeholder={"Your Email"}
        />
        <textarea
        className="h-52 my-3 rounded-lg resize-none borderBlack p-4 dark:bg-white"
        name="message"
        placeholder={"Your email"}
        required
        maxLength={5000}
        />
        <SubmitBtn text={"Submit"}/>
        </form>
      </Fade>
      

    </motion.section>
  )
}