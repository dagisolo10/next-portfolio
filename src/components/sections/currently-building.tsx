"use client";
import { containerVariant, negXVariant, posYVariant } from "@/components/motion/motion-data";
import { MotionContainer, MotionScrollContainer, MotionScrollText } from "@/components/motion/motion-wrappers";
import { cn } from "@/lib/utils";
import { CgCodeSlash } from "react-icons/cg";
import { TbHeartRateMonitor, TbMessages, TbSmartHome } from "react-icons/tb";

const buildingItems = [
    {
        icon: TbSmartHome,
        title: "Event Organizer Platform",
        description: "Full-cycle booking system with real-time availability and state machine-based booking workflows.",
        status: "In Progress",
        statusColor: "text-amber-400 border-amber-500/20 bg-amber-500/10",
        iconColor: "text-amber-500 bg-amber-500/10",
    },
    {
        icon: TbMessages,
        title: "Whisper Chat",
        description: "Real-time messaging with offline resilience, presence detection, and channel-based room architecture.",
        status: "In Progress",
        statusColor: "text-cyan-400 border-cyan-500/20 bg-cyan-500/10",
        iconColor: "text-cyan-500 bg-cyan-500/10",
    },
    {
        icon: TbHeartRateMonitor,
        title: "Stivin Workout Tracker",
        description: "Cross-platform mobile app for tracking workouts, progress, and fitness analytics — built with React Native.",
        status: "In Development",
        statusColor: "text-emerald-400 border-emerald-500/20 bg-emerald-500/10",
        iconColor: "text-emerald-500 bg-emerald-500/10",
    },
    {
        icon: CgCodeSlash,
        title: "Architecture Refinement",
        description: "Improving backend API design, database optimization, and scalable architecture patterns across existing projects.",
        status: "Ongoing",
        statusColor: "text-indigo-400 border-indigo-500/20 bg-indigo-500/10",
        iconColor: "text-indigo-500 bg-indigo-500/10",
    },
];

export default function CurrentlyBuilding() {
    return (
        <>
            <MotionScrollContainer variant={containerVariant} className="space-y-4">
                <MotionScrollText tag="h1" variant={negXVariant}>
                    Currently <span>Building</span>
                </MotionScrollText>

                <MotionScrollText tag="p" variant={negXVariant} className="text-muted-foreground max-w-2xl">
                    Projects and systems actively in development. Always iterating toward better architecture and real-world usefulness.
                </MotionScrollText>
            </MotionScrollContainer>

            <MotionContainer variant={containerVariant} className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {buildingItems.map((item) => {
                    const Icon = item.icon;

                    return (
                        <MotionScrollContainer
                            key={item.title}
                            variant={containerVariant}
                            className="flex items-start gap-4 rounded-xl p-5 shadow-lg transition-all duration-500 hover:shadow-xl"
                        >
                            <div className={cn(item.iconColor, "flex size-12 shrink-0 items-center justify-center rounded-lg")}>
                                <Icon className="size-6" />
                            </div>
                            <div className="min-w-0 flex-1">
                                <div className="mb-1 flex flex-wrap items-center gap-2">
                                    <MotionScrollText tag="h1" variant={posYVariant} className="text-base font-semibold">
                                        {item.title}
                                    </MotionScrollText>
                                    <MotionScrollText
                                        tag="span"
                                        variant={posYVariant}
                                        className={`shrink-0 rounded-full border px-2 py-0.5 font-mono text-[10px] tracking-widest uppercase ${item.statusColor}`}
                                    >
                                        {item.status}
                                    </MotionScrollText>
                                </div>
                                <MotionScrollText tag="p" variant={posYVariant} className="text-muted-foreground text-sm leading-relaxed">
                                    {item.description}
                                </MotionScrollText>
                            </div>
                        </MotionScrollContainer>
                    );
                })}
            </MotionContainer>
        </>
    );
}
