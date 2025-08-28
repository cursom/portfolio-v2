"use client";

import Contact from "@/app/components/Contact";
import { primary, secondary } from "@/app/utils/Stack";

export default function AboutMe() {
    return (
        <div className="grid gap-6 lg:grid-cols-2">
            <div className="space-y-4 lg:space-y-6 text-center lg:text-left">
                <div>
                    <h1 className="text-3xl lg:text-5xl font-bold mb-2 text-balance text-[#FAFAFA]">cursom</h1>
                    <p className="text-base lg:text-lg mb-4 text-[#929292]">17 years old • Hungary</p>
                    <p className="text-sm lg:text-base leading-relaxed max-w-md mx-auto lg:mx-0 text-[#C5C5C5]">Passionate about creating modern web applications and software solutions. Focused on clean code and exceptional user experiences.</p>
                </div>

                <div className="flex justify-center lg:justify-start">
                    <Contact />
                </div>
            </div>

            <div>
                <h2 className="text-xl lg:text-2xl font-bold mb-4 lg:mb-6 text-[#008A55] text-center lg:text-left">Tech Stack</h2>
                <div className="mb-6 lg:mb-8">
                    <div className="grid grid-cols-2 gap-2 lg:gap-3">
                        {primary.map((tech) => (
                            <div key={tech.name} className={`px-3 lg:px-4 py-2 lg:py-3 rounded-lg border transition-all duration-300 hover:scale-105 text-center ${tech.style}`}>
                                <span className="font-medium text-sm lg:text-base">
                                    {tech.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                    <h3 className="text-base lg:text-lg font-semibold mb-3 lg:mb-4 text-[#E3E3E3] text-center lg:text-left">Also Work With</h3>
                    <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                        {secondary.map((tech) => (
                            <span key={tech} className="px-2 lg:px-3 py-1 lg:py-2 rounded-full text-xs lg:text-sm border text-[#EEEEEE] bg-[#1B1B1B] border-[#2E2E2E] hover:opacity-80">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}