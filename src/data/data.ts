import {
  WorkExperienceProps,
  EducationExperienceProps,
  ProjectItem,
} from "@/types/types";

export const workExperiences: WorkExperienceProps[] = [
  {
    dateRange: "Sept 2023 - Present",
    role: "Frontend Developer",
    company: "Bravoure",
    companyType: "Digital Agency",
    skills: ["TS", "React", "NextJS", "CraftCMS", "GraphQL", "Tailwind"],
    description:
      "Responsible for building, maintaining, and expanding web applications from the ground up for a diverse clients & products, ranging from developing schooling platforms, music festival websites, to media streaming platforms. I focus on: translating codebases from JS into TS, enhancing user interfaces, optimizing performance, and ensuring seamless integration with backend, while collaborating with the design teams to scale the platform.",
    logo: "/logos/bravoure-logo.svg",
  },
  {
    dateRange: "May 2022 - Oct 2023",
    role: "Frontend Developer",
    company: "Autofill Tech",
    companyType: "AI automobile scanning",
    skills: ["React", "TS", "NextJS", "Git"],
    description:
      "Maintained the customer dashboard and design components for a SaaS product in the automotive industry. Responsibilities include dashboard upkeep, bug fixes, and enhancing user experience. I collaborate with design teams to implement responsive, industry-specific interfaces.",
    logo: "/logos/atf-logo.svg",
  },
  // {
  //   dateRange: "May 2022 - Oct 2022",
  //   role: "Creative Developer",
  //   company: "GumGum",
  //   companyType: "Digital advertising",
  //   skills: ["HTML", "CSS", "JS", "AdobeSuite"],
  //   description:
  //     "I create dynamic, interactive ads from premium international brand briefings, handling everything from concept to final build. I also turn client requests into visually appealing, responsive, and engaging advertisements. This involves blending client needs with creative flair to deliver impactful advertising solutions.",
  //   logo: "/logos/gumgum-logo.svg",
  // },
  {
    dateRange: "Oct 2022 - Sept 2023",
    role: "Web Developer",
    company: "Routinely",
    companyType: "E-commerce skincare",
    skills: ["TS", "React", "NextJS", "CraftCMS", "GraphQL", "Tailwind"],
    description:
      "Helped develop Routinely's e-commerce storefront and manage its front-end. Responsibilities include translating design mock-ups into fully-responsive products and collaborating with UX designers, product managers, and back-end developers for an optimal user experience.",
    logo: "/logos/routinely-logo.svg",
  },
  {
    dateRange: "Jan 2020 - Nov 2020",
    role: "Creative Researcher",
    company: "Random Studio",
    companyType: "Experience design studio",
    skills: ["AdobeSuite"],
    description:
      "Lead the cultural translation of fashion and new technology insights into design briefs for internal and client-facing projects, across digital and physical domains. Additionally, I fostered new partnerships with retail industry collaborators.",
    logo: "/logos/random-logo.svg",
  },
  {
    dateRange: "June 2018 - Apr 2019",
    role: "UX Researcher",
    company: "Philips - Signify",
    companyType: "IoT",
    skills: ["AdobeSuite", "Diverse research methods"],
    description:
      "Developed a qualitative research and benchmarking method called Value Tuning. This method uncovers insights on how well a brand meets people's expectations. I provided evidence-based design recommendations to enhance the UX journey for HUE home products.",
    logo: "/logos/philips-logo.svg",
  },
];

export const educationExperiences: EducationExperienceProps[] = [
  {
    dateRange: "Jan 2021 - Jul 2021",
    school: "Digital Society School",
    degree: "Digtal Transformation",
    format: "Traineeship",
    place: "Amsterdam, NL",
  },
  {
    dateRange: "Nov 2020 - Aug 2021",
    school: "SheCodes",
    degree: "Frontend Engineering",
    format: "Bootcamp License",
    place: "Online",
  },
  {
    dateRange: "Sept 2015 - Jun 2019",
    school: "Design Academy Eindhoven",
    degree: "Industrial Design & Arts",
    format: "Bachelor",
    place: "Eindhoven, NL",
  },
  {
    dateRange: "Sept 2013 - Jun 2015",
    school: "Haute École des Arts du Rhin",
    degree: "Applied Arts",
    format: "Bachelor",
    place: "Strasbourg, FR",
  },
];

