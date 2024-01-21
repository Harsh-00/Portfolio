import React from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload, Sphere } from "@react-three/drei";
import { Suspense, useRef } from "react";
import * as random from "maath/random/dist/maath-random.esm";

const Space = (props) => {
	const ref = useRef();
	const sphere = random.inSphere(new Float32Array(8000), { radius: 1.2 });

	useFrame((state, delta) => {
		ref.current.rotation.x -= delta / 20;
		ref.current.rotation.y -= delta / 40;
	});

	return (
		<group rotation={[0, 0, Math.PI / 4]}>
			<Points
				ref={ref}
				positions={sphere}
				stride={3}
				frustumCulled
				{...props}
			>
				<PointMaterial
					transparent
					color="#ffffff"
					size={0.002}
					sizeAttenuation={true}
					depthWrite={false}
				/>
			</Points>
		</group>
	);
};

const StartCanvase = () => {
	return (
		<div className="fixed w-full h-full inset-0 bg-[#000000] -z-10 ">
			<Canvas camera={{ position: [0, 0, 1] }}>
				<Suspense fallback={null}>
					<Space />
				</Suspense>
			</Canvas>
		</div>
	);
};
export default StartCanvase;
