import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import wonderHoodImg from '@/assets/projects/wonderHood.png';
import wonderLearnImg from '@/assets/projects/wonderLearn.png';

export default function ChapterFour() {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const contentY = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    // Parallax values for images
    const img1Y = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);
    const img2Y = useTransform(scrollYProgress, [0, 1], ["40%", "-40%"]);

    return (
        <section
            ref={containerRef}
            className="min-h-[150vh] relative flex items-start justify-center pt-32 pb-32 border-b border-white/10"
        >
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 w-full">

                {/* Sticky Header */}
                <div className="md:col-span-4 flex flex-col items-start md:sticky md:top-1/3 h-fit">
                    <motion.div
                        style={{ opacity }}
                        className="flex flex-col gap-2"
                    >
                        <span className="text-[#facc15] font-bold tracking-widest uppercase text-sm">04 / The Professional Grind</span>
                        <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white tracking-tight">
                            Nov 2021 &mdash; Feb 2024
                        </h2>
                        <p className="mt-4 text-[#86868b] text-base leading-relaxed max-w-xs">
                            Scaling production apps and leading teams inside Wonderhood.
                        </p>
                    </motion.div>
                </div>

                {/* Scrollable Content */}
                <motion.div
                    className="md:col-span-8 flex flex-col gap-24"
                    style={{ y: contentY, opacity }}
                >
                    {/* Transition to Dev I */}
                    <div className="flex flex-col gap-6">
                        <h3 className="text-3xl md:text-5xl font-semibold text-[#f5f5f7]">
                            Intern to Software Developer I
                        </h3>
                        <p className="text-xl md:text-2xl text-[#86868b] leading-relaxed max-w-2xl text-balance">
                            I joined Wonderhood as a React Developer Intern in November 2021. I was fast-tracked to a full-time Software Developer I by January 2022, and spent over two years scaling their cross-platform apps and web ecosystem.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Project 1 */}
                        <div className="flex flex-col gap-4 p-8 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10">
                            <h4 className="text-2xl font-semibold text-white">eCommerce Platform</h4>
                            <p className="text-[#86868b] text-sm md:text-base">
                                Built and deployed an industry-level Shopify-integrated landing page with an eCommerce vibe.
                            </p>
                            <div className="flex gap-2 mt-auto pt-4 relative z-10">
                                {['Next.js', 'TypeScript', 'Tailwind'].map(tech => (
                                    <span key={tech} className="text-xs font-mono text-white/60 border border-white/10 rounded px-2 py-1">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <motion.div style={{ y: img1Y }} className="absolute -right-20 -top-20 md:-right-32 md:-top-32 w-64 md:w-96 opacity-30 md:opacity-50 pointer-events-none rounded-xl overflow-hidden blur-[2px] hover:blur-none transition-all duration-500 hidden sm:block">
                                <Image src={wonderHoodImg} alt="Wonderhood Platform" />
                            </motion.div>
                        </div>

                        {/* Project 2 */}
                        <div className="flex flex-col gap-4 p-8 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10">
                            <h4 className="text-2xl font-semibold text-white">wonderLearn App</h4>
                            <p className="text-[#86868b] text-sm md:text-base">
                                A video & gaming learning app deployed to both the App Store and Play Store, alongside a teacher&apos;s analytics dashboard.
                            </p>
                            <div className="flex gap-2 flex-wrap mt-auto pt-4 relative z-10">
                                {['React Native', 'Expo', 'Styled-Components'].map(tech => (
                                    <span key={tech} className="text-xs font-mono text-white/60 border border-white/10 rounded px-2 py-1">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <motion.div style={{ y: img2Y }} className="absolute -left-20 -bottom-20 md:-left-32 md:-bottom-32 w-64 md:w-96 opacity-30 md:opacity-50 pointer-events-none rounded-xl overflow-hidden blur-[2px] transition-all duration-500 hidden sm:block">
                                <Image src={wonderLearnImg} alt="wonderLearn App" />
                            </motion.div>
                        </div>
                    </div>

                </motion.div>
            </div>
        </section>
    );
}
