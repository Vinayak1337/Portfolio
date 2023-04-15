'use client';
import { technologies } from '../constants';
import BallCanvas from './canvas/Ball';
import { SectionWrapper } from './hoc';

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
