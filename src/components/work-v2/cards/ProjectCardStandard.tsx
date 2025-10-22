"use client";
import React from 'react';
import BaseProjectCard, { BaseProjectCardProps } from './BaseProjectCard';

export default function ProjectCardStandard(props: BaseProjectCardProps) {
  return (
    <BaseProjectCard
      {...props}
      className={`transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg ${
        props.className || ''
      }`}
    />
  );
}