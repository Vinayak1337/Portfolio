import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { FC, Suspense, useEffect, useState } from 'react';
import Loader from '../Loader';

const Computers: FC<{
	width: number;
}> = ({ width }) => {
	const computer = useGLTF('./desktop_pc/scene.gltf');

	return (
		<mesh>
			<hemisphereLight intensity={0.15} groundColor='black' />
			<spotLight
				position={[-20, 50, 10]}
				angle={0.12}
				penumbra={1}
				intensity={1}
				castShadow
				shadow-mapSize={1024}
			/>
			<pointLight intensity={1} />
			<primitive
				object={computer.scene}
				scale={filteredMap(width).scale}
				position={filteredMap(width).position}
				rotation={[-0.01, -0.2, -0.1]}
			/>
		</mesh>
	);
};

const sizeMap = {
		0: { scale: 0.7, position: [0, -2.5, -0.75] },
		385: { scale: 0.5, position: [0, -1.25, -0.75] },
		410: { scale: 0.45, position: [0, -1, -0.5] },
		450: {
			scale: 0.5,
			position: [0, -2, -0.55]
		},
		640: {
			scale: 0.75,
			position: [0, -2, -0.85]
		},
		768: {
			scale: 0.85,
			position: [0, -2, -1]
		},
		1024: {
			scale: 1,
			position: [1, -2.25, -0.5]
		},
		1280: {
			scale: 1.05,
			position: [0, -2.5, -1]
		}
	},
	filteredMap = (width: number) => {
		const keys = Object.keys(sizeMap).map(key =>
			parseInt(key)
		) as unknown as Array<keyof typeof sizeMap>;

		const nearest = keys
			.filter(key => key <= width)
			.reduce((prev, curr) =>
				Math.abs(curr - width) < Math.abs(prev - width) ? curr : prev
			);

		return sizeMap[nearest];
	};

const ComputersCanvas = () => {
	const [width, setWidth] = useState(0);

	useEffect(() => {
		if (!window) return;

		setWidth(window.innerWidth);
		const debounce = (
			func: { (): void; apply?: any },
			wait: number | undefined
		) => {
			let timeout: ReturnType<typeof setTimeout>;
			return (...args: any) => {
				clearTimeout(timeout);
				timeout = setTimeout(() => func.apply(this, args), wait);
			};
		};

		const handleResize = debounce(() => setWidth(window.innerWidth), 250);
		window.addEventListener('resize', handleResize);

		return () => {
			if (!window) return;
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return (
		<Canvas
			frameloop='demand'
			shadows
			camera={{
				position: [20, 3, 5],
				fov: 25
			}}
			dpr={[1, 2]}
			gl={{
				preserveDrawingBuffer: true, alpha: true
			}}>
			<Preload all />

			<Suspense fallback={<Loader />}>
				<OrbitControls
					enableZoom={false}
					maxPolarAngle={Math.PI / 2}
					minPolarAngle={Math.PI / 2}
				/>
				<Computers width={width} />
			</Suspense>
		</Canvas>
	);
};

export default ComputersCanvas;
