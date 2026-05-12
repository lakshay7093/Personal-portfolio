import Skills from "@/sections/Skills";
import BackgroundEffects from "@/sections/BackgroundEffects";

export const metadata = {
  title: "Skills — Lakshay Saini",
  description: "Technologies and tools used by Lakshay Saini.",
};

export default function SkillsPage() {
  return (
    <main className="bg-black text-white overflow-hidden pt-24">
      <BackgroundEffects />
      <Skills />
    </main>
  );
}
