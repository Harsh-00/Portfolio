import { Html, useProgress } from "@react-three/drei";
import React from "react";

const CanvasLoader = () => {
	const { progress } = useProgress();
	return (
		<Html>
			<div className="z-10">
				<p className="font-semibold text-xl text-white">
					{progress.toFixed(2)}%
				</p>
			</div>
		</Html>
	);
};

export default CanvasLoader;
