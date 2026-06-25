import {
    FaReact,
    FaNodeJs,
    FaBootstrap,
    FaHtml5,
    FaCss3Alt,
    FaStripe,
    FaMobileAlt,
    SiJavascript,
    SiTypescript,
    SiTailwindcss,
    SiSass,
    SiRedux,
    SiExpress,
    SiMongodb,
    SiFirebase,
    SiGithub,
    SiVercel,
    SiNetlify,
    SiEslint,
    SiPrettier,
    SiAstro,
    SiPrismic,
    SiPwa,
    SiMui,
    SiNextdotjs,
    SiGreensock,
    MdAnimation,
    GiSpeedometer,
    HiOutlineSquares2X2,
} from "@/src/components/Icons";

export const MY_STACK = [
    { name: "React.js", icon: FaReact },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "TypeScript", icon: SiTypescript },
    { name: "JavaScript (ES6+)", icon: SiJavascript },

    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "SCSS / Sass", icon: SiSass },
    { name: "Bootstrap", icon: FaBootstrap },
    { name: "Responsive UI", icon: FaMobileAlt },

    { name: "Shadcn UI", icon: HiOutlineSquares2X2 },
    { name: "Material UI (MUI)", icon: SiMui },

    { name: "Redux Toolkit", icon: SiRedux },

    { name: "Framer Motion", icon: MdAnimation },
    { name: "GSAP", icon: SiGreensock },
    { name: "AOS", icon: MdAnimation },

    { name: "Node.js", icon: FaNodeJs },
    { name: "Express.js", icon: SiExpress },
    { name: "MongoDB", icon: SiMongodb },
    { name: "Firebase", icon: SiFirebase },
    { name: "Stripe", icon: FaStripe },

    { name: "Performance Optimization", icon: GiSpeedometer },
    { name: "Next.js SEO", icon: GiSpeedometer },
    { name: "PWA", icon: SiPwa },

    { name: "Prismic CMS", icon: SiPrismic },
    { name: "Astro.js", icon: SiAstro },

    { name: "Git & GitHub", icon: SiGithub },
    { name: "Vercel", icon: SiVercel },
    { name: "Netlify", icon: SiNetlify },
    { name: "ESLint", icon: SiEslint },
    { name: "Prettier", icon: SiPrettier },

    { name: "HTML5", icon: FaHtml5 },
    { name: "CSS3", icon: FaCss3Alt },
];

export const MY_EXPERIENCE = [
    {
        title: "Front-End Developer",
        company: "Elegant Web Studio",
        duration: "Jan 2025 - Present",
        type: "Remote",
        website: "https://www.elegantwebstudio.dev",
        achievements: [
            "Develop and maintain React.js and Next.js applications across multiple client projects, owning components from design handoff through production deployment.",
            "Built a shared UI component library buttons, tables, dialogs, and forms using Shadcn/ui and Radix UI, standardizing design patterns and reducing duplicated UI work across projects.",
            "Implemented Role-Based Access Control (RBAC) interfaces and admin dashboard layouts supporting multi-level user permission systems for client - facing products.",
            "Participate in code reviews, flagging architectural issues and maintaining consistent coding standards across the team.",
        ],
    },
    {
        title: "Front-End Developer (Contract)",
        company: "Al Jaami Technologies",
        duration: "Apr 2023 - Jul 2023",
        type: "Remote",
        website: "https://www.aljaami.co.uk",
        achievements: [
            "Delivered 4 production websites using React.js and modern CSS frameworks, handling requirements, implementation, and deployment for each project.",
            "Improved page performance on legacy codebases by applying lazy loading, component-level code splitting, and Next.js image and font optimisation.",
            "Integrated Framer Motion and GSAP for scroll-triggered and page-transition animations across all delivered projects.",
            "Post-contract: continued delivering freelance work admin dashboards, reusable component systems, and Next.js web applications for independent clients.",
        ],
    },
    {
        title: "Front-End Intern",
        company: "Remostarts",
        duration: "Dec 2022 - Mar 2023",
        type: "Remote",
        website: "https://remostarts.com",
        achievements: [
            "Built admin dashboards and role-based portal UIs for internal tools using React.js.",
            "Implemented form validation using React Hook Form and Zod, covering both field-level and schema-level validation requirements.",
            "Contributed to sprint releases in an Agile/Scrum team, submitting pull requests and attending daily stand-ups.",
            "Designed modular layouts to support scalability and rapid feature delivery.",
        ],
    },
];