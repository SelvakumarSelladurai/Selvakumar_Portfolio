import { useState } from "react";

import {
    FaReact,
    FaNodeJs,
    FaGitAlt,
    FaDocker,
    // FaPython,
} from "react-icons/fa";

import {
    SiJavascript,
    SiTailwindcss,
    SiExpress,
    SiMongodb,
    SiMysql,
    SiFigma,
    SiPostman,
    SiFrappe,
} from "react-icons/si";

import { BsOpenai } from "react-icons/bs";

const technologies = [
    {
        id: 1,
        name: "React",
        icon: FaReact,
        color: "#61DAFB",
        category: "Frontend",
        level: 95,
        projects: "20+",
        experience: "1+ Year",
        description:
            "Building reusable components, custom hooks, state management and production-ready UI.",
    },
    {
        id: 2,
        name: "JavaScript",
        icon: SiJavascript,
        color: "#F7DF1E",
        category: "Frontend",
        level: 92,
        projects: "30+",
        experience: "2 Years",
        description:
            "Strong knowledge of ES6+, asynchronous programming and modern JavaScript concepts.",
    },
    {
        id: 3,
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        color: "#38BDF8",
        category: "Frontend",
        level: 95,
        projects: "25+",
        experience: "1+ Year",
        description:
            "Creating responsive and modern UI using utility-first CSS.",
    },
    {
        id: 4,
        name: "Node.js",
        icon: FaNodeJs,
        color: "#5FA04E",
        category: "Backend",
        level: 82,
        projects: "10+",
        experience: "1 Year",
        description:
            "Building REST APIs, authentication and scalable backend services.",
    },
    {
        id: 5,
        name: "Express",
        icon: SiExpress,
        color: "#ffffff",
        category: "Backend",
        level: 80,
        projects: "10+",
        experience: "1 Year",
        description:
            "Developing RESTful APIs with middleware and authentication.",
    },
    {
        id: 6,
        name: "MongoDB",
        icon: SiMongodb,
        color: "#4DB33D",
        category: "Database",
        level: 82,
        projects: "10+",
        experience: "1 Year",
        description:
            "Designing schemas and managing NoSQL databases.",
    },
    {
        id: 7,
        name: "MySQL",
        icon: SiMysql,
        color: "#00758F",
        category: "Database",
        level: 75,
        projects: "8+",
        experience: "1 Year",
        description:
            "Working with relational databases and SQL queries.",
    },
    {
        id: 8,
        name: "Git",
        icon: FaGitAlt,
        color: "#F1502F",
        category: "Tools",
        level: 90,
        projects: "All",
        experience: "2 Years",
        description:
            "Version control, collaboration and Git workflows.",
    },
    {
        id: 9,
        name: "Docker",
        icon: FaDocker,
        color: "#2496ED",
        category: "Tools",
        level: 70,
        projects: "Learning",
        experience: "Learning",
        description:
            "Containerization and deployment of applications.",
    },
    {
        id: 10,
        name: "Figma",
        icon: SiFigma,
        color: "#A259FF",
        category: "Design",
        level: 85,
        projects: "15+",
        experience: "1 Year",
        description:
            "Designing clean and responsive user interfaces.",
    },
    {
        id: 11,
        name: "Postman",
        icon: SiPostman,
        color: "#FF6C37",
        category: "Tools",
        level: 90,
        projects: "All",
        experience: "2 Years",
        description:
            "API testing and backend debugging.",
    },
    {
        id: 12,
        name: "OpenAI",
        icon: BsOpenai,
        color: "#10A37F",
        category: "AI",
        level: 78,
        projects: "5+",
        experience: "Learning",
        description:
            "Building AI-powered applications using LLM APIs.",
    },
    {
        id: 13,
        name: "Frappe",
        icon: SiFrappe,
        color: "#0089FF",
        category: "Framework",
        level: 75,
        projects: "Professional",
        experience: "Current",
        description:
            "Developing ERP applications using the Frappe framework.",
    },
];

