'use client';
import { navLinks } from '@/constants';
import useAnalytics from '@/hooks/useAnalytics';
import { FC } from 'react';

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

	const { track } = useAnalytics();

	const handleCLick = (title: string) => () =>
		track('Navbar Item Click', {
			title
		});

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
						<a onClick={handleCLick(link.title)} href={`#${link.id}`}>
							{link.title}
						</a>
					</li>
				);
			})}
		</ul>
	);
};

export default NavbarItems;

interface NavbarItemsProps {
	active: string;
	setActive: (active: string) => void;
	toggle: boolean;
	setToggle: (toggle: boolean) => void;
	isMobile?: boolean;
}
