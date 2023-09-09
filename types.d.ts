/// <reference types="next" />
/// <reference types="next/image-types/global" />

interface BaseProject {
	name: string;
	description: string;
	tags?: {
		name: string;
		color: string;
	}[];
	refId?: string;
	company?: string;
}

interface WithLink extends BaseProject {
	image?: string | StaticImageData;
	source_code_link?: string;
	site_link: string;
}

interface WithGithub extends BaseProject {
	image?: string | StaticImageData;
	source_code_link: string;
	site_link?: string;
}

type Project = WithLink | WithGithub;
