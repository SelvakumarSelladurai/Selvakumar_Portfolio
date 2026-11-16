const links = [
    {
        name: "About",
        href: "#about",
    },
    {
        name: "Projects",
        href: "#projects",
    },
    {
        name: "Experience",
        href: "#experience",
    },
    {
        name: "Education",
        href: "#education",
    },
    {
        name: "Skills",
        href: "#techstack",
    },
    {
        name: "Contact",
        href: "#contact",
    },
];

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="border-t border-border bg-background">
            <div className="container mx-auto px-6 py-2">

                <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
                    <div>
                        <a href="#home" className="text-3xl font-bold">
                            selva
                            <span className="text-primary">.</span>
                        </a>

                        <p className="mt-2 text-sm text-muted-foreground">
                            Frontend developer building with React, Python, and FastAPI.
                        </p>

                    </div>

                    <nav className="flex flex-wrap items-center justify-center gap-6">
                        {links.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-sm text-muted-foreground transition-colors duration-300 hover:text-primary"
                            >
                                {link.name}
                            </a>
                        ))}
                    </nav>

                    <a href="mailto:selvakumarselladurai5973@gmail.com" className="text-sm font-medium text-primary hover:underline">Email me ↗</a>
                </div>

                <div className="mt-8 border-t border-border pt-6 text-center">
                    <p className="text-sm text-muted-foreground">
                        © {year} Selvakumar. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
