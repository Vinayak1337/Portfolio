const wonderHood = {
	title: 'Software Developer - 1',
	company_name: 'wonderHood - Full-Time',
	icon: 'https://media.licdn.com/dms/image/C4D0BAQE7GTwnLUxD_g/company-logo_200_200/0/1641382010936?e=1700092800&v=beta&t=v8MM0puWfmdXl0TIOYfKD-Ojy0iNzMZE1qzrpYqoP3M',
	iconBg: '#018093',
	date: 'Nov 2021 - Jan 2022 (Intern)\nJan 2022 - August 2023 (Full-Time)',
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
};

const possibillion = {
	title: 'MERN-Stack Developer',
	company_name: 'Possibillion Technologies - Intern (Full-Time)',
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
};

const experiences: {
	title: string;
	company_name: string;
	icon: string;
	iconBg: string;
	date: string;
	points: string[];
	projectReference: string;
}[] = [wonderHood, possibillion];

export default experiences;
