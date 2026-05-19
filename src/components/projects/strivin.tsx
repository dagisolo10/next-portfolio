"use client";
import { containerVariant, posXVariant, posYSpringVariant } from "@/components/motion/motion-data";
import { MotionIcon, MotionLink, MotionScrollContainer, MotionText } from "@/components/motion/motion-wrappers";
import icons from "@/lib/icons";
import { Dumbbell } from "lucide-react";

export function Strivin() {
    return (
        <MotionScrollContainer key={"project-6"} variant={containerVariant} className="min-h-70">
            <div className="relative mb-6 flex h-48 items-center justify-center overflow-hidden rounded-xl bg-[linear-gradient(135deg,#0a0a0a_0%,#1a1a2e_50%,#16213e_100%)] lg:h-72">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-4 left-4 h-32 w-32 rounded-full bg-emerald-500/30 blur-3xl" />
                    <div className="absolute -right-6 -bottom-6 h-40 w-40 rounded-full bg-purple-500/20 blur-3xl" />
                </div>
                <div className="relative flex items-center gap-4">
                    <Dumbbell className="size-14 text-emerald-400" />
                    <div className="flex flex-col items-start gap-1">
                        <div className="flex items-center gap-2">
                            <span className="text-2xl font-bold text-white">Strivin</span>
                            <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 font-mono text-[9px] tracking-widest text-emerald-400 uppercase">
                                In Development
                            </span>
                        </div>
                        <div className="flex gap-4 text-xs text-neutral-500">
                            <span>React Native</span>
                            <span>Expo</span>
                            <span>TypeScript</span>
                        </div>
                    </div>
                </div>
                <div className="absolute top-3 right-3 rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 font-mono text-[10px] tracking-widest text-purple-400 uppercase">
                    Cross-Platform
                </div>
            </div>

            <MotionText tag="h1" variant={posXVariant} className="mb-2 text-3xl font-bold">
                Strivin Workout Tracker
            </MotionText>

            <MotionText tag="p" variant={posXVariant} className="muted mb-4 text-neutral-400">
                Cross-platform mobile workout tracker built with React Native and Expo. Features exercise logging, progress tracking, workout history, and
                fitness analytics. Architecture follows the same <span className="text-emerald-400">separation of concerns</span> principles as full stack
                projects — clean data modeling, typed state management with Zustand, and modular screen composition.
            </MotionText>

            <MotionScrollContainer variant={containerVariant} className="mb-6 flex items-center gap-4">
                <MotionIcon variant={posYSpringVariant} icon={icons.react.icon} />
                <MotionIcon variant={posYSpringVariant} icon={icons.typescript.icon} />
                <MotionIcon variant={posYSpringVariant} icon={icons.tailwind.icon} />
                <MotionIcon variant={posYSpringVariant} icon={icons.node.icon} />
                <MotionText
                    tag="span"
                    variant={posXVariant}
                    className="rounded border border-blue-500/20 bg-blue-500/10 px-2 py-1 font-mono text-[10px] tracking-widest text-blue-400 uppercase"
                >
                    React Native
                </MotionText>
                <MotionText
                    tag="span"
                    variant={posXVariant}
                    className="rounded border border-cyan-500/20 bg-cyan-500/10 px-2 py-1 font-mono text-[10px] tracking-widest text-cyan-400 uppercase"
                >
                    Expo
                </MotionText>
                <MotionText
                    tag="span"
                    variant={posXVariant}
                    className="rounded border border-purple-500/20 bg-purple-500/10 px-2 py-1 font-mono text-[10px] tracking-widest text-purple-400 uppercase"
                >
                    Zustand
                </MotionText>
            </MotionScrollContainer>

            <MotionScrollContainer variant={containerVariant} className="flex gap-4">
                {/* <MotionLink variant={posXVariant} href="#" text="Coming Soon" className="text-neutral-500 italic" /> */}
                <MotionText tag="span" variant={posXVariant} className="text-neutral-500 italic">
                    Coming Soon
                </MotionText>
                <MotionLink
                    variant={posXVariant}
                    href="https://github.com/dagisolo10"
                    text="GitHub"
                    className="hover:text-primary text-neutral-400 transition-colors"
                />
            </MotionScrollContainer>
        </MotionScrollContainer>
    );
}
