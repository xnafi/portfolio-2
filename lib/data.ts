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
import { IProject } from "@/types";

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

export const PROJECTS: IProject[] = [
    {
        title: "Fleet Stack",
        slug: "fleet-stack",
        techStack: [
            "Next.js 16",
            "React 19",
            "TypeScript",
            "shadcn/ui",
            "Radix UI",
            "React Hook Form",
            "Zod",
            "ApexCharts",
            "Recharts",
            "Leaflet",
        ],
        thumbnail: "/assets/fleet-stack-1.jpg",
        longThumbnail: "/assets/fleet-stack-1.jpg",
        images: [
            "/assets/fleet-stack-1.jpg",
            "/assets/fleet-stack-2.png",
            "/assets/fleet-stack-3.jpg",
        ],
        liveUrl: "https://fleet-stack.vercel.app/super-admin",
        year: 2026,
        description: `
  Fleet Stack is a modern fleet management platform designed for enterprise operations. Built with Next.js 16 and React 19, it provides administrators with powerful tools to manage vehicles, drivers, trips, analytics, and operational workflows through a scalable dashboard.

  <br/><br/>

  Key Features:
  <ul>
    <li>🚚 Fleet and vehicle management dashboard</li>
    <li>📊 Interactive analytics using ApexCharts and Recharts</li>
    <li>📝 Complex forms with React Hook Form and Zod validation</li>
    <li>🗂️ Reusable data tables, filters, dialogs and bulk actions</li>
    <li>🗺️ Map integration with Leaflet</li>
    <li>🔐 Role-based administration system</li>
  </ul>
  `,
        role: `
  Frontend Developer

  <ul>
    <li>Built the complete dashboard using Next.js 16 and React 19.</li>
    <li>Created reusable UI components with shadcn/ui and Radix UI.</li>
    <li>Implemented scalable frontend architecture for enterprise applications.</li>
    <li>Developed advanced forms, dashboards and reporting modules.</li>
    <li>Integrated analytics charts and interactive mapping features.</li>
  </ul>
  `,
    },
    {
        title: "MacZen BD",
        slug: "maczen-bd",
        techStack: [
            "Next.js",
            "React Native",
            "Expo",
            "Prisma",
            "PostgreSQL",
            "TanStack Query",
            "Cloudinary",
            "Stripe",
        ],
        thumbnail: "/projects/thumbnail/maczen.webp",
        longThumbnail: "/projects/long/maczen.webp",
        images: [],
        liveUrl: "https://maczenbd.com",
        year: 2026,
        description: `
  MacZen BD is a premium Apple retail platform consisting of a Next.js storefront, an admin dashboard, and a React Native mobile application. The platform streamlines product management, customer purchasing, and order fulfillment across web and mobile.

  <br/><br/>

  Key Features:
  <ul>
    <li>🍎 Apple product catalog with variant selection</li>
    <li>🛒 Cart, checkout and order tracking</li>
    <li>💳 EMI calculator and payment flow</li>
    <li>📦 Complete admin dashboard with product and order management</li>
    <li>📱 React Native mobile app with live AI chatbot</li>
    <li>☁️ Cloudinary image optimization</li>
  </ul>
  `,
        role: `
  Full Stack Developer

  <ul>
    <li>Built the complete frontend using Next.js.</li>
    <li>Developed the React Native application with Expo.</li>
    <li>Implemented admin dashboard for product, order and blog management.</li>
    <li>Integrated APIs, Cloudinary and PostgreSQL backend.</li>
    <li>Optimized user experience for desktop and mobile devices.</li>
  </ul>
  `,
    },
    {
        title: "scroll-animation-framer-motion",
        slug: "scroll-animation-framer-motion",
        techStack: [
            "TypeScript",
            "Framer Motion",
            "Vite",
            "Rollup",
            "NPM",
        ],
        thumbnail: "/projects/thumbnail/scroll-animation.webp",
        longThumbnail: "/projects/long/scroll-animation.webp",
        images: [],
        liveUrl: "",
        year: 2026,
        description: `
  A reusable TypeScript animation library that provides scroll-triggered animations for React applications. The package offers simple APIs for fade, slide and zoom animation presets while maintaining excellent performance and developer experience.

  <br/><br/>

  Key Features:
  <ul>
    <li>✨ Fade, slide and zoom presets</li>
    <li>⚡ Lightweight and tree-shakeable</li>
    <li>📦 Published on NPM</li>
    <li>🛠️ Built using Vite and Rollup</li>
    <li>👨‍💻 Used by 1000+ developers</li>
  </ul>
  `,
        role: `
  Creator & Maintainer

  <ul>
    <li>Designed the API and animation system.</li>
    <li>Built the package using TypeScript.</li>
    <li>Configured Rollup for optimized package builds.</li>
    <li>Published and maintained the library on NPM.</li>
  </ul>
  `,
    },
    {
        title: "Lambo Showcase",
        slug: "lambo-showcase",
        techStack: [
            "Next.js",
            "GSAP",
            "Google Maps API",
        ],
        thumbnail: "/projects/thumbnail/lambo.webp",
        longThumbnail: "/projects/long/lambo.webp",
        images: [],
        liveUrl: "",
        year: 2026,
        description: `
  Lambo Showcase is a premium automotive concept website focused on immersive storytelling and high-performance animations. The experience combines smooth transitions, interactive visuals and dealership location services.

  `,
        role: `
  Frontend Developer

  <ul>
    <li>Developed cinematic page transitions using GSAP.</li>
    <li>Implemented custom particle animations.</li>
    <li>Integrated Google Maps API.</li>
    <li>Optimized performance for smooth interactions.</li>
  </ul>
  `,
    },
    {
        title: "E-Real State",
        slug: "e-real-state",
        techStack: [
            "Next.js",
            "Framer Motion",
            "Recharts",
        ],
        thumbnail: "/projects/thumbnail/e-real-state.webp",
        longThumbnail: "/projects/long/e-real-state.webp",
        images: [],
        liveUrl: "",
        year: 2026,
        description: `
  E-Real State is a modern property listing platform built with Next.js. It provides advanced search capabilities, interactive analytics and engaging animations to improve property discovery and user experience.

  <br/><br/>

  Key Features:
  <ul>
    <li>🏠 Advanced property filtering</li>
    <li>📊 Interactive analytics dashboard</li>
    <li>✨ Smooth Framer Motion animations</li>
    <li>📱 Responsive user experience</li>
    <li>📈 Improved listing engagement</li>
  </ul>
  `,
        role: `
  Frontend Developer

  <ul>
    <li>Built the frontend using Next.js.</li>
    <li>Integrated Framer Motion animations.</li>
    <li>Developed analytics using Recharts.</li>
    <li>Optimized user interactions and responsiveness.</li>
  </ul>
  `,
    },

];