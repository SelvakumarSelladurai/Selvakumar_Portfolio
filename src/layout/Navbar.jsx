import { useState } from "react";
import Button from "../components/Button"
import { IoMdMenu } from "react-icons/io";
import { MdOutlineCancel } from "react-icons/md";
..
const navLinks = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Project" },
    { href: "#experience", label: "Experience" },
    { href: "#techstack", label: "Tech Stack" },
];

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    return (
        <header className="fixed top-0 left-0 right-0 bg-transparent py-5 z-50">
            <nav className="container mx-auto px-6 flex items-center justify-between">
                <a href="#" className="text-xl font-bold tracking-light hover:text-primary">
                    SK<span className="text-primary">.</span>
                </a>

                <div className="hidden md:flex items-center gap-2 rounded-full border border-white/10 bg-background/80 p-2 shadow-xl backdrop-blur-xl">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="group relative rounded-full px-5 py-2.5 text-sm font-medium text-muted-foreground transition-all duration-300 hover:bg-primary/10 hover:text-primary"
                        >
                            {link.label}

                            <span className="absolute bottom-1 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-primary transition-all duration-300 group-hover:w-8"></span>
                        </a>
                    ))}
                </div>
                <div
                    href="#contact"
                    className="hidden md:block"
                >
                    <Button>
                        Contact Me
                    </Button>
                </div>

                {/*Mobile Menu Button*/}
                <button className="md:hidden p-2 text-foreground cursor-pointer" onClick={() => setIsMobileMenuOpen((prev) => !prev)}>
                    {isMobileMenuOpen ? <MdOutlineCancel size={24} /> : <IoMdMenu size={24} />}
                </button>
            </nav>

            {/* Mobile Menu*/}
            {isMobileMenuOpen && (
                <div className="absolute top-full left-0 w-full md:hidden animate-in fade-in slide-in-from-top-3 duration-300">
                    <div className="mx-2 rounded-2xl border border-white/10 bg-background/90 backdrop-blur-xl shadow-2xl">
                        <div className="flex flex-col gap-2 p-6">
                            {navLinks.map((link, index) => (
                                <a
                                    key={index}
                                    href={link.href}
                                    className="group flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium text-muted-foreground transition-all duration-300 hover:bg-primary/10 hover:text-primary"
                                >
                                    {link.label}
                                </a>
                            ))}

                            <div className="my-2 h-px bg-border" />

                            <Button>Contact Me</Button>
                        </div>
                    </div>
                </div>
            )}
        </header>
    )
}

export default Navbar
