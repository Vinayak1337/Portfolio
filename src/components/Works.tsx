'use client';
import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';
import { SectionWrapper } from './hoc';
import { fadeIn, textVariant } from '@/utils/motion';
import { projects } from '@/constants';
import { FC } from 'react';
import { github, openInNew } from '@/assets';
import hexToFilter from '@/utils/HexToFilter';
import Img from 'next/image';
import { useInView } from 'react-intersection-observer';
import { ComponentLoader } from './Loader';
import useAnalytics from '@/hooks/useAnalytics';

const Works = () => (
	<>
		<motion.div variants={textVariant()}>
			<p className='sectionSubText'>My work</p>
			<h2 className='sectionHeadText'>Projects</h2>
		</motion.div>

		<div className='w-full flex'>
			<motion.p
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
				<a href='https://github.com/Vinayak1337'>GitHub</a> and{' '}
				<a href='https://www.linkedin.com/in/vinayak1337/'>LinkedIn</a> profiles
				to view some of the projects I&apos;ve worked on, and feel free to reach
				out if you&apos;re interested in collaborating.
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
	description,
	image,
	index,
	name,
	source_code_link,
	tags,
	site_link,
	refId,
	company
}) => {
	const { track } = useAnalytics();
	const [inViewRef, inView] = useInView({
		threshold: 0.5,
		triggerOnce: true
	});

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

	if (!inView)
		return (
			<div id={refId} ref={inViewRef} className='project-placeholder w-full'>
				<ComponentLoader />
			</div>
		);

	return (
		<motion.div
			initial='hidden'
			animate='show'
			variants={fadeIn('up', 'spring', index * 0.5, 0.75)}>
			<span className='hash-span' id={refId}>
				&nbsp;
			</span>
			<Tilt
				options={{
					max: 45,
					scale: 1,
					speed: 450
				}}
				className='bg-tertiary h-full p-5 rounded-2xl sm:w-[16.25rem] w-full flex flex-col justify-between'>
				<div className='flex flex-col'>
					<div className='relative w-full h-[14.5rem]'>
						<Img
							loading='lazy'
							src={
								image ||
								`https://api.apiflash.com/v1/urltoimage?access_key=${
									process.env.NEXT_PUBLIC_API_FLASH
								}&url=${
									site_link || source_code_link
								}&format=png&quality=100&response_type=image&scale_factor=2`
							}
							alt={name}
							className='object-cover w-full h-full rounded-2xl'
							width={220}
							height={232}
						/>

						<div className='absolute inset-0 gap-2 flex justify-end m-3 card-img_hover'>
							{source_code_link && (
								<a
									onClick={handleClick(true)}
									href={source_code_link}
									target='_blank'
									className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'>
									<Img
										loading='lazy'
										src={github}
										alt='github'
										className='w-1/2 h-1/2 object-contain'
									/>
								</a>
							)}
							{site_link && (
								<a
									onClick={handleClick()}
									href={site_link}
									target='_blank'
									className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'>
									<Img
										loading='lazy'
										style={{
											filter: hexToFilter('#fff').filter.slice(0, -1).slice(7)
										}}
										src={openInNew}
										alt='open-in-new'
										className={`w-1/2 h-1/2 -rotate-90 object-contain`}
									/>
								</a>
							)}
						</div>
					</div>

					<div className='mt-5'>
						<h3 className='text-white font-bold text-2xl'>{name}</h3>
						{company && <p className='text-xs text-purple-300'>{company}</p>}
						<p className='mt-2 text-secondary text-sm'>{description}</p>
					</div>
				</div>

				<div className='flex flex-wrap gap-2'>
					{tags?.length &&
						tags.map(({ name, color }, index) => (
							<p
								key={`tag-${index}-${name}`}
								className={`text-sm text-bold ${color}`}>
								#{name}
							</p>
						))}
				</div>
			</Tilt>
		</motion.div>
	);
};

type ProjectCardProps = {
	index: number;
} & Project;
