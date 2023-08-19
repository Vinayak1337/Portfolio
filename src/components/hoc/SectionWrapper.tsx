import { motion } from 'framer-motion';
import { FC } from 'react';
import { staggerContainer } from '@/utils/motion';

const SectionWrapper = (Component: FC, idName: string) =>
	function HOC() {
		return (
			<motion.div
				variants={staggerContainer()}
				initial='hidden'
				whileInView='show'
				viewport={{
					once: true,
					amount: 0.25
				}}
				className={`padding max-w-7xl mx-auto relative z-0`}>
				<span className='hash-span' id={idName}>
					&nbsp;
				</span>
				<Component />
			</motion.div>
		);
	};

export default SectionWrapper;
