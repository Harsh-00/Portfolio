import React from "react";
import { motion } from "framer-motion";

import { icons, skill, skillColors } from "../assets";

const Skills = () => {
	return (
		<div className="pt-20 my-16 mb-16 max-w-4xl mx-auto px-4  " id="skills">
			<div className="text-6xl w-fit mx-auto mb-12">Skills</div>
			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{
					duration: 1,
					type: "linear",
				}}
				className="flex flex-wrap px-4 gap-x-4 gap-y-2 justify-center items-center  max-md:grid-cols-3 max-sm:grid-cols-2 max-xs:grid-cols-1 "
			>
				{skill.map((s, idx) => {
					return (
						<motion.div
							key={idx}
							className="text-lg border-white border-2 rounded-sm flex text-center justify-center items-center px-5 py-1  cursor-pointer select-none max-xs:text-sm"
							whileHover={{
								scale: 1.1,
							}}
							whileTap={{ scale: 0.9 }}
							transition={{
								type: "spring",
								stiffness: 500,
								damping: 8,
								duration: 0.2,
							}}
							onMouseEnter={(e) => {
								const randomColor =
									skillColors[
										Math.floor(
											Math.random() * skillColors.length
										)
									];
								e.currentTarget.style.boxShadow = `6px 6px 0px  ${randomColor}`;
								e.currentTarget.style.border = `2px solid ${randomColor}`;
							}}
							onMouseLeave={(e) =>
								(e.currentTarget.style.boxShadow = "")
							}
						>
							<img
								loading="lazy"
								src={icons[idx]}
								alt=""
								className="w-6 h-6 mr-3"
							/>
							{s}
						</motion.div>
					);
				})}
			</motion.div>
		</div>
	);
};

export default Skills;
