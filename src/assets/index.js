import menu from "./menu.svg";
import close from "./close.svg";
import html from "./tech/html.png";
import css from "./tech/css.png";
import js from "./tech/javascript.png";
import react from "./tech/reactjs.png";
import redux from "./tech/redux.png";
import node from "./tech/nodejs.png";
import express from "./tech/express.png";
import mongodb from "./tech/mongodb.png";
import materialui from "./tech/materialUI.png";
import tailwindcss from "./tech/tailwind.png";
import ds from "./tech/ds.png";
import algo from "./tech/algo.png";
import c from "./tech/c.png";
import cpp from "./tech/cpp.png";
import nextjs from "./tech/next.svg";
import vuejs from "./tech/vue.png";
import python from "./tech/python.png";
import git from "./tech/git.png";
import github from "./tech/github.png";

import project1 from "../assets/project-1.png";
import project2 from "../assets/project-2.png";
import project3 from "../assets/project-3.png";
import project4 from "../assets/project-4.png";

export {
	menu,
	close,
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
};

export const icons = [
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

export const skill = [
	"HTML",
	"CSS",
	"JavaScript",
	"React",
	"Redux",
	"NodeJS",
	"ExpressJS",
	"MongoDB",
	"MaterialUI",
	"TailwindCSS",
	"Data Structures",
	"Algorithms",
	"C",
	"C++",
	"NextJS",
	"VueJS",
	"Python",
	"Git",
	"Github",
];
export const skillColors = [
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

export const navLinks = [
	{ title: "Home", id: "home" },
	{ title: "About", id: "about" },
	{ title: "Skills", id: "skills" },
	{ title: "Projects", id: "projects" },
	{ title: "Contact", id: "contact" },
];

export const projects = [
	{
		title: "Mobile Ordering Web App",
		image: `${project1}`,
		tech: ["ReactJs", "NodeJs", "ExpressJs", "MongoDB", "TailwindCSS"],
		description:
			"Lists Mobile entries by retrieving data from the server. Implemented Server-side Dynamic Filtering logic enhances the user experience. Users can Add mobile entries, ensuring continuous updates to the Database.",
		github: "https://github.com/Harsh-00/Mobile_Ordering_front",
		link: "https://mobile-ordering-front.vercel.app/",
	},
	{
		title: "Harsh's Blogs",
		image: `${project2}`,
		tech: ["React", "ContextAPI", "TailwindCSS"],
		description:
			"The Blog website project integrates an external API to fetch data. The implementation of a pagination feature ensures organized presentation. Using Context API for efficient state management. Users can explore content category-wise or based on tags.",
		github: "https://github.com/Harsh-00/Deploy_Blog_Website",
		link: "https://react-blog-webpage.netlify.app/",
	},
	{
		title: "ShopHub",
		image: `${project3}`,
		tech: ["React", "Redux Toolkit", "TailwindCSS"],
		description:
			"The website utilizes an External API to dynamically list items, allowing users to add them to a shopping cart. The cart displays the total amount and quantity of selected items, with the ability to easily remove items. To ensure efficient state management, Redux Toolkit is implemented",
		github: "https://github.com/Harsh-00/Deploy_Redux_Cart",
		link: "https://react-cartt-redux.netlify.app/",
	},
	{
		title: "Razorpay UI",
		image: `${project4}`,
		tech: ["HTML", "TailwindCSS"],
		description:
			"The website, a UI clone of Razorpay, is predominantly crafted using Tailwind CSS, showcasing its effective use in design across projects. The extensive utilization of Tailwind CSS ensures a fully responsive and visually appealing user interface.",
		github: "https://github.com/Harsh-00/tailwind",
		link: "https://tailwind-razorpay-clone.netlify.app/",
	},
];
export const techColors = [
	"text-green-500",
	"text-red-500",
	"text-blue-500",
	"text-yellow-500",
	"text-purple-500",
	"text-pink-500",
	"text-indigo-500",
	"text-gray-500",
];
