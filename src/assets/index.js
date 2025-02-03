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
import postgreSQL from "./tech/postgreSQL.png";
import Sql from "./tech/SQL.png";
import azure from "./tech/azure.png";
import framer from "./tech/framer.svg";
import FastAPI from "./tech/FastAPI.png";
import docker from "./tech/docker.png";


import project1 from "../assets/project-1.png";
import project2 from "../assets/project-2.png"; 
import project3 from "../assets/project-3.png"; 

export const Resume='https://shorturl.at/xLGvY';

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
	postgreSQL,
	Sql,
	azure,
	framer,
	FastAPI,
	docker,
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
	FastAPI,
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
	postgreSQL,
	Sql,
	docker,
	azure,
	framer,
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
	"FastAPI",
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
	"postgreSQL",
	"SQL",
	"Docker",
	"Azure",
	"Framer Motion",
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
	{ title: "Experience", id: "exp" },
	{ title: "Projects", id: "projects" },
	{ title: "Contact", id: "contact" },
];

export const experience = [
    {
        company: "Zyod Commerce",
        title: "Tech Intern",
		type: "Remote",
        duration: "March 2024 - April 2024",
        desc: [
            " • Objective: Enhanced Enterprise Resource Planning (ERP) module by designing and integrating interactive reports, improving data accessibility and reduce manual efforts by 80%.",
            " • Designed complex SQL queries to manipulate data efficiently and integrated them into the ERP module to facilitate real-time data retrieval.",
            " • Tested and optimized these queries using pgAdmin before integration, reducing data retrieval times by 25%.",
            " • Designed and implemented advanced filtering features in the backend using query parameters, which enable users to filter data dynamically and reduce API call time by up to 50%.",
            " • Developed and deployed decisive reports using Metabase, presenting data in both tabular and graphical formats.",
        ],
        tech: ["Next.js", "Node.js", "PostgreSQL", "pgAdmin", "Metabase"],
        certificate: "https://drive.google.com/file/d/1rCf5junG2TLT8eBJGW3wGpqRhQ2lt49k/view",
    },
];

export const projects = [
	{
		title: "MobiMart",
		image: `${project1}`,
		tech: ["ReactJs", "NodeJs", "ExpressJs","TailwindCSS", "MongoDB","Stripe API","Azure" ],
		description:
			"To empower users with data-driven insights for choosing optimal mobile device through comprehensive, real-time comparative analysis. Developed a mobile device comparison feature comparing across 10+ key specifications, established data-driven purchase decisions and improved decision-making.",
		github: "https://github.com/Harsh-00/Mobile_Ordering_front",
		link: "https://thankful-hill-0e7a04d00.5.azurestaticapps.net/",
	},
	{
		title: "Generic Inventory",
		image: `${project2}`,
		tech: ["FastApi", "Redis cloud", "Redis Stream", "Docker", "React", "Git"],
		description:
			"Built a scalable platform for real-time inventory management and product ordering using microservices architecture. Integrated Redis Streams for real-time communication b/w microservices and event-driven processing. Containerized the entire application using Docker Compose,",
		github: "https://github.com/Harsh-00/Inventory_UI",
		link: "https://github.com/Harsh-00/Inventory_UI",
	},
	{
		title: "Harsh's Blogs",
		image: `${project3}`,
		tech: ["React", "ContextAPI", "TailwindCSS"],
		description:
			"Blog website that integrates an external API to fetch data. The implementation of a pagination feature ensures organized presentation. Use Context API for efficient State Management. Users can explore content category-wise or based on tags.",
		github: "https://github.com/Harsh-00/Deploy_Blog_Website",
		link: "https://react-blog-webpage.netlify.app/",
	},
	// {
	// 	title: "ShopHub",
	// 	image: `${project3}`,
	// 	tech: ["React", "Redux Toolkit", "TailwindCSS"],
	// 	description:
	// 		"The website utilizes an External API to dynamically list items, allowing users to add them to a shopping cart. The cart displays the total amount and quantity of selected items, with the ability to easily remove items. To ensure efficient state management, Redux Toolkit is implemented",
	// 	github: "https://github.com/Harsh-00/Deploy_Redux_Cart",
	// 	link: "https://react-cartt-redux.netlify.app/",
	// },
	// {
	// 	title: "Razorpay UI",
	// 	image: `${project4}`,
	// 	tech: ["HTML", "TailwindCSS"],
	// 	description:
	// 		"UI clone of Razorpay, predominantly crafted using Tailwind CSS, showcasing its effective use in design across projects. The extensive utilization of Tailwind CSS ensures a fully responsive and visually appealing user interface. Used HTML for structuring the page",
	// 	github: "https://github.com/Harsh-00/tailwind",
	// 	link: "https://tailwind-razorpay-clone.netlify.app/",
	// },
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
