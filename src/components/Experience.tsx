'use client';
import { motion } from 'framer-motion';
import {
	VerticalTimeline,
	VerticalTimelineElement
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { openInNew } from '@/assets';
import { experiences } from '@/constants';
import { SectionWrapper } from './hoc';
import { textVariant } from '@/utils/motion';
import { FC } from 'react';
import Img from 'next/image';
import hexToFilter from '@/utils/HexToFilter';
import useAnalytics from '@/hooks/useAnalytics';

const Experience = () => (
	<>
		<motion.div variants={textVariant()}>
			<p className='sectionSubText'>What I have done so far</p>
			<h2 className='sectionHeadText'>Work Experience</h2>
		</motion.div>
		<div className='mt-20 flex flex-col'>
			<VerticalTimeline>
				{experiences.map((experience, index) => (
					<ExperienceCard
						key={index + experience.title + 'xp card'}
						index={index}
						{...experience}
					/>
				))}
			</VerticalTimeline>
		</div>
	</>
);

export default SectionWrapper(Experience, 'work-experience');

const ExperienceCard: FC<ExperienceCardProps> = ({
	title,
	company_name,
	icon,
	iconBg,
	date,
	points,
	projectReference
}) => {
	const { track } = useAnalytics();

	const handleClick = () =>
		track('Work Project Reference', {
			company_name,
			title,
			projectReference
		});

	return (
		<VerticalTimelineElement
			contentStyle={{
				background: '#1d1836',
				color: '#fff'
			}}
			contentArrowStyle={{
				borderRight: '7px solid  #232631'
			}}
			date={date}
			dateClassName='whitespace-pre-line'
			iconStyle={{
				background: iconBg
			}}
			icon={
				<div className='flex items-center justify-center w-full h-full'>
					<Img
						loading='lazy'
						src={icon}
						alt={company_name}
						className='w-3/5 h-3/5 object-contain rounded-full'
						blurDataURL={icon}
						placeholder='blur'
						width={40}
						height={40}
					/>
				</div>
			}>
			<div className='flex flex-col gap-5'>
				<div>
					<h3 className='text-white text-2xl font-bold'>{title}</h3>
					<p
						className='text-secondary text-base font-semibold'
						style={{
							margin: 0
						}}>
						{company_name}
					</p>
				</div>
				<ul className='list-disc ml-5 space-y-2'>
					{points.map((point, index) => (
						<li
							key={`xp-point-${index}-${title}`}
							className='text-white-100 text-sm pl-1 tracking-wider'>
							{point}
						</li>
					))}
				</ul>

				<a onClick={handleClick} className='flex' href={projectReference}>
					Projects{' '}
					<Img
						className='-rotate-90 object-contain'
						width={24}
						height={24}
						src={openInNew}
						alt='projects'
						style={{
							filter: hexToFilter('#fff').filter.slice(0, -1).slice(7)
						}}
					/>
				</a>
			</div>
		</VerticalTimelineElement>
	);
};

interface ExperienceCardProps {
	title: string;
	company_name: string;
	icon: string;
	iconBg: string;
	date: string;
	points: string[];
	index: number;
	projectReference: string;
}
