const experiences = [
    {
        id: 1,
        period: "Aug 2025 — Present",
        role: "Software Developer",
        company: "Current Organization",
        description:
            "Developing scalable web applications using React.js, JavaScript, Tailwind CSS, and modern frontend technologies. Building reusable components, integrating REST APIs, optimizing application performance, and collaborating with cross-functional teams to deliver production-ready solutions.",
        technologies: [
            "React",
            "JavaScript",
            "Tailwind CSS",
            "REST API",
            "Git",
            "Frappe",
        ],
        current: true,
    },

    {
        id: 2,
        period: "2025",
        role: "Frontend Developer",
        company: "Professional Experience",
        description:
            "Worked on responsive web applications, implemented reusable UI components, integrated backend services, fixed production issues, and improved overall user experience while following clean coding practices.",
        technologies: [
            "React",
            "JavaScript",
            "HTML5",
            "CSS3",
            "Bootstrap",
            "Git",
        ],
        current: false,
    },

    {
        id: 3,
        period: "2025",
        role: "Full Stack Project Developer",
        company: "Personal Projects",
        description:
            "Designed and developed multiple full-stack applications including an AI-powered document automation platform, dynamic checklist builder, and responsive portfolio website while focusing on scalability and maintainability.",
        technologies: [
            "React",
            "Node.js",
            "Express",
            "MongoDB",
            "Tailwind CSS",
            "Zustand",
        ],
        current: false,
    },

    {
        id: 4,
        period: "2024 — Present",
        role: "Continuous Learning",
        company: "Professional Development",
        description:
            "Continuously improving problem-solving skills through Data Structures & Algorithms, learning advanced React patterns, testing frameworks, backend development, AI integration, and modern software engineering practices.",
        technologies: [
            "DSA",
            "React",
            "Node.js",
            "Jest",
            "Playwright",
            "AI",
        ],
        current: false,
    },
];

const Experience = () => {
    return (
        <section
            id="experience"
            className="relative overflow-hidden py-16"
        >
            <div className="absolute left-1 /4 top - 1 / 2 h - 96 w - 96 - translate - y - 1 / 2 rounded - full bg - primary / 5 blur - 3xl" />
            < div className="container relative z-10 mx-auto px-6" >
                <div className="mb-20 max-w-3xl">
                    <span className="animate-fade-in text-sm font-semibold uppercase tracking-[0.3em] text-primary">
                        Professional Journey
                    </span>

                    <h2 className="animate-fade-in animation-delay-100 mt-6 text-4xl font-bold md:text-5xl lg:text-6xl">
                        Experience that
                        <span className="font-serif font-normal italic text-white">
                            {" "}builds expertise.
                        </span>
                    </h2>

                    <p className="animate-fade-in animation-delay-200 mt-6 text-lg leading-8 text-muted-foreground">
                        My journey as a software developer, building modern web
                        applications, solving real-world problems, and
                        continuously improving through professional experience,
                        personal projects, and constant learning.
                    </p>
                </div>

                <div className="relative">

                    <div className="timeline-glow absolute left-0 top-0 bottom-0 w-0.5 bg-linear-to-b from-primary via-primary/40 to-transparent md:left-1/2 md:-translate-x-1/2" />
                    <div className="space-y-14">
                        {experiences.map((exp, index) => (
                            <div
                                key={exp.id}
                                className="relative grid gap-10 md:grid-cols-2 animate-fade-in"
                                style={{
                                    animationDelay: `${(index + 1) * 150}ms`,
                                }}
                            >

                                <div
                                    className="absolute left-0 top-6 h-4 w-4 -translate-x-1/2 rounded-full bg-primary ring-4 ring-background md:left-1/2"
                                >
                                    {exp.current && (
                                        <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                                    )}
                                </div>

                                <div
                                    className={`pl-8 md:pl-0
                                        ${index % 2 === 0
                                            ? "md:pr-20 md:text-right"
                                            : "md:col-start-2 md:pl-20"
                                        }
                                    `}
                                >
                                    <div className="glass group rounded-3xl border border-primary/20 p-8 transition-all duration-500 hover:-translate-y-2 hover:border-primary/40 hover:shadow-2xl">

                                        <span className="text-sm font-semibold uppercase tracking-widest text-primary">
                                            {exp.period}
                                        </span>

                                        <h3 className="mt-3 text-2xl font-bold">
                                            {exp.role}
                                        </h3>

                                        <p className="mt-2 text-lg text-muted-foreground">
                                            {exp.company}
                                        </p>

                                        {exp.current && (
                                            <span className="mt-4 inline-flex rounded-full bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-primary">
                                                Current Position
                                            </span>

                                        )}
                                        <p className="mt-6 leading-8 text-muted-foreground">
                                            {exp.description}
                                        </p>

                                        <div className={`mt-8 flex flex-wrap gap-3
                                                ${index % 2 === 0
                                                ? "md:justify-end"
                                                : ""
                                            }
                                            `}
                                        >
                                            {exp.technologies.map((tech) => (
                                                <span key={tech}
                                                    className="rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary transition-all duration-300 hover:bg-primary hover:text-white"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-24 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="glass rounded-3xl p-8 text-center">
                        <h3 className="text-4xl font-bold text-primary">
                            1+
                        </h3>

                        <p className="mt-3 text-muted-foreground">
                            Years Experience
                        </p>
                    </div>
                    ....
                    <div className="glass rounded-3xl p-8 text-center">
                        <h3 className="text-4xl font-bold text-primary">
                            20+
                        </h3>

                        <p className="mt-3 text-muted-foreground">
                            Projects Completed
                        </p>
                    </div>

                    <div className="glass rounded-3xl p-8 text-center">
                        <h3 className="text-4xl font-bold text-primary">
                            15+
                        </h3>

                        <p className="mt-3 text-muted-foreground">
                            Technologies
                        </p>
                    </div>

                    <div className="glass rounded-3xl p-8 text-center">
                        <h3 className="text-4xl font-bold text-primary">
                            100%
                        </h3>

                        <p className="mt-3 text-muted-foreground">
                            Passion for Learning
                        </p>
                    </div>
                </div>
            </div >
        </section >
    );
};

export default Experience;