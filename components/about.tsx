"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Currently pursuing a degree in {" "}
        <span className="font-medium">CSE </span>, I decided to pursue my
        passion for programming and development. I enrolled in a a lot of coding courses including machine and dee learning and {" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect which causes challenges to the mind. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Tensorflow and App development(flutter)
        </span>
        . I am also familiar with Tailwind CSS and  Node.js. I am always looking forward to
        learn new development strategies for the websites. I am currently looking for {" "}
        <span className="font-medium">internship</span> as a software
        developer/web developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and playing badminton. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">greek mythologies as they fascinate me a lot</span>. I'm also
        learning how to play the guitar (ps: not too good at it though 🥲).
      </p>
    </motion.section>
  );
}
