import React from "react";
import { FaLink } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { techColors } from "../assets";
import { motion } from "framer-motion";

const Card = ({ project }) => {
	return (
		<div className="max-w-[430px] mx-auto rounded-lg shadow-lg">
			<img src={project.image} className="rounded-lg" alt="" />
			<div className="pr-2 py-8">
				<h2 className="text-3xl font-bold mb-1 ">{project.title}</h2>
				<div className="flex gap-x-3 flex-wrap">
					{project.tech.map((tech, idx) => {
						return (
							<span className={`${techColors[idx]}   `}>
								#{tech}
							</span>
						);
					})}
				</div>
				<p className="text-white opacity-70 mb-6 text-sm font-thin mt-4 ">
					{project.description}
				</p>
				<div className="flex  justify-evenly items-center gap-x-8 gap-y-6 px-4 max-md:flex-wrap">
					<motion.div
						className="bg-white text-black px-4 rounded-lg flex justify-center items-center gap-3 border-4 border-white select-none cursor-pointer py-2 w-full "
						whileHover={{
							scale: 1.1,
							background: "transparent",
							color: "white",
						}}
						whileTap={{ scale: 0.9 }}
						transition={{
							type: "spring",
							stiffness: 500,
							damping: 8,
							duration: 0.2,
						}}
						onMouseEnter={(e) => {
							e.currentTarget.style.boxShadow = `12px 12px 0px white`;
						}}
						onMouseLeave={(e) =>
							(e.currentTarget.style.boxShadow = "")()
						}
					>
						<FaLink className="text-xl" />
						Live Link
					</motion.div>
					<motion.div
						className="bg-white text-black px-4 rounded-lg flex justify-center items-center gap-3 border-4 border-white select-none cursor-pointer py-2 w-full"
						whileHover={{
							scale: 1.1,
							background: "transparent",
							color: "white",
						}}
						whileTap={{ scale: 0.9 }}
						transition={{
							type: "spring",
							stiffness: 500,
							damping: 8,
							duration: 0.2,
						}}
						onMouseEnter={(e) => {
							e.currentTarget.style.boxShadow = `12px 12px 0px white`;
						}}
						onMouseLeave={(e) =>
							(e.currentTarget.style.boxShadow = "")()
						}
					>
						<FaGithub className="text-xl" />
						Github
					</motion.div>
				</div>
			</div>
		</div>
	);
};

export default Card;
