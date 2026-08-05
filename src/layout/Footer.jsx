import {
    FaGithub,
    FaLinkedin,
    FaInstagram,
} from "react-icons/fa";

const socialLinks = [
    {
        name: "GitHub",
        icon: FaGithub,
        href: "https://github.com/yourusername",
    },
    {
        name: "LinkedIn",
        icon: FaLinkedin,
        href: "https://linkedin.com/in/yourusername",
    },
    {
        name: "Instagram",
        icon: FaInstagram,
        href: "https://instagram.com/yourusername",
    },
];

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
        name: "Tech Stack",
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
                        <a
                            href="#"
                            className="text-3xl font-bold"
                        >
                            SK
                            <span className="text-primary">.</span>
                        </a>

                        <p className="mt-2 text-sm text-muted-foreground">
                            Building modern web experiences with React.
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

                    <div className="flex items-center gap-4">
                        {socialLinks.map((social) => {
                            const Icon = social.icon;
                            return (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="rounded-full p-3 transition-all duration-300 hover:bg-primary hover:text-white"
                                >
                                    <Icon size={18} />
                                </a>
                            );
                        })}
                    </div>
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