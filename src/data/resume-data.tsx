import { GitHubIcon, LinkedInIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Heinry-Anselm Urakpa",
  initials: "HA",
  location: "Hull, England",
  locationLink: "https://www.google.com/maps/place/Hull,+England/@53.7446794,-0.3",
  about:
    "Software Engineer, Frontend & App Developer, focused on building products with extra attention to detail",
  summary:
    "Prolific software engineer, I have successfully taken multiple products from 0 to 1. I lead teams effectively, ensuring an environment where people can do their best work. Currently, I work mostly with TypeScript, React, Node.js, and GraphQL.",
  avatarUrl: "https://avatars.githubusercontent.com/u/50972784?s=400&u=1b5e251a7df70e707b2674ba3df87943fc7c1654&v=4",
  personalWebsiteUrl: "https://tamalsen.dev",
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
      start: "2016",
      end: "2020",
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
    {
      company: "influenceTHIS Canada",
      link: "https://influencethis.ca/",
      badges: ["Remote", "Part-time"],
      title: "Web Developer",
      start: "2018",
      end: "2019",
      description:
        "Developed the UI and UX eco-system for a conference event platform using modular component structures with JS, SCSS, Gulp on Node.",
    },
    {
      company: "Palimor Design Studios",
      link: "https://influencethis.ca/",
      badges: ["Remote", "Part-time"],
      title: "Web Developer",
      start: "2018",
      end: "2019",
      description:
        "Managed 25+ web projects, implementing server deployment panel to reduce server management costs by 27%. Efficient management yielded cost and time savings, doubling client engagement through precise UX implementation over a 6-month period.",
    },
    {
      company: "Upwork",
      link: "https://tamalsen.dev/go/upwork",
      badges: ["Freelance"],
      title: "Top Rated Plus Web Developer",
      start: "2017",
      end: "Present",
      description: "Top-Rated Plus developer on Upwork specializing in Front-end (React, WordPress) technologies with a 100% job success rate and client satisfaction rating (based on 150+ Jobs, 3500+ hours).",
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
      title: "Jarocki.me",
      techStack: ["Side Project", "Next.js", "MDX"],
      description:
        "My personal website and blog. Built with Next.js and Notion API",
      // logo: JarockiMeLogo,
      link: {
        label: "github.com",
        href: "https://jarocki.me/",
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
      title: "Year progress",
      techStack: ["Side Project", "TypeScript", "Next.js"],
      description: "Tracks current year progress and displays a countdown",
      // logo: YearProgressLogo,
      link: {
        label: "getyearprogress.com",
        href: "https://getyearprogress.com/",
      },
    },
    {
      title: "Parabol",
      techStack: [
        "Full Stack Developer",
        "TypeScript",
        "React",
        "Node.js",
        "GraphQL",
      ],
      description:
        "The Agile meeting co-pilot that delivers better meetings with less effort",
      // logo: ParabolLogo,
      link: {
        label: "github.com",
        href: "https://parabol.co/",
      },
    },
    {
      title: "Evercast",
      techStack: [
        "Lead Frontend Developer",

        "TypeScript",
        "React",
        "Node.js",
        "GraphQL",
      ],
      description:
        "Creative collaboration platform that combines video conferencing and HD media streaming",
      // logo: EvercastLogo,
      link: {
        label: "evercast.us",
        href: "https://www.evercast.us/",
      },
    },
    {
      title: "Mobile Vikings",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application for leading virtual mobile operator in Poland",
      // logo: MobileVikingsLogo,
      link: {
        label: "mobilevikings.pl",
        href: "https://mobilevikings.pl/",
      },
    },
    {
      title: "Howdy",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Howdy is a place for you to join communities you care about",
      // logo: Howdy,
      link: {
        label: "play.google.com",
        href: "https://howdy.co/",
      },
    },
    {
      title: "Tastycloud",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application for managing and displaying restaurant menus in kiosk mode",
      // logo: TastyCloudLogo,
      link: {
        label: "tastycloud.fr",
        href: "https://www.tastycloud.fr/",
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
