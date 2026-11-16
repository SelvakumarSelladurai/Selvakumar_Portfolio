import {
    FaCode,
    FaRocket,
    FaUsers,
    FaLightbulb,
} from "react-icons/fa";

const highlights = [
    {
        icon: FaCode,
        title: "Frontend craft",
        description:
            "Responsive React interfaces, reusable components, and clear user flows built with modern web tools.",
    },
    {
        icon: FaRocket,
        title: "Backend foundations",
        description:
            "Developing Python APIs with FastAPI and working with REST patterns and PostgreSQL data.",
    },
    {
        icon: FaUsers,
        title: "Product thinking",
        description:
            "Turning requirements into practical features for student, learning, and workforce products.",
    },
    {
        icon: FaLightbulb,
        title: "AI / ML exploration",
        description:
            "Building my understanding of retrieval-augmented generation, large language models, and AI/ML fundamentals.",
    },
];

const About = () => {
    return (
        <section
            id="about"
            className="relative overflow-hidden py-16"
        >
            <div className="container relative z-10 mx-auto px-6">

                <div className="grid items-center gap-16 lg:grid-cols-2">

                    <div className="space-y-8">

                        <div className="animate-fade-in">
                            <span className="eyebrow">About me · 01</span>
                        </div>

                        <div className="space-y-6">

                            <h2 className="animate-fade-in animation-delay-100 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">

                                I build useful
                                <span className="glow-text text-primary">{" "}web products.</span>
                                <br />
                                <span className="font-serif font-normal italic text-white">
                                    From interface to API.
                                </span>

                            </h2>

                            <div className="animate-fade-in animation-delay-200 space-y-5 text-lg leading-8 text-muted-foreground">

                                <p>
                                    Hello! I'm{" "}
                                    <span className="font-semibold text-white">
                                        Selvakumar
                                    </span>
                                    , a software developer focused on thoughtful interfaces
                                    and reliable web applications. I work with React,
                                    JavaScript, TypeScript, and Tailwind CSS on the frontend,
                                    and Python with FastAPI and REST APIs on the backend.
                                </p>

                                <p>
                                    I also work with SQL, MySQL, PostgreSQL, Git, GitHub,
                                    Docker, and Podman. I care about responsive design,
                                    maintainable code, and software that solves real needs.
                                </p>

                                <p>
                                    My professional work includes software for healthcare,
                                    manufacturing, and CRM. In my own projects, I explore
                                    education and workforce products, while building my
                                    knowledge of AI/ML, RAG, and large language models.
                                </p>

                            </div>

                        </div>

                        <div className="animate-fade-in animation-delay-300 rounded-2xl border border-primary/15 bg-primary/[0.04] p-5 sm:p-6">
                            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Core stack</p>
                            <div className="mt-4 flex flex-wrap gap-2">
                                {["React", "TypeScript", "Tailwind CSS", "Python", "FastAPI", "REST APIs", "PostgreSQL", "Docker", "GitHub", "RAG · LLMs"].map((skill) => (
                                    <span key={skill} className="rounded-full border border-border bg-background/60 px-3 py-1.5 text-xs font-medium text-muted-foreground">{skill}</span>
                                ))}
                            </div>
                        </div>

                    </div>

                    {/* Right Section */}

                    <div className="grid gap-6 sm:grid-cols-2">

                        {highlights.map((item, index) => {

                            const Icon = item.icon;

                            return (

                                <div
                                    key={item.title}
                                    className="glass group rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2 hover:border-primary/30 hover:shadow-2xl animate-fade-in"
                                    style={{
                                        animationDelay: `${(index + 1) * 150}ms`,
                                    }}
                                >

                                    <div
                                        className="
                                            mb-6
                                            flex
                                            h-14
                                            w-14
                                            items-center
                                            justify-center
                                            rounded-2xl
                                            bg-primary/10
                                            text-primary
                                            transition-all
                                            duration-300
                                            group-hover:scale-110
                                            group-hover:bg-primary
                                            group-hover:text-white
                                        "
                                    >
                                        <Icon size={26} />
                                    </div>

                                    <h3 className="mb-3 text-xl font-semibold">
                                        {item.title}
                                    </h3>

                                    <p className="leading-7 text-muted-foreground">
                                        {item.description}
                                    </p>

                                </div>

                            );

                        })}

                    </div>

                </div>

            </div>

        </section>
    );
};

export default About;
