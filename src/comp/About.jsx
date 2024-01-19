import React from "react";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import imagee from "../assets/me.jpg";
import { LuGithub } from "react-icons/lu";

const About = () => {
	return (
		<div
			className="text-white flex flex-col relative max-w-6xl mx-auto mt-16 pl-10 "
			id="about"
		>
			<div className="w-fit mx-auto text-6xl mb-16">About Me</div>
			<div className="flex gap-28">
				<img src={imagee} className="w-[250px] rounded-xl"></img>

				<div className="flex justify-center items-center  text-xl tracking-wider flex-col gap-8 ">
					I am currently a third-year B.Tech student majoring in
					Computer Science and Engineering at IIIT, Kota. I am a
					results-driven Software Developer, full-stack web developer.
					<br />I bring ideas to life through code.
					<div className="flex-row flex gap-8">
						<div className="bg-white p-3 rounded-lg">
							<a href="">
								<FaXTwitter color="black" />
							</a>
						</div>
						<div className="bg-white p-3 rounded-lg">
							<a href="">
								<FaLinkedinIn color="black" />
							</a>
						</div>
						<div className="bg-white p-3 rounded-lg">
							<a href="">
								<LuGithub color="black" />
							</a>
						</div>
						<div className="bg-white p-3 rounded-lg">
							<a href="mailto:2021kucp1011@iiitkota.ac.in">
								<IoIosMail color="black" />
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
