import Selvakumar from "../assets/SK1.jpeg"

import { FaArrowRight } from "react-icons/fa";

import { IoChevronDown } from "react-icons/io5";

const skills = [
    "React",
    "JavaScript",
    "TypeScript",
    "Tailwind CSS",
    "Vite",
    "Node.js",
    "Express",
    "MongoDB",
    "MySQL",
    "Frappe",
    "Git",
    "Docker",
    "Figma",
    "Postman",
    "AI APIs",
    "GitHub",
];

const dots = Array.from({ length: 30 }, (_, id) => ({
    id,
    left: (id * 37) % 100,
    top: (id * 61 + 13) % 100,
    size: 2 + ((id * 7) % 4),
    duration: 15 + ((id * 11) % 15),
    delay: (id * 5) % 6,
    opacity: 0.3 + ((id * 13) % 50) / 100,
}));

const Hero = () => {
    return (
        <section
            id="home"
            className="relative flex min-h-screen items-center overflow-hidden"
        >
            {/* Background */}
            <div className="absolute inset-0">
                <img
                    src="/bg-portfolio.png"
                    alt="Background"
                    className="h-full w-full object-cover opacity-40"
                />

                <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
            </div>

            {/* Floating Particles */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                {dots.map((dot) => (
                    <span
                        key={dot.id}
                        className="absolute rounded-full bg-primary"
                        style={{
                            width: `${dot.size}px`,
                            height: `${dot.size}px`,
                            left: `${dot.left}%`,
                            top: `${dot.top}%`,
                            opacity: dot.opacity,
                            animation: `floating ${dot.duration}s ease-in-out infinite`,
                            animationDelay: `${dot.delay}s`,
                        }}
                    />
                ))}
            </div>

            {/* Hero Content */}
            <div className="container relative z-10 mx-auto px-6 pt-32 pb-20">
                <div className="grid items-center gap-16 lg:grid-cols-2">

                    {/* Left Section */}
                    <div className="space-y-8">

                        {/* Badge */}
                        <div className="animate-fade-in">
                            <span className="glass inline-flex items-center gap-3 rounded-full px-5 py-2 text-sm font-medium text-primary">
                                <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                                Software Developer · Full-stack web
                            </span>
                        </div>

                        <div className="space-y-6">
                            <h1 className="animate-fade-in animation-delay-100 text-2xl font-bold leading-tight md:text-4xl lg:text-5xl">
                                Building{" "}
                                <span className="glow-text text-primary">
                                    thoughtful
                                </span>

                                <br />

                                web products with

                                <br />

                                <span className="font-serif font-normal italic text-white">
                                    purpose.
                                </span>
                            </h1>

                            <p className="animate-fade-in animation-delay-200 max-w-xl text-lg leading-8 text-muted-foreground">
                                Hi, I'm{" "}
                                <span className="font-semibold text-white">
                                    Selvakumar
                                </span>
                                , a Software Developer focused on React and modern web
                                technologies. I enjoy turning ideas into responsive,
                                useful products, from polished interfaces to connected
                                application features.
                            </p>
                        </div>

                        {/* CTA Buttons */}
                        <div className="animate-fade-in animation-delay-300 flex flex-wrap gap-4">

                            <a href="#contact" className="inline-flex items-center gap-3 rounded-full bg-primary px-7 py-4 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/15 transition hover:-translate-y-0.5 hover:bg-primary/90">
                                Contact Me
                                <FaArrowRight className="text-base" />
                            </a>

                            <a href="#projects" className="inline-flex items-center gap-3 rounded-full border border-white/15 px-7 py-4 text-base font-medium text-foreground transition hover:border-primary/50 hover:text-primary">
                                Explore projects
                            </a>

                        </div>

                        {/* Social Links */}
                    </div>

                    {/* Right Section */}
                    <div className="relative animate-fade-in animation-delay-300">
                        <div className="relative mx-auto max-w-md">

                            {/* Glow */}
                            <div
                                className="absolute inset-0 rounded-3xl
                                bg-gradient-to-br from-primary/30
                                via-transparent to-primary/10
                                blur-3xl animate-pulse"
                            />

                            {/* Profile Card */}
                            <div className="glass-strong relative overflow-hidden rounded-3xl p-2">

                                <img
                                    src={Selvakumar}
                                    alt="Selvakumar"
                                    className="aspect-[4/5] w-full rounded-2xl object-cover"
                                />

                                {/* Available Badge */}
                                <div className="glass absolute -right-5 bottom-8 rounded-2xl px-5 py-3 shadow-xl">

                                    <div className="flex items-center gap-3">
                                        <span className="h-3 w-3 rounded-full bg-green-500 animate-pulse" />

                                        <div>
                                            <p className="text-sm font-semibold">
                                                Available
                                            </p>

                                            <p className="text-xs text-muted-foreground">
                                                Open for Work
                                            </p>
                                        </div>
                                    </div>

                                </div>

                                {/* Experience Badge */}
                                <div className="glass absolute -left-5 top-8 rounded-2xl px-5 py-3 shadow-xl">

                                    <h3 className="text-3xl font-bold text-primary">
                                        1+
                                    </h3>

                                    <p className="text-xs text-muted-foreground">
                                        Years Experience
                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Skills */}
                <div className="mt-24 animate-fade-in animation-delay-600">

                    <p className="mb-8 text-center text-sm uppercase tracking-widest text-muted-foreground">
                        Technologies I Work With
                    </p>

                    <div className="relative overflow-hidden">

                        {/* Left Gradient */}
                        <div className="absolute left-0 top-0 z-10 h-full w-28 bg-gradient-to-r from-background to-transparent" />

                        {/* Right Gradient */}
                        <div className="absolute right-0 top-0 z-10 h-full w-28 bg-gradient-to-l from-background to-transparent" />

                        <div className="flex animate-marquee">

                            {[...skills, ...skills].map((skill, index) => (
                                <div
                                    key={index}
                                    className="flex-shrink-0 px-8 py-4"
                                >
                                    <span
                                        className="
                                        text-lg
                                        font-semibold
                                        text-muted-foreground/60
                                        transition-colors
                                        duration-300
                                        hover:text-primary"
                                    >
                                        {skill}
                                    </span>
                                </div>
                            ))}

                        </div>
                    </div>

                </div>
            </div>

            {/* Scroll Down */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-800">

                <a
                    href="#about"
                    className="group flex flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
                >
                    <span className="text-xs uppercase tracking-[0.3em]">
                        Scroll
                    </span>

                    <IoChevronDown
                        size={26}
                        className="animate-bounce"
                    />
                </a>

            </div>

        </section>
    );
};

export default Hero;
