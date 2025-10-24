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
	<div className='bg-tertiary h-full p-5 rounded-2xl sm:w-[16.25rem] w-full flex flex-col justify-between relative group'>
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
							className='w-10 h-10 rounded-full flex justify-center items-center cursor-pointer bg-gradient-to-b from-black-200/95 to-black-100/85 backdrop-blur-md ring-1 ring-white/40 shadow-lg shadow-black/50'>
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
							className='w-10 h-10 rounded-full flex justify-center items-center cursor-pointer bg-gradient-to-b from-black-200/95 to-black-100/85 backdrop-blur-md ring-1 ring-white/40 shadow-lg shadow-black/50'>
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

			<div className='mt-2'>
				<h3 className='text-white font-bold text-2xl'>{name}</h3>
				{company && <p className='text-xs text-purple-300'>{company}</p>}
				<div className='relative mt-2 overflow-hidden'>
					<p className='text-secondary text-sm'>{description}</p>
				</div>
			</div>
			{tags?.length ? (
				<div
						className='
							absolute left-2.5 right-2.5 bottom-3 z-10
							opacity-0 translate-y-3 max-h-0 overflow-hidden transform-gpu will-change-transform
							transition-[max-height,transform,opacity] duration-500 ease-in
							group-hover:opacity-100 group-hover:translate-y-0 group-hover:max-h-[200px]
							rounded-md px-3 py-2 shadow-lg shadow-black/30
							bg-gradient-to-b from-black-100/70 to-black-100/30
							backdrop-blur-md ring-1 ring-quaternary/25
							flex flex-wrap justify-center gap-2 pointer-events-none
						'>
					{tags.map(({ name, color }, index) => (
						<p
							key={`tag-${index}-${name}`}
							className={`text-sm text-bold ${color}`}>
							#{name}
						</p>
					))}
				</div>
			) : null}
		</div>
	</div>
);

export default ProjectUI;

type ProjectUIProps = Omit<Project, 'image'> & {
	handleClick: (isSourceCode?: boolean) => () => void;
	imgUrl: string;
};
