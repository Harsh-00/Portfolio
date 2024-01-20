import React from "react";
import Card from "./Card";
import { projects } from "../assets";

const Projects = () => {
	return (
		<div className="pt-24 max-w-5xl mx-auto" id="projects">
			<h1 className="text-6xl w-fit mx-auto mb-16">Projects</h1>
			<div className="grid grid-cols-2 justify-between gap-y-16">
				{projects.map((project) => {
					return <Card project={project} />;
				})}
			</div>
		</div>
	);
};

export default Projects;
