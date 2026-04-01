import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function ChapterOne() {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const contentY = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    return (
        <section
            ref={containerRef}
            className="min-h-screen relative flex items-center justify-center py-24 md:py-0 border-b border-white/10"
        >
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 w-full">

                {/* Sticky Header / Year */}
                <div className="md:col-span-4 flex flex-col items-start md:sticky md:top-1/3 h-fit">
                    <motion.div
                        style={{ opacity }}
                        className="flex flex-col gap-2"
                    >
                        <span className="text-accent-blue font-bold tracking-widest uppercase text-sm">01 / The Spark</span>
                        <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white tracking-tight">
                            2018 &mdash; 2021
                        </h2>
                    </motion.div>
                </div>

                {/* Scrollable Content */}
                <motion.div
                    className="md:col-span-8 flex flex-col gap-16 md:pt-[20vh]"
                    style={{ y: contentY, opacity }}
                >
                    <div className="flex flex-col gap-6">
                        <h3 className="text-2xl md:text-4xl font-semibold text-[#f5f5f7]">
                            Diploma in Computer Engineering
                        </h3>
                        <p className="text-lg md:text-xl text-[#86868b] leading-relaxed max-w-2xl text-balance">
                            It started with a foundational diploma in 2018. While understanding the underlying architecture of hardware and basic systems, the real turning point happened in January 2019.
                        </p>
                    </div>

                    <div className="flex flex-col gap-6 md:pl-12 border-l border-white/10">
                        <h3 className="text-2xl md:text-4xl font-semibold text-[#f5f5f7]">
                            Hello, C/C++ World
                        </h3>
                        <p className="text-lg md:text-xl text-[#86868b] leading-relaxed max-w-2xl text-balance">
                            The syntax, the memory management, the blank terminal. This is where the code obsession began. Writing lines of C/C++ ignited a curiosity that quickly escalated into building real-world software and managing complex logic.
                        </p>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
