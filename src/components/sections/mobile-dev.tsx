"use client";
import { containerVariant, negXVariant, posXVariant, posYVariant } from "@/components/motion/motion-data";
import { MotionInnerContainer, MotionScrollContainer, MotionScrollText } from "@/components/motion/motion-wrappers";
import { motion } from "framer-motion";
import { Dumbbell } from "lucide-react";
import { FiSmartphone } from "react-icons/fi";
import { TbActivity, TbFlame } from "react-icons/tb";

export default function MobileDev() {
    return (
        <>
            <MotionScrollContainer variant={containerVariant} className="space-y-4">
                <MotionScrollText tag="h1" variant={negXVariant}>
                    Mobile <span>Development</span>
                </MotionScrollText>
                <MotionScrollText tag="p" variant={negXVariant} className="text-muted-foreground max-w-2xl">
                    Extending full stack engineering principles into mobile. Currently building with React Native.
                </MotionScrollText>
            </MotionScrollContainer>

            <MotionScrollContainer variant={containerVariant} className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2">
                <div className="flex items-center justify-center">
                    <div className="relative mx-auto w-64 sm:w-70">
                        <div className="relative overflow-hidden rounded-[3rem] border-4 border-neutral-700 bg-neutral-900 p-4 shadow-2xl shadow-indigo-500/10">
                            <div className="absolute top-0 left-1/2 z-10 h-5 w-28 -translate-x-1/2 rounded-b-2xl bg-neutral-900">
                                <div className="mx-auto mt-1.5 h-2 w-2 rounded-full bg-neutral-700" />
                            </div>

                            <div className="space-y-4 pt-6">
                                <div className="flex items-center justify-between px-2">
                                    <div className="flex items-center gap-2">
                                        <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-500/20">
                                            <Dumbbell className="size-4 text-emerald-400" />
                                        </div>
                                        <span className="text-sm font-semibold text-white">Stivin</span>
                                    </div>
                                    <motion.div
                                        animate={{ scale: [1, 1.05, 1] }}
                                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                        className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 font-mono text-[8px] tracking-widest text-emerald-400 uppercase"
                                    >
                                        In Dev
                                    </motion.div>
                                </div>

                                <div className="space-y-3 px-2">
                                    {[
                                        { label: "Push Day", icon: TbFlame, color: "text-orange-400", barWidth: "w-3/4" },
                                        { label: "Cardio", icon: TbActivity, color: "text-cyan-400", barWidth: "w-1/2" },
                                        { label: "Pull Day", icon: Dumbbell, color: "text-purple-400", barWidth: "w-2/3" },
                                    ].map((item, i) => {
                                        const Icon = item.icon;

                                        return (
                                            <motion.div
                                                key={item.label}
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.3 + i * 0.15, duration: 0.5 }}
                                                className="flex items-center gap-3 rounded-xl bg-neutral-800/50 p-3"
                                            >
                                                <Icon className={`${item.color} size-5`} />
                                                <div className="flex-1">
                                                    <div className="mb-1 flex items-center justify-between">
                                                        <span className="text-xs font-medium text-neutral-300">{item.label}</span>
                                                        <motion.div
                                                            animate={{ opacity: [0.4, 1, 0.4] }}
                                                            transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3 }}
                                                            className="h-1.5 w-1.5 rounded-full bg-emerald-500"
                                                        />
                                                    </div>
                                                    <div className="h-1.5 overflow-hidden rounded-full bg-neutral-700">
                                                        <motion.div
                                                            initial={{ width: 0 }}
                                                            animate={{
                                                                width: ["0%", item.barWidth === "w-3/4" ? "75%" : item.barWidth === "w-1/2" ? "50%" : "66%"],
                                                            }}
                                                            transition={{ delay: 0.6 + i * 0.2, duration: 1, ease: "easeOut" }}
                                                            className={`h-full rounded-full ${item.color.replace("text-", "bg-")}/60`}
                                                        />
                                                    </div>
                                                </div>
                                            </motion.div>
                                        );
                                    })}
                                </div>

                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 1, duration: 0.5 }}
                                    className="mx-2 grid grid-cols-3 gap-2 rounded-xl bg-neutral-800/30 p-3"
                                >
                                    {[
                                        { label: "This Week", value: "5", color: "text-emerald-400" },
                                        { label: "Streak", value: "12", color: "text-amber-400" },
                                        { label: "PRs", value: "3", color: "text-rose-400" },
                                    ].map((stat, i) => (
                                        <div key={stat.label} className="text-center">
                                            <motion.div
                                                initial={{ scale: 0 }}
                                                animate={{ scale: 1 }}
                                                transition={{ delay: 1.3 + i * 0.15, type: "spring", damping: 12 }}
                                                className={`text-lg font-bold ${stat.color}`}
                                            >
                                                {stat.value}
                                            </motion.div>
                                            <div className="text-[9px] text-neutral-500">{stat.label}</div>
                                        </div>
                                    ))}
                                </motion.div>

                                <div className="flex justify-around px-6 pt-1">
                                    {[1, 2, 3, 4].map((i) => (
                                        <motion.div
                                            key={i}
                                            animate={{ opacity: [0.3, 0.6, 0.3] }}
                                            transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                                            className="h-1.5 w-1.5 rounded-full bg-neutral-600"
                                        />
                                    ))}
                                </div>

                                <div className="flex justify-center pb-2">
                                    <div className="h-1 w-24 rounded-full bg-neutral-700" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <MotionInnerContainer variant={containerVariant} className="flex flex-col justify-center gap-6">
                    <MotionScrollText tag="div" variant={posXVariant} className="space-y-4">
                        <MotionScrollText tag="h1" variant={posYVariant} className="text-2xl font-bold">
                            Stivin Workout Tracker
                        </MotionScrollText>

                        <MotionScrollText tag="p" variant={posYVariant} className="text-muted-foreground leading-relaxed">
                            Cross-platform mobile workout tracker built with React Native. Features exercise logging, progress tracking, workout history, and
                            fitness analytics.
                        </MotionScrollText>

                        <MotionScrollText tag="p" variant={posYVariant} className="text-muted-foreground leading-relaxed">
                            Applying full stack engineering principles — separation of concerns, clean data modeling, and scalable architecture — to mobile
                            development.
                        </MotionScrollText>
                    </MotionScrollText>

                    <MotionScrollContainer variant={containerVariant} className="flex flex-wrap items-center gap-4">
                        <MotionScrollText
                            tag="span"
                            variant={posYVariant}
                            className="rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 font-mono text-[10px] tracking-widest text-blue-400 uppercase"
                        >
                            React Native
                        </MotionScrollText>
                        <MotionScrollText
                            tag="span"
                            variant={posYVariant}
                            className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 font-mono text-[10px] tracking-widest text-cyan-400 uppercase"
                        >
                            Expo
                        </MotionScrollText>
                        <MotionScrollText
                            tag="span"
                            variant={posYVariant}
                            className="rounded-full border border-amber-500/20 bg-amber-500/10 px-3 py-1 font-mono text-[10px] tracking-widest text-amber-400 uppercase"
                        >
                            TypeScript
                        </MotionScrollText>
                        <MotionScrollText
                            tag="span"
                            variant={posYVariant}
                            className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 font-mono text-[10px] tracking-widest text-emerald-400 uppercase"
                        >
                            In Development
                        </MotionScrollText>
                    </MotionScrollContainer>

                    <MotionScrollText tag="div" variant={posYVariant} className="flex items-center gap-2 text-sm text-neutral-500">
                        <FiSmartphone className="size-4" />
                        <span>Available for testing. Beta soon</span>
                    </MotionScrollText>
                </MotionInnerContainer>
            </MotionScrollContainer>
        </>
    );
}
