'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function HeroSection() {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    // Fade out as we scroll down
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

    return (
        <section
            ref={containerRef}
            className="h-[120vh] relative flex flex-col items-center justify-start pt-[30vh]"
        >
            <motion.div
                style={{ opacity, scale, y }}
                className="flex flex-col items-center justify-center text-center px-6 z-10"
            >
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="text-accent-blue font-semibold tracking-[0.2em] uppercase text-sm md:text-base mb-6"
                >
                    The Journey So Far
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="text-6xl md:text-8xl lg:text-9xl font-bold cinematic-gradient-text tracking-tighter max-w-5xl leading-tight"
                >
                    Vinayak Kumar.
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="mt-8 text-xl md:text-2xl text-[#86868b] max-w-2xl font-light text-balance"
                >
                    From leading a national #1 eSports team to architecting AI-driven platforms. A story of relentless engineering.
                </motion.p>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-32 left-1/2 -translate-x-1/2 flex flex-col items-center"
            >
                <span className="text-[10px] uppercase tracking-widest text-[#86868b] mb-4">Discover the story</span>
                <div className="w-[1px] h-16 bg-gradient-to-b from-[#86868b] to-transparent"></div>
            </motion.div>
        </section>
    );
}
