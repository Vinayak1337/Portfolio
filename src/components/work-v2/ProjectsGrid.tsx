"use client";
import React from 'react';
import { FilterState, UIProject } from './types';
import { groupByCompany, takeFeatured } from './utils';
import ProjectCardLarge from './cards/ProjectCardLarge';
import CompanySection from './CompanySection';

export default function ProjectsGrid({ projects, filters }: { projects: UIProject[]; filters: FilterState }) {
  const featured = takeFeatured(projects);

  // Partition by category for high-level sections
  const employment = projects.filter((p) => p.meta.category === 'employment');
  const internship = projects.filter((p) => p.meta.category === 'internship');
  const freelance = projects.filter((p) => p.meta.category === 'freelance');
  const personal = projects.filter((p) => p.meta.category === 'personal');
  const opensrc = projects.filter((p) => p.meta.category === 'open-source');
  const minis = projects.filter((p) => p.meta.category === 'mini');

  return (
    <div className="mt-8 space-y-12">
      {featured.length > 0 && (
        <section>
          <h3 className="sectionHeadText text-xl mb-4">Featured</h3>
          <div className="grid gap-7 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((p) => (
              <ProjectCardLarge key={p.name + '-feat'} project={p} />
            ))}
          </div>
        </section>
      )}

      {employment.length > 0 && (
        <section>
          <h3 className="sectionHeadText text-xl">Employment</h3>
          {Object.entries(groupByCompany(employment)).map(([companyKey, list]) => (
            <CompanySection
              key={'emp-' + companyKey}
              id={anchorFromCompanyKey(companyKey)}
              title={companyTitle(companyKey)}
              projects={list}
            />
          ))}
        </section>
      )}

      {internship.length > 0 && (
        <section>
          <h3 className="sectionHeadText text-xl">Internships</h3>
          {Object.entries(groupByCompany(internship)).map(([companyKey, list]) => (
            <CompanySection
              key={'int-' + companyKey}
              id={anchorFromCompanyKey(companyKey)}
              title={companyTitle(companyKey)}
              projects={list}
            />
          ))}
        </section>
      )}

      {freelance.length > 0 && (
        <section>
          <h3 className="sectionHeadText text-xl">Freelance</h3>
          <CompanySection id={anchorFromCompanyKey('freelance')} title="Freelance" projects={freelance} />
        </section>
      )}

      {personal.length > 0 && (
        <CompanySection title="Personal Projects" projects={personal} />
      )}

      {opensrc.length > 0 && (
        <CompanySection title="Open Source" projects={opensrc} />
      )}

      {minis.length > 0 && (
        <section>
          <h3 className="sectionHeadText text-xl">Other small projects</h3>
          <div className="grid gap-7 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {minis.map((p) => (
              // reusing standard card but could use a Mini card as well
              <ProjectCardLarge key={p.name + '-mini'} project={{ ...p, meta: { ...p.meta, size: 'mini' } }} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

function anchorFromCompanyKey(key: string) {
  switch (key) {
    case 'wonderhood':
      return 'wonderhood-projects';
    case 'possibillion':
      return 'possibillion-projects';
    case 'remotehire':
      return 'remotehire-projects';
    case 'bpit':
      return 'bpit-projects';
    case 'freelance':
      return 'freelance-projects';
    default:
      return undefined;
  }
}

function companyTitle(key: string) {
  switch (key) {
    case 'wonderhood':
      return 'wonderHood';
    case 'possibillion':
      return 'Possibillion Technologies';
    case 'remotehire':
      return 'RemoteHire';
    case 'bpit':
      return 'BPIT Tech Team';
    case 'freelance':
      return 'Freelance';
    default:
      return key;
  }
}