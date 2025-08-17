"use client";
import { motion, useAnimationControls } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function CallToAction() {
    const [isHovered, setIsHovered] = useState(false);
    const controls = useAnimationControls();
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const startAnimation = async () => {
            await controls.start({
                x: ["0%", "-50%"],
                transition: {
                    duration: 30,
                    ease: "linear",
                    repeat: Infinity,
                    repeatType: "loop"
                }
            });
        };
        
        startAnimation();
        
        return () => controls.stop();
    }, [controls]);

    useEffect(() => {
        controls.start({
            transition: {
                duration: isHovered ? 60 : 30,
                ease: "linear"
            }
        });
    }, [isHovered, controls]);

    return (
        <section className="py-24">
            <div className="overflow-x-clip p-4 flex" ref={containerRef}>
                <motion.div
                    animate={controls}
                    className="flex flex-none gap-16 pr-16 text-7xl md:text-8xl font-medium group cursor-pointer"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    style={{ willChange: 'transform' }}
                >
                    {Array.from({ length: 10 }).map((_, i) => (
                        <div key={i} className="flex items-center gap-16">
                            <span className="text-lime-400 text-7xl">
                                &#10038;
                            </span>
                            <span className="group-hover:text-lime-400">Try it for free</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
