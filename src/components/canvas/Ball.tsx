'use client';
import {
	Decal,
	Float,
	OrbitControls,
	Preload,
	useTexture
} from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { FC, Suspense } from 'react';
import Loader, { ComponentLoader } from '../Loader';
import { StaticImageData } from 'next/image';
import { useInView } from 'react-intersection-observer';

const BallCanvas: FC<BallCanvasProps> = ({ icon }) => {
	const [inViewRef, inView] = useInView({
		triggerOnce: true,
		threshold: 0.1
	});

	if (!inView)
		return (
			<div ref={inViewRef}>
				<ComponentLoader />
			</div>
		);

	return (
		<Canvas
			frameloop='demand'
			gl={{
				preserveDrawingBuffer: true,
				alpha: true
			}}>
			<Preload all />

			<Suspense fallback={<Loader />}>
				<OrbitControls enableZoom={false} />
				<Ball imgUrl={icon.src} />
			</Suspense>
		</Canvas>
	);
};

export default BallCanvas;

const Ball: FC<BallProps> = ({ imgUrl }) => {
	const [decal] = useTexture([imgUrl]);

	return (
		<Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
			<ambientLight intensity={0.25} />
			<directionalLight position={[0, 0, 0.05]} />
			<mesh castShadow receiveShadow scale={2.75}>
				<icosahedronGeometry args={[1, 1]} />
				<meshStandardMaterial
					color='#fff8eb'
					polygonOffset
					polygonOffsetFactor={-5}
					flatShading
				/>
				<Decal
					position={[0, 0, 1]}
					rotation={[2 * Math.PI, 0, 6.25]}
					scale={1}
					map={decal}
				/>
			</mesh>
		</Float>
	);
};

interface BallProps {
	imgUrl: string;
}

interface BallCanvasProps {
	icon: StaticImageData;
}
