import { possibillion, remotehire, bpitTechTeam, wonderhood } from '@/assets';
import { StaticImageData } from 'next/image';

const bpitTechTeachEmployment = {
	title: 'Full Stack Developer',
	company_name: 'BPIT Tech Team',
	icon: bpitTechTeam,
	iconBg: '#FFFFFF',
	date: 'June 2025 - Present',
	projectReference: 'https://bpit-site-redesign.vercel.app/',
	points: [
		"Led a team of 3 to redesign BPIT’s official website from [a legacy](https://bpitindia.ac.in) PHP/static structure into [a modern](https://bpit-site-redesign.vercel.app/), Next.js (App Router) + TypeScript + TailwindCSS stack focused on performance, maintainability, and modern UX.",
		'Built an inline “click-to-edit” CMS experience, enabling administrators to update text, links, and images directly on rendered sections, with changes persisted via MongoDB — removing the need for a separate admin panel.',
		'Developed reusable schemas and modular components following DRY principles, ensuring consistent design language and easy scalability across all departments and pages.',
		'Integrated PostHog analytics across pages, links, and CTAs to capture engagement data, navigation patterns, and user flow insights.',
		'Enhanced SEO and accessibility with dynamic metadata generation, structured data, and optimized routing for faster search indexing.',
		'Deployed on Vercel with automated builds, preview environments, and environment-specific analytics tracking.'
	]
};

const remoteHireEmployment = {
	title: 'Senior Fullstack Engineer',
	company_name: 'RemoteHire - Full-Time',
	icon: remotehire,
	iconBg: '#F0DB4F',
	date: 'Feb 2024 - Aug 2024 (Full-Time)\nAug 2024 - Dec 2024(Part-Time)',
	projectReference: 'https://nextjsapp-immibot.vercel.app',
	points: [
		'Re-architected immigration [AI assistant](https://nextjsapp-immibot.vercel.app) with modular country/domain adapters for rapid feature launch.',
		'Launched one-click guest sign-up sessions with seamless history/credit merge, cutting onboarding time ~40%; added automatic weekly renewing free plan and Stripe Pro subscription (500 credits + top-ups).',
		'Built multi-mode chat (Search vs Advisor) and an agentic RAG pipeline (LangChain, Flowise) to retrieve programs, validate documents, and compute weighted eligibility scores and recommendations.',
		'Added adaptive questioning and document verification workflow reducing redundant prompts.',
		'Added cited web search and dual-stream processing (persist to Prisma/SQL plus live UI) to reduce perceived latency.',
		'Unified complex app state via Context API and useReducer (sessions, credits, modes, conversations) for easier maintenance.',
		'Shipped PostHog plus session/video analytics capturing loads, clicks, and conversation events for cohort analysis.',
		'Integrated Clerk, Stripe, Next.js (App Router), TypeScript, shadcn/ui, and Tailwind; deployed on Vercel with PWA support.'
	]
};

const wonderHoodEmployment = {
	title: 'Software Developer - 1',
	company_name: 'wonderHood - Full-Time',
	icon: wonderhood,
	iconBg: '#FFFFFF',
	date: 'Nov 2021 - Jan 2022 (Intern)\nJan 2022 - August 2023 (Full-Time)\nSept 2023 - Feb 2024 (Intern)',
	points: [
		'As an intern, I revamped an existing [React website](https://thewonderlearn.com/), addressing bugs and enhancing its alignment with design specs.',
		'Boosted user engagement through performance optimizations, notably lazy loading.',
		'Incorporated Shopify’s GraphQL API, introducing e-commerce features. Developed custom Next.js APIs to handle Shopify data.',
		'Spearheaded a transition from React to Next.js, harnessing ISR, SSG, and SSR, resulting in a performance jump from 45% to 90-98%.',
		'Dived into Ionic, addressing bugs and refining structure, then pivoted to [React Native](https://wonderlearn.app.link/app), delivering a child-centric UI redesign (larger touch targets, simplified flows, kid-friendly visuals) and custom video & game players (optimized buffering, progress capture, resume states) while ensuring robust performance.',
		'Transitioned myLearning from [Ionic to React](https://mylearning.thewonderlearn.com/). Leading the creation of a comprehensive teacher-centric dashboard—classroom rosters, assignments, data visualizations—where each student’s app activity is tracked (video watch %, game scores, module completion) and teachers can filter by timelines, customize views, and generate per-student reports.',
		'Embedded Mixpanel analytics across all projects, capturing player events and classroom flows to surface per-student and cohort insights (attention, completion, engagement over time).',
		'Despite team dynamics, I single-handedly developed and executed major projects, showcasing resilience and adaptability.',
		'Started with a foundational understanding of ReactJS and SASS. As project demands shifted, I swiftly expanded my expertise, mastering Next.js, React Native, Ionic, and Tailwind-CSS.',
		'This journey was complemented by a diverse toolkit utilization, encompassing Apollo Client, GraphQL, Styled-Components, Shopify, Mixpanel, and more—underscoring my ability to deliver versatile web and mobile solutions.'
	],
	projectReference: '#wonderhood-projects'
};

const possibillionEmployment = {
	title: 'MERN-Stack Developer',
	company_name: 'Possibillion Technologies - Intern (Full-Time)',
	icon: possibillion,
	iconBg: '#FFFFFF',
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
	icon: StaticImageData;
	iconBg: string;
	date: string;
	points: string[];
	projectReference: string;
}[] = [bpitTechTeachEmployment, remoteHireEmployment, wonderHoodEmployment, possibillionEmployment];

export default experiences;
