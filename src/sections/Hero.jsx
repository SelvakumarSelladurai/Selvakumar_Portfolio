import { useMemo } from "react";
import backgroundImage from "../../public/bg-portfolio.png";

const Hero = () => {
    const dots = useMemo(
        () =>
            Array.from({ length: 30 }, (_, i) => ({
                id: i,
                left: Math.random() * 100,
                top: Math.random() * 100,
                size: Math.random() * 5 + 2,
                duration: Math.random() * 15 + 15,
                delay: Math.random() * 8,
                opacity: Math.random() * 0.5 + 0.3,
            })),
        []
    );

    return (
        <section className="relative flex min-h-screen items-center overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0">
                <img
                    src={backgroundImage}
                    alt="Background"
                    className="h-full w-full object-cover opacity-40"
                />

                <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
            </div>

            {/* Floating Dots */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                {dots.map((dot) => (
                    <span
                        key={dot.id}
                        className="absolute rounded-full bg-red-500"
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

            {/* Content */}
            <div className="container relative z-10 mx-auto px-6 pt-32 pb-20">
                <div className="grid items-center gap-12 lg:grid-cols-2">
                    <div className="space-y-8">
                        <div className="animate-fade-in">
                            <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm text-primary">
                                <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                                Software Developer • React Specialist
                            </span>

                            <div>
                                <h1>
                                    Crafting <span className="text-primary glow-text">digital</span>
                                    <br />
                                    experiences with
                                    <br />
                                    <span className="font-serif italic font-normal text-white">
                                        precision.
                                    </span>
                                </h1>
                            </div>
                            <p className="text-lg text-muted -foreground max-w-lg">
                                Hi, I'm Selvakumar - Software engineer specializing in React, Next.js and TypeScript, I build scalable, performant web application that users love.
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;