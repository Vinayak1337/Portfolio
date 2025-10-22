"use client";
import React, { useState } from 'react';
import { UIProject } from './types';
import ProjectCardStandard from './cards/ProjectCardStandard';

export default function CompanySection({
  id,
  title,
  projects,
  initialVisible = 4,
}: {
  id?: string;
  title: string;
  projects: UIProject[];
  initialVisible?: number;
}) {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? projects : projects.slice(0, initialVisible);

  return (
    <section className="mt-10" id={id}>
      <div className="flex items-baseline justify-between mb-4">
        <h3 className="sectionHeadText text-xl">{title}</h3>
        {projects.length > initialVisible && (
          <button
            className="text-sm text-quaternary hover:underline"
            onClick={() => setExpanded((v) => !v)}
          >
            {expanded ? 'Show less' : `Show all (${projects.length})`}
          </button>
        )}
      </div>
      <div className="grid gap-7 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((p) => (
          <ProjectCardStandard key={p.name + '-std'} project={p} />
        ))}
      </div>
    </section>
  );
}