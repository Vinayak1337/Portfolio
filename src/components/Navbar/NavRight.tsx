'use client';
import React, { useState } from 'react';
import { close, menu } from '@/assets';
import NavbarItems from './NavbarItems';
import Image from 'next/image';

const NavbarRight = () => {
	const [active, setActive] = useState(''),
		[toggle, setToggle] = useState(false);

	return (
		<>
			<NavbarItems
				active={active}
				setActive={setActive}
				toggle={toggle}
				setToggle={setToggle}
			/>

			<div className='sm:hidden flex flex-1 justify-end items-center'>
				<Image
					loading='lazy'
					src={toggle ? close : menu}
					alt='menu'
					className='w-7 h-7 object-contain cursor-pointer'
					onClick={() => setToggle(!toggle)}
				/>
				<div
					className={`${
						!toggle ? 'hidden' : 'flex'
					} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[9rem] z-10 rounded-xl`}>
					<NavbarItems
						active={active}
						setActive={setActive}
						toggle={toggle}
						setToggle={setToggle}
						isMobile
					/>
				</div>
			</div>
		</>
	);
};

export default NavbarRight;
