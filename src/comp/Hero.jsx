import React from "react";
import styles from "../styles";
import { motion } from "framer-motion";
import EarthCanvas from "./Earth";

const Hero = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{
				duration: 1,
				type: "linear",
			}}
			className="relative w-full h-screen flex justify-center items-center flex-row  max-md:flex-col max-md:pt-[180px] max-md:text  overflow-x-hidden overflow-y-hidden  "
			id="home"
		>
			<div
				className={`${styles.paddingX} flex flex-grow  justify-center  items-center max-h-[300px] max-md:w-full max-sm:max-h-[400px]  `}
			>
				<div className="flex flex-col justify-center items-center">
					<div
						className="bg-violet-500 w-5 h-5 rounded-full
                    "
					></div>
					<div className="w-1 h-60 sm:h-80  bg-gradient-to-b from-violet-600 to-transparent"></div>
				</div>
				<div className={`${styles.heroHeadText} pl-12`}>
					Hi, I'm <br />
					<span className="text-violet-400">Harsh Agarwal</span>
					<p className={`${styles.heroSubText} mt-2`}>
						Skilled in Development
					</p>
				</div>
			</div>

			<div className=" h-full w-[55%]  max-w-[1200px] max-h-[700px] max-md:w-full max-xs:max-h-[500px] pb-10  ">
				<EarthCanvas />
			</div>

			<div className="absolute bottom-20 w-full h-5 flex  justify-center items-center max-md:hidden">
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
		</motion.div>
	);
};

export default Hero;
