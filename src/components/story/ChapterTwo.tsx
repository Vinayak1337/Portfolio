import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function ChapterTwo() {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const contentY = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0]);

    return (
        <section
            ref={containerRef}
            className="min-h-[150vh] relative flex items-start justify-center pt-32 pb-32 border-b border-white/10 bg-[#050505]"
        >
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 w-full">

                {/* Sticky Header / Year */}
                <div className="md:col-span-4 flex flex-col items-start md:sticky md:top-1/3 h-fit">
                    <motion.div
                        style={{ opacity }}
                        className="flex flex-col gap-2"
                    >
                        <span className="text-[#bf5bfe] font-bold tracking-widest uppercase text-sm">02 / The eSports Era</span>
                        <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white tracking-tight">
                            Late 2019 &mdash; 2021
                        </h2>
                        <p className="mt-4 text-[#86868b] text-base leading-relaxed max-w-xs">
                            From a casual gamer to leading a 50,000+ member empire.
                        </p>
                    </motion.div>
                </div>

                {/* Scrollable Content */}
                <motion.div
                    className="md:col-span-8 flex flex-col gap-24"
                    style={{ y: contentY, opacity }}
                >
                    {/* Relics Section */}
                    <div className="flex flex-col gap-8">
                        <div className="flex flex-col gap-4">
                            <h3 className="text-3xl md:text-5xl font-semibold text-[#f5f5f7]">
                                Relics eSports: #1 in India
                            </h3>
                            <p className="text-xl md:text-2xl text-[#86868b] leading-relaxed max-w-2xl text-balance">
                                What started as playing casually in late 2019 evolved fast. I moved through the ranks and was promoted to org leader in early 2021. Under my leadership, Relics reached <strong>#15 Globally</strong> and stabilized at <strong>#1 in India</strong> for three solid years.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl">
                            <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex flex-col">
                                <span className="text-white text-2xl font-bold">1st, 2nd, 3rd</span>
                                <span className="text-[#86868b] text-sm uppercase tracking-wider mt-1">LAN Sweeps</span>
                            </div>
                            <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex flex-col">
                                <span className="text-white text-2xl font-bold">3 Yrs</span>
                                <span className="text-[#86868b] text-sm uppercase tracking-wider mt-1">Top India Rank</span>
                            </div>
                            <div className="col-span-2 p-4 rounded-xl bg-white/5 border border-white/10 flex flex-col justify-center">
                                <span className="text-[#86868b] text-xs uppercase tracking-wider mb-2">Partnerships</span>
                                <span className="text-white/80 text-sm font-medium">Sky eSports, IGL, Game.TV, Bluestacks</span>
                            </div>
                        </div>
                    </div>

                    {/* Discord Bot Section */}
                    <div className="flex flex-col gap-8 md:pl-12 border-l border-white/10">
                        <div className="flex flex-col gap-4">
                            <h3 className="text-3xl md:text-5xl font-semibold text-[#bf5bfe]">
                                The Automator
                            </h3>
                            <p className="text-xl md:text-2xl text-[#86868b] leading-relaxed max-w-2xl text-balance">
                                Managing hyper-growth required scale. Combining my new coding skills, I started building our flagship Discord bot in early 2021. It automated massive community operations via Discord.
                            </p>
                        </div>

                        <div className="bg-[#111] border border-white/5 rounded-2xl p-8 max-w-2xl">
                            <div className="grid grid-cols-2 gap-y-8 gap-x-4">
                                <div>
                                    <span className="block text-4xl text-white font-semibold mb-1">50k+</span>
                                    <span className="text-[#86868b] text-sm">Users Handled</span>
                                </div>
                                <div>
                                    <span className="block text-4xl text-white font-semibold mb-1">35+</span>
                                    <span className="text-[#86868b] text-sm">Servers Managed</span>
                                </div>
                                <div className="col-span-2 pt-4 border-t border-white/10">
                                    <span className="text-[#86868b] text-sm uppercase tracking-widest block mb-3">Stack</span>
                                    <div className="flex flex-wrap gap-2">
                                        {['Node.js', 'OOP JS', 'Socket.io', 'Discord.js', 'PM2', 'MongoDB', 'Ubuntu VPS'].map(tech => (
                                            <span key={tech} className="px-3 py-1 bg-white/10 rounded-full text-white/80 text-xs font-mono">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </motion.div>

            </div>
        </section>
    );
}
