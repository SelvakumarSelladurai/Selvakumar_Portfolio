const education = [
    {
        period: "2021 — 2025",
        degree: "B.E. · Computer Science and Engineering",
        institution: "P.A. College of Engineering and Technology",
        result: "CGPA 7.9 / 10",
        location: "Pollachi, Tamil Nadu",
    },
    {
        period: "2020 — 2021",
        degree: "Higher Secondary Certificate (HSC) · CBSE",
        institution: "Sainik School Amaravathinagar",
        result: "69.7%",
        location: "Amaravathinagar, Tamil Nadu",
    },
];

const Education = () => (
    <section id="education" className="scroll-mt-28 py-16 sm:py-20">
        <div className="container mx-auto px-6">
            <div className="mb-10">
                <span className="eyebrow">Education · 03</span>
                <h2 className="section-title mt-5">Learning that <span className="accent-text">built my foundation.</span></h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
                {education.map((item) => (
                    <article key={item.institution} className="skill-card">
                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">{item.period}</p>
                        <h3 className="mt-4 text-xl font-semibold leading-snug">{item.degree}</h3>
                        <p className="mt-2 text-muted-foreground">{item.institution}</p>
                        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-4 text-sm">
                            <span className="font-medium text-foreground">{item.result}</span>
                            <span className="text-muted-foreground">{item.location}</span>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    </section>
);

export default Education;
