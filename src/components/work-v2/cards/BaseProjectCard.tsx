"use client";
import React from 'react';
import Image from 'next/image';
import { github as githubPng, openInNew } from '@/assets';
import ProjectBadge from '../ProjectBadge';
import { UIProject } from '../types';
import hexToFilter from '@/utils/HexToFilter';

export type BaseProjectCardProps = {
  project: UIProject;
  className?: string;
  imageClassName?: string;
  withBadge?: boolean;
};

export default function BaseProjectCard({ project, className = '', imageClassName = '', withBadge = true }: BaseProjectCardProps) {
  const { name, description, tags, source_code_link, site_link } = project as any;
  const imgUrl = getImageUrl(project);

  return (
    <div className={`bg-tertiary p-5 rounded-2xl w-full flex flex-col justify-between shadow-sm ${className}`}>
      <div className="relative">
        <div className="relative w-full aspect-[16/9] overflow-hidden rounded-2xl">
          {withBadge && <ProjectBadge label={project.meta.category} />}
          <Image
            src={imgUrl}
            alt={name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className={`object-cover ${imageClassName}`}
          />
          <div className="absolute inset-0 gap-2 flex justify-end m-3">
            {source_code_link && (
              <a
                aria-label="Open source code"
                href={source_code_link}
                target="_blank"
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <Image src={githubPng} alt="github" width={20} height={20} />
              </a>
            )}
            {site_link && (
              <a
                aria-label="Open live site"
                href={site_link}
                target="_blank"
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <Image
                  src={openInNew}
                  alt="open"
                  width={20}
                  height={20}
                  style={{ filter: hexToFilter('#fff').filter.slice(0, -1).slice(7) }}
                  className="-rotate-90"
                />
              </a>
            )}
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-white font-bold text-xl">{name}</h3>
          {(project as any).company && (
            <p className="text-xs text-purple-300">{(project as any).company}</p>
          )}
          <p className="mt-2 text-secondary text-sm line-clamp-3">{description}</p>
        </div>
      </div>
      {tags?.length ? (
        <div className="mt-3 flex flex-wrap gap-2">
          {tags.map((t: { name: string; color: string }, i: number) => (
            <span key={`${project.name}-tag-${i}`} className={`text-sm ${t.color}`}>#{t.name}</span>
          ))}
        </div>
      ) : null}
    </div>
  );
}

function getImageUrl(project: UIProject): string | any {
  const anyProj: any = project;
  if (anyProj.image) return anyProj.image;
  const url = (anyProj.site_link || anyProj.source_code_link) as string | undefined;
  if (!url) return openInNew; // fallback icon; shouldn't happen often
  const key = process.env.NEXT_PUBLIC_API_FLASH || '';
  return `https://api.apiflash.com/v1/urltoimage?access_key=${key}&url=${encodeURIComponent(
    url
  )}&format=png&quality=90&response_type=image&scale_factor=2`;
}
