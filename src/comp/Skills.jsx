import React from "react";
import { motion } from "framer-motion";

import html from "../assets/tech/html.png";
import css from "../assets/tech/css.png";
import js from "../assets/tech/javascript.png";
import react from "../assets/tech/reactjs.png";
import redux from "../assets/tech/redux.png";
import node from "../assets/tech/nodejs.png";
import express from "../assets/tech/express.png";
import mongodb from "../assets/tech/mongodb.png";
import materialui from "../assets/tech/materialUI.png";
import tailwindcss from "../assets/tech/tailwind.png";
import ds from "../assets/tech/ds.png";
import algo from "../assets/tech/algo.png";
import c from "../assets/tech/c.png";
import cpp from "../assets/tech/cpp.png";
import nextjs from "../assets/tech/next.svg";
import vuejs from "../assets/tech/vue.png";
import python from "../assets/tech/python.png";
import git from "../assets/tech/git.png";
import github from "../assets/tech/github.png";

const icons = [
	html,
	css,
	js,
	react,
	redux,
	node,
	express,
	mongodb,
	materialui,
	tailwindcss,
	ds,
	algo,
	c,
	cpp,
	nextjs,
	vuejs,
	python,
	git,
	github,
];
const Skills = () => {
	const skill = [
		"HTML",
		"CSS",
		"JS",
		"React",
		"Redux",
		"Node",
		"Express",
		"MongoDB",
		"MaterialUI",
		"TailwindCSS",
		"Data Structures",
		"Algorithms",
		"C",
		"C++",
		"NextJs",
		"VueJs",
		"Python",
		"Git",
		"Github",
	];
	const colors = [
		"rgb(239, 68, 68)",
		"rgb(249, 115, 22)",
		"rgb(245, 158, 11)",
		"rgb(132, 204, 22)",
		"rgb(34, 197, 94)",
		"rgb(16, 185, 129)",
		"rgb(20, 184, 166)",
		"rgb(6, 182, 212)",
		"rgb(14, 165, 233)",
		"rgb(59, 130, 246)",
		"rgb(99, 102, 241)",
		"rgb(139, 92, 246)",
		"rgb(168, 85, 247)",
		"rgb(217, 70, 239)",
		"rgb(236, 72, 153)",
		"rgb(244, 63, 94)",
	];

	return (
		<div className="mt-32 max-w-4xl mx-auto">
			<div className="text-6xl w-fit mx-auto mb-16">Skills</div>
			<div className="grid grid-cols-4 gap-10 ">
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
									colors[
										Math.floor(
											Math.random() * colors.length
										)
									];
								e.currentTarget.style.boxShadow = `12px 12px 0px  ${randomColor}`;
								e.currentTarget.style.border = `4px solid ${randomColor}`;
							}}
							onMouseLeave={(e) =>
								(e.currentTarget.style.boxShadow = "")(
									(e.currentTarget.style.textShadow = "")
								)
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
// hover:shadow-[0px_0px_10px_8px] hover:shadow-${randomColor}
