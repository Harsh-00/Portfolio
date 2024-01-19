import React from "react";
import { FaLink } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { techColors } from "../assets";

const Card = ({ project }) => {
	return (
		<div className="max-w-[430px] mx-auto rounded-lg shadow-lg">
			<img src={project.image} className="rounded-lg" alt="" />
			<div className="pr-2 py-8">
				<h2 className="text-3xl font-bold mb-1 ">
					{project.title}
				</h2>
				<div className="flex gap-3">
					{project.tech.map((tech, idx) => {
						return (
							<span className={`${techColors[idx]} mb-4 `}>
								#{tech}
							</span>
						);
					})}
				</div>
				<p className="text-white opacity-70 mb-6 text-sm font-thin">
					{project.description}
				</p>
				<div className="flex justify-evenly items-center gap-8">
					<div className="bg-white text-black px-4 rounded-lg flex justify-center items-center gap-3 py-2 w-full">
						<FaLink className="text-xl" />
						Live Link
					</div>
					<div className="bg-white text-black px-4 rounded-lg flex justify-center items-center gap-3 py-2 w-full">
						<FaGithub className="text-xl" />
						Github
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
