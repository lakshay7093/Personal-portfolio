import Contact from "@/sections/Contact";
import BackgroundEffects from "@/sections/BackgroundEffects";

export const metadata = {
  title: "Contact — Lakshay Saini",
  description: "Get in touch with Lakshay Saini for collaborations and opportunities.",
};

export default function ContactPage() {
  return (
    <main className="bg-black text-white overflow-hidden pt-24">
      <BackgroundEffects />
      <Contact />
    </main>
  );
}
