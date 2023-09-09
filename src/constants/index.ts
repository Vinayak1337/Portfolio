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
	threejs,
	wonderHood
} from '../assets';

export const navLinks = [
	{
		id: 'about',
		title: 'About'
	},
	{
		id: 'work',
		title: 'Work'
	},
	{
		id: 'contact',
		title: 'Contact'
	}
];

const services = [
	{
		title: 'Web Developer',
		icon: web
	},
	{
		title: 'React Native Developer',
		icon: mobile
	},
	{
		title: 'Backend Developer',
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

/**
 ** Detailed Experience
 */

const experiences: {
	title: string;
	company_name: string;
	icon: string;
	iconBg: string;
	date: string;
	points: string[];
	projectReference: string;
}[] = [
	{
		title: 'Software Developer - 1',
		company_name: 'wonderHood - from Intern to Full-Time',
		icon: 'https://media.licdn.com/dms/image/C4D0BAQE7GTwnLUxD_g/company-logo_200_200/0/1641382010936?e=1700092800&v=beta&t=v8MM0puWfmdXl0TIOYfKD-Ojy0iNzMZE1qzrpYqoP3M',
		iconBg: '#018093',
		date: 'Nov 2021 - Jan 2022 (Intern)\nJan 2022 - Present (Full-Time)',
		points: [
			'As an intern, I revamped an existing React website, addressing bugs and enhancing its alignment with design specs.',
			'Boosted user engagement through performance optimizations, notably lazy loading.',
			"Incorporated Shopify's GraphQL API, introducing e-commerce features. Developed custom Next.js APIs to handle Shopify data.",
			'Spearheaded a transition from React to Next.js, harnessing ISR, SSG, and SSR, resulting in a performance jump from 45% to 90-98%.',
			'Dived into Ionic, addressing bugs and refining structure, then pivoted to React Native, innovating the UI and ensuring robust performance.',
			'Transitioned myLearning from Ionic to React. Leading the creation of a comprehensive teacher-centric dashboard, facilitating student management, report generation, and data visualization.',
			'Embedded Mixpanel analytics across all projects, extracting key insights into user interactions.',
			'Despite team dynamics, I single-handedly developed and executed major projects, showcasing resilience and adaptability.',
			'Started with a foundational understanding of ReactJS and SASS. As project demands shifted, I swiftly expanded my expertise, mastering Next.js, React Native, Ionic, and Tailwind-CSS.',
			'This journey was complemented by a diverse toolkit utilization, encompassing, Apollo Client, GraphQL, Styled-Components, Shopify and more, underscoring my ability to deliver versatile web and mobile solutions.'
		],
		projectReference: '#wonderhood-projects'
	},
	{
		title: 'MERN-Stack Developer',
		company_name: 'Possibillion Technologies - intern',
		icon: 'https://media.licdn.com/dms/image/C4D0BAQHc_BeBxL0h-A/company-logo_200_200/0/1519878923252?e=1700092800&v=beta&t=asB-ROZbGqLyT3brKEWe5iTfjh3qaaoeDVzW6wvjVHU',
		iconBg: '#383E56',
		date: 'Sept 2021 - Nov 2021',
		points: [
			'Developed an admin panel and a landing page in React JS, supported by a unified Node JS backend server handling APIs, socket services for facebook like feature, and Swagger documentation, for a Flutter-based dating app.',
			'Designed a tourism platform featuring a user landing page, an admin dashboard for data uploads and content management, and a backend with comprehensive Swagger documentation.',
			'Developed "Firework", a platform allowing users to craft and edit posts with images and customizable captions, which then converts these into MP4 slideshows using FFmpeg; integrated S3 for storage, MongoDB for data management, and tackled the novel challenge of FFmpeg integration.',
			'Leveraged foundational knowledge in JavaScript, gained from 2.5 years of hobbyist Discord bot development, to swiftly adapt and excel in React and Node.js environments. Despite being in the early stages of my React journey, I consistently delivered UI designs that perfectly aligned with client expectations.'
		],
		projectReference: '#possibillion-projects'
	}
];

const TAGS = {
	ReactJS: {
		name: 'ReactJS',
		color: 'react-text-gradient'
	},
	NextJS: {
		name: 'NextJS',
		color: 'next-text-gradient'
	},
	ReduxToolkit: {
		name: 'Redux Toolkit',
		color: 'redux-toolkit-text-gradient'
	},
	Redux: {
		name: 'Redux',
		color: 'redux-toolkit-text-gradient'
	},
	TailwindCSS: {
		name: 'TailwindCSS',
		color: 'tailwind-text-gradient'
	},
	NodeJS: {
		name: 'NodeJS',
		color: 'nodejs-text-gradient'
	},
	ExpressJS: {
		name: 'ExpressJS',
		color: 'expressjs-text-gradient'
	},
	MongoDB: {
		name: 'MongoDB',
		color: 'mongodb-text-gradient'
	},
	DiscordJS: {
		name: 'DiscordJS',
		color: 'discordjs-text-gradient'
	},
	SocketIO: {
		name: 'SocketIO',
		color: 'socketio-text-gradient'
	},
	FFmpeg: {
		name: 'FFmpeg',
		color: 'ffmpeg-text-gradient'
	},
	S3: {
		name: 'S3',
		color: 's3-text-gradient'
	},
	JavaScript: {
		name: 'JavaScript',
		color: 'javascript-text-gradient'
	},
	TypeScript: {
		name: 'TypeScript',
		color: 'typescript-text-gradient'
	},
	HTML: {
		name: 'HTML',
		color: 'html-text-gradient'
	},
	CSS: {
		name: 'CSS',
		color: 'css-text-gradient'
	},
	ReactNative: {
		name: 'React Native',
		color: 'react-native-text-gradient'
	},
	Ionic: {
		name: 'Ionic',
		color: 'ionic-text-gradient'
	},
	Flutter: {
		name: 'Flutter',
		color: 'flutter-text-gradient'
	},
	ReactQuery: {
		name: 'React Query',
		color: 'react-query-text-gradient'
	},
	NestJS: {
		name: 'NestJS',
		color: 'nestjs-text-gradient'
	},
	Shopify: {
		name: 'Shopify',
		color: 'shopify-text-gradient'
	},
	SASS: {
		name: 'SASS',
		color: 'sass-text-gradient'
	},
	Expo: {
		name: 'Expo',
		color: 'expo-text-gradient'
	},
	StyledComponents: {
		name: 'Styled Components',
		color: 'styled-components-text-gradient'
	},
	GraphQL: {
		name: 'GraphQL',
		color: 'graphql-text-gradient'
	},
	Swagger: {
		name: 'Swagger',
		color: 'swagger-text-gradient'
	}
};

const testimonials: {
	testimonial: string;
	name: string;
	designation: string;
	company: string;
	image: string;
}[] = [];

const projects: Project[] = [
	{
		name: 'wonderHood',
		description:
			"A landing page introducing parents to wonderLearn's offerings. It showcases online courses, providing insights into the educational journey awaiting their children.",
		refId: 'wonderhood-projects',
		tags: [
			TAGS.ReactJS,
			TAGS.SASS,
			TAGS.Shopify,
			TAGS.ReduxToolkit,
			TAGS.JavaScript
		],
		site_link: 'https://wonderhood.in/',
		image: wonderHood,
		company: 'wonderHood'
	},
	{
		name: 'wonderLearn',
		description:
			'A landing page that serves as a hub for educational content, featuring blogs, school-focused resources, and a toy store for kids. Designed as a one-stop destination for both learning and play.',
		tags: [
			TAGS.NextJS,
			TAGS.TailwindCSS,
			TAGS.Shopify,
			TAGS.GraphQL,
			TAGS.TypeScript
		],
		site_link: 'https://thewonderlearn.com/',
		company: 'wonderHood'
	},
	{
		name: 'wonderLearn App',
		description:
			'A mobile app designed for kids aged 2-6, blending fun with education through games and videos. While the web caters to educators, the app delights young learners.',
		site_link: 'https://wonderlearn.app.link/app',
		tags: [
			TAGS.ReactNative,
			TAGS.Ionic,
			TAGS.Expo,
			TAGS.StyledComponents,
			TAGS.ReduxToolkit,
			TAGS.TypeScript
		],
		company: 'wonderHood'
	},
	{
		name: 'MyLearning',
		description:
			'A platform for educators, MyLearning centralizes student management. It offers detailed reports and data visualization, enhancing the teaching process.',
		tags: [
			TAGS.ReactJS,
			TAGS.StyledComponents,
			TAGS.ReduxToolkit,
			TAGS.Ionic,
			TAGS.TypeScript
		],
		site_link: 'https://mylearning.thewonderlearn.com/',
		company: 'wonderHood'
	},
	{
		name: 'Dating App - Landing Page',
		description:
			'A captivating landing page designed for coffee shop owners and users. Coffee shops can register to kickstart their journey, while users are directed to app stores for downloading the dating app.',
		refId: 'possibillion-projects',
		tags: [TAGS.ReactJS, TAGS.SASS, TAGS.TypeScript],
		site_link: 'https://dating-app-website.netlify.app/',
		source_code_link: 'https://github.com/Vinayak1337/dating-app.website',
		company: 'Possibillion Technologies'
	},
	{
		name: 'Dating App - Admin Panel',
		description:
			'A comprehensive admin panel that empowers administrators to manage and monitor coffee shop owners, handle requests, and oversee the dating app users, ensuring smooth operations.',
		tags: [TAGS.ReactJS, TAGS.SASS, TAGS.Redux, TAGS.JavaScript],
		site_link: 'https://dating-app-admin.netlify.app/',
		source_code_link: 'https://github.com/Vinayak1337/dating-app.admin',
		company: 'Possibillion Technologies'
	},
	{
		name: 'Dating App - Backend',
		description:
			'A robust NodeJS backend that seamlessly processes requests for both the landing page and admin panel. It also features a socket server, enabling Facebook-like functionality for the dating app.',
		tags: [
			TAGS.NodeJS,
			TAGS.ExpressJS,
			TAGS.MongoDB,
			TAGS.SocketIO,
			TAGS.JavaScript,
			TAGS.Swagger
		],
		source_code_link: 'https://github.com/Vinayak1337/dating-app.server',
		company: 'Possibillion Technologies'
	},
	{
		name: 'LevTours - Landing Page',
		description:
			'A vibrant tourism platform where users can reserve hotel rooms, read travel blogs, and explore curated tourist experiences.',
		tags: [TAGS.ReactJS, TAGS.SASS, TAGS.Redux, TAGS.TypeScript],
		site_link: 'https://levtours-website.netlify.app/',
		source_code_link: 'https://github.com/Vinayak1337/levtours.website',
		company: 'Possibillion Technologies'
	},
	{
		name: 'LevTours - Admin Panel',
		description:
			'A comprehensive dashboard for admins to oversee user activities, manage bookings, curate blogs, and introduce promotions via coupons or bulk data imports.',
		tags: [TAGS.ReactJS, TAGS.SASS, TAGS.Redux, TAGS.JavaScript],
		site_link: 'https://levtours-admin.netlify.app/',
		source_code_link: 'https://github.com/Vinayak1337/levtours.admin',
		company: 'Possibillion Technologies'
	},
	{
		name: 'LevTours - Backend',
		description:
			'A robust NodeJS backend supporting the entire LevTours ecosystem. Features detailed API documentation in Swagger for seamless integration.',
		tags: [
			TAGS.NodeJS,
			TAGS.ExpressJS,
			TAGS.MongoDB,
			TAGS.Swagger,
			TAGS.JavaScript
		],
		source_code_link: 'https://github.com/Vinayak1337/levtours.server',
		company: 'Possibillion Technologies'
	},
	{
		name: 'Firework - Frontend',
		description:
			'A ReactJS platform for users to upload images or videos with customizable captions. Features a real-time upload progress bar for enhanced user experience.',
		tags: [TAGS.ReactJS, TAGS.SASS, TAGS.Redux, TAGS.JavaScript],
		site_link: 'https://firework-website.netlify.app/',
		source_code_link: 'https://github.com/Vinayak1337/firework.frontend',
		company: 'Possibillion Technologies'
	},
	{
		name: 'Firework - Backend',
		description:
			'A NodeJS backend that processes uploads, overlays captions using FFmpeg, and stores the final content in MongoDB and S3.',
		tags: [
			TAGS.NodeJS,
			TAGS.ExpressJS,
			TAGS.MongoDB,
			TAGS.FFmpeg,
			TAGS.S3,
			TAGS.JavaScript
		],
		source_code_link: 'https://github.com/Vinayak1337/firework.backend',
		company: 'Possibillion Technologies'
	},
	{
		name: 'Relics Audit',
		description:
			'A Discord bot for the Relics Organization, offering real-time club monitoring, member verification, seasonal ladder management, and detailed statistics, ensuring a seamless experience for the community.',
		tags: [TAGS.DiscordJS, TAGS.JavaScript, TAGS.MongoDB, TAGS.NodeJS],
		source_code_link: 'https://github.com/Vinayak1337/RelicsAudit'
	}
];

export { services, technologies, experiences, testimonials, projects };
