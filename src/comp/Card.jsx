import React from "react";
import { FaLink } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Card = ({ project, colors }) => {
	return (
		<div className="bg-blue-900 rounded-lg shadow-lg">
			<img src={project.image} className="rounded-lg" alt="" />
			<div className="p-4">
				<h2 className="text-2xl font-bold mb-1 tracking-wide">
					{project.title}
				</h2>
				<div className="flex gap-3">
					{project.tech.map((tech, idx) => {
						return (
							<span className={`${colors[idx]} mb-4 `}>
								#{tech}
							</span>
						);
					})}
				</div>
				<p className="text-white opacity-70 mb-8 text-sm font-thin">
					{project.description}
				</p>
				<div className="flex my-4 justify-evenly items-center gap-8">
					<div className="bg-white text-black px-4 rounded-lg flex justify-center items-center gap-3 py-2">
						<FaLink className="text-xl" />
						Live Link
					</div>
					<div className="bg-white text-black px-4 rounded-lg flex justify-center items-center gap-3 py-2">
						<FaGithub className="text-xl" />
						Github
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
