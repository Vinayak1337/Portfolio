import {
	mobile,
	backend,
	web,
	javascript,
	typescript,
	html,
	css,
	reactjs,
	redux,
	tailwind,
	nodejs,
	mongodb,
	git,
	figma,
	docker,
	threejs
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

const technologies = [
	{
		name: 'HTML 5',
		icon: html
	},
	{
		name: 'CSS 3',
		icon: css
	},
	{
		name: 'JavaScript',
		icon: javascript
	},
	{
		name: 'TypeScript',
		icon: typescript
	},
	{
		name: 'React JS',
		icon: reactjs
	},
	{
		name: 'Redux Toolkit',
		icon: redux
	},
	{
		name: 'Tailwind CSS',
		icon: tailwind
	},
	{
		name: 'Node JS',
		icon: nodejs
	},
	{
		name: 'MongoDB',
		icon: mongodb
	},
	{
		name: 'Three JS',
		icon: threejs
	},
	{
		name: 'git',
		icon: git
	},
	{
		name: 'figma',
		icon: figma
	},
	{
		name: 'docker',
		icon: docker
	}
];

const testimonials: {
	testimonial: string;
	name: string;
	designation: string;
	company: string;
	image: string;
}[] = [];

export { services, technologies, experiences, testimonials, projects };
