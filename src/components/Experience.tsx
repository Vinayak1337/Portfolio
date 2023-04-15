'use client';
import { motion } from 'framer-motion';
import {
	VerticalTimeline,
	VerticalTimelineElement
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { experiences } from '../constants';
import { SectionWrapper } from './hoc';
import { textVariant } from '../utils/motion';
import { FC } from 'react';
import { StaticImageData } from 'next/image';
import Img from 'next/image';

const Experience = () => (
	<>
		<motion.div variants={textVariant()}>
			<p className='sectionSubText'>What I have done so far</p>
			<h2 className='sectionHeadText'>Work Experience.</h2>
		</motion.div>
		<div className='mt-20 flex flex-col'>
			<VerticalTimeline>
				{experiences.map((experience, index) => (
					<ExperienceCard
						key={index + experience.title}
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
	index
}) => (
	<VerticalTimelineElement
		contentStyle={{
			background: '#1d1836',
			color: '#fff'
		}}
		contentArrowStyle={{
			borderRight: '7px solid  #232631'
		}}
		date={date}
		iconStyle={{
			background: iconBg
		}}
		icon={
			<div className='flex items-center justify-center w-full h-full'>
				<Img
					loading='lazy'
					src={icon}
					alt={company_name}
					className='w-3/5 h-3/5 object-contain'
				/>
			</div>
		}>
		<div>
			<h3 className='text-white text-2xl font-bold'>{title}</h3>
			<p
				className='text-secondary text-base font-semibold'
				style={{
					margin: 0
				}}>
				{company_name}
			</p>
			<ul className='mt-5 list-disc ml-5 space-y-2'>
				{points.map((point, index) => (
					<li
						key={`xp-point-${index}`}
						className='text-white-100 text-sm pl-1 tracking-wider'>
						{point}
					</li>
				))}
			</ul>
		</div>
	</VerticalTimelineElement>
);

interface ExperienceCardProps {
	title: string;
	company_name: string;
	icon: StaticImageData;
	iconBg: string;
	date: string;
	points: string[];
	index: number;
}
