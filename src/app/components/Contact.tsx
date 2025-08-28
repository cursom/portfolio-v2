"use client";

import { useState } from "react";
import { socialLinks } from "@/app/utils/Social";

export default function Contact() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <div className="flex space-x-4">
            {socialLinks.map((link, index) => (
                <a key={link.id} href={link.href} target="_blank" rel="noopener noreferrer" className="group relative p-3 rounded-full bg-[#1B1B1B] border border-[#2E2E2E] hover:border-primary/50 transition-all duration-300 hover:scale-110" onMouseEnter={() => setHoveredIndex(index)} onMouseLeave={() => setHoveredIndex(null)}>
                    <div className={`text-[#9E9E9E] group-hover:text-primary transition-colors duration-300 ${hoveredIndex === index ? "scale" : ""}`}>
                        {link.icon}
                    </div>
                </a>
            ))}
        </div>
    );
}