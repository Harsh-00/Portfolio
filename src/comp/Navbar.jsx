import React, { useState } from "react";

import { MdCloudDownload } from "react-icons/md";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { menu, close } from "../assets";
import { skillColors } from "../assets";
import { navLinks } from "../assets";
import {Resume} from "../assets/index"

const Navbar = () => {
    const [hamburger, setHamburger] = useState(false);
    return (
        <div className="relative">
            <div className="relative h-20 md:hidden "></div>

            <nav className="fixed z-20 top-6 w-fit left-[50%] -translate-x-[50%] ">
                <div className="max-xs:hidden bg-opacity-40 backdrop-filter  backdrop-blur-xl bg-[#181818] border rounded-lg border-white mx-auto w-fit flex">
                    {navLinks.map((item, idx) => {
                        return (
                            <motion.div
                                key={idx}
                                className="  text-white text-[18px] font-medium cursor-pointer border-4 border-transparent w-full h-full rounded-lg px-2 py-2 text-sm uppercase"
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
                                        skillColors[
                                            Math.floor(
                                                Math.random() *
                                                    skillColors.length
                                            )
                                        ];
                                    e.currentTarget.style.border = `4px solid ${randomColor}`;
                                }}
                                onMouseLeave={(e) =>
                                    (e.currentTarget.style.border = "")
                                }
                            >
                                <a href={`#${item.id}`}>{item.title}</a>
                            </motion.div>
                        );
                    })}
                </div>

                {/* // This is the hamburger menu */}
                <div
                    className="xs:hidden relative bg-opacity-20 backdrop-filter  backdrop-blur-2xl bg-[#181818]    mx-auto w-fit flex"
                    onClick={() => {
                        setHamburger(!hamburger);
                    }}
                >
                    <motion.img
                        loading="lazy"
                        whileHover={{
                            scale: 1.2,
                            background: "transparent",
                            color: "white",
                        }}
                        whileTap={{ scale: 0.9 }}
                        transition={{
                            type: "spring",
                            stiffness: 500,
                            damping: 8,
                            duration: 0.2,
                        }}
                        src={hamburger ? close : menu}
                        className=" p-2 rounded-xl py-2.5 h-9 w-9 border-white border-2 cursor-pointer"
                    ></motion.img>
                    <div
                        className={`${
                            hamburger ? "flex" : "hidden"
                        }  p-4 backdrop-filter  backdrop-blur-xl bg-[#181818] border  border-white mx-auto w-fit flex flex-col gap-2 absolute top-12 -left-8 rounded-md`}
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

            <div className="fixed z-20 top-6 w-fit right-4 ">
                <div class="relative inline-flex  group">
                    <div class="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
                    <a
                        href={Resume}
                        title="Resume"
                        class="relative inline-flex gap-3 items-center justify-center px-4 py-2 text-lg   text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900" 
						target="_blank"
                        role="button"
                    >
                        <MdCloudDownload className="text-2xl" />
                        <span className="max-sm:hidden mt-0.5">Resume</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
