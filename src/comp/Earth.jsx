import React from "react";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { Suspense } from "react";

const Earth = () => {
	const earth = useGLTF("./planet/scene.gltf");
	return <primitive object={earth.scene} scale={1.3} />;
};

const EarthCanvas = () => {
	return (
		<div className="relative min-w-[770px]">
			<Canvas
				shadows
				frameloop="demand"
				gl={{ preserveDrawingBuffer: true }}
				camera={{ fov: 45, near: 0.1, far: 200, position: [0, 0, 5] }}
			>
				<Suspense fallback={null}>
					<OrbitControls
						autoRotate
						enableZoom={false}
						autoRotateSpeed={5}
					/>
					<Earth />
				</Suspense>
			</Canvas>
		</div>
	);
};

export default EarthCanvas;
