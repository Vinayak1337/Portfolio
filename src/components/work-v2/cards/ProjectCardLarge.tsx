"use client";
import React from 'react';
import BaseProjectCard from './BaseProjectCard';
import { BaseProjectCardProps } from './BaseProjectCard';

export default function ProjectCardLarge(props: BaseProjectCardProps) {
  return (
    <BaseProjectCard
      {...props}
      className={`transition-transform duration-200 hover:-translate-y-1 hover:shadow-xl lg:col-span-2 ${
        props.className || ''
      }`}
      imageClassName=""
    />
  );
}