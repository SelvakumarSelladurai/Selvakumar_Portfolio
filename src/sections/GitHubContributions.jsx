import { useState } from "react";
import { FaArrowUpRightFromSquare, FaGithub } from "react-icons/fa6";

const GitHubContributions = () => {
    const [chartAvailable, setChartAvailable] = useState(true);

    return (
        <section aria-labelledby="github-activity-title" className="pt-0 pb-4 sm:pb-6">
            <div className="container mx-auto px-6">
                <div className="glass mx-auto max-w-6xl overflow-hidden rounded-3xl border border-border p-5 sm:p-7">
                    <div className="flex flex-wrap items-start justify-between gap-5">
                        <div>
                            <span className="eyebrow">GitHub activity</span>
                            <h2 id="github-activity-title" className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl">A year of building, <span className="accent-text">one day at a time.</span></h2>
                            <p className="mt-2 text-sm text-muted-foreground">A rolling view of public activity over the past year.</p>
                        </div>
                        <a href="https://github.com/SelvakumarSelladurai" target="_blank" rel="noreferrer" className="inline-flex shrink-0 items-center gap-2 rounded-full border border-border px-4 py-2.5 text-sm font-medium transition hover:border-primary/50 hover:text-primary">
                            <FaGithub aria-hidden="true" size={17} />
                            GitHub profile
                            <FaArrowUpRightFromSquare aria-hidden="true" size={12} />
                        </a>
                    </div>

                    <div className="mt-5 overflow-hidden rounded-2xl border border-[#d8e0d9] bg-[#eef2ee] p-3 shadow-inner sm:p-4">
                        {chartAvailable ? (
                            <img
                                src="https://ghchart.rshah.org/30a14e/SelvakumarSelladurai"
                                alt="GitHub contribution calendar for Selvakumar over the past year"
                                loading="lazy"
                                className="block h-auto w-full"
                                onError={() => setChartAvailable(false)}
                            />
                        ) : (
                            <p className="py-4 text-center text-sm text-muted-foreground">
                                The live chart is unavailable right now. <a href="https://github.com/SelvakumarSelladurai" target="_blank" rel="noreferrer" className="text-primary hover:underline">View contributions on GitHub.</a>
                            </p>
                        )}
                    </div>
                    <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                        <p className="text-xs text-muted-foreground">Activity shown is reported by GitHub.</p>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground" aria-label="Contribution activity intensity: less to more">
                            <span>Less</span>
                            {["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"].map((color) => <span key={color} aria-hidden="true" className="h-3 w-3 rounded-[3px]" style={{ backgroundColor: color }} />)}
                            <span>More</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GitHubContributions;
