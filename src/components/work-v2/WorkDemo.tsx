"use client";
import React, { useMemo, useState } from 'react';
import projects from '@/constants/projects';
import { projectMetaLookup } from '@/constants/projects';
import { buildUIProjects, filterProjects, allTagNames } from './utils';
import { FilterState } from './types';
import WorkFilterBar from './WorkFilterBar';
import ProjectsGrid from './ProjectsGrid';

const initialFilters: FilterState = {
  category: 'all',
  tags: [],
  search: '',
  featuredOnly: false,
  sortBy: 'featured',
};

export default function WorkDemo() {
  const [filters, setFilters] = useState<FilterState>(initialFilters);
  const uiProjects = useMemo(() => buildUIProjects(projects as any, projectMetaLookup), []);
  const allTags = useMemo(() => allTagNames(uiProjects), [uiProjects]);
  const filtered = useMemo(() => filterProjects(uiProjects, filters), [uiProjects, filters]);

  const categories = [
    { key: 'all' as const, label: 'All' },
    { key: 'employment' as const, label: 'Employment' },
    { key: 'internship' as const, label: 'Internship' },
    { key: 'freelance' as const, label: 'Freelance' },
    { key: 'personal' as const, label: 'Personal' },
    { key: 'open-source' as const, label: 'Open Source' },
    { key: 'mini' as const, label: 'Other small projects' },
  ];

  return (
    <div className="padding max-w-7xl mx-auto">
      <div className="mb-6">
        <h2 className="sectionHeadText">Projects (Demo UI)</h2>
        <p className="sectionSubText">Explore projects by category, company, and tags</p>
      </div>

      <WorkFilterBar
        state={filters}
        categories={categories}
        tags={allTags}
        onChange={(next) => setFilters((f) => ({ ...f, ...next }))}
      />

      <ProjectsGrid projects={filtered} filters={filters} />
    </div>
  );
}