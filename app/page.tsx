import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Services from "@/sections/Services";
import Projects from "@/sections/Projects";
import Skills from "@/sections/Skills";
import Achievements from "@/sections/Achievements";
import Testimonials from "@/sections/Testimonials";
import Contact from "@/sections/Contact";
import BackgroundEffects from "@/sections/BackgroundEffects";
import CursorTrail from "@/components/CursorTrail";

export default function Home() {
  return (
    <main className="relative bg-black text-white overflow-x-hidden scroll-smooth">
      <BackgroundEffects />
      <CursorTrail />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Skills />
      <Achievements />
      <Testimonials />
      <Contact />
    </main>
  );
}
