import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import timetable from "@/public/timetable.png";
import smart from "@/public/smart_city.png";
import face_recognition from "@/public/face_recognition.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Highschool",
    location: "Dehradun",
    description:
      "I graduated with 98.2% in highschool.",
    icon: React.createElement(LuGraduationCap),
    date: "    2019",
  },
  {
    title: "Interschool",
    location: "Dehradun",
    description:
      "I graduated with 87.6% in 12th grade",
    icon: React.createElement(LuGraduationCap),
    date: "   2021",
  },
  {
    title: "College",
    location: "VIT, Vellore",
    description:
      "I am a CSE Student in VIT with data science as specialization.     ",
    icon: React.createElement(LuGraduationCap),
    date: "   2022 - 2026",
  },
  
] as const;

export const projectsData = [
  {
    title: "Timetable Maker",
    description:
      "I worked on it during my past time to make it so that the college students can easily make a offline timetable sharable to others.",
    tags: ["React", "Javascript", "AWS Cognito", "AWS Lambda"],
    imageUrl: timetable,
  },
  {
    title: "Smart City",
    description:
      "Designed a solution to monitor and analyze CO₂ emissions from vehicles and Air Quality Index (AQI) of cities based on historical data, employing machine learning models to predict environmental trends.",
    tags: ["React", "TypeScript", "Machine learning", "Splicer"],
    imageUrl: smart,
  },
  {
    title: "face recognition",
    description:
      "Built a smalll app that can recognize faces with the given image.",
    tags: ["Python"],
    imageUrl: face_recognition,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Python",
  "Machine learning",
  "Flutter",
  "AWS",
  "Framer Motion",
  "Pytorch",
  "Dart",
] as const;
