'use client';
import Link from 'next/link';
import { FC, useState } from 'react';
import Img from 'next/image';
import { navLinks } from '@/constants';
import { logo, close, menu } from '@/assets';

const Navbar = () => {
	const [active, setActive] = useState(''),
		[toggle, setToggle] = useState(false);

	return (
		<nav className='paddingX transition-all duration-300 w-full flex items-center py-5 fixed top-0 z-20 bg-primary'>
			<div className='transition-all duration-300 w-full flex justify-between items-center max-w-7xl mx-auto'>
				<Link
					href='/'
					className='flex items-center gap-2'
					onClick={() => {
						setActive('');
						if (!window) return;
						window.scrollTo(0, 0);
					}}>
					<Img src={logo} alt='logo' className='w-9 h-9 object-contain' />
					<p className='transition-all duration-300 flex items-center text-white text-lg font-bold cursor-pointer'>
						Vinayak&nbsp;
						<span className='transition-all duration-300 sm:block hidden'>
							|&nbsp;Web Developer
						</span>
					</p>
				</Link>
				<NavbarItems
					active={active}
					setActive={setActive}
					toggle={toggle}
					setToggle={setToggle}
				/>

				<div className='sm:hidden flex flex-1 justify-end items-center'>
					<Img
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
			</div>
		</nav>
	);
};

export default Navbar;

const NavbarItems: FC<NavbarItemsProps> = ({
	active,
	setActive,
	toggle,
	setToggle,
	isMobile = false
}) => {
	const ulClasses = isMobile
		? 'list-none flex justify-end items-center flex-col gap-4'
		: 'list-none hidden sm:flex flex-row gap-10';

	return (
		<ul className={ulClasses + ' transition-all duration-300'}>
			{navLinks.map((link, i) => {
				const isActive = active === link.title;
				const textClass = isActive ? 'text-white' : 'text-secondary';
				const fontClass = isMobile
					? 'font-poppins font-medium text-base'
					: 'hover:text-white text-lg font-medium';
				const liClasses = `${textClass} ${fontClass} cursor-pointer`;

				const handleClick = () => {
					setActive(link.title);
					isMobile && setToggle(!toggle);
				};

				return (
					<li key={i + link.id} className={liClasses} onClick={handleClick}>
						<a href={`#${link.id}`}>{link.title}</a>
					</li>
				);
			})}
		</ul>
	);
};

interface NavbarItemsProps {
	active: string;
	setActive: (active: string) => void;
	toggle: boolean;
	setToggle: (toggle: boolean) => void;
	isMobile?: boolean;
}