const TechStack = () => {
    const [activeTech, setActiveTech] = useState(technologies[0]);
    return (
        <section
            id="techstack"
            className="relative overflow-hidden scroll-mt-32 py-24"
        >
            <div className="container mx-auto px-6">
                <div className="mx-auto mb-20 max-w-3xl text-center">
                    <span className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
                        Technology Galaxy
                    </span>

                    <h2 className="mt-6 text-5xl font-bold">
                        My
                        <span className="font-serif italic text-white">
                            {" "}Tech Universe
                        </span>
                    </h2>

                    <p className="mt-6 text-lg text-muted-foreground">
                        Every technology represents a milestone in my
                        development journey. Explore my core skills,
                        experience, and favorite tools.
                    </p>
                </div>

                <div className="grid items-center gap-16 lg:grid-cols-2">
                    <div className="relative flex h-162.5 items-center justify-center">

                        <div className="absolute h-130 w-130 rounded-full bg-primary/5 blur-3xl" />

                        <div className="absolute h-45 w-45 rounded-full border border-primary/10" />
                        <div className="absolute h-75 w-75 rounded-full border border-primary/10" />
                        <div className="absolute h-107.5 w-107.5 rounded-full border border-primary/10" />

                        <button
                            onClick={() => setActiveTech(technologies[0])}
                            className="absolute z-20 flex h-28 w-28 items-center justify-center rounded-full glass glow-border border border-primary/40 transition-all duration-500 hover:scale-110"
                        >
                            <FaReact
                                size={56}
                                color="#61DAFB"
                                className="animate-spin"
                                style={{
                                    animationDuration: "12s",
                                }}
                            />
                        </button>

                        {technologies.slice(1).map((tech, index) => {

                            const Icon = tech.icon;
                            const angle = (360 / (technologies.length - 1)) * index;
                            const radius = index < 4 ? 120 : index < 8 ? 200 : 270;

                            return (
                                <button
                                    key={tech.id}
                                    onClick={() => setActiveTech(tech)}
                                    className="absolute group transition-all duration-500 hover:scale-125"
                                    style={{
                                        transform: `
                                            rotate(${angle}deg)
                                            translate(${radius}px)
                                            rotate(-${angle}deg)
                                        `,
                                    }}
                                >
                                    <div
                                        className={`glass flex h-16 w-16 items-center justify-center rounded-2xl border transition-all duration-500
                                            ${activeTech.id === tech.id
                                                ? "border-primary shadow-[0_0_30px_rgba(229,57,53,.45)]"
                                                : "border-border hover:border-primary/50"
                                            }
                                        `}
                                    >
                                        <Icon size={30} color={tech.color} />
                                    </div>
                                </button>
                            );
                        })}
                    </div>

                    <div className="glass glow-border rounded-4xl border border-primary/20 p-10">
                        <div className="mb-8 flex items-center gap-5">
                            <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/10">
                                <activeTech.icon size={42} color={activeTech.color} />
                            </div>

                            <div>
                                <span className="text-sm uppercase tracking-widest text-primary">
                                    {activeTech.category}
                                </span>

                                <h3 className="mt-2 text-4xl font-bold">
                                    {activeTech.name}
                                </h3>
                            </div>
                        </div>

                        <p className="leading-8 text-muted-foreground">
                            {activeTech.description}
                        </p>

                        <div className="mt-10">
                            <div className="mb-3 flex justify-between">
                                <span>Skill Level</span>

                                <span className="font-semibold text-primary">
                                    {activeTech.level}%
                                </span>
                            </div>

                            <div className="h-3 overflow-hidden rounded-full bg-muted">
                                <div
                                    className="h-full rounded-full bg-primary transition-all duration-700"
                                    style={{
                                        width: `${activeTech.level}%`,
                                    }}
                                />
                            </div>
                        </div>

                        <div className="mt-10 grid grid-cols-2 gap-5">
                            <div className="glass rounded-2xl border border-border p-5">
                                <p className="text-sm text-muted-foreground">
                                    Projects
                                </p>

                                <h4 className="mt-2 text-3xl font-bold text-primary">
                                    {activeTech.projects}
                                </h4>
                            </div>

                            <div className="glass rounded-2xl border border-border p-5">
                                <p className="text-sm text-muted-foreground">
                                    Experience
                                </p>

                                <h4 className="mt-2 text-3xl font-bold text-primary">
                                    {activeTech.experience}
                                </h4>
                            </div>
                        </div>


                        <div className="mt-8">
                            <span className=" inline-flex rounded-full border border-primary/30 bg-primary/10 px-5 py-2 text-sm font-medium text-primary">
                                {activeTech.category}
                            </span>
                        </div>

                        <div className="mt-10 space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="h-3 w-3 rounded-full bg-primary animate-pulse" />
                                <span>Production Ready Development</span>
                            </div>

                            <div className="flex items-center gap-3">
                                <div className="h-3 w-3 rounded-full bg-primary animate-pulse" />
                                <span>Clean Architecture</span>
                            </div>

                            <div className="flex items-center gap-3">
                                <div className="h-3 w-3 rounded-full bg-primary animate-pulse" />
                                <span>Reusable Components</span>
                            </div>

                            <div className="flex items-center gap-3">
                                <div className="h-3 w-3 rounded-full bg-primary animate-pulse" />
                                <span>Performance Optimized</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-28 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="glass glow-border rounded-3xl border border-primary/20 p-8 text-center transition-all duration-500 hover:-translate-y-2">
                        <h3 className="text-5xl font-bold text-primary">
                            15+
                        </h3>

                        <p className="mt-3 text-muted-foreground">
                            Technologies
                        </p>
                    </div>

                    <div className="glass glow-border rounded-3xl border border-primary/20 p-8 text-center transition-all duration-500 hover:-translate-y-2">
                        <h3 className="text-5xl font-bold text-primary">
                            20+
                        </h3>

                        <p className="mt-3 text-muted-foreground">
                            Projects
                        </p>
                    </div>

                    <div className="glass glow-border rounded-3xl border border-primary/20 p-8 text-center transition-all duration-500 hover:-translate-y-2">

                        <h3 className="text-5xl font-bold text-primary">
                            1+
                        </h3>

                        <p className="mt-3 text-muted-foreground">
                            Years Experience
                        </p>

                    </div>

                    <div className="glass glow-border rounded-3xl border border-primary/20 p-8 text-center transition-all duration-500 hover:-translate-y-2">
                        <h3 className="text-5xl font-bold text-primary">
                            100%
                        </h3>

                        <p className="mt-3 text-muted-foreground">
                            Passion
                        </p>
                    </div>

                </div>

                <div className="relative mt-24 overflow-hidden">

                    <div className="absolute left-0 top-0 z-10 h-full w-32 bg-linear-to-r from-background to-transparent" />
                    <div className="absolute right-0 top-0 z-10 h-full w-32 bg-linear-to-l from-background to-transparent" />

                    <div className="flex animate-marquee whitespace-nowrap">
                        {[...technologies, ...technologies].map((tech, index) => {
                            const Icon = tech.icon;
                            return (
                                <div key={index} className="mx-8 flex items-center gap-3">

                                    <Icon size={24} color={tech.color} />

                                    <span className="text-lg font-medium text-muted-foreground">
                                        {tech.name}
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TechStack;