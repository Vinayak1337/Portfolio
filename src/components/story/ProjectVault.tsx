'use client';

import { motion } from 'framer-motion';
import projects, { projectMetaLookup } from '@/constants/projects';

export default function ProjectVault() {
    // Sort projects: Featured first, then by priority, then rest
    const sortedProjects = [...projects].sort((a, b) => {
        const metaA = projectMetaLookup[a.name] || {};
        const metaB = projectMetaLookup[b.name] || {};

        if (metaA.featured && !metaB.featured) return -1;
        if (!metaA.featured && metaB.featured) return 1;

        const prioA = metaA.priority || 99;
        const prioB = metaB.priority || 99;

        return prioA - prioB;
    });

    return (
        <section className="py-32 bg-[#020617] border-t border-white/10 relative z-10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col gap-4 mb-16 items-center text-center">
                    <span className="text-[#10b981] font-bold tracking-widest uppercase text-sm">The Archive</span>
                    <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
                        28+ Shipped Projects
                    </h2>
                    <p className="max-w-2xl text-[#86868b] text-lg">
                        A comprehensive vault of open-source libraries, freelance contracts, hackathon winners, and personal experiments built since 2018.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {sortedProjects.map((project, idx) => {
                        const isFeatured = projectMetaLookup[project.name]?.featured;

                        return (
                            <motion.div
                                key={project.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: idx > 6 ? 0 : idx * 0.1 }}
                                className={`group relative flex flex-col p-6 rounded-2xl border bg-white/[0.02] backdrop-blur-sm transition-all duration-300 hover:bg-white/[0.04] ${isFeatured
                                    ? 'border-white/20 md:col-span-2 lg:col-span-2 bg-[#1d1d1f]/40'
                                    : 'border-white/5'
                                    }`}
                            >
                                <div className="flexjustify-between items-start mb-4">
                                    <div>
                                        <h3 className="text-2xl font-bold text-[#f5f5f7] flex items-center gap-3">
                                            {project.name}
                                        </h3>
                                        {project.company && (
                                            <span className="text-xs font-mono text-[#86868b] uppercase tracking-wider mt-1 block">
                                                {project.company}
                                            </span>
                                        )}
                                    </div>
                                </div>

                                <p className="text-[#a1a1a6] text-sm leading-relaxed mb-6 flex-grow">
                                    {project.description}
                                </p>

                                <div className="mt-auto">
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {(project.tags || []).slice(0, 4).map(tag => (
                                            <span key={tag.name} className="px-2 py-1 text-xs font-mono text-white/50 bg-white/5 rounded border border-white/10">
                                                {tag.name}
                                            </span>
                                        ))}
                                        {(project.tags || []).length > 4 && (
                                            <span className="px-2 py-1 text-xs font-mono text-white/30 truncate">
                                                +{(project.tags || []).length - 4} more
                                            </span>
                                        )}
                                    </div>

                                    <div className="flex gap-4">
                                        {project.site_link && (
                                            <a href={project.site_link} target="_blank" rel="noreferrer" className="text-sm font-medium text-white hover:text-[#10b981] transition-colors flex items-center gap-1">
                                                Live Site ↗
                                            </a>
                                        )}
                                        {project.source_code_link && (
                                            <a href={project.source_code_link} target="_blank" rel="noreferrer" className="text-sm font-medium text-[#86868b] hover:text-white transition-colors flex items-center gap-1">
                                                Source ↗
                                            </a>
                                        )}
                                    </div>
                                </div>

                                {/* Subtle Hover Glow */}
                                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/0 group-hover:ring-white/10 transition-all pointer-events-none" />
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
