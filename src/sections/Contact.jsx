import { useState } from "react";
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
    { icon: FaEnvelope, label: "Email", value: "selvakumarselladurai5973@gmail.com", href: "mailto:selvakumarselladurai5973@gmail.com" },
    { icon: FaPhoneAlt, label: "Phone", value: "+91 7010614358", href: "tel:+917010614358" },
    { icon: FaMapMarkerAlt, label: "Location", value: "Tamil Nadu, India" },
];

const Contact = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [isLoading, setIsLoading] = useState(false);
    const [submitStatus, setSubmitStatus] = useState({ type: null, message: "" });

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        setSubmitStatus({ type: null, message: "" });

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
            const result = await response.json();
            if (!response.ok) throw new Error(result.detail || "The message could not be sent. Please try again.");

            setSubmitStatus({ type: "success", message: result.message });
            setFormData({ name: "", email: "", message: "" });
        } catch (error) {
            setSubmitStatus({ type: "error", message: error.message || "Unable to reach the server. Please try again later." });
        } finally {
            setIsLoading(false);
        }
    };

    const updateField = (field) => (event) => setFormData((current) => ({ ...current, [field]: event.target.value }));
    const inputClass = "min-h-12 w-full min-w-0 rounded-xl border border-border bg-surface px-4 py-3 text-base text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20 placeholder:text-muted-foreground/70";

    return (
        <section id="contact" className="relative scroll-mt-24 overflow-hidden py-20 sm:py-28">
            <div aria-hidden="true" className="pointer-events-none absolute inset-0">
                <div className="absolute left-1/4 top-1/4 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 h-72 w-72 rounded-full bg-highlight/5 blur-3xl" />
            </div>

            <div className="container relative z-10 mx-auto px-4 sm:px-6">
                <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-14">
                    <span className="eyebrow">Contact · 05</span>
                    <h2 className="section-title mt-5">Let’s make <span className="accent-text">something useful.</span></h2>
                    <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
                        Have a project, opportunity, or question? Send me a message and I’ll get back to you.
                    </p>
                </div>

                <div className="mx-auto grid max-w-5xl gap-5 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">
                    <div className="glass min-w-0 rounded-3xl border border-border p-5 sm:p-8">
                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div>
                                <label htmlFor="name" className="mb-2 block text-sm font-medium">Full name</label>
                                <input id="name" name="name" type="text" autoComplete="name" required minLength={2} maxLength={100} placeholder="Enter your name" value={formData.name} onChange={updateField("name")} className={inputClass} />
                            </div>
                            <div>
                                <label htmlFor="email" className="mb-2 block text-sm font-medium">Email address</label>
                                <input id="email" name="email" type="email" autoComplete="email" required maxLength={254} placeholder="you@email.com" value={formData.email} onChange={updateField("email")} className={inputClass} />
                            </div>
                            <div>
                                <label htmlFor="message" className="mb-2 block text-sm font-medium">Message</label>
                                <textarea id="message" name="message" rows={5} required minLength={10} maxLength={5000} placeholder="Tell me about your project..." value={formData.message} onChange={updateField("message")} className={`${inputClass} min-h-36 resize-y`} />
                            </div>

                            <Button type="submit" size="lg" disabled={isLoading} className="min-h-14 w-full disabled:cursor-not-allowed disabled:opacity-65">
                                {isLoading ? "Sending…" : "Send Message"}
                                {!isLoading && <FaPaperPlane aria-hidden="true" className="text-sm" />}
                            </Button>

                            {submitStatus.type && (
                                <div role="status" aria-live="polite" className={`flex items-start gap-3 rounded-xl border p-4 ${submitStatus.type === "success" ? "border-green-500/30 bg-green-500/10 text-green-300" : "border-red-500/30 bg-red-500/10 text-red-300"}`}>
                                    {submitStatus.type === "success" ? <FaCheckCircle aria-hidden="true" className="mt-0.5 shrink-0" /> : <FaExclamationCircle aria-hidden="true" className="mt-0.5 shrink-0" />}
                                    <p className="break-words text-sm">{submitStatus.message}</p>
                                </div>
                            )}
                        </form>
                    </div>

                    <aside className="glass min-w-0 rounded-3xl border border-border p-5 sm:p-8">
                        <span className="eyebrow">Get in touch</span>
                        <h3 className="mt-5 text-2xl font-semibold tracking-tight">I’m easy to reach.</h3>
                        <p className="mt-3 text-sm leading-6 text-muted-foreground">The contact form sends your message through my FastAPI backend. You can also reach me directly here.</p>
                        <div className="mt-7 space-y-3">
                            {contactInfo.map(({ icon: Icon, label, value, href }) => (
                                <div key={label} className="flex min-w-0 items-start gap-3 rounded-2xl border border-border/80 bg-background/40 p-4">
                                    <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary"><Icon aria-hidden="true" size={16} /></span>
                                    <div className="min-w-0">
                                        <p className="text-xs uppercase tracking-wider text-muted-foreground">{label}</p>
                                        {href ? <a href={href} className="mt-1 block break-all text-sm font-medium hover:text-primary">{value}</a> : <p className="mt-1 break-words text-sm font-medium">{value}</p>}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </aside>
                </div>
            </div>
        </section>
    );
};

export default Contact;
