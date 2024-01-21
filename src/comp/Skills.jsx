import React from "react";
import { motion } from "framer-motion";

import { icons, skill, skillColors } from "../assets";

const Skills = () => {
	return (
		<div className="pt-20 mt-10 max-w-4xl mx-auto px-4 " id="skills">
			<div className="text-6xl w-fit mx-auto mb-8">Skills</div>
			<div className="grid grid-cols-4 px-6  gap-8 max-md:grid-cols-3 max-sm:grid-cols-2 max-xs:grid-cols-1 ">
				{skill.map((s, idx) => {
					return (
						<motion.div
							className="text-xl border-white border-4 rounded-lg flex text-center justify-center items-center px-4 py-3 cursor-pointer select-none"
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
								e.currentTarget.style.boxShadow = `12px 12px 0px  ${randomColor}`;
								e.currentTarget.style.border = `4px solid ${randomColor}`;
							}}
							onMouseLeave={(e) =>
								(e.currentTarget.style.boxShadow = "")
							}
						>
							<img
								src={icons[idx]}
								alt=""
								className="w-10 h-10 mr-3"
							/>
							{s}
						</motion.div>
					);
				})}
			</div>
		</div>
	);
};

export default Skills;
