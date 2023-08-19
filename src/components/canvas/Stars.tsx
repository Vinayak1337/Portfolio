'use client';
import { PointMaterial, Points, Preload } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import * as random from 'maath/random/dist/maath-random.cjs';
import { Suspense, useRef } from 'react';
import type { Points as PointsType } from 'three';

const StarsCanvas = () => (
	<div className='w-full h-auto absolute inset-0 -z-10'>
		<Canvas camera={{ position: [0, 0, 1] }}>
			<Preload all />

			<Suspense fallback={null}>
				<Stars />
			</Suspense>
		</Canvas>
	</div>
);

const Stars = () => {
	const ref = useRef<PointsType>(null);

	const sphere = random.inSphere(new Float32Array(5000), {
		radius: 1.2
	}) as Float32Array;

	useFrame((_, delta) => {
		if (!ref.current) return;

		ref.current.rotation.x -= delta / 10;
		ref.current.rotation.y -= delta / 15;
	});

	return (
		<group rotation={[0, 0, Math.PI / 4]}>
			<Points ref={ref} positions={sphere} stride={3} frustumCulled>
				<PointMaterial
					transparent
					color='#f272c8'
					size={0.002}
					sizeAttenuation
					depthWrite={false}
				/>
			</Points>
		</group>
	);
};

export default StarsCanvas;
