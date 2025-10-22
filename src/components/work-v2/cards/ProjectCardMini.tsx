"use client";
import React from 'react';
import BaseProjectCard, { BaseProjectCardProps } from './BaseProjectCard';

export default function ProjectCardMini(props: BaseProjectCardProps) {
  return (
    <BaseProjectCard
      {...props}
      withBadge={false}
      className={`p-3 transition-transform duration-200 hover:-translate-y-1 hover:shadow-md ${
        props.className || ''
      }`}
    />
  );
}