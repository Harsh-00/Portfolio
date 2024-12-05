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
			link: "https://twitter.com/Harsh_Agarwal00",
		},
		{
			icon: <FaLinkedinIn />,
			link: "https://www.linkedin.com/in/iharsh-agarwal/",
		},
		{
			icon: <LuGithub className="text-xl" />,
			link: "https://github.com/Harsh-00",
		},
		{
			icon: <IoIosMail />,
			link: "mailto:2021kucp1011@iiitkota.ac.in",
		},
	];

	return (
		<div
			className="text-white flex flex-col relative max-w-6xl mx-auto pt-28 px-6 max-xs:mt-28 "
			id="about"
		>
			<div className="w-fit mx-auto text-6xl mb-24">About Me</div>
			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{
					duration: 1,
					type: "linear",
				}}
				className="flex gap-x-28 gap-y-16 justify-center items-center max-md:flex-col"
			>
				<img
					loading="lazy"
					src={imagee}
					className="w-[250px] rounded-xl ml-6 max-xs:w-[180px]"
				></img>

				<span className="flex justify-center items-center text-xl tracking-wider flex-col gap-10 text-center  ">
					<span className="max-xs:text-sm">
						I am currently a{" "}
						<span className="text-purple-500">Final year</span>{" "}
						B.Tech student majoring in Computer Science and
						Engineering (CSE) at{" "}
						<span className="uppercase text-green-500">
							IIIT, Kota
						</span>{" "}
						. I am a results-driven Software Developer, full-stack
						web developer.I bring ideas to life through code.
					</span>
					<div className="flex-row w-full flex gap-10 justify-center items-center ">
						{socials.map((social, idx) => {
							return (
								<motion.div
									key={idx}
									className="bg-transparent p-4 max-xs:p-2  border-2 border-white select-none cursor-pointer fill-white  "
									whileHover={{
										scale: 1.18,
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
										e.currentTarget.style.boxShadow = `8px 8px 0px white`;
									}}
									onMouseLeave={(e) =>
										(e.currentTarget.style.boxShadow = "")()
									}
								>
									<a href={social.link} target="_blank" >
										{social.icon}
									</a>
								</motion.div>
							);
						})}
					</div>
				</span>
			</motion.div>
		</div>
	);
};

export default About;