export const projectsData: Record<string, ProjectItem> = {
  moco: {
    type: "image",
    src: "/media/moco/background.png",
    title: "MOCO Museum",
    link: "https://mocomuseum.com/",
    category: "Web",
    description:
      "The MOCO Museum website and ticketing platform: I help craft a visually rich and user-friendly interface that reflected the museum's innovative spirit. Working with designers, I helped bring the museum's bold concepts to life, optimizing performance, integrating ticketing features, and ensuring an immersive, seamless experience for international visitors.",
    nature: "client work",
  },
  bks: {
    type: "image",
    src: "/media/bks/background.png",
    alt: "Best Kept Secret",
    title: "Best Kept Secret",
    link: "https://www.bestkeptsecret.nl/",
    category: "Web",
    description:
      "I implement the design of the new pages for the Best Kept Secret music festival website, working closely with the backend team to integrate a new data structure and ensure alignment with updated design requirements. The project involved enhancing the ticketing and reservation platform with dynamic, brand-aligned user interactions.",
    nature: "client work",
  },
  unvrs: {
    type: "image",
    src: "/media/unvrs/background.png",
    alt: "web",
    title: "UNVRS",

    link: "https://www.unvrs.com/",
    category: "Web",
    description:
      "Together with another frontend developer, we managed to bring UNVRS-Ushuaïa Ibiza's 'Hyperclub' identity to life. Along with backend developers and designers, I helped build the site from scratch, focusing on interactive features, performance optimization, and seamless backend integration.",
    nature: "client work",
  },
  // brazil: {
  //   type: "image",
  //   src: "/media/brazil/background.png",
  //   alt: "Brazil Project",
  //   title: "Brazil Mood",

  //   link: "https://brazilmood.netlify.app/",
  //   category: "Web",
  //   description:
  //     "Inspired by Luna Bastos' intricate beadwork, I've created playful cursor interactions that transform an image into a 4x6 puzzle.",
  //   nature: "playground",
  // },

  // vignettes: {
  //   type: "image",
  //   src: "/media/vignettes/background.png",
  //   alt: "Vignettes Project",
  //   title: "Vignettes",

  //   link: "https://amazonia-tones.vercel.app/",
  //   category: "Web",

  //   description:
  //     " A split image animation using clip-path css value, animated with framer motion and Nextjs. Inspired by: https://tux.co/en/ and Olivier Larose. All images by photographer Gleeson Paulino",
  //   nature: "playground",
  // },
  caminhos: {
    type: "video",
    src: "/media/caminhos/video.mp4",
    alt: "Caminhos Project",
    title: "Caminhos",
    link: "https://abre-caminhos-react.vercel.app/",
    category: "Shader",
    description:
      "Interactive texture inspired from the ever-changing landscapes of Lençoes Marenhences in Brazil. ",
    nature: "playground",
  },
  routinely: {
    type: "image",
    src: "/media/routinely/background.png",
    alt: "Rputinely Skincare",
    title: "Routinely",

    link: "https://www.routinely.com/en",
    category: "Web",
    description:
      "I contributed to building Routinely’s e-commerce skincare platform from scratch. Working with backend developers and designers, developed online skin analysis tests that match users with the right products by integrating data-driven recommendations tailored to their unique needs.",
    nature: "client work",
  },
  foresta: {
    type: "video",
    src: "/media/foresta/video.mp4",
    title: "Botánica Onírica",

    link: "https://botanica-onirica.netlify.app",
    category: "Shader",
    description:
      "In this project, I used shaders to distort and transform my floral images while keeping their aspect ratio intact. Combining these effects with nature creates a unique contrast between organic forms and digital manipulation, turning natural elements into surreal, dreamlike visuals.",
    nature: "playground",
  },
  cumbre: {
    type: "video",
    src: "/media/cumbre/video.mp4",
    title: "Cumbre",
    link: "https://cumbre-zeta.vercel.app/",
    category: "Shader",
    description:
      "Cumbre is a self-designed and self-developed interactive shader experiment, showcasing real-time 3D visuals with custom textures, environment maps, and distortion effects using images of the jungle which I love.",
    nature: "playground",
  },
  mercurio: {
    type: "video",
    src: "/media/mercurio/video.mp4",
    title: "Mercurio",
    link: "https://mercury-breaths.netlify.app/",
    category: "Shader",
    description:
      "Dynamically-generated gradients, that simulate our breathing pace.",
    nature: "playground",
  },
};

