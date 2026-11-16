import { FaArrowUpRightFromSquare, FaGithub } from "react-icons/fa6";

const projects = [
    {
        title: "Campus360",
        category: "College ERP",
        status: "Planned · starter foundation ready",
        description: "A planned college ERP for managing student records, attendance, fees, exams, and placements, with dedicated student and parent portals.",
        details: "Redis and Celery are planned. The project license is still to be decided.",
        mark: "C360",
        accent: "#c6f36b",
        github: "https://github.com/SelvakumarSelladurai/Campus360",
        githubLabel: "View Campus360 on GitHub",
        tags: ["React 19", "TypeScript", "Vite", "Tailwind CSS 4", "FastAPI", "Python 3.12", "SQLAlchemy 2", "Pydantic 2", "PostgreSQL 16", "Redis · planned", "Celery · planned"],
    },
    {
        title: "CodeNest",
        category: "Learning platform",
        status: "Structured learning journey",
        description: "A guided path from web development fundamentals to advanced full-stack skills, organized into clear stages and topics.",
        details: "Learners track progress, get recommendations for what to study next, and build practical skills through lessons, hands-on practice, and revision.",
        mark: "CN",
        accent: "#82d9ca",
        github: "https://github.com/SelvakumarSelladurai/CodeNest",
        githubLabel: "View CodeNest on GitHub",
        tags: ["Learning roadmap", "Progress tracking", "Next-step recommendations", "Lessons", "Hands-on practice", "Revision"],
    },
    {
        title: "WorkPro360",
        category: "Employee management system",
        status: "Workforce operations",
        description: "A modern React.js employee management system that brings workforce operations and employee information into one centralized workspace.",
        details: "Designed to help organizations manage employee records, attendance, leave, payroll, and employee lifecycle information in a simple, secure way.",
        mark: "W360",
        accent: "#98b7ff",
        github: "https://github.com/SelvakumarSelladurai/",
        githubLabel: "View Selvakumar’s GitHub profile",
        tags: ["React.js", "Employee records", "Attendance", "Leave", "Payroll", "Workforce management"],
    },
];

const Projects = () => (
    <section id="projects" className="relative scroll-mt-28 overflow-hidden pt-20 pb-8 sm:pt-28 sm:pb-10">
        <div aria-hidden="true" className="absolute right-0 top-1/4 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
        <div aria-hidden="true" className="absolute bottom-1/4 left-0 h-72 w-72 rounded-full bg-highlight/5 blur-3xl" />

        <div className="container relative z-10 mx-auto px-6">
            <div className="mb-12 grid gap-6 md:grid-cols-[1fr_0.7fr] md:items-end">
                <div>
                    <span className="eyebrow">Selected work · 01</span>
                    <h2 className="section-title mt-5">Projects built around <span className="accent-text">real needs.</span></h2>
                </div>
                <p className="max-w-lg text-base leading-7 text-muted-foreground md:justify-self-end">
                    Products and ideas focused on education, workforce management, and useful software foundations.
                </p>
            </div>

            <div className="grid gap-5 xl:grid-cols-3">
                {projects.map((project, index) => (
                    <article key={project.title} className="glass group min-w-0 overflow-hidden rounded-3xl border border-border transition duration-300 hover:-translate-y-1 hover:border-primary/35 hover:shadow-2xl" style={{ animationDelay: `${(index + 1) * 120}ms` }}>
                        <div className="relative flex aspect-[1.65/1] items-end overflow-hidden p-6 sm:p-8" style={{ background: `radial-gradient(ellipse at 80% 20%, ${project.accent}33, transparent 48%), linear-gradient(135deg, #202b23, #111713)` }}>
                            <span aria-hidden="true" className="glass absolute right-6 top-6 rounded-xl border-white/10 px-3 py-2 text-sm font-bold tracking-wide text-white/75 sm:right-7 sm:top-7">{project.mark}</span>
                            <div className="relative z-10">
                                <p className="text-xs font-semibold uppercase tracking-[0.18em]" style={{ color: project.accent }}>{project.category}</p>
                                <h3 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">{project.title}</h3>
                                <p className="mt-2 text-sm text-white/65">{project.status}</p>
                            </div>
                            <a href={project.github} target="_blank" rel="noreferrer" aria-label={project.githubLabel} title={project.githubLabel} className="glass absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full transition hover:border-primary/50 hover:text-primary">
                                <FaGithub aria-hidden="true" size={19} />
                            </a>
                        </div>

                        <div className="flex h-full flex-col space-y-4 p-5 sm:p-7">
                            <p className="text-sm leading-6 text-muted-foreground">{project.description}</p>
                            <p className="text-sm leading-6 text-muted-foreground">{project.details}</p>
                            <div className="flex flex-wrap gap-2 pt-1">
                                {project.tags.map((tag) => <span key={tag} className="rounded-full border border-border bg-surface px-3 py-1.5 text-xs font-medium text-muted-foreground">{tag}</span>)}
                            </div>
                            <a href={project.github} target="_blank" rel="noreferrer" className="mt-auto inline-flex items-center gap-2 pt-3 text-sm font-semibold text-primary hover:underline">
                                {project.githubLabel}<FaArrowUpRightFromSquare aria-hidden="true" size={13} />
                            </a>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    </section>
);

export default Projects;
