import { GitHubIcon, LinkedInIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Heinry-Anselm Urakpa",
  initials: "HU",
  location: "Hull, England",
  locationLink: "https://www.google.com/maps/place/Hull,+England/@53.7446794,-0.3",
  about:
    "Software Engineer, Frontend & App Developer, focused on building products with extra attention to detail",
  summary:
    "Prolific software engineer, I have successfully taken multiple products from 0 to 1. I lead teams effectively, ensuring an environment where people can do their best work. Currently, I work mostly with TypeScript, React, Node.js, and GraphQL.",
  avatarUrl: "https://avatars.githubusercontent.com/u/50972784?s=400&u=1b5e251a7df70e707b2674ba3df87943fc7c1654&v=4",
  personalWebsiteUrl: "https://cv-ashy-nine.vercel.app",
  contact: {
    email: "heinryanselm@gmail.com",
    tel: "+44 7479821607",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/heinryanselm/",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/heinryanselm/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "University of Ghana, Legon",
      degree: "Bachelor of Science in Computer Engineering",
      // start: "2016",
      // end: "2020",
    },
  ],
  work: [
    {
      company: "iFix Network LTD",
      link: "https://www.ifixnetworks.net",
      badges: ["Full-time"],
      title: "Frontend Developer → Senior Software Developer",
      start: "01/2021",
      end: "12/2023",
      description:
        "Lead product definition, launch, and long-term vision for initiatives across audiences of the marketplace, enabling the brand to reach consumers nationwide by developing locally relevant strategies. Entrusted by Senior Executives with leadership responsibility on high-impact, high visibility projects.",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Next.js",
    "Node.js",
    "Flutter",
    "GraphQL",
  ],
  projects: [
    {
      title: "Consultly",
      techStack: [
        "Side Project",
        "TypeScript",
        "Next.js",
        "Vite",
        "GraphQL",
        "WebRTC",
      ],
      description: "A platform to build and grow your online business",
      // logo: ConsultlyLogo,
      link: {
        label: "consultly.com",
        href: "https://consultly.com/",
      },
    },
    {
      title: "Monito",
      techStack: ["Side Project", "TypeScript", "Next.js", "Browser Extension"],
      description:
        "Browser extension that records everything happening in a web application",
      // logo: MonitoLogo,
      link: {
        label: "monito.dev",
        href: "https://monito.dev/",
      },
    },
    {
      title: "Honey Clicker",
      techStack: ["Side Project", "TypeScript", "React.js", "MDX"],
      description:
        "Clicker game where you can earn points by clicking on a honey jar. ",
      // logo: JarockiMeLogo,
      link: {
        label: "github.com",
        href: "https://bee-clicker-main.vercel.app",
      },
    },
    {
      title: "Minimal",
      techStack: ["Side Project", "Next.js", "Puppeteer"],
      description:
        "Minimalist calendars, habit trackers and planners generator",
      // logo: Minimal,
      link: {
        label: "useminimal.com",
        href: "https://useminimal.com/",
      },
    },
    {
      title: "Barepapers",
      techStack: ["Side Project", "Next.js", "Puppeteer"],
      description:
        "Generates beautiful wallpapers using random shapes and gradients",
      // logo: BarepapersLogo,
      link: {
        label: "barepapers.com",
        href: "https://barepapers.com/",
      },
    },
    {
      title: "Calend.LY",
      techStack: ["Side Project", "TypeScript", "Next.js"],
      description: "Tracks current year progress and displays a countdown",
      // logo: YearProgressLogo,
      link: {
        label: "calendly.com",
        href: "https://calend-ly-heinryanselms-projects.vercel.app/",
      },
    },
    {
      title: "Ambit",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application that helps with sharing your contact details",
      // logo: AmbitLogo,
    },
    {
      title: "Bim",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application that helps with booking a table in a restaurants",
      // logo: BimLogo,
    },
    {
      title: "Canal Digital GO",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Video streaming mobile application for Canal Digital subscribers",
      // logo: CDGOLogo,
    },
  ],
} as const;
