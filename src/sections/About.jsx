import {
    FaCode,
    FaRocket,
    FaUsers,
    FaLightbulb,
} from "react-icons/fa";

const highlights = [
    {
        icon: FaCode,
        title: "Clean Code",
        description:
            "Writing clean, reusable, and maintainable code following modern development standards and best practices.",
    },
    {
        icon: FaRocket,
        title: "Performance",
        description:
            "Building fast, optimized, and responsive web applications focused on exceptional user experience.",
    },
    {
        icon: FaUsers,
        title: "Collaboration",
        description:
            "Working effectively with teams, understanding requirements, and delivering quality software solutions.",
    },
    {
        icon: FaLightbulb,
        title: "Continuous Learning",
        description:
            "Constantly exploring new technologies and improving my skills to stay updated with modern web development.",
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
                            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
                                About Me
                            </span>
                        </div>

                        <div className="space-y-6">

                            <h2 className="animate-fade-in animation-delay-100 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">

                                Building
                                <span className="glow-text text-primary">
                                    {" "}modern{" "}
                                </span>

                                web experiences

                                <br />

                                <span className="font-serif font-normal italic text-white">
                                    with passion.
                                </span>

                            </h2>

                            <div className="animate-fade-in animation-delay-200 space-y-5 text-lg leading-8 text-muted-foreground">

                                <p>
                                    Hello! I'm{" "}
                                    <span className="font-semibold text-white">
                                        Selvakumar
                                    </span>
                                    , a Software Developer passionate about
                                    building modern, scalable, and responsive
                                    web applications using React, JavaScript,
                                    Node.js, Express, and MongoDB.
                                </p>

                                <p>
                                    I enjoy transforming ideas into real-world
                                    digital products by focusing on clean code,
                                    reusable components, responsive design,
                                    accessibility, and performance optimization.
                                </p>

                                <p>
                                    My goal is to continuously improve as a
                                    Full Stack Developer by learning modern
                                    technologies, solving challenging problems,
                                    and building applications that provide an
                                    outstanding user experience.
                                </p>

                            </div>

                        </div>

                        <div className="glass glow-border animate-fade-in animation-delay-300 rounded-3xl p-8">

                            <h3 className="mb-4 text-xl font-semibold text-white">
                                My Mission
                            </h3>

                            <p className="text-lg italic leading-8 text-muted-foreground">
                                "I believe great software is more than writing
                                code—it's about solving real problems, creating
                                meaningful user experiences, and continuously
                                improving through learning and innovation."
                            </p>

                        </div>

                        {/* Stats */}

                        <div className="grid grid-cols-2 gap-6 animate-fade-in animation-delay-400">

                            <div className="glass rounded-2xl p-6 text-center">
                                <h3 className="text-4xl font-bold text-primary">
                                    1+
                                </h3>

                                <p className="mt-2 text-sm text-muted-foreground">
                                    Years Experience
                                </p>
                            </div>

                            <div className="glass rounded-2xl p-6 text-center">
                                <h3 className="text-4xl font-bold text-primary">
                                    20+
                                </h3>

                                <p className="mt-2 text-sm text-muted-foreground">
                                    Projects Built
                                </p>
                            </div>

                            <div className="glass rounded-2xl p-6 text-center">
                                <h3 className="text-4xl font-bold text-primary">
                                    15+
                                </h3>

                                <p className="mt-2 text-sm text-muted-foreground">
                                    Technologies
                                </p>
                            </div>

                            <div className="glass rounded-2xl p-6 text-center">
                                <h3 className="text-4xl font-bold text-primary">
                                    ∞
                                </h3>

                                <p className="mt-2 text-sm text-muted-foreground">
                                    Learning Mindset
                                </p>
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