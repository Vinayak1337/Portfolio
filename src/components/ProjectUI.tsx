import React, { FC } from 'react';
import Img from 'next/image';
import { github, openInNew } from '@/assets';
import hexToFilter from '@/utils/HexToFilter';

const ProjectUI: FC<ProjectUIProps> = ({
	description,
	imgUrl,
	name,
	source_code_link,
	tags,
	site_link,
	company,
	handleClick
}) => (
	<div className='bg-tertiary h-full p-5 rounded-2xl sm:w-[16.25rem] w-full flex flex-col justify-between'>
		<div className='flex flex-col'>
			<div className='relative w-full h-[14.5rem]'>
				<Img
					loading='lazy'
					src={imgUrl}
					alt={name}
					className='object-cover w-full h-full rounded-2xl'
					width={220}
					height={232}
					placeholder='blur'
					blurDataURL={typeof imgUrl === 'string' ? imgUrl : undefined}
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
	</div>
);

export default ProjectUI;

type ProjectUIProps = Omit<Project, 'image'> & {
	handleClick: (isSourceCode?: boolean) => () => void;
	imgUrl: string;
};
