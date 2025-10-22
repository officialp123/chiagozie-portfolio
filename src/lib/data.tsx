import { Github, Twitter, Figma, Linkedin } from "lucide-react";


import LogoTypescript from "/public/images/logos/icon-typescript.svg";
import LogoReact from "/public/images/logos/icon-react.svg";
import LogoNextjs from "/public/images/logos/icon-nextjs.svg";
import LogoNodejs from "/public/images/logos/icon-nodejs.svg";
import LogoSocket from "/public/images/logos/icon-socket.svg";
import LogoSocketLight from "/public/images/logos/icon-socket-light.svg";
import LogoSass from "/public/images/logos/icon-sass.svg";
import LogoTailwindcss from "/public/images/logos/icon-tailwindcss.svg";
import LogoFigma from "/public/images/logos/icon-figma.svg";
import LogoCypress from "/public/images/logos/icon-cypress.svg";
import LogoCypressLight from "/public/images/logos/icon-cypress-light.svg";
import LogoStorybook from "/public/images/logos/icon-storybook.svg";
import LogoGit from "/public/images/logos/icon-git.svg";
import LogoWebflow from "/public/images/logos/icon-webflow.svg";
import YPCLogo from "/public/images/logos/YPCLogo.jpg";
import Kreatoors from "/public/images/logos/kreatoors.jpg";
import NovaTech from "/public/images/logos/NovaTech.jpg";
import LogoWordpress from "/public/images/logos/icon-wordpress.svg";


import HelloME from "/public/images/logos/hellomeltd_logo.jpeg";
import TechIt from "/public/images/logos/techit.jpeg";
import Tjtek from "/public/images/logos/tjtek.jpeg";

import ProjectKreatoors from "/public/images/Kreatoors.png";
import ProjectHelloME from "/public/images/Hellome.png";
import ProjectWingie from "/public/images/project-wingie.png";
import ProjectCosmetic from "/public/images/cosmetic-republic.png";
import ProjectCresent from "/public/images/cresent-university.png";

import AvatarKrisztian from "/public/images/avatar-krisztian.png";
import AvatarEugen from "/public/images/avatar-eugen.png";
import AvatarDummy from "/public/images/avatar-dummy.svg";

import {
  ExperienceDetails,
  ProjectDetails,
  TechDetails,
  TestimonialDetails,
} from "@/lib/types";

export const EXTERNAL_LINKS = {
  GITHUB: "https://github.com/officialp123",
  GITHUB_REPO: "https://github.com/officialp123",
  TWITTER: "",
  LINKEDIN: "https://www.linkedin.com/in/chiagozie-uchenna/",
  FIGMA: "",
  FIGMA_FILE: "#",
};

