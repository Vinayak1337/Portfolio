'use client';
import { motion } from 'framer-motion';
import { SectionWrapper } from './hoc';
import { fadeIn, textVariant } from '@/utils/motion';
import { testimonials } from '@/constants';
import { FC } from 'react';
import Img from 'next/image';

const Feedbacks = () => {
	return (
		(testimonials.length && (
			<div className='mt-12 bg-black-100 rounded-3xl'>
				<div className='padding bg-tertiary rounded-2xl min-h-[300px]'>
					<motion.div variants={textVariant()}>
						<p className='sectionSubText'>What others say</p>
						<h2 className='sectionHeadText'>Testimonials</h2>
					</motion.div>
				</div>
				<div className='paddingX -mt-20 pb-14 flex flex-wrap gap-7'>
					{testimonials.map((testimonial, index) => (
						<FeedbackCard
							key={testimonial.name}
							index={index}
							{...testimonial}
						/>
					))}
				</div>
			</div>
		)) ||
		null
	);
};

const FeedbackCard: FC<FeedbackCardProps> = ({
	index,
	testimonial,
	name,
	designation,
	company,
	image
}) => (
	<motion.div
		className='bg-black-200 p-10 rounded-3xl xs:w-[20rem] w-full'
		variants={fadeIn('', 'spring', index * 0.5, 0.75)}>
		<p className='text-white font-black text-5xl'></p>
		<div className='mt-1'>
			<p className='text-white tracking-wider text-lg'>{testimonial}</p>

			<div className='mt-7 flex justify-between items-center gap-1'>
				<div className='flex-1 flex flex-col'>
					<p className='text-white font-medium text-base'>
						<span className='blue-text-gradient'>@</span>
						{name}
					</p>
					<p className='mt-1 text-secondary text-xs'>
						{designation} of {company}
					</p>
				</div>

				<Img
					loading='lazy'
					width={40}
					height={40}
					src={image}
					alt={`feedback-by-${name}`}
					className='w-10 h-10 rounded-full object-cover'
				/>
			</div>
		</div>
	</motion.div>
);

export default SectionWrapper(Feedbacks, 'feedbacks');

interface FeedbackCardProps {
	index: number;
	testimonial: string;
	name: string;
	designation: string;
	company: string;
	image: string;
}
