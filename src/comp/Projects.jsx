import React from "react";
import Card from "./Card";
import { projects } from "../assets";

const Projects = () => {
	return (
		<div className="pt-24 max-w-5xl mx-auto px-4" id="projects">
			<h1 className="text-6xl w-fit mx-auto mb-16">Projects</h1>
			<div className="grid grid-cols-2 justify-between gap-y-20 max-md:grid-cols-1 gap-x-4 max-sm:px-4 max-xs:text-sm ">
				{projects.map((project, idx) => {
					return <Card key={idx} project={project} />;
				})}
			</div>
		</div>
	);
};

export default Projects;
