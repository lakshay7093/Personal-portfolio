import Hero from "@/sections/Hero";
import BackgroundEffects from "@/sections/BackgroundEffects";
import CursorTrail from "@/components/CursorTrail";
import LazyHomeSections from "@/components/LazyHomeSections";

export default function Home() {
  return (
    <main className="relative bg-black text-white overflow-x-hidden scroll-smooth">
      <BackgroundEffects />
      <CursorTrail />
      <Hero />
      <LazyHomeSections />
    </main>
  );
}
