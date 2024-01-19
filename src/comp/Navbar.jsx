import React, { useState } from "react";
import styles from "../styles";
import { Link } from "react-router-dom";
import { menu, close } from "../assets";

const Navbar = () => {
	const navLinks = [
		{ title: "Home", id: "home" },
		{ title: "About", id: "about" },
		{ title: "Skills", id: "skills" },
		{ title: "Projects", id: "projects" },
		{ title: "Contact", id: "contact" },
	];

	const [active, setActive] = useState("");
	const [hamburger, setHamburger] = useState(false);
	return (
		<nav className="px-5 fixed py-2 rounded-lg z-20 top-5 w-fit  backdrop-blur-2xl bg-blue-200 left-[50%] -translate-x-[50%]">
			<div className="max-xs:hidden mx-auto w-fit gap-6 flex">
				{navLinks.map((item, idx) => {
					return (
						<div
							key={idx}
							className={`${
								active === item.title
									? "text-white"
									: "text-secondary-200"
							} hover:text-white text-[18px] font-medium cursor-pointer`}
							onClick={() => {
								setActive(item.title);
							}}
						>
							<a href={`#${item.id}`}>{item.title}</a>
						</div>
					);
				})}
			</div>

			{/* // This is the hamburger menu */}
			<div
				className="xs:hidden mx-auto w-fit relative"
				onClick={() => {
					setHamburger(!hamburger);
				}}
			>
				<img
					src={hamburger ? close : menu}
					className="bg-blue-600 p-2 rounded-xl py-2.5 h-9 w-9"
				></img>
				<div
					className={`${
						hamburger ? "flex" : "hidden"
					}  p-4 bg-blue-300 flex flex-col gap-2 absolute top-12 -left-6 rounded-md`}
				>
					{navLinks.map((item, idx) => {
						return (
							<Link
								to={`#${item.id}`}
								key={idx}
								className={`hover:text-white hover:underline underline-offset-2  text-[16px]  font-medium cursor-pointer`}
								onClick={() => {
									setActive(item.title);
								}}
							>
								{item.title}
							</Link>
						);
					})}
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
