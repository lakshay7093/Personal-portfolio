import Projects from "@/sections/Projects";
import BackgroundEffects from "@/sections/BackgroundEffects";

export const metadata = {
  title: "Projects — Lakshay Saini",
  description: "Explore production-ready projects built by Lakshay Saini.",
};

export default function ProjectsPage() {
  return (
    <main className="bg-black text-white overflow-hidden pt-24">
      <BackgroundEffects />
      <Projects />
    </main>
  );
}
