import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function ChapterThree() {
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
            className="min-h-screen relative flex items-center justify-center pt-24 pb-32 border-b border-white/10"
        >
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 w-full">

                {/* Sticky Header / Year */}
                <div className="md:col-span-4 flex flex-col items-start md:sticky md:top-1/3 h-fit">
                    <motion.div
                        style={{ opacity }}
                        className="flex flex-col gap-2"
                    >
                        <span className="text-[#0ea5e9] font-bold tracking-widest uppercase text-sm">03 / The Engineering Spark</span>
                        <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white tracking-tight">
                            2021
                        </h2>
                        <p className="mt-4 text-[#86868b] text-base leading-relaxed max-w-xs">
                            The pivot to professional software engineering.
                        </p>
                    </motion.div>
                </div>

                {/* Scrollable Content */}
                <motion.div
                    className="md:col-span-8 flex flex-col gap-16 md:pt-[10vh]"
                    style={{ y: contentY, opacity }}
                >
                    {/* Bootcamp feeling section */}
                    <div className="flex flex-col gap-6">
                        <h3 className="text-2xl md:text-4xl font-semibold text-[#f5f5f7]">
                            Jan &mdash; June 2021
                        </h3>
                        <p className="text-lg md:text-xl text-[#86868b] leading-relaxed max-w-2xl text-balance">
                            In the span of 3-4 months, I went all-in on web technologies. I rapidly learned HTML, CSS, JavaScript DOM manipulation, React and its ecosystem, and finally TypeScript. The transition from eSports community management to rigorous frontend engineering was officially underway.
                        </p>
                    </div>

                    <div className="flex flex-col gap-6 md:pl-12 border-l border-white/10">
                        <h3 className="text-2xl md:text-4xl font-semibold text-[#f5f5f7]">
                            The First Internship
                        </h3>
                        <p className="text-lg md:text-xl text-[#86868b] leading-relaxed max-w-2xl text-balance">
                            By September 2021, I landed my first MERN-stack developer internship at Possibillion Technologies. Between Sept and Nov 2021, I led a team of interns and developed <strong>three full MVPs</strong>—each complete with a backend, frontend, and admin panel.
                        </p>

                        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mt-4">
                            <span className="text-[#86868b] text-sm uppercase tracking-widest block mb-4">Core Internship Stack</span>
                            <div className="flex flex-wrap gap-2">
                                {[
                                    'React', 'Node.js', 'Express', 'MongoDB', 'Socket.io',
                                    'FFMPEG', 'AWS S3', 'Multer', 'Styled-Components'
                                ].map(tech => (
                                    <span key={tech} className="px-3 py-1.5 bg-[#0ea5e9]/10 text-[#e0f2fe] rounded-full text-xs font-medium">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
