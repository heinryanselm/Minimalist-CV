import { GitHubIcon, LinkedInIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Heinry-Anselm Urakpa",
  initials: "HU",
  location: "Hull, England",
  locationLink: "https://www.google.com/maps/place/Hull,+England/@53.7446794,-0.3",
  about:
    "Senior Frontend Developer",
  summary:
    "Professional Googler & Senior Frontend Developer with a knack for piecing together the web one well-placed Stack Overflow thread at a time. With extensive experience in JavaScript, TypeScript, React, and Next.js, I’ve led projects that range from building seamless user interfaces to developing scalable web applications for high-impact solutions. My problem-solving method? Google first, coffee second. Whether it’s optimizing performance, mentoring junior developers, or delivering user-friendly designs, I’m all about crafting solutions that not only work but elevate the user experience (with a little search engine magic). I’m excited to bring my blend of frontend expertise, leadership, and humor to drive impactful, engaging digital experiences.",
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
      company: "Tech Educators",
      link: "https://techeducators.co.uk/who-we-are/our-team",
      badges: ["Full-time"],
      title: "Software Development TA / Location Lead",
      start: "03/2024",
      end: "Present",
      description:
        "I teach and mentor junior developers in building mobile-first, accessible full-stack apps using React, Next.js, and more, while giving feedback that sharpens their coding skills. I lead breakout sessions, provide one-on-one support, and collaborate with the instructor team to keep everyone on track. On top of that, I help update the curriculum, build tech communities in Hull, and mentor students into tech roles, making sure they're industry-ready!",
    },
    {
      company: "iFix Network LTD",
      link: "https://www.ifixnetworks.net",
      badges: ["Full-time"],
      title: "Frontend Developer → Senior Software Developer",
      start: "01/2021",
      end: "12/2023",
      description:
        "I spearheaded the creation of eight impactful apps, boosting product performance and business growth like a pro. Designed a mobile app that made real-time supply chain monitoring a breeze, while also crafting slick UI components that made everything more accessible and user-friendly. Led the dev cycles from start to finish, mentoring junior devs and keeping things running smooth with React, Next.js, TypeScript, and more!",
    },
  ],
  skills: [
    "Frontend: JavaScript, TypeScript, HTML, CSS, React.js, Next.js",
    "Backend/Full-stack: Node.js, RESTful APIs, GraphQL",
    "Version Control & CI/CD: Git, GitHub, Docker, Netlify, Vercel",
    "Testing & Debugging: Cypress, Chrome DevTools",
    "Build Tools: Webpack, Babel, Vite",
    "Performance & Accessibility: Lighthouse, Web Vitals",
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
      //logo: MonitoLogo,
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
