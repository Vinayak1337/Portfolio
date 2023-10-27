'use client';
import { motion } from 'framer-motion';
import {
	VerticalTimeline,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { experiences } from '@/constants';
import { SectionWrapper } from './hoc';
import { textVariant } from '@/utils/motion';
import ExperienceCard from './ExperienceCard';

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