export const NAV_LINKS = [
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Work",
    href: "#work",
  },
  {
    label: "Testimonials",
    href: "#testimonials",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

export const SOCIAL_LINKS = [
  {
    icon: Github,
    url: "https://github.com/officialp123",
  },
  {
    icon: Linkedin,
    url: "https://www.linkedin.com/in/chiagozie-uchenna/",
  },
];

export const TECHNOLOGIES: TechDetails[] = [
  {
    label: "Jira",
    url: "https://www.atlassian.com/software/jira",
  },
  {
    label: "Confluence",
    url: "https://www.atlassian.com/software/confluence",
  },
  {
    label: "Notion",
    url: "https://www.notion.so/",
  },
  {
    label: "Aha!",
    url: "https://www.aha.io/",
  },
  {
    label: "Miro",
    url: "https://miro.com/",
  },
  {
    label: "Mixpanel",
    url: "https://mixpanel.com/",
  },
  {
    label: "Amplitude",
    url: "https://amplitude.com/",
  },
  {
    label: "Google Analytics",
    url: "https://marketingplatform.google.com/about/analytics/",
  },
  {
    label: "Hotjar",
    url: "https://www.hotjar.com/",
  },
  {
    label: "Fullstory",
    url: "https://www.fullstory.com/",
  },
  {
    label: "Airtable",
    url: "https://www.airtable.com/",
  },
  {
    label: "Zapier",
    url: "https://zapier.com/",
  },
  {
    label: "Javascript",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    label: "Typescript",
    url: "https://www.typescriptlang.org/",
  },
  {
    label: "React",
    url: "https://react.dev/",
  },
  {
    label: "Next.js",
    url: "https://nextjs.org/",
  },
  {
    label: "Node.js",
    url: "https://nodejs.org/en",
  },
  {
    label: "Socket.io",
    url: "https://socket.io/",
  },
  {
    label: "Sass/Scss",
    url: "https://sass-lang.com/",
  },
  {
    label: "Tailwindcss",
    url: "https://tailwindcss.com/",
  },
  {
    label: "Figma",
    url: "https://www.figma.com/",
  },
  {
    label: "Webflow",
    url: "https://webflow.com/",
  },
  {
    label: "Cypress",
    url: "https://www.cypress.io/",
  },
  {
    label: "Storybook",
    url: "https://storybook.js.org/",
  },
  {
    label: "Git",
    url: "https://git-scm.com/",
  },
];


export const EXPERIENCES: ExperienceDetails[] = [
  {
    logo: NovaTech,
    logoAlt: "Novatech logo",
    position: "Senior Product Manager",
    startDate: new Date(2021, 0),
    endDate: undefined, // Current role
    summary: [
      "Own the roadmap and product lifecycle for a B2B collaboration platform with over 50K users across NA and EU.",
      "Led 24+ Agile releases with 95% on-time delivery by coordinating cross-functional pods across engineering, design, and QA.",
      "Launched a 0→1 analytics dashboard that drove a 38% increase in DAUs within 3 months.",
      "Conducted 100+ user interviews to inform product strategy, reducing churn by 27% YoY.",
      "Collaborated with Sales and Success teams on GTM planning, MVP definition, and OKRs for quarterly planning cycles.",
    ],
  },
  {
    logo: Kreatoors,
    logoAlt: "Kreatoors logo",
    position: "Product Manager & Software Developer (Contract)",
    startDate: new Date(2025, 3),
    endDate: new Date(2025, 6),
    summary: [
      "Led end-to-end MVP development for an early-stage SaaS platform, balancing product ownership and engineering execution.",
      "Collaborated with founders to define product requirements, roadmap, and success metrics.",
      "Developed and shipped core platform features using modern frontend/backend stacks, achieving 3-month MVP launch.",
      "Established Agile delivery practices, improving sprint velocity and reducing cycle time by 20%.",
    ],
  },
  {
    logo: YPCLogo,
    logoAlt: "YPC Global logo",
    position: "Founder",
    startDate: new Date(2021, 8),
    endDate: new Date(2023, 11),
    summary: [
      "Founded and scaled a digital product agency serving SMBs with web-based solutions across multiple industries.",
      "Oversaw product development, client strategy, and cross-functional delivery teams to support over 25 successful launches.",
      "Closed multi-million dollar contracts through consultative product selling and pipeline strategy — increasing win rate by 22% YoY.",
    ],
  },
  {
    logo: TechIt,
    logoAlt: "TechIt logo",
    position: "Product Manager",
    startDate: new Date(2019, 11),
    endDate: new Date(2021, 0),
    summary: [
      "Promoted from Associate Product Manager after 12 months due to strong execution and product ownership.",
      "Improved onboarding speed by 50% and increased NPS by +12 through key UX-driven platform updates.",
      "Partnered with UX and Dev teams to increase feature adoption by 18% through iterative usability testing.",
      "Led backlog grooming, sprint planning, and bi-weekly shipping cadence in an Agile environment.",
    ],
  },
];

export const PROJECTS: ProjectDetails[] = [
  {
    name: "Kreatoors AI",
    description:
      "As Product Manager and Developer, I led the MVP design and development for Kreatoors.ai — an AI-powered SaaS platform helping startups generate brand assets and pitch-ready websites instantly. I defined core features, coordinated engineering efforts, and drove MVP launch in just 3 months.",
    url: "https://kreatoors.ai/",
    previewImage: ProjectKreatoors, // make sure to import this image
    technologies: ["React", "Next.js", "Node.js", "Tailwind", "Figma", "AI APIs"],
  },
  {
    name: "HelloMe Money",
    description:
      "Worked as a freelance Product & Webflow Expert to design and ship HelloMe Money’s launch site. Collaborated with stakeholders to translate brand and business needs into a functional Webflow experience that drove early traction and conversion.",
    url: "https://www.hellomemoney.com/",
    previewImage: ProjectHelloME, // make sure to import this image
    technologies: ["Webflow", "Figma", "Client-First", "SEO", "CMS Collections"],
  },
  {
    name: "Wingie",
    description:
      "Led the frontend product delivery of a travel booking platform that allows users to compare and purchase flight tickets easily. Worked closely with design, backend, and QA to ship new features and improve UX performance.",
    url: "https://www.wingie.com",
    previewImage: ProjectWingie,
    technologies: [
      "React",
      "Typescript",
      "React Bootstrap",
      "Firebase",
      "Styled Components",
      "Redux",
    ],
  },
  {
    name: "Cosmetics Republic",
    description:
      "Oversaw product planning and delivery for an e-commerce platform connecting haircare professionals with premium brands. Collaborated with design and engineering to launch a scalable storefront and content system, enhancing engagement and driving conversions.",
    url: "https://cosmeticsrepublic.com/",
    previewImage: ProjectCosmetic,
    technologies: ["React", "Typescript", "SASS", "Redux Toolkit", "React Query"],
  },
  {
    name: "Crescent University",
    description:
      "Managed end-to-end delivery of the official university website, coordinating with stakeholders to define requirements, prioritize features, and ensure data integration and user security. Focused on speed, accessibility, and brand alignment.",
    url: "https://crescent-university.edu.ng/",
    previewImage: ProjectCresent,
    technologies: ["React", "Typescript", "SASS", "Redux Toolkit", "React Query"],
  },
];


export const TESTIMONIALS: TestimonialDetails[] = [
  {
    personName: "Krisztian Gyuris",
    personAvatar: AvatarKrisztian,
    title: "Founder – inboxgenie.io",
    testimonial:
      "Job well done! I was truly impressed with Chiagozie’s ability to take ownership of both product direction and execution. He brought structure, speed, and clarity to the process — a rare combination of technical depth and product leadership.",
  },
  {
    personName: "Eugen Esanu",
    personAvatar: AvatarEugen,
    title: "Founder – shosho.design",
    testimonial:
      "Chiagozie is highly recommended for any product-focused role that demands both strategic thinking and technical fluency. His ability to simplify complex ideas and align cross-functional teams is exceptional. He’s a true asset to any product team.",
  },
  {
    personName: "Joe Matkin",
    personAvatar: AvatarDummy,
    title: "Freelancer",
    testimonial:
      "Chiagozie was incredibly easy to work with and brought a unique product-first mindset to the table. He cared deeply about the success of the project, asked the right questions, and delivered solutions that balanced user needs with business goals.",
  },
];







