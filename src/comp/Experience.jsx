import React from "react";
import { experience } from "../assets";
import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";

const Experience = () => {
    return (
        <div className="min-h-screen w-full flex flex-col items-center justify-center bg-transparent relative overflow-hidden mt-20">
            <h1 className="text-6xl w-fit mx-auto mb-10">Experience</h1>

            <div className="max-w-4xl w-full px-4 z-10">
                <div className="relative">
                    {experience.map((exp, idx) => {
                        return (
                            <motion.div
                                key={idx}
                                transition={{
                                    type: "spring",
                                    stiffness: 500,
                                    damping: 8,
                                    duration: 0.2,
                                }}
                                
                            >
                                <div className="absolute left-0 w-1 bg-purple-500 h-full rounded-full" />

                                <div className="ml-8 mb-12 bg-transparent backdrop-blur-[2px] border-2 border-purple-500 rounded-lg p-6 transform transition-all duration-300 hover:scale-105 hover:border-purple-400">
                                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-0">
                                        <h3 className="text-2xl font-bold text-white">
                                            {exp.company}
                                        </h3>
                                        <div className="flex flex-col items-end">
                                            <span className="text-purple-400">
                                                {exp.duration}
                                            </span>
                                            <span className="text-sm text-purple-300 mt-1 flex items-center">
                                                ( {exp.type} )
                                            </span>
                                        </div>
                                    </div>
                                    <h4 className="text-xl text-purple-300 mb-4">
                                        {exp.title}
                                    </h4>
                                    <ul className="text-gray-300 space-y-2">
                                        {exp.desc.map((des) => {
                                            return <li>{des}</li>;
                                        })}
                                    </ul>

                                    <div className="mt-4 flex flex-wrap gap-2">
                                        {exp.tech.map((te) => (
                                            <span
                                                key={te}
                                                className="px-3 py-1 text-sm text-white bg-purple-900/50 border border-purple-500 rounded-full"
                                            >
                                                {te}
                                            </span>
                                        ))}
                                    </div>

                                    <a
                                        href={exp.certificate}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center mt-6 px-4 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors duration-300"
                                    >
                                        View Certificate{" "}
                                        <FaExternalLinkAlt className="ml-2" />
                                    </a>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Experience;
