'use client';

import { motion } from 'framer-motion';
import TAGS from '@/constants/tech-tags';

export default function SkillsMarquee() {
    const tags = Object.values(TAGS);

    return (
        <section className="py-24 border-b border-white/10 bg-[#020617] overflow-hidden whitespace-nowrap relative">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#020617] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#020617] to-transparent z-10 pointer-events-none" />

            <div className="flex flex-col gap-4">
                {/* Row 1 - Scroll Left */}
                <motion.div
                    animate={{ x: [0, -1000] }}
                    transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
                    className="flex gap-4 w-fit"
                >
                    {[...tags, ...tags].slice(0, Math.floor(tags.length)).map((tag, idx) => (
                        <div key={`${tag.name}-${idx}`} className="px-6 py-3 rounded-full border border-white/10 bg-white/5 text-[#f5f5f7] font-mono text-sm hover:border-white/30 hover:bg-white/10 transition-colors">
                            {tag.name}
                        </div>
                    ))}
                </motion.div>

                {/* Row 2 - Scroll Right */}
                <motion.div
                    animate={{ x: [-1000, 0] }}
                    transition={{ repeat: Infinity, duration: 50, ease: "linear" }}
                    className="flex gap-4 w-fit ml-[-500px]"
                >
                    {[...tags, ...tags].slice(Math.floor(tags.length / 2), Math.floor(tags.length * 1.5)).map((tag, idx) => (
                        <div key={`${tag.name}-row2-${idx}`} className="px-6 py-3 rounded-full border border-white/10 bg-white/5 text-[#f5f5f7] font-mono text-sm hover:border-white/30 hover:bg-white/10 transition-colors">
                            {tag.name}
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
