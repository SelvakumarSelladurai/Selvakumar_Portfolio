const roles = [
    {
        type: "Professional experience",
        period: "Jul 2025 — Present",
        role: "Frontend Developer · Software Development",
        company: "Blue Fire Xperts Info Tech",
        location: "Tiruchirappalli, Tamil Nadu",
        description: [
            "Develop and customize responsive web interfaces using React.js, JavaScript, HTML5, CSS3, and Tailwind CSS.",
            "Work with Frappe Framework and ERPNext on application customization, client/server scripting, and business workflows.",
            "Contribute to healthcare, manufacturing, CRM, and enterprise software projects, delivering solutions for real-world requirements.",
            "Use Git, GitHub, Docker, Podman, REST APIs, Python, MariaDB, and PostgreSQL across development and deployment workflows.",
        ],
        skills: ["React.js", "Frappe", "ERPNext", "Python", "REST APIs", "Docker", "Podman", "MariaDB", "PostgreSQL"],
        current: true,
    },
    {
        type: "Internship",
        period: "Nov — Dec 2024",
        role: "Django in Python Intern",
        company: "Prime Solution",
        description: ["Learned Django fundamentals and gained practical exposure to building basic web applications with Python and Django."],
        skills: ["Python", "Django"],
    },
    {
        type: "Internship",
        period: "May — Jun 2023",
        role: "Full Stack Web Development Intern",
        company: "Unified Mentor Pvt. Ltd.",
        description: ["Learned HTML5, CSS3, JavaScript, and React.js for frontend development, with basic exposure to Node.js for backend development."],
        skills: ["HTML5", "CSS3", "JavaScript", "React.js", "Node.js"],
    },
    {
        type: "Internship",
        period: "Jun — Jul 2022",
        role: "Python Programming Intern",
        company: "R2C Technologies",
        description: ["Learned Python fundamentals, including variables, data types, control flow, functions, and basic problem-solving concepts."],
        skills: ["Python", "Programming fundamentals"],
    },
];

const Experience = () => (
    <section id="experience" className="relative scroll-mt-28 overflow-hidden pt-6 pb-20 sm:pt-8 sm:pb-28">
        <div className="container relative z-10 mx-auto px-6">
            <div className="mb-12 max-w-3xl">
                <span className="eyebrow">Career · 02</span>
                <h2 className="section-title mt-5">Experience that <span className="accent-text">moves work forward.</span></h2>
                <p className="mt-5 text-base leading-7 text-muted-foreground">Professional experience and internships across frontend development, enterprise software, and Python.</p>
            </div>

            <div className="relative space-y-5">
                {roles.map((item) => (
                    <article key={`${item.company}-${item.period}`} className="glass rounded-3xl border border-border p-5 transition-colors hover:border-primary/30 sm:p-8">
                        <div className="grid gap-5 md:grid-cols-[180px_1fr] md:gap-8">
                            <div>
                                <span className="inline-flex rounded-full bg-primary/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">{item.type}</span>
                                <p className="mt-3 text-sm font-medium text-muted-foreground">{item.period}</p>
                            </div>
                            <div>
                                <div className="flex flex-wrap items-start justify-between gap-2">
                                    <div>
                                        <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">{item.role}</h3>
                                        <p className="mt-1 text-base text-primary">{item.company}</p>
                                    </div>
                                    {item.current && <span className="rounded-full border border-primary/25 px-3 py-1 text-xs text-primary">Current role</span>}
                                </div>
                                {item.location && <p className="mt-2 text-sm text-muted-foreground">{item.location}</p>}
                                <ul className="mt-5 space-y-2.5 text-sm leading-6 text-muted-foreground sm:text-base">
                                    {item.description.map((line) => <li key={line} className="flex gap-3"><span aria-hidden="true" className="mt-[0.65rem] h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />{line}</li>)}
                                </ul>
                                <div className="mt-5 flex flex-wrap gap-2">
                                    {item.skills.map((skill) => <span key={skill} className="rounded-full border border-border px-3 py-1.5 text-xs text-muted-foreground">{skill}</span>)}
                                </div>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    </section>
);

export default Experience;
