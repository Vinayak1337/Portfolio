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
import Loader from '../Loader';
import { StaticImageData } from 'next/image';

const BallCanvas: FC<BallCanvasProps> = ({ icon }) => (
	<Canvas
		frameloop='demand'
		gl={{
			preserveDrawingBuffer: true
		}}>
		<Preload all />

		<Suspense fallback={<Loader />}>
			<OrbitControls enableZoom={false} />
			<Ball imgUrl={icon.src} />
		</Suspense>
	</Canvas>
);

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
					flatShading
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
