import React from "react";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import imagee from "../assets/me.jpg";
import { LuGithub } from "react-icons/lu";
import { motion } from "framer-motion";

const About = () => {
	const socials = [
		{
			icon: <FaXTwitter />,
			link: "https://twitter.com/",
		},
		{
			icon: <FaLinkedinIn />,
			link: "https://twitter.com/",
		},
		{
			icon: <LuGithub className="text-xl" />,
			link: "https://twitter.com/",
		},
		{
			icon: <IoIosMail />,
			link: "https://twitter.com/",
		},
	];

	return (
		<div
			className="text-white flex flex-col relative max-w-6xl mx-auto pt-28 pl-10 "
			id="about"
		>
			<div className="w-fit mx-auto text-6xl mb-24">About Me</div>
			<div className="flex gap-28">
				<img src={imagee} className="w-[250px] rounded-xl"></img>

				<div className="flex justify-center items-center text-xl tracking-wider flex-col gap-8 ">
					I am currently a third-year B.Tech student majoring in
					Computer Science and Engineering at IIIT, Kota. I am a
					results-driven Software Developer, full-stack web developer.
					<br />I bring ideas to life through code.
					<div className="flex-row w-full pl-36 flex gap-10">
						{socials.map((social) => {
							return (
								<motion.div
									className="bg-transparent p-3 rounded-lg border-4 border-white select-none cursor-pointer fill-white "
									whileHover={{
										scale: 1.2,
										background: "transparent",
									}}
									whileTap={{ scale: 0.9 }}
									transition={{
										type: "spring",
										stiffness: 500,
										damping: 8,
										duration: 0.2,
									}}
									onMouseEnter={(e) => {
										e.currentTarget.style.boxShadow = `6px 6px 0px white`;
									}}
									onMouseLeave={(e) =>
										(e.currentTarget.style.boxShadow = "")()
									}
								>
									<a href={social.link}>{social.icon}</a>
								</motion.div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
