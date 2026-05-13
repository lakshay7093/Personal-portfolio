"use client";

import dynamic from "next/dynamic";

const About = dynamic(() => import("@/sections/About"));
const Services = dynamic(() => import("@/sections/Services"));
const Projects = dynamic(() => import("@/sections/Projects"));
const Skills = dynamic(() => import("@/sections/Skills"));
const Achievements = dynamic(() => import("@/sections/Achievements"));
const Testimonials = dynamic(() => import("@/sections/Testimonials"));
const Contact = dynamic(() => import("@/sections/Contact"));

export default function LazyHomeSections() {
  return (
    <>
      <About />
      <Services />
      <Projects />
      <Skills />
      <Achievements />
      <Testimonials />
      <Contact />
    </>
  );
}
