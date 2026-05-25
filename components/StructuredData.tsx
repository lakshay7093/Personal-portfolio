import { siteUrl } from "@/lib/site";

export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",

    "@type": "Person",

    name: "Lakshay Saini",

    url: siteUrl,

    image: `${siteUrl}/profile.jpg`,

    description:
      "Full Stack Developer specializing in React, Next.js, React Native, Firebase, TypeScript, and scalable web & mobile applications.",

    sameAs: [
      "https://github.com/lakshay7093",
      "https://www.linkedin.com/in/lakshay-saini-6905b728a/",
    ],

    jobTitle: "Full Stack Developer",

    worksFor: {
      "@type": "Organization",
      name: "Ninja Deliveries",
    },

    alumniOf: [
      {
        "@type": "EducationalOrganization",
        name: "Government PG College, Dharamshala",
      },
      {
        "@type": "EducationalOrganization",
        name: "Himachal Pradesh University, Shimla",
      },
    ],

    knowsAbout: [
      "React",
      "Next.js",
      "React Native",
      "TypeScript",
      "JavaScript",
      "Firebase",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "Full Stack Development",
      "Mobile App Development",
      "Web Development",
      "MERN Stack",
      "Frontend Development",
      "Backend Development",
    ],

    email: "mailto:lakshaysaini181@gmail.com",

    telephone: "+918837578244",

    address: {
      "@type": "PostalAddress",
      addressLocality: "Dharamshala",
      addressRegion: "Himachal Pradesh",
      addressCountry: "India",
    },

    nationality: "Indian",

    knowsLanguage: ["English", "Hindi"],

    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": siteUrl,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
}