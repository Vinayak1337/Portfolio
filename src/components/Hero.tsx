'use client';
import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import HackedText, { HackedTextMethods } from './hackedText';
import ComputersCanvas from './canvas/Computers';

const Hero = () => {
	const hackedTextRef = useRef<HackedTextMethods>(null);

	useEffect(() => {
		hackedTextRef.current?.randomizeText();

		if (!isWebGLSupported())
			alert(
				"WebGL is not supported by your browser. This site won't work properly, please use a different browser or version."
			);
	}, []);

	return (
		<section className='relative w-full h-[120vh] mx-auto flex flex-col items-center justify-center'>
			<div
				className={`relative top-30 max-w-7xl w-full paddingX flex flex-row items-start gap-5`}>
				<div className='flex flex-col justify-center items-center mt-5'>
					<div className='w-5 h-5 rounded-full bg-quaternary' />
					<div className='w-1 sm:h-80 h-0 violet-gradient' />
				</div>
				<div>
					<h1
						className={`heroHeadText truncate transition-all duration-300 text-white`}>
						Hi, I&apos;m{' '}
						<span className='text-quaternary'>
							<HackedText ref={hackedTextRef} text='Vinayak' />
						</span>
					</h1>
					<p
						className={`heroSubText transition-all duration-300 mt-2 text-white-100 w-full max-w-md md:max-w-xl lg:max-w-2xl`}>
						Experienced React & Frontend Developer, skilled in MERN stack and
						TypeScript. Proficient in building responsive web applications and
						passionate about exploring new technologies. Committed to delivering
						high-quality solutions and continuous learning.
					</p>
				</div>
			</div>

			<div className='relative w-full min-h-[50vh] h-full'>
				<ComputersCanvas />
			</div>

			<div className='relative bottom-0 z-20 w-fit self-center flex justify-center items-center'>
				<a href='#about'>
					<div className='w-9 h-16 rounded-3xl border-4 border-secondary flex justify-center p-2 pt-3'>
						<motion.div
							animate={{
								y: [0, 24, 0]
							}}
							transition={{
								duration: 1.5,
								repeat: Infinity,
								repeatType: 'loop'
							}}
							className='w-3 h-3 rounded-full bg-secondary mb-1'
						/>
					</div>
				</a>
			</div>
		</section>
	);
};

export default Hero;

function isWebGLSupported() {
	try {
		if (!window) return false;
		const canvas = document.createElement('canvas');
		return !!(
			window.WebGLRenderingContext &&
			(canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
		);
	} catch (e) {
		return false;
	}
}
