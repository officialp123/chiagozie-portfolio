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

import ProjectHallowen from "/public/images/hallowen.png";
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
    name: "Halloween",
    description:
      "A personal project I developed to showcase a curated selection of Halloween products. The challenge was to create a visually engaging and user-friendly online store that captured the spirit of the season. I used React to build a dynamic and responsive interface ",
    url: "https://inquisitive-jelly-27604d.netlify.app/#",
    previewImage: ProjectHallowen,
    technologies: ["React", "Sass", "HTML", "Javascript"],
  },
  {
    name: "Wingie",
    description:
      "A platform for comparing and finding affordable flights, as well as booking and purchasing tickets safely and easily in a few simple clicks.",
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
      "Cosmetics Republic is a platform I built to connect hair care professionals with quality professional products and educational resources. The site features a curated selection of brands like Ladies Republic Hair Care, Bravo Professional Grooming, Salerm Cosmetics, and Incantodidonna, offering a wide range of products to meet the needs of stylists and beauty enthusiasts. The platform also provides opportunities for professional development, helping to foster a strong and connected community within the hair care industry.",
    url: "https://cosmeticsrepublic.com/",
    previewImage: ProjectCosmetic,
    technologies: [
      "React",
      "Typescript",
      "SASS",
      "Redux Toolkit",
      "React Query",
    ],
  },
  {
    name: "Cresent University",
    description:
      "Crescent University is a website I built using a combination of HTML, CSS, JavaScript, and a content management system (CMS). The project involved integrating various data sources, creating custom interactive elements, and optimizing the site for speed and performance. I also implemented a secure authentication system to protect sensitive user data. The result is a robust and dynamic website that effectively represents the university brand and mission.",
    url: "https://crescent-university.edu.ng/",
    previewImage: ProjectCresent,
    technologies: [
      "React",
      "Typescript",
      "SASS",
      "Redux Toolkit",
      "React Query",
    ],
  },
];

export const TESTIMONIALS: TestimonialDetails[] = [
  {
    personName: "Krisztian Gyuris",
    personAvatar: AvatarKrisztian,
    title: "Founder - inboxgenie.io",
    testimonial:
      "Job well done! I am really impressed. He is very very good at what he does:) I would recommend Chiagozie and will rehire in the future for Frontend development.",
  },
  {
    personName: "Eugen Esanu",
    personAvatar: AvatarEugen,
    title: "Founder - shosho.design",
    testimonial:
      "Great guy, highly recommended for any COMPLEX front-end development job! His skills are top-notch and he will be an amazing addition to any team.",
  },
  {
    personName: "Joe Matkin",
    personAvatar: AvatarDummy,
    title: "Freelancer",
    testimonial:
      "Chiagozie was extremely easy and pleasant to work with and he truly cares about the project being a success. Chiagozie has a high level of knowledge and was able to work on my MERN stack application without any issues.",
  },
];





