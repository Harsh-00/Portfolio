import React, { useEffect, useState } from "react";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { Suspense } from "react";
const Earth = () => {
	const [scalee, setScalee] = useState(1.5);

	useEffect(() => {
		window.addEventListener("resize", () => {
			if (window.innerWidth < 1000) {
				setScalee(1.3);
			} else {
				setScalee(1.5);
			}
		});
	});

	const earth = useGLTF("./planet/scene.gltf");

	return <primitive object={earth.scene} scale={scalee} />;
};

const EarthCanvas = () => {
	return (
		//min-w-[770px]
		<div className="relative w-full h-full  ">
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
