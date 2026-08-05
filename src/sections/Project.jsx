import {
    FaArrowUpRightFromSquare,
    FaGithub,
} from "react-icons/fa6";

import AnimatedBorderButton from "@/components/AnimatedBorderButton";

const projects = [
    {
        title: "Doc2Form AI",
        description:
            "An AI-powered platform that converts PDFs, scanned documents, and images into editable digital forms using intelligent document processing and automation.",
        image: "/projects/doc2form-ai.png",
        tags: [
            "React",
            "Node.js",
            "Express",
            "MongoDB",
            "Tailwind CSS",
            "OpenAI",
        ],
        link: "#",
        github: "#",
    },
    {
        title: "Checklist Builder",
        description:
            "A drag-and-drop checklist builder with reusable components, conditional logic, mobile preview, schema validation, and dynamic form generation.",
        image: "/projects/checklist-builder.png",
        tags: [
            "React",
            "JavaScript",
            "Zustand",
            "Tailwind CSS",
            "React DnD",
        ],
        link: "#",
        github: "#",
    },
    {
        title: "Developer Portfolio",
        description:
            "A modern developer portfolio featuring glassmorphism UI, smooth animations, responsive layouts, EmailJS contact form, and reusable React components.",
        image: "/projects/portfolio.png",
        tags: [
            "React",
            "Tailwind CSS",
            "EmailJS",
            "React Icons",
            "Vite",
        ],
        link: "#",
        github: "#",
    },
    {
        title: "MERN Task Manager",
        description:
            "A full-stack task management application with JWT authentication, dashboards, CRUD operations, role-based access, and REST APIs.",
        image: "/projects/task-manager.png",
        tags: [
            "React",
            "Node.js",
            "Express",
            "MongoDB",
            "JWT",
        ],
        link: "#",
        github: "#",
    },
];

const Projects = () => {
    return (
        <section
            id="projects"
            className="relative overflow-hidden py-24"
        >
            <div className="absolute right-0 top-1/4 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
            <div className="absolute bottom-1/4 left-0 h-72 w-72 rounded-full bg-highlight/5 blur-3xl" />

            <div className="container relative z-10 mx-auto px-6">
                <div className="mx-auto mb-20 max-w-3xl text-center">
                    <span className="animate-fade-in text-sm font-semibold uppercase tracking-[0.3em] text-primary">
                        Featured Projects
                    </span>

                    <h2 className="animate-fade-in animation-delay-100 mt-6 text-4xl font-bold md:text-5xl lg:text-6xl">
                        Projects that
                        <span className="font-serif font-normal italic text-white">
                            {" "}create impact.
                        </span>
                    </h2>
                    <p className="animate-fade-in animation-delay-200 mt-6 text-lg leading-8 text-muted-foreground">
                        A collection of projects showcasing my expertise in React,
                        JavaScript, MERN Stack, AI integration, and modern web development.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2">
                    {projects.map((project, index) => (
                        <div
                            key={project.title}
                            className="glass group overflow-hidden rounded-3xl border border-border transition-all duration-500 hover:-translate-y-3 hover:border-primary/40 hover:shadow-2xl animate-fade-in"
                            style={{
                                animationDelay: `${(index + 1) * 150}ms`,
                            }}
                        >

                            <div className="relative aspect-video overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-background via-background/30 to-transparent" />

                                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 transition-all duration-300 group-hover:opacity-100">

                                    <a
                                        href={project.link}
                                        className="glass rounded-full p-4 transition-all duration-300 hover:bg-primary hover:text-white"
                                    >
                                        <FaArrowUpRightFromSquare size={18} />
                                    </a>

                                    <a
                                        href={project.github}
                                        className="glass rounded-full p-4 transition-all duration-300 hover:bg-primary hover:text-white"
                                    >
                                        <FaGithub size={18} />
                                    </a>
                                </div>
                            </div>

                            <div className="space-y-5 p-7">
                                <div className="flex items-start justify-between">
                                    <h3 className="text-2xl font-bold transition-colors group-hover:text-primary">
                                        {project.title}
                                    </h3>
                                    <FaArrowUpRightFromSquare className="transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary" />
                                </div>

                                <p className="leading-7 text-muted-foreground">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-3">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="rounded-full border border-border bg-surface px-4 py-2 text-xs font-medium text-muted-foreground transition-all duration-300 hover:border-primary hover:text-primary"
                                        >
                                            {tag}
                                        </span>

                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 flex justify-center">
                    <AnimatedBorderButton>
                        View All Projects
                        <FaArrowUpRightFromSquare />
                    </AnimatedBorderButton>
                </div>
            </div>
        </section>
    );
};

export default Projects;