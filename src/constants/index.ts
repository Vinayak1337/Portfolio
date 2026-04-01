import { StaticImageData } from 'next/image';
import {
	mobile,
	backend,
	web,
} from '../assets';

import experiences from './experience';
import projects from './projects';

export const navLinks = [
	{
		url: '#about',
		title: 'About'
	},
	{
		url: '#work-experience',
		title: 'work'
	},
	{
		url: '#contact',
		title: 'Contact'
	},
	{
		url: '/Vinayak_Kumar_Resume.pdf',
		title: 'Resume'
	}
];

const services = [
	{
		title: 'React Developer',
		icon: web
	},
	{
		title: 'React Native Developer',
		icon: mobile
	},
	{
		title: 'NodeJS Developer',
		icon: backend
	}
];

const technologies: { name: string; icon: StaticImageData }[] = [];

const testimonials: {
	testimonial: string;
	name: string;
	designation: string;
	company: string;
	image: string;
}[] = [];

export { services, technologies, experiences, testimonials, projects };
