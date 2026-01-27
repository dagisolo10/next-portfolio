import { containerVariant, fadeInVariant, negXVariant } from "./motion/motion-data";
import { MotionContainer, MotionInnerContainer, MotionItem, MotionText } from "./motion/motion-wrappers";

import Image from "next/image";
import { detailedStacks } from "@/data/tech-stack";

export default function StackCards() {
    return (
        <MotionContainer tag="div" variant={containerVariant}>
            <MotionText tag="h1" variant={fadeInVariant} className="mb-4 text-3xl">
                Tech <span>Stacks</span>
            </MotionText>

            {/* Frontend Card */}
            <MotionInnerContainer variant={containerVariant} className="mx-auto grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-2">
                <MotionInnerContainer variant={containerVariant} className="p-4">
                    <MotionText tag="p" variant={negXVariant} className="mb-6 flex items-center text-xl font-bold text-white">
                        <span className="mr-3 h-2 w-2 animate-pulse rounded-full bg-blue-500" />
                        Frontend Stack
                    </MotionText>
                    <div className="space-y-4">
                        {detailedStacks.frontend.map((item, i) => (
                            <MotionItem variant={negXVariant} key={i} className="group flex items-center justify-between border-b border-neutral-800/50 pb-4 last:border-0">
                                <div className="flex items-center gap-4">
                                    <Image src={item.icon} alt={item.name} className="size-8 grayscale-0 transition-all duration-500 lg:grayscale lg:group-hover:grayscale-0" />
                                    <span className="font-medium text-neutral-300">{item.name}</span>
                                </div>
                                <span className={`rounded px-2 py-1 font-mono text-[10px] tracking-widest uppercase ${item.level === "Advanced" ? "bg-blue-500/20 text-blue-500" : item.level === "Intermediate" ? "bg-red-400/20 text-red-400" : "bg-green-400/20 text-green-400"}`}>{item.level}</span>
                            </MotionItem>
                        ))}
                    </div>
                </MotionInnerContainer>

                {/* Backend Card */}
                <MotionInnerContainer variant={containerVariant} className="p-4">
                    <MotionText tag="p" variant={negXVariant} className="mb-6 flex items-center text-xl font-bold text-white">
                        <span className="mr-3 h-2 w-2 animate-pulse rounded-full bg-purple-500" />
                        Backend Stack
                    </MotionText>
                    <div className="space-y-4">
                        {detailedStacks.backend.map((item, i) => (
                            <MotionItem variant={negXVariant} key={i} className="group flex items-center justify-between border-b border-neutral-800/50 pb-4 last:border-0">
                                <div className="flex items-center gap-4">
                                    <Image src={item.icon} alt={item.name} className="size-8 grayscale-0 transition-all duration-500 lg:grayscale lg:group-hover:grayscale-0" />
                                    <span className="font-medium text-neutral-300">{item.name}</span>
                                </div>
                                <span className={`rounded px-2 py-1 font-mono text-[10px] tracking-widest uppercase ${item.level === "Advanced" ? "bg-blue-500/20 text-blue-500" : item.level === "Intermediate" ? "bg-red-400/20 text-red-400" : "bg-green-400/20 text-green-400"}`}>{item.level}</span>
                            </MotionItem>
                        ))}
                    </div>
                </MotionInnerContainer>
            </MotionInnerContainer>
        </MotionContainer>
    );
}

// "use client";
// import { detailedStacks } from "@/data/tech-stack";
// import { motion } from "framer-motion";
// import Image from "next/image";

// export default function StackCards() {
//     return (
//         <div>
//             <motion.h1 className="mb-4 text-3xl" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 3, delay: 0.4 }}>
//                 Tech <span>Stacks</span>
//             </motion.h1>

//             <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-2">
//                 {/* Frontend Card */}
//                 <motion.div initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 0.4 }} whileInView={{ opacity: 1, y: 0 }} className="p-4">
//                     <h3 className="mb-6 flex items-center text-xl font-bold text-white">
//                         <span className="mr-3 h-2 w-2 animate-pulse rounded-full bg-blue-500" />
//                         Frontend Stack
//                     </h3>
//                     <div className="space-y-4">
//                         {detailedStacks.frontend.map((item, i) => (
//                             <motion.div initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.8, delay: i * 0.4 + 0.4 }} key={i} className="group flex items-center justify-between border-b border-neutral-800/50 pb-4 last:border-0">
//                                 <div className="flex items-center gap-4">
//                                     <Image src={item.icon} alt={item.name} className="size-8 grayscale-0 transition-all duration-500 lg:grayscale lg:group-hover:grayscale-0" />
//                                     <span className="font-medium text-neutral-300">{item.name}</span>
//                                 </div>
//                                 <span className={`rounded px-2 py-1 font-mono text-[10px] tracking-widest uppercase ${item.level === "Advanced" ? "bg-blue-500/20 text-blue-500" : item.level === "Intermediate" ? "bg-red-400/20 text-red-400" : "bg-green-400/20 text-green-400"}`}>{item.level}</span>
//                             </motion.div>
//                         ))}
//                     </div>
//                 </motion.div>

//                 {/* Backend Card */}
//                 <motion.div initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 0.8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="p-4">
//                     <h3 className="mb-6 flex items-center text-xl font-bold text-white">
//                         <span className="mr-3 h-2 w-2 animate-pulse rounded-full bg-purple-500" />
//                         Backend Stack
//                     </h3>
//                     <div className="space-y-4">
//                         {detailedStacks.backend.map((item, i) => (
//                             <motion.div initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.8, delay: i * 0.4 + 0.8 }} key={i} className="group flex items-center justify-between border-b border-neutral-800/50 pb-4 last:border-0">
//                                 <div className="flex items-center gap-4">
//                                     <Image src={item.icon} alt={item.name} className="size-8 grayscale-0 transition-all duration-500 lg:grayscale lg:group-hover:grayscale-0" />
//                                     <span className="font-medium text-neutral-300">{item.name}</span>
//                                 </div>
//                                 <span className={`rounded px-2 py-1 font-mono text-[10px] tracking-widest uppercase ${item.level === "Advanced" ? "bg-blue-500/20 text-blue-500" : item.level === "Intermediate" ? "bg-red-400/20 text-red-400" : "bg-green-400/20 text-green-400"}`}>{item.level}</span>
//                             </motion.div>
//                         ))}
//                     </div>
//                 </motion.div>
//             </div>
//         </div>
//     );
// }
