"use client";
import { containerVariant, posXVariant, posYSpringVariant } from "@/components/motion/motion-data";
import { MotionIcon, MotionLink, MotionScrollContainer, MotionText } from "@/components/motion/motion-wrappers";
import icons from "@/lib/icons";
import { CgLock } from "react-icons/cg";
import { TbMessages } from "react-icons/tb";

export function Whisper() {
    return (
        <MotionScrollContainer key={"project-3"} variant={containerVariant} className="min-h-70">
            <div className="relative mb-6 flex h-48 items-center justify-center overflow-hidden rounded-xl bg-[linear-gradient(135deg,#0f172a_0%,#1e3a5f_50%,#0f766e_100%)] lg:h-72">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-4 right-4 h-32 w-32 rounded-full bg-cyan-500/30 blur-3xl" />
                    <div className="absolute -bottom-6 -left-6 h-40 w-40 rounded-full bg-emerald-500/20 blur-3xl" />
                </div>
                <div className="relative flex items-center gap-6">
                    <TbMessages className="size-16 text-cyan-300" />
                    <CgLock className="size-14 text-emerald-300" />
                </div>
                <div className="absolute top-3 right-3 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 font-mono text-[10px] tracking-widest text-cyan-400 uppercase">
                    Realtime System
                </div>
            </div>

            <MotionText tag="h1" variant={posXVariant} className="mb-2 text-3xl font-bold">
                Whisper Chat
            </MotionText>

            <MotionText tag="p" variant={posXVariant} className="muted mb-4 text-neutral-400">
                Real-time messaging system built on WebSocket architecture. Designed message lifecycle management with offline resilience — failed deliveries
                queue and retry on reconnection. Channel-based room architecture with <span className="text-cyan-400">presence detection</span>,{" "}
                <span className="text-emerald-400">typing indicators</span>, and message history pagination.
            </MotionText>

            <MotionScrollContainer variant={containerVariant} className="mb-6 flex items-center gap-4">
                <MotionIcon variant={posYSpringVariant} icon={icons.react.icon} />
                <MotionIcon variant={posYSpringVariant} icon={icons.node.icon} />
                <MotionIcon variant={posYSpringVariant} icon={icons.express.icon} />
                <MotionIcon variant={posYSpringVariant} icon={icons.mongo.icon} />
                <MotionText
                    tag="span"
                    variant={posXVariant}
                    className="rounded border border-cyan-500/20 bg-cyan-500/10 px-2 py-1 font-mono text-[10px] tracking-widest text-cyan-400 uppercase"
                >
                    Socket.io
                </MotionText>
            </MotionScrollContainer>

            <MotionScrollContainer variant={containerVariant} className="flex gap-4">
                {/* <MotionLink variant={posXVariant} href="#" text="Coming Soon" className="text-neutral-500 italic" /> */}
                <MotionText tag="span" variant={posXVariant} className="text-neutral-500 italic">
                    Coming Soon
                </MotionText>
                <MotionLink
                    variant={posXVariant}
                    href="https://github.com/dagisolo10/Whisper"
                    text="GitHub"
                    className="hover:text-primary text-neutral-400 transition-colors"
                />
            </MotionScrollContainer>
        </MotionScrollContainer>
    );
}
