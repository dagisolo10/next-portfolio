"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { carouselVariant, containerVariant, posLongYVariant } from "./motion/motion-data";
import { doubledStack } from "@/data/tech-stack";

export default function Carousel() {
    return (
        <div className="flex overflow-hidden">
            <motion.div variants={carouselVariant} animate="visible">
                <motion.div className="flex whitespace-nowrap" variants={containerVariant} initial="initial" animate="final">
                    {doubledStack.map((stack, index) => (
                        <motion.div variants={posLongYVariant} key={index} className="group mx-8 flex cursor-default items-center">
                            <div className={`flex flex-col items-center opacity-50 transition-opacity duration-500 group-hover:opacity-100`}>
                                <Image className="size-6" src={stack.icon} alt={stack.name} />
                                <span className="text-lg font-bold tracking-tighter text-neutral-700 transition-colors duration-500 group-hover:text-neutral-200 md:text-xl">{stack.name}</span>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </div>
    );
}
