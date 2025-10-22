import React from 'react';
import { Category } from './types';

const colorMap: Record<Category, string> = {
  employment: 'bg-quaternary/20 text-quaternary border-quaternary/40',
  internship: 'bg-sky-500/20 text-sky-300 border-sky-500/40',
  freelance: 'bg-emerald-400/20 text-emerald-300 border-emerald-400/40',
  personal: 'bg-fuchsia-400/20 text-fuchsia-300 border-fuchsia-400/40',
  'open-source': 'bg-amber-400/20 text-amber-300 border-amber-400/40',
  mini: 'bg-slate-400/20 text-slate-300 border-slate-400/40',
};

export default function ProjectBadge({ label }: { label: Category }) {
  return (
    <span
      className={`absolute top-3 left-3 z-10 rounded-full border px-2 py-0.5 text-xs font-semibold ${colorMap[label]}`}
    >
      {label}
    </span>
  );
}