import React from "react";
import Card from "./Card";
import project1 from "../assets/project-1.png";

const Projects = () => {
	const projects = [
		{
			title: "Mobile Ordering Web App",
			image: `${project1}`,
			tech: ["React", "Tailwind"],
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.lor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
		},
		{
			title: "Project 1",
			image: `${project1}`,
			tech: ["React", "Tailwind"],
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.lor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
		},
		{
			title: "Project 1",
			image: `${project1}`,
			tech: ["React", "Tailwind"],
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.lor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
		},
	];

	const colors = [
		"text-green-500",
		"text-red-500",
		"text-blue-500",
		"text-yellow-500",
		"text-purple-500",
		"text-pink-500",
		"text-indigo-500",
		"text-gray-500",
	];
	return (
		<div className="mt-32 max-w-4xl mx-auto">
			<h1 className="text-6xl w-fit mx-auto mb-16">Projects</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-16">
				{projects.map((project) => {
					return <Card project={project} colors={colors} />;
				})}
			</div>
		</div>
	);
};

export default Projects;
