import type { StaticImageData } from 'next/image';

export type SceneColorMode = 'obsidian' | 'ember' | 'electric' | 'aurora';

export type ParticleProfile = 'calm' | 'surge' | 'burst';

export interface StoryMetric {
	label: string;
	value: string;
}

export interface StoryCTA {
	label: string;
	href: string;
	external?: boolean;
}

export interface ScenePreset {
	camera: {
		from: [number, number, number];
		to: [number, number, number];
	};
	lighting: {
		ambient: number;
		key: number;
		rim: number;
		color: string;
	};
	motionIntensity: number;
	particleProfile: ParticleProfile;
	colorMode: SceneColorMode;
}

export interface StoryChapter {
	id: string;
	period: string;
	headline: string;
	narrative: string;
	metrics: StoryMetric[];
	scenePreset: ScenePreset;
	cta?: StoryCTA;
}

export interface CaseStudy {
	id: string;
	title: string;
	role: string;
	stack: string[];
	challenge: string;
	build: string;
	outcomes: string[];
	links: StoryCTA[];
	image: string | StaticImageData;
	imageAlt: string;
}

export interface SceneRuntimeState {
	globalProgress: number;
	chapterIndex: number;
	chapterProgress: number;
	motionIntensity: number;
	colorMode: SceneColorMode;
	particleProfile: ParticleProfile;
	lightColor: string;
}
