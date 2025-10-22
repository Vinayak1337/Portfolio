"use client";
import React from 'react';
import { FilterState } from './types';

type Props = {
  state: FilterState;
  categories: { key: FilterState['category']; label: string }[];
  tags: string[];
  onChange: (next: Partial<FilterState>) => void;
};

export default function WorkFilterBar({ state, categories, tags, onChange }: Props) {
  return (
    <div className="w-full bg-tertiary/40 rounded-xl p-4 border border-white/5 backdrop-blur">
      <div className="flex flex-wrap gap-2 items-center">
        {categories.map((c) => (
          <button
            key={c.key}
            onClick={() => onChange({ category: c.key })}
            className={`px-3 py-1 rounded-full text-sm border transition-colors ${
              state.category === c.key
                ? 'bg-quaternary/20 text-quaternary border-quaternary/40'
                : 'bg-transparent text-secondary border-white/10 hover:border-white/20'
            }`}
          >
            {c.label}
          </button>
        ))}

        <label className="ml-auto flex items-center gap-2 text-sm text-secondary">
          <input
            type="checkbox"
            checked={state.featuredOnly}
            onChange={(e) => onChange({ featuredOnly: e.target.checked })}
          />
          Featured only
        </label>
      </div>

      <div className="mt-3 flex flex-col sm:flex-row gap-3">
        <input
          value={state.search}
          onChange={(e) => onChange({ search: e.target.value })}
          placeholder="Search by name, company, description..."
          className="flex-1 bg-primary text-white rounded-lg px-3 py-2 border border-white/10 focus:outline-none focus:ring-1 focus:ring-quaternary"
        />
        <select
          value={state.sortBy}
          onChange={(e) => onChange({ sortBy: e.target.value as any })}
          className="w-40 bg-primary text-white rounded-lg px-3 py-2 border border-white/10"
        >
          <option value="newest">Newest</option>
          <option value="featured">Featured</option>
          <option value="a-z">A → Z</option>
        </select>
      </div>

      {tags.length > 0 && (
        <div className="mt-3 flex gap-2 overflow-x-auto no-scrollbar">
          {tags.map((t) => {
            const active = state.tags.includes(t);
            return (
              <button
                key={t}
                onClick={() =>
                  onChange({
                    tags: active
                      ? state.tags.filter((x) => x !== t)
                      : [...state.tags, t],
                  })
                }
                className={`px-2 py-1 rounded-full text-xs border whitespace-nowrap ${
                  active
                    ? 'bg-white/10 text-white border-white/30'
                    : 'bg-transparent text-secondary border-white/10'
                }`}
              >
                #{t}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}