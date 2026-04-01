import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function ChapterSix() {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const contentY = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    return (
        <section
            ref={containerRef}
            className="min-h-screen relative flex items-center justify-center pt-24 pb-48"
        >
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 w-full">

                {/* Sticky Header */}
                <div className="md:col-span-4 flex flex-col items-start md:sticky md:top-1/3 h-fit">
                    <motion.div
                        style={{ opacity }}
                        className="flex flex-col gap-2"
                    >
                        <span className="text-white font-bold tracking-widest uppercase text-sm">06 / The Current Chapter</span>
                        <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white tracking-tight">
                            2024 — Present
                        </h2>
                    </motion.div>
                </div>

                {/* Scrollable Content */}
                <motion.div
                    className="md:col-span-8 flex flex-col gap-12 md:pt-[10vh]"
                    style={{ y: contentY, opacity }}
                >
                    <div className="flex flex-col gap-6">
                        <h3 className="text-3xl md:text-5xl font-semibold text-[#f5f5f7]">
                            Going Back to the Roots
                        </h3>
                        <p className="text-xl md:text-2xl text-[#86868b] leading-relaxed max-w-2xl text-balance">
                            Reaching a critical phase in my career, I made a major decision in late 2024. I stepped down from my full-time Senior engineering role to pursue my BTech degree full-time.
                        </p>
                        <p className="text-lg text-[#86868b] leading-relaxed max-w-2xl">
                            Armed with deep production experience across hardware, web, mobile, and AI, this phase is about solidifying theoretical foundations. Shortly after, I took charge as a <strong>Full Stack Developer for the BPIT Tech Team</strong>.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-4 mt-4 p-8 border border-white/10 rounded-2xl bg-[#1d1d1f]/40 backdrop-blur-sm">
                            <div className="col-span-full mb-1">
                                <span className="text-xs uppercase tracking-widest text-[#86868b] font-semibold">BPIT Tech Team Leadership</span>
                            </div>
                            <p className="col-span-full text-sm text-[#a1a1a6] leading-relaxed">
                                Led the architectural redesign of the official college website, migrating a legacy static structure to a modern Next.js App Router stack. Built an inline &quot;click-to-edit&quot; CMS system, reducing admin friction internally.
                            </p>
                            <div className="flex flex-col gap-1 mt-2">
                                <span className="text-white font-medium">Stack & Analytics</span>
                                <span className="text-[#86868b] text-xs">MongoDB, TailwindCSS, PostHog</span>
                            </div>
                            <div className="flex flex-col gap-1 mt-2">
                                <span className="text-white font-medium">Outcomes</span>
                                <span className="text-[#86868b] text-xs">SEO Optimized, Automated Vercel Deployments</span>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12">
                        <a
                            href="mailto:vinayakkumar@example.com"
                            className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold tracking-widest text-[#050505] uppercase transition-all duration-300 bg-white rounded-full hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]"
                        >
                            Let&apos;s build something
                        </a>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
