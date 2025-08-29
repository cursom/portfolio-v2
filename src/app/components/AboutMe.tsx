"use client";

import Contact from "@/app/components/Contact";
import { primary, secondary } from "@/app/utils/Stack";
import { motion } from "framer-motion";
import { container, item, fadeItem } from "@/app/utils/Animations";

export default function AboutMe() {
    return (
        <motion.div className="grid gap-6 lg:grid-cols-2" variants={container} initial="hidden" animate="show">
            <motion.div className="space-y-4 lg:space-y-6 text-center lg:text-left" variants={item}>
                <motion.div variants={item}>
                    <h1 className="text-3xl lg:text-5xl font-bold mb-2 text-balance text-[#FAFAFA]">cursom</h1>
                    <p className="text-base lg:text-lg mb-4 text-[#929292]">17 years old • Hungary</p>
                    <p className="text-sm lg:text-base leading-relaxed max-w-md mx-auto lg:mx-0 text-[#C5C5C5]">Passionate about creating modern web applications and software solutions. Focused on clean code and exceptional user experiences.</p>
                </motion.div>
                <motion.div className="flex justify-center lg:justify-start" variants={item}>
                    <Contact />
                </motion.div>
            </motion.div>

            <motion.div variants={item}>
                <h2 className="text-xl lg:text-2xl font-bold mb-4 lg:mb-6 text-[#008A55] text-center lg:text-left">Tech Stack</h2>
                <motion.div className="mb-6 lg:mb-8" variants={item}>
                    <motion.div className="grid grid-cols-2 gap-2 lg:gap-3" variants={container}>
                        {primary.map((tech) => (
                            <motion.div key={tech.name} className={`px-3 lg:px-4 py-2 lg:py-3 rounded-lg border transition-all duration-300 hover:scale-105 text-center ${tech.style}`} variants={fadeItem}>
                                <span className="font-medium text-sm lg:text-base">{tech.name}</span>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>

                <motion.div variants={item}>
                    <h3 className="text-base lg:text-lg font-semibold mb-3 lg:mb-4 text-[#E3E3E3] text-center lg:text-left">Also Work With</h3>
                    <motion.div className="flex flex-wrap gap-2 justify-center lg:justify-start" variants={container}>
                        {secondary.map((tech) => (
                            <motion.span key={tech} className="px-2 lg:px-3 py-1 lg:py-2 rounded-full text-xs lg:text-sm border text-[#EEEEEE] bg-[#1B1B1B] border-[#2E2E2E] hover:opacity-80" variants={fadeItem} >
                                {tech}
                            </motion.span>
                        ))}
                    </motion.div>
                </motion.div>
            </motion.div>
        </motion.div>
    );
}