import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import Loader, { ComponentLoader } from '../Loader';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import { useInView } from 'react-intersection-observer';

const EarthCanvas = () => {
	const [inViewRef, inView] = useInView({
		triggerOnce: true,
		threshold: 0.1
	});

	if (!inView)
		return (
			<div className='w-full h-full' ref={inViewRef}>
				<ComponentLoader />
			</div>
		);

	return (
		<Canvas
			shadows
			frameloop='demand'
			dpr={[1, 2]}
			gl={{
				preserveDrawingBuffer: true,
				alpha: true
			}}
			camera={{
				fov: 45,
				near: 0.1,
				far: 200,
				position: [-4, 3, 6]
			}}>
			<Preload all />

			<Suspense fallback={<Loader />}>
				<OrbitControls
					autoRotate
					enableZoom={false}
					maxPolarAngle={Math.PI / 2}
					minPolarAngle={Math.PI / 2}
				/>
				<Earth />
			</Suspense>
		</Canvas>
	);
};

const Earth = () => {
	const earth = useGLTF('/planet/scene.gltf');

	return (
		<primitive object={earth.scene} scale={2.5} position-y={0} rotation-y={0} />
	);
};

export default EarthCanvas;
