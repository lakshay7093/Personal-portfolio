export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Lakshay Saini",
    url: "https://lakshaysaini.vercel.app",
    image: "https://lakshaysaini.vercel.app/images/1.jpg",
    sameAs: [
      "https://github.com/lakshay7093",
      "https://www.linkedin.com/in/lakshay-saini-6905b728a/",
      "https://wa.me/918837578244",
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
    ],
    email: "lakshaysaini181@gmail.com",
    telephone: "+918837578244",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dharamshala",
      addressRegion: "Himachal Pradesh",
      addressCountry: "India",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
