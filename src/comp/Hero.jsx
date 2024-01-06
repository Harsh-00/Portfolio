import React from "react";
import styles from "../styles";
import ComputerCanvas from "./ComputerCanvas";
import { motion } from "framer-motion";
import EarthCanvas from "./Earth";

const Hero = () => {
	return (
		<div className="relative w-full h-screen flex flex-row ">
			<div
				className={`${styles.paddingX} flex flex-grow  justify-center items-center`}
			>
				<div className="flex flex-col justify-center items-center">
					<div
						className="bg-violet-600 w-5 h-5 rounded-full
                    "
					></div>
					<div className="w-1 h-60 sm:h-80 bg-violet-500"></div>
				</div>
				<div className={`${styles.heroHeadText} pl-12`}>
					Hi, I'm <br />
					{/* &nbsp; */}
					<span className="text-violet-400">Harsh Agarwal</span>
					<p className={`${styles.heroSubText} mt-2`}>
						Skilled in Full stack Development
					</p>
				</div>
			</div>

			{/* <ComputerCanvas /> */}
			<EarthCanvas />

			<div className="absolute bottom-20 w-full h-5 flex  justify-center items-center">
				<a
					href="#about"
					className="w-[35px] h-[65px] rounded-3xl border-4 border-secondary-100 inline-flex justify-center items-start p-2"
				>
					<motion.dev
						animate={{ y: [0, 24, 0] }}
						transition={{
							duration: 1.5,
							repeat: Infinity,
							repeatType: "loop",
						}}
						className="w-3 h-3 rounded-full bg-secondary-100 mb-1"
					/>
				</a>
			</div>
		</div>
	);
};

export default Hero;
