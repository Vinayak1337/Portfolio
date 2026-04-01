'use client';

import { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float, useGLTF } from '@react-three/drei';
import { useScroll, type MotionValue } from 'framer-motion';
import * as THREE from 'three';

function DesktopModel({
	scrollYProgress
}: {
	scrollYProgress: MotionValue<number>;
}) {
    const { scene } = useGLTF('/desktop_pc/scene.gltf');
    const groupRef = useRef<THREE.Group>(null);

    useFrame(() => {
        if (!groupRef.current) return;

        // Get scroll progress (0 to 1)
        const progress = scrollYProgress.get();

        // Rotation Y: 0 -> Math.PI * 2
        groupRef.current.rotation.y = progress * Math.PI * 2;

        // Rotation X: 0.2 -> -0.4 
        groupRef.current.rotation.x = 0.2 + (progress * -0.6);

        // Position Y: dips down in the middle (-1.5 -> -3 -> -1)
        let posY = -1.5;
        if (progress < 0.5) posY = -1.5 - (progress * 2 * 1.5); // 0 to -3
        else posY = -3 + ((progress - 0.5) * 2 * 2); // -3 to -1
        groupRef.current.position.y = posY;

        // Scale: 0.6 -> 0.9 -> 0.7
        let scale = 0.6;
        if (progress < 0.5) scale = 0.6 + (progress * 2 * 0.3); // 0.6 to 0.9
        else scale = 0.9 - ((progress - 0.5) * 2 * 0.2); // 0.9 to 0.7
        groupRef.current.scale.set(scale, scale, scale);
    });

    return (
        <group ref={groupRef}>
            <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
                <primitive object={scene} position={[0, -1, 0]} />
            </Float>
        </group>
    );
}

export default function ComputerView() {
    const { scrollYProgress } = useScroll();

    return (
        <div className="fixed inset-0 z-0 pointer-events-none opacity-40 mix-blend-screen">
            <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} />
                <Environment preset="city" />
                <Suspense fallback={null}>
                    <DesktopModel scrollYProgress={scrollYProgress} />
                </Suspense>
            </Canvas>
        </div>
    );
}

useGLTF.preload('/desktop_pc/scene.gltf');
