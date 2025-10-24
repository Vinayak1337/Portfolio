import { openInNew } from '@/assets';
import useAnalytics from '@/hooks/useAnalytics';
import hexToFilter from '@/utils/HexToFilter';
import { FC } from 'react';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import Img, { StaticImageData } from 'next/image';
import ExperiencePoint from './ExperiencePoint';

const ExperienceCard: FC<ExperienceCardProps> = ({
	title,
	company_name,
	icon,
	iconBg,
	date,
	points,
	projectReference
}) => {
	const { track } = useAnalytics();

	const handleClick = () =>
		track('Work Project Reference', {
			company_name,
			title,
			projectReference
		});

	return (
		<VerticalTimelineElement
			id={company_name}
			key={`xp-${title}`}
			visible
			contentStyle={{
				background: '#1d1836',
				color: '#fff'
			}}
			contentArrowStyle={{
				borderRight: '7px solid  #232631'
			}}
			date={date}
			dateClassName='whitespace-pre-line'
			iconStyle={{
				background: iconBg
			}}
			icon={
				<div className='flex items-center justify-center w-full h-full'>
					<Img
						loading='lazy'
						src={icon}
						alt={company_name}
						className='w-3/5 h-3/5 object-contain rounded-full'
						placeholder='blur'
						width={40}
						height={40}
					/>
				</div>
			}>
			<div className='flex flex-col gap-5'>
				<div>
					<h3 className='text-white text-2xl font-bold'>{title}</h3>
					<p
						className='text-secondary text-base font-semibold'
						style={{
							margin: 0
						}}>
						{company_name}
					</p>
				</div>
				<ul className='list-disc ml-5 space-y-2'>
					{points.map((point, index) => (
						<ExperiencePoint
							key={`xp-point-${index}-${title}`}
							point={point}
							experienceTitle={title}
							companyName={company_name}
							pointIndex={index}
						/>
					))}
				</ul>

				<a
					onClick={handleClick}
					className='flex items-center w-fit gap-1'
					href={projectReference}>
					<p className='!mt-0 w-fit h-fit animated-underline'>Projects</p>
					<Img
						className='-rotate-90 object-contain'
						width={24}
						height={24}
						src={openInNew}
						alt='projects'
						style={{
							filter: hexToFilter('#fff').filter.slice(0, -1).slice(7)
						}}
					/>
				</a>
			</div>
		</VerticalTimelineElement>
	);
};

interface ExperienceCardProps {
	title: string;
	company_name: string;
	icon: StaticImageData;
	iconBg: string;
	date: string;
	points: string[];
	index: number;
	projectReference: string;
}

export default ExperienceCard;
