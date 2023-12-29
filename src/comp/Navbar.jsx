import React, { useState } from "react";
import styles from "../styles";
import { Link } from "react-router-dom";
import { logo, menu, close } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
	const [active, setActive] = useState("");
	const [hamburger, setHamburger] = useState(false);
	return (
		<nav className={`${styles.paddingX} w-full`}>
			<Link
				to="/"
				onClick={() => {
					setActive("");
					window.scrollTo(0, 0);
				}}
			>
				<img src={logo} className="w-9 h-9 object-contain" />
			</Link>

			<div className="max-xs:hidden mx-auto w-fit gap-2 flex">
				{navLinks.map((item, idx) => {
					return (
						<Link
							to={`#${item.id}`}
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
							{item.title}
						</Link>
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
								className={`hover:text-white hover:underline underline-offset-2  text-[14px]  font-medium cursor-pointer`}
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
