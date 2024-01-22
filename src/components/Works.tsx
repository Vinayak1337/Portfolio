'use client';
import { motion } from 'framer-motion';
import { SectionWrapper } from './hoc';
import { fadeIn, textVariant } from '@/utils/motion';
import { projects } from '@/constants';
import { FC } from 'react';
import useAnalytics from '@/hooks/useAnalytics';
import ProjectUI from './ProjectUI';

const Works = () => (
	<>
		<motion.div initial='hidden' animate='show' variants={textVariant()}>
			<p className='sectionSubText'>My work</p>
			<h2 className='sectionHeadText'>Projects</h2>
		</motion.div>

		<div className='w-full flex'>
			<motion.p
				initial='hidden'
				animate='show'
				variants={fadeIn('', '', 0.1, 1)}
				className='mt-3 text-secondary text-lg max-w-3xl'>
				As a passionate and skilled MERN stack developer, I have worked on a
				variety of projects ranging from responsive web applications to
				server-side rendered applications and RESTful APIs. My expertise
				includes using React, Next.js, Node.js, Express.js, and MongoDB, with a
				strong focus on TypeScript. Some of my projects showcase my proficiency
				in managing state with Redux, creating custom hooks, and handling
				authentication. I have a track record of delivering high-quality
				solutions by following industry best practices, and I&apos;m always
				eager to learn and explore new technologies. Please explore my{' '}
				<a className='animated-underline' href='https://github.com/Vinayak1337'>
					GitHub
				</a>{' '}
				and{' '}
				<a
					className='animated-underline'
					href='https://www.linkedin.com/in/vinayak1337/'>
					LinkedIn
				</a>{' '}
				profiles to view some of the projects I&apos;ve worked on, and feel free
				to reach out if you&apos;re interested in collaborating.
			</motion.p>
		</div>

		<div className='mt-20 flex flex-wrap gap-7 items-stretch'>
			{projects.map((project, index) => (
				<ProjectCard
					{...project}
					index={index}
					key={`project-${index}-${project.name}`}
				/>
			))}
		</div>
	</>
);

export default SectionWrapper(Works, 'work');

const ProjectCard: FC<ProjectCardProps> = ({
	image,
	index,
	name,
	source_code_link,
	site_link,
	refId,
	...restProps
}) => {
	const { track } = useAnalytics();

	const handleClick =
		(isGithub = false) =>
		() =>
			track(name, {
				name,
				type: 'project',
				site_link,
				source_code_link,
				clicked: isGithub ? 'github' : 'site'
			});

	const imgUrl =
		image ||
		`https://api.apiflash.com/v1/urltoimage?access_key=${
			process.env.NEXT_PUBLIC_API_FLASH
		}&url=${
			site_link || source_code_link
		}&format=png&quality=100&response_type=image&scale_factor=2`;

	return (
		<motion.div
			initial='hidden'
			animate='show'
			variants={fadeIn('up', 'spring', index * 0.2, 0.75)}>
			<span className='hash-span' id={refId}>
				&nbsp;
			</span>
			<ProjectUI
				{...restProps}
				handleClick={handleClick}
				imgUrl={imgUrl}
				name={name}
				source_code_link={source_code_link}
				site_link={site_link}
			/>
		</motion.div>
	);
};

type ProjectCardProps = {
	index: number;
} & Project;
