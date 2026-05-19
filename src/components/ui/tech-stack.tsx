"use client";
import { detailedStacks, doubledStack } from "@/data/tech-stack";
import { motion } from "framer-motion";
import { carouselVariant, containerVariant, fadeInVariant, negXVariant, posLongYVariant } from "../motion/motion-data";
import { MotionInnerContainer, MotionItem, MotionScrollContainer, MotionText } from "../motion/motion-wrappers";

export default function TechStack() {
    return (
        <MotionScrollContainer variant={containerVariant}>
            <MotionText tag="h1" variant={fadeInVariant} className="text-3xl">
                Tech <span>Stacks</span>
            </MotionText>

            <MotionInnerContainer variant={containerVariant} className="mx-auto grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-2">
                <MotionInnerContainer variant={containerVariant} className="p-4">
                    <MotionText tag="p" variant={negXVariant} className="mb-6 flex items-center text-xl font-bold">
                        <span className="mr-3 size-2 animate-pulse rounded-full bg-blue-500" />
                        Frontend Stack
                    </MotionText>

                    <div className="space-y-4">
                        {detailedStacks.frontend.map((item) => (
                            <MotionItem
                                variant={negXVariant}
                                key={item.name}
                                className="group flex items-center justify-between gap-2 border-b pb-4 last:border-0"
                            >
                                <div className="flex min-w-0 items-center gap-3">
                                    <item.icon className="size-6 shrink-0 sm:size-8" />
                                    <p className="truncate text-sm font-medium sm:text-base">{item.name}</p>
                                </div>

                                <span
                                    className={`rounded px-2 py-1 font-mono text-[10px] tracking-widest uppercase ${item.level === "Advanced" ? "bg-blue-500/20 text-blue-500" : item.level === "Intermediate" ? "bg-red-400/20 text-red-400" : "bg-green-400/20 text-green-400"}`}
                                >
                                    {item.level}
                                </span>
                            </MotionItem>
                        ))}
                    </div>
                </MotionInnerContainer>

                <MotionInnerContainer variant={containerVariant} className="p-4">
                    <MotionText tag="p" variant={negXVariant} className="mb-6 flex items-center text-xl font-bold">
                        <span className="mr-3 size-2 animate-pulse rounded-full bg-purple-500" />
                        Backend Stack
                    </MotionText>

                    <div className="space-y-4">
                        {detailedStacks.backend.map((item) => (
                            <MotionItem
                                variant={negXVariant}
                                key={item.name}
                                className="group flex items-center justify-between gap-2 border-b pb-4 last:border-0"
                            >
                                <div className="flex min-w-0 items-center gap-3">
                                    <item.icon className="size-6 shrink-0 sm:size-8" />
                                    <p className="truncate text-sm font-medium sm:text-base">{item.name}</p>
                                </div>
                                <span
                                    className={`rounded px-2 py-1 font-mono text-[10px] tracking-widest uppercase ${item.level === "Advanced" ? "bg-blue-500/20 text-blue-500" : item.level === "Intermediate" ? "bg-red-400/20 text-red-400" : "bg-green-400/20 text-green-400"}`}
                                >
                                    {item.level}
                                </span>
                            </MotionItem>
                        ))}
                    </div>
                </MotionInnerContainer>
            </MotionInnerContainer>

            <div className="flex overflow-hidden">
                <motion.div variants={carouselVariant} whileInView="visible" viewport={{ once: false }}>
                    <motion.div className="flex whitespace-nowrap" variants={containerVariant} initial="initial" whileInView="final" viewport={{ once: false }}>
                        {doubledStack.map((stack, index) => (
                            <motion.div
                                variants={posLongYVariant}
                                key={`${stack.name}-${index}`}
                                className="group mx-4 flex cursor-default items-center sm:mx-8"
                            >
                                <div className={`flex flex-col items-center transition-opacity duration-500 group-hover:opacity-100 md:opacity-50`}>
                                    <stack.icon className="size-5 sm:size-6" />
                                    <span className="group-hover:text-foreground text-sm font-semibold tracking-tighter text-neutral-700 transition-colors duration-500 sm:text-lg md:text-xl">
                                        {stack.name}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </MotionScrollContainer>
    );
}
