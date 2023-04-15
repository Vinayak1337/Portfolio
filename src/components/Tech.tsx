'use client';
import dynamic from 'next/dynamic';
import { technologies } from '../constants';
import { SectionWrapper } from './hoc';
import { ComponentLoader } from './Loader';

const BallCanvas = dynamic(() => import('./canvas/Ball'), {
	ssr: false,
	loading: ComponentLoader
});

const Tech = () => (
	<div className='flex flex-row flex-wrap justify-center gap-10'>
		{technologies.map(({ icon, name }, index) => (
			<div className='w-28 h-18' key={name + index}>
				<BallCanvas icon={icon} />
			</div>
		))}
	</div>
);

export default SectionWrapper(Tech, 'tech');