export const projectsDataDsk: ProjectItem[] = [
  {
    id: "moco",
    type: "image",
    src: "/media/moco/background.png",
    title: "MOCO Museum",
    link: "https://mocomuseum.com/",
    category: "Web platform",
    description: "",
    nature: "client work",
  },
  {
    id: "bks",
    type: "image",
    src: "/media/bks/background.png",
    alt: "Best Kept Secret",
    title: "Best Kept Secret",
    link: "https://www.bestkeptsecret.nl/",
    category: "Web platform",
    description: "",
    nature: "client work",
  },
  // unvrs 2
  {
    id: "unvrs",
    type: "image",
    src: "/media/unvrs/background.png",
    alt: "web",
    title: "UNVRS",
    link: "https://www.unvrs.com/",
    category: "Web platform",
    description: "",
    nature: "client work",
  },
  // brasil
  {
    id: "foresta",
    type: "video",
    src: "/media/foresta/video.mp4",
    title: "Botánica Onírica",
    link: "https://botanica-onirica.netlify.app",
    category: "Shader",
    description: "",
    nature: "playground",
  },
  {
    id: "caminhos",
    type: "video",
    src: "/media/caminhos/video.mp4",
    alt: "Caminhos Project",
    title: "Caminhos",
    // link: "https://abre-caminhos.netlify.app/",
    link: "https://abre-caminhos-react.vercel.app/",
    category: "Shader",
    description: "",
    nature: "playground",
  },
  {
    id: "cumbre",
    type: "video",
    src: "/media/cumbre/video.mp4",
    title: "Cumbre",
    link: "https://cumbre-zeta.vercel.app/",
    category: "Shader",
    description:
      "Cumbre is a self-designed and self-developed interactive shader experiment, showcasing real-time 3D visuals with custom textures, environment maps, and distortion effects using images of the jungle which I love.",
    nature: "playground",
  },
  {
    id: "mercurio",
    type: "video",
    src: "/media/mercurio/video.mp4",
    title: "Mercurio",
    link: "https://mercury-breaths.netlify.app/",
    category: "Shader",
    description: "",
    nature: "playground",
  },
  // {
  //   id: "brazil",
  //   type: "image",
  //   src: "/media/brazil/background.png",
  //   alt: "Brazil Project",
  //   title: "Brazil Mood",
  //   link: "https://brazilmood.netlify.app/",
  //   category: "Web",
  //   description: "",
  //   nature: "playground",
  // },

  // {
  //   id: "vignettes",
  //   type: "image",
  //   src: "/media/vignettes/background.png",
  //   alt: "Vignettes Project",
  //   title: "Vignettes",
  //   link: "",
  //   category: "Web",
  //   description: "",
  //   nature: "playground",
  // },

  {
    id: "routinely",
    type: "image",
    src: "/media/routinely/background.png",
    alt: "routinely Skincare",
    link: "https://www.routinely.com/en",
    title: "Routinely",
    category: "Web application | e-commerce",
    description: "",
    nature: "client work",
  },
  // 8

  // 9
];

export const getItemContent = (id: string): ProjectItem | undefined => {
  return projectsData[id];
};
