export type Category =
  | 'employment'
  | 'internship'
  | 'freelance'
  | 'personal'
  | 'open-source'
  | 'mini';

export type CompanyKey =
  | 'wonderhood'
  | 'possibillion'
  | 'remotehire'
  | 'bpit'
  | 'freelance'
  | 'personal'
  | 'misc';

export type ProjectMeta = {
  category: Category;
  companyKey?: CompanyKey | null;
  featured?: boolean;
  priority?: number; // lower = more prominent among featured
  size?: 'large' | 'standard' | 'mini';
  startDate?: string; // YYYY-MM
  endDate?: string; // YYYY-MM
  slug?: string;
  impact?: { summary?: string; metrics?: string[] };
};

export type FilterState = {
  category: Category | 'all';
  tags: string[]; // tag names
  search: string;
  featuredOnly: boolean;
  sortBy: 'newest' | 'a-z' | 'featured';
};

// UIProject combines your global Project type with our metadata at runtime
export type UIProject = Project & { meta: ProjectMeta };