
import {
  FaReact,
  FaNodeJs,
  FaBootstrap,
  FaHtml5,
  FaCss3Alt,
  FaStripe,
  FaMobileAlt,
} from "react-icons/fa";

import {
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
} from "react-icons/si";

import { MdAnimation } from "react-icons/md";
import { GiSpeedometer } from "react-icons/gi";
import { HiOutlineSquares2X2 } from "react-icons/hi2";

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
            "Spearheaded scalable React & Next.js architectures across multiple client applications.",
            "Built and maintained a shared component library, reducing development time by 30%.",
            "Collaborated closely with UI/UX designers to ensure pixel-perfect and accessible interfaces.",
            "Conducted code reviews and mentored junior developers to improve code quality and team efficiency.",
        ],
    },
    {
        title: "Front-End Developer (Contract)",
        company: "Al Jaami Technologies",
        duration: "Apr 2023 - Jul 2023",
        type: "Remote",
        website: "https://www.aljaami.co.uk",
        achievements: [
            "Delivered 4+ fully responsive, SEO-optimized production websites.",
            "Refactored legacy codebases, achieving up to 35% faster load times.",
            "Improved developer workflow using ESLint and Prettier.",
            "Integrated animation libraries to enhance UX and increase user session duration.",
        ],
    },
    {
        title: "Front-End Intern",
        company: "Remostarts",
        duration: "Dec 2022 - Mar 2023",
        type: "Remote",
        website: "https://remostarts.com",
        achievements: [
            "Developed dynamic dashboards and role-based admin portals.",
            "Implemented form validation using React Hook Form and Zod.",
            "Worked within Agile teams and contributed to 6+ successful sprint releases.",
            "Designed modular layouts to support scalability and rapid feature delivery.",
        ],
    },
];