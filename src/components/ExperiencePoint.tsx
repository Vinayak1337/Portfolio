"use client";
import Link from 'next/link';
import { FC, ReactNode } from 'react';
import useAnalytics from '@/hooks/useAnalytics';

interface ExperiencePointProps {
  point: string;
  className?: string;
  experienceTitle: string;
  companyName: string;
  pointIndex: number;
}

const ExperiencePoint: FC<ExperiencePointProps> = ({
  point,
  className,
  experienceTitle,
  companyName,
  pointIndex,
}) => {
  const { track } = useAnalytics();
  const nodes: ReactNode[] = [];

  const regex = /\[([^\]]+)\]\(([^)]+)\)/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(point)) !== null) {
    const [fullMatch, text, href] = match;
    const start = match.index;

    if (start > lastIndex) nodes.push(point.slice(lastIndex, start));

    const isExternal =
      /^(https?:\/\/|mailto:|tel:)/i.test(href) || href.startsWith('//');

    nodes.push(
      <Link
        key={`${start}-${href}`}
        href={href}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        className='animated-underline xp-link'
        onClick={() =>
          track('Experience Point Link Click', {
            experienceTitle,
            companyName,
            pointIndex,
            href,
            text,
          })
        }
      >
        {text}
      </Link>
    );

    lastIndex = start + fullMatch.length;
  }

  if (lastIndex < point.length) nodes.push(point.slice(lastIndex));

  const baseClass = 'text-white-100 text-sm pl-1 tracking-wider';

  return <li className={className ? `${baseClass} ${className}` : baseClass}>{nodes}</li>;
};

export default ExperiencePoint;
