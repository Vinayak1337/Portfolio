import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import immibotImg from '@/assets/projects/Immibot.png';

export default function ChapterFive() {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const contentY = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
    const imgY = useTransform(scrollYProgress, [0, 1], ["30%", "-30%"]);

    return (
        <section
            ref={containerRef}
            className="min-h-screen relative flex items-center justify-center pt-32 pb-32 border-b border-white/10 bg-[#020617]"
        >
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 w-full">

                {/* Sticky Header */}
                <div className="md:col-span-4 flex flex-col items-start md:sticky md:top-1/3 h-fit z-20">
                    <motion.div
                        style={{ opacity }}
                        className="flex flex-col gap-2"
                    >
                        <span className="text-[#10b981] font-bold tracking-widest uppercase text-sm">05 / The AI Frontier</span>
                        <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white tracking-tight">
                            Feb &mdash; Dec 2024
                        </h2>
                        <p className="mt-4 text-[#86868b] text-base leading-relaxed max-w-xs">
                            Rapid ascent to Senior Fullstack Engineer at RemoteHire.
                        </p>
                    </motion.div>
                </div>

                {/* Scrollable Content */}
                <motion.div
                    className="md:col-span-8 flex flex-col gap-16 md:pt-[10vh] z-20"
                    style={{ y: contentY, opacity }}
                >
                    <div className="flex flex-col gap-8">
                        <h3 className="text-3xl md:text-5xl font-semibold text-[#f5f5f7] leading-tight max-w-2xl">
                            Architecting the Immigration AI
                        </h3>
                        <p className="text-xl md:text-2xl text-[#86868b] leading-relaxed max-w-2xl text-balance">
                            In February 2024, I joined RemoteHire to build their Immigration AI platform. Working at the bleeding edge of AI agents and data processing, I architected a system that integrated complex AI agent workflows on the fly.
                        </p>
                        <p className="text-lg text-[#86868b] leading-relaxed max-w-2xl">
                            This intensive delivery resulted in another rapid promotion—becoming a <strong>Senior Fullstack Engineer</strong> within just 2 months. Over the years, I also tackled numerous freelance and contract projects, hardening my ability to ship production-ready applications.
                        </p>

                        <div className="relative mt-8">
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-4 p-8 border border-white/10 rounded-2xl bg-black/40 backdrop-blur-md relative z-10 w-full md:w-3/4">
                                <div className="col-span-full mb-2">
                                    <span className="text-xs uppercase tracking-widest text-[#86868b] font-semibold">The Core Stack</span>
                                </div>

                                <div className="flex flex-col gap-1">
                                    <span className="text-white font-medium">Next.js & TS</span>
                                    <span className="text-[#86868b] text-xs">Frontend Architecture</span>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <span className="text-white font-medium">Python</span>
                                    <span className="text-[#86868b] text-xs">Backend Engine</span>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <span className="text-white font-medium">Flowise AI</span>
                                    <span className="text-[#86868b] text-xs">Agent Orchestration</span>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <span className="text-white font-medium">Stripe</span>
                                    <span className="text-[#86868b] text-xs">Payments</span>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <span className="text-white font-medium">Tailwind CSS</span>
                                    <span className="text-[#86868b] text-xs">Design System</span>
                                </div>
                            </div>

                            <motion.div
                                style={{ y: imgY }}
                                className="absolute right-0 md:-right-20 top-0 md:-top-20 w-[90%] md:w-[60%] opacity-40 mix-blend-lighten pointer-events-none rounded-xl overflow-hidden hidden sm:block z-0 blur-[1px] hover:blur-none transition-all duration-500"
                            >
                                <Image src={immibotImg} alt="Immibot Platform" className="w-full h-auto" />
                            </motion.div>
                        </div>

                    </div>
                </motion.div>

            </div>
        </section>
    );
}
