'use client';
import { motion } from 'framer-motion';
import { textVariant } from '@/utils/motion';
import { fadeIn } from '@/utils/motion';
import { services } from '@/constants';
import { FC } from 'react';
import { Tilt } from 'react-tilt';
import { SectionWrapper } from './hoc';
import Img, { StaticImageData } from 'next/image';

const About = () => (
	<>
		<motion.div variants={textVariant()}>
			<p className='sectionSubText'>Introduction</p>
			<h2 className='sectionHeadText'>Overview</h2>
		</motion.div>
		<motion.p
			className='mt-4 text-secondary text-lg max-w-3xl'
			variants={fadeIn('', '', 0.1, 1)}>
			Passionate and skilled frontend developer with expertise in the MERN
			stack. Proficient in building responsive web applications using React,
			Next.js, React Native and Ionic, with a strong preference for TypeScript.
			Highly experienced in working with HTML5, CSS3, JavaScript and React, as
			well as state management using Redux and creating custom hooks.
			Demonstrated ability to develop high-quality, responsive UI/UX designs,
			optimize performance, and ensure seamless user experiences. Committed to
			continuous learning, staying up-to-date with industry trends, and
			delivering top-notch solutions.
		</motion.p>
		<div className='mt-20 flex flex-wrap gap-10'>
			{services.map((service, index) => (
				<ServiceCard key={index + service.title} index={index} {...service} />
			))}
		</div>
	</>
);

export default SectionWrapper(About, 'about');

const ServiceCard: FC<ServiceCardProps> = ({ index, title, icon }) => {
	return (
		<Tilt className='xs:w-64 w-full'>
			<motion.div
				variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
				className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
				<CustomDiv
					options={{
						max: 45,
						scale: 1,
						speed: 450
					}}
					className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
					<Img
						loading='lazy'
						src={icon}
						alt={title}
						className='w-16 h-16 object-contain'
						width={64}
						height={64}
					/>
					<h3 className='text-white text-xl font-bold text-center'>{title}</h3>
				</CustomDiv>
			</motion.div>
		</Tilt>
	);
};

const CustomDiv: FC<CustomDivProps> = ({ children, ...rest }) => (
	<div {...rest}>{children}</div>
);

interface ServiceCardProps {
	index: number;
	title: string;
	icon: StaticImageData;
}

interface CustomDivProps extends React.HTMLAttributes<HTMLDivElement> {
	options: {
		max: number;
		scale: number;
		speed: number;
	};
}
