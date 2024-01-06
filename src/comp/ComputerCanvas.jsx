import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "./CanvasLoader";

const ComputerCanvas = () => {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const handlerResize = () => {
			setIsMobile(window.innerWidth <= 500);
		};

		window.addEventListener("resize", handlerResize);

		return () => {
			window.removeEventListener("resize", handlerResize);
		};
	}, []);
	const model = useGLTF("./desktop_pc/scene.gltf");
	return (
		<mesh>
			<hemisphereLight intensity={4} groundColor="black" />
			<pointLight intensity={5} />
			<spotLight position={[-20, 50, 10]} />

			<primitive
				object={model.scene}
				position={isMobile ? [0, -1, -1] : [0, -3, -2]}
				rotation={[-0.01, -0.2, -0.1]}
				scale={isMobile ? 0.4 : 0.75}
			/>
		</mesh>
	);
};

const ModelCanvas = () => {
	return (
		<Canvas
			className="w-full h-full "
			frameloop="demand"
			camera={{ position: [20, 3, 5], fov: 25 }}
			gl={{ preserveDrawingBuffer: true }}
		>
			<Suspense fallback={<CanvasLoader />}>
				<OrbitControls
					enableZoom={false}
					// maxPolarAngle={Math.PI / 2}
					// minPolarAngle={Math.PI / 2}
				/>
			</Suspense>
			<ComputerCanvas />
			<Preload all />
		</Canvas>
	);
};

export default ModelCanvas;
