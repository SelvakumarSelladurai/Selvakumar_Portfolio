import { useState } from "react";
import emailjs from "@emailjs/browser";

import Button from "@/components/Button";

import {
    FaEnvelope,
    FaPhoneAlt,
    FaMapMarkerAlt,
    FaPaperPlane,
    FaCheckCircle,
    FaExclamationCircle,
} from "react-icons/fa";

const contactInfo = [
    {
        icon: FaEnvelope,
        label: "Email",
        value: "selvakumarselladurai5973@gmail.com",
        href: "mailto:selvakumarselladurai5973@gmail.com",
    },
    {
        icon: FaPhoneAlt,
        label: "Phone",
        value: "+91 7010614358",
        href: "tel:+917010614358",
    },
    {
        icon: FaMapMarkerAlt,
        label: "Location",
        value: "Udumalaipettai, Tamil Nadu, India",
        href: "#",
    },
];

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [isLoading, setIsLoading] = useState(false);

    const [submitStatus, setSubmitStatus] = useState({
        type: null,
        message: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        setIsLoading(true);
        setSubmitStatus({
            type: null,
            message: "",
        });

        try {
            const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
            const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
            const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

            if (!serviceId || !templateId || !publicKey) {
                throw new Error("EmailJS environment variables are missing.");
            }

            await emailjs.send(
                serviceId,
                templateId,
                {
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                },
                publicKey
            );

            setSubmitStatus({
                type: "success",
                message:
                    "Message sent successfully. I'll get back to you soon!",
            });

            setFormData({
                name: "",
                email: "",
                message: "",
            });
        } catch (err) {
            console.error(err);

            setSubmitStatus({
                type: "error",
                message:
                    err.text ||
                    err.message ||
                    "Failed to send message. Please try again later.",
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section
            id="contact"
            className="relative overflow-hidden py-8"
        >

            <div className="absolute inset-0">
                <div className=" absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />

                <div className="absolute bottom-1/4 right-1/4 h-72 w-72 rounded-full bg-highlight/10 blur-3xl" />
            </div>

            <div className="container relative z-10 mx-auto px-6">
                <div className="mx-auto mb-20 max-w-3xl text-center">

                    <span className="animate-fade-in text-sm font-semibold uppercase tracking-[0.3em] text-primary">
                        Contact
                    </span>

                    <h2 className="animate-fade-in animation-delay-100 mt-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
                        Let's build
                        <span className="font-serif font-normal italic text-white">
                            {" "}something amazing.
                        </span>
                    </h2>

                    <p className="animate-fade-in animation-delay-200 mt-6 text-lg leading-8 text-muted-foreground">
                        Have an idea, project, or opportunity you'd like to discuss?
                        I'd love to hear from you. Feel free to send me a message,
                        and let's create something meaningful together.
                    </p>
                </div>

                <div className="grid gap-12 lg:grid-cols-2">
                    <div className="glass rounded-3xl border border-primary/20 p-8 animate-fade-in animation-delay-300">
                        <form
                            onSubmit={handleSubmit}
                            className="space-y-6"
                        >
                            <div>
                                <label htmlFor="name" className="mb-2 block text-sm font-medium">
                                    Full Name
                                </label>

                                <input
                                    id="name"
                                    type="text"
                                    required
                                    placeholder="Enter your name"
                                    value={formData.name}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            name: e.target.value,
                                        })
                                    }
                                    className="w-full rounded-xl border border-border bg-surface px-5 py-3 outline-none transition-all duration-300 focus:border-primary focus:ring-2 focus:ring-primary/20"
                                />

                            </div>
                            <div>

                                <label
                                    htmlFor="email"
                                    className="mb-2 block text-sm font-medium"
                                >
                                    Email Address
                                </label>

                                <input
                                    id="email"
                                    type="email"
                                    required
                                    placeholder="your@email.com"
                                    value={formData.email}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            email: e.target.value,
                                        })
                                    }
                                    className="
                                        w-full
                                        rounded-xl
                                        border
                                        border-border
                                        bg-surface
                                        px-5
                                        py-3
                                        outline-none
                                        transition-all
                                        duration-300
                                        focus:border-primary
                                        focus:ring-2
                                        focus:ring-primary/20
                                    "
                                />

                            </div>

                            {/* Message */}

                            <div>

                                <label
                                    htmlFor="message"
                                    className="mb-2 block text-sm font-medium"
                                >
                                    Message
                                </label>

                                <textarea
                                    id="message"
                                    rows={6}
                                    required
                                    placeholder="Tell me about your project..."
                                    value={formData.message}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            message: e.target.value,
                                        })
                                    }
                                    className="
                                        w-full
                                        resize-none
                                        rounded-xl
                                        border
                                        border-border
                                        bg-surface
                                        px-5
                                        py-3
                                        outline-none
                                        transition-all
                                        duration-300
                                        focus:border-primary
                                        focus:ring-2
                                        focus:ring-primary/20
                                    "
                                />

                            </div>

                            {/* Submit Button */}

                            <Button
                                type="submit"
                                size="lg"
                                disabled={isLoading}
                                className="w-full"
                            >
                                {isLoading ? (
                                    <>
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        Send Message
                                        <FaPaperPlane className="text-sm" />
                                    </>
                                )}
                            </Button>

                            {/* Success / Error */}

                            {submitStatus.type && (

                                <div
                                    className={`
                                        flex
                                        items-center
                                        gap-3
                                        rounded-xl
                                        border
                                        p-4
                                        ${submitStatus.type === "success"
                                            ? "border-green-500/30 bg-green-500/10 text-green-400"
                                            : "border-red-500/30 bg-red-500/10 text-red-400"
                                        }
                                    `}
                                >

                                    {submitStatus.type === "success" ? (
                                        <FaCheckCircle size={20} />
                                    ) : (
                                        <FaExclamationCircle size={20} />
                                    )}

                                    <p className="text-sm">
                                        {submitStatus.message}
                                    </p>

                                </div>

                            )}

                        </form>

                    </div>

                    {/* Contact Information */}

                    <div className="space-y-6 animate-fade-in animation-delay-400">

                        <div className="glass rounded-3xl p-8">

                            <h3 className="mb-8 text-2xl font-semibold">
                                Contact Information
                            </h3>

                            <div className="space-y-5">

                                {contactInfo.map((item) => {

                                    const Icon = item.icon;

                                    return (

                                        <a
                                            key={item.label}
                                            href={item.href}
                                            className="
                                                group
                                                flex
                                                items-center
                                                gap-5
                                                rounded-2xl
                                                p-4
                                                transition-all
                                                duration-300
                                                hover:bg-primary/5
                                            "
                                        >

                                            <div
                                                className="
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
                                                <Icon size={22} />
                                            </div>

                                            <div>

                                                <p className="text-sm text-muted-foreground">
                                                    {item.label}
                                                </p>

                                                <p className="font-medium">
                                                    {item.value}
                                                </p>

                                            </div>

                                        </a>

                                    );

                                })}

                            </div>

                        </div>

                        {/* Availability */}

                        <div className="glass glow-border rounded-3xl border border-primary/20 p-8">

                            <div className="mb-4 flex items-center gap-3">

                                <span className="h-3 w-3 rounded-full bg-green-500 animate-pulse" />

                                <h3 className="text-lg font-semibold">
                                    Available for Work
                                </h3>

                            </div>

                            <p className="leading-7 text-muted-foreground">
                                I'm currently open to full-time opportunities,
                                freelance projects, and collaborations.
                                If you're looking for a passionate React /
                                MERN Stack Developer, I'd be happy to discuss
                                how I can contribute to your team.
                            </p>

                        </div>

                        {/* Quick Stats */}

                        <div className="grid grid-cols-2 gap-5">

                            <div className="glass rounded-2xl p-6 text-center">

                                <h4 className="text-3xl font-bold text-primary">
                                    24h
                                </h4>

                                <p className="mt-2 text-sm text-muted-foreground">
                                    Average Response
                                </p>

                            </div>

                            <div className="glass rounded-2xl p-6 text-center">

                                <h4 className="text-3xl font-bold text-primary">
                                    100%
                                </h4>

                                <p className="mt-2 text-sm text-muted-foreground">
                                    Commitment
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default Contact;