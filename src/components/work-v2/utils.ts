import { UIProject, FilterState, ProjectMeta, CompanyKey } from './types';

export function slugify(input: string) {
  return input
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .slice(0, 80);
}

const companyKeyByName = (company?: string): CompanyKey | undefined => {
  if (!company) return undefined;
  const c = company.toLowerCase();
  if (c.includes('wonderhood')) return 'wonderhood';
  if (c.includes('possibillion')) return 'possibillion';
  if (c.includes('remotehire')) return 'remotehire';
  if (c.includes('freelance')) return 'freelance';
  if (c.includes('bpit') || c.includes('bharati') || c.includes('bpit')) return 'bpit';
  return 'misc';
};

export function buildUIProjects(
  projects: Project[],
  metaLookup: Record<string, ProjectMeta | undefined>
): UIProject[] {
  return projects.map((p) => {
    const meta = metaLookup[p.name] || deriveDefaults(p);
    return { ...(p as any), meta } as UIProject;
  });
}

function deriveDefaults(p: Project): ProjectMeta {
  // default categorization heuristics without changing existing data
  const companyKey = companyKeyByName((p as any).company);
  let category: ProjectMeta['category'] = 'personal';
  if (companyKey === 'freelance') category = 'freelance';
  else if (companyKey && ['wonderhood', 'remotehire'].includes(companyKey)) category = 'employment';
  else if (companyKey === 'possibillion') category = 'internship';

  return {
    category,
    companyKey,
    featured: false,
    size: 'standard',
    slug: slugify(p.name),
  };
}

export function allTagNames(projects: UIProject[]): string[] {
  const set = new Set<string>();
  projects.forEach((p) => p.tags?.forEach((t) => set.add(t.name)));
  return Array.from(set).sort((a, b) => a.localeCompare(b));
}

export function filterProjects(projects: UIProject[], f: FilterState): UIProject[] {
  let result = projects;
  if (f.category !== 'all') {
    result = result.filter((p) => p.meta.category === f.category);
  }
  if (f.featuredOnly) {
    result = result.filter((p) => p.meta.featured);
  }
  if (f.tags.length) {
    result = result.filter((p) => {
      const names = new Set(p.tags?.map((t) => t.name));
      return f.tags.every((t) => names.has(t));
    });
  }
  if (f.search.trim()) {
    const q = f.search.toLowerCase();
    result = result.filter((p) =>
      [p.name, (p as any).company, p.description]
        .filter(Boolean)
        .some((s) => String(s).toLowerCase().includes(q))
    );
  }
  switch (f.sortBy) {
    case 'a-z':
      result = [...result].sort((a, b) => a.name.localeCompare(b.name));
      break;
    case 'featured':
      result = [...result].sort((a, b) => {
        const fa = a.meta.featured ? 0 : 1;
        const fb = b.meta.featured ? 0 : 1;
        if (fa !== fb) return fa - fb;
        return (a.meta.priority ?? 999) - (b.meta.priority ?? 999);
      });
      break;
    case 'newest':
    default:
      result = [...result].sort((a, b) => {
        const ad = a.meta.endDate || a.meta.startDate || '0000-00';
        const bd = b.meta.endDate || b.meta.startDate || '0000-00';
        return bd.localeCompare(ad);
      });
  }
  return result;
}

export type GroupedByCompany = Record<string, UIProject[]>;

export function groupByCompany(projects: UIProject[]): GroupedByCompany {
  const map: GroupedByCompany = {};
  projects.forEach((p) => {
    const key = p.meta.companyKey || 'misc';
    if (!map[key]) map[key] = [];
    map[key].push(p);
  });
  return map;
}

export function takeFeatured(projects: UIProject[]): UIProject[] {
  return projects
    .filter((p) => p.meta.featured)
    .sort((a, b) => (a.meta.priority ?? 999) - (b.meta.priority ?? 999));
}