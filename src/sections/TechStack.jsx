import { FaCss3Alt, FaDocker, FaGitAlt, FaGithub } from "react-icons/fa";
import { BsOpenai } from "react-icons/bs";
import {
    SiPython, SiJavascript, SiTypescript, SiReact, SiHtml5,
    SiTailwindcss, SiFastapi, SiMysql, SiPostgresql, SiPodman, SiPostman,
} from "react-icons/si";

const skillGroups = [
    {
        number: "01", title: "Programming",
        description: "Languages for application development and scripting.",
        skills: [
            { name: "Python", icon: SiPython, color: "#FFD43B" },
            { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
            { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
        ],
    },
    {
        number: "02", title: "Frontend development",
        description: "Building responsive interfaces for the web.",
        skills: [
            { name: "React.js", icon: SiReact, color: "#61DAFB" },
            { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
            { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
            { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8" },
        ],
    },
    {
        number: "03", title: "Backend development",
        description: "Designing Python services and API integrations.",
        skills: [
            { name: "FastAPI", icon: SiFastapi, color: "#009688" },
            { name: "REST APIs", icon: null },
        ],
    },
    {
        number: "04", title: "Database",
        description: "Working with relational databases and SQL.",
        skills: [
            { name: "SQL", icon: null },
            { name: "MySQL", icon: SiMysql, color: "#38BDF8" },
            { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
        ],
    },
    {
        number: "05", title: "DevOps & tools",
        description: "Version control, containers, and API workflows.",
        skills: [
            { name: "Git", icon: FaGitAlt, color: "#F1502F" },
            { name: "GitHub", icon: FaGithub, color: "#E2E8F0" },
            { name: "Docker", icon: FaDocker, color: "#2496ED" },
            { name: "Podman", icon: SiPodman, color: "#892CA0" },
            { name: "Postman", icon: SiPostman, color: "#FF6C37" },
        ],
    },
    {
        number: "06", title: "AI / ML",
        description: "Core concepts and modern language-model workflows.",
        skills: [
            { name: "AI/ML fundamentals", icon: null },
            { name: "RAG", icon: null },
            { name: "LLMs", icon: BsOpenai, color: "#10A37F" },
        ],
    },
];

const TechStack = () => (
    <section id="techstack" className="relative scroll-mt-28 py-20 sm:py-28">
        <div className="container relative z-10 mx-auto px-6">
            <div className="mb-12 grid gap-6 md:grid-cols-[1fr_0.7fr] md:items-end">
                <div>
                    <span className="eyebrow">Technical skills · 04</span>
                    <h2 className="section-title mt-5">Tools I use to <span className="accent-text">build and ship.</span></h2>
                </div>
                <p className="max-w-lg text-base leading-7 text-muted-foreground md:justify-self-end">
                    My current toolkit across programming, frontend and backend development, databases, delivery workflows, and AI/ML.
                </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {skillGroups.map((group) => (
                    <article key={group.number} className="skill-card">
                        <div className="flex items-center justify-between">
                            <span className="skill-number">{group.number}</span>
                            <span className="mx-4 h-px flex-1 bg-border" />
                            <span className="text-xs uppercase tracking-[0.16em] text-muted-foreground">{group.skills.length} skills</span>
                        </div>
                        <h3 className="mt-7 text-xl font-semibold tracking-tight">{group.title}</h3>
                        <p className="mt-2 min-h-12 text-sm leading-6 text-muted-foreground">{group.description}</p>
                        <div className="mt-6 flex flex-wrap gap-2">
                            {group.skills.map(({ name, icon: Icon, color }) => (
                                <span key={name} className="skill-chip">
                                    {Icon && <Icon aria-hidden="true" style={{ color }} size={16} />}
                                    {name}
                                </span>
                            ))}
                        </div>
                    </article>
                ))}
            </div>
        </div>
    </section>
);

export default TechStack;
