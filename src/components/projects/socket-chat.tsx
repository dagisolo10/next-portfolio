"use client";
import { containerVariant, imageVariant, posXVariant, posYSpringVariant } from "@/components/motion/motion-data";
import { MotionIcon, MotionImage, MotionLink, MotionScrollContainer, MotionText } from "@/components/motion/motion-wrappers";
import icons from "@/lib/icons";
export function SocketChat() {
    return (
        <MotionScrollContainer key={"project-5"} variant={containerVariant} className="min-h-70">
            <div className="relative mb-6 h-56 overflow-hidden rounded-md sm:h-96 sm:shadow-sm">
                <MotionImage variant={imageVariant} src={`/projects/chat.png`} alt="Socket Chat Screenshot" />
            </div>
            <MotionText tag="h1" variant={posXVariant} className="mb-2 text-3xl font-bold">
                Socket Chat
            </MotionText>
            <MotionText tag="p" variant={posXVariant} className="muted mb-4 text-neutral-400">
                WebSocket-powered chat system with live messaging and image sharing. Custom JWT authentication middleware validates WebSocket connections at
                handshake. Sound effects use <span className="text-orange-400">AudioContext API</span> for non-blocking playback. Contact discovery via
                real-time user search with debounced queries.
            </MotionText>
            <MotionScrollContainer variant={containerVariant} className="mb-6 flex items-center gap-4">
                <MotionIcon variant={posYSpringVariant} icon={icons.mongo.icon} />
                <MotionIcon variant={posYSpringVariant} icon={icons.express.icon} />
                <MotionIcon variant={posYSpringVariant} icon={icons.react.icon} />
                <MotionIcon variant={posYSpringVariant} icon={icons.node.icon} />
                <MotionIcon variant={posYSpringVariant} icon={icons.tailwind.icon} />
                <MotionText
                    tag="span"
                    variant={posXVariant}
                    className="rounded border border-orange-500/20 bg-orange-500/10 px-2 py-1 font-mono text-[10px] tracking-widest text-orange-400 uppercase"
                >
                    Socket.io
                </MotionText>
            </MotionScrollContainer>
            <MotionScrollContainer variant={containerVariant} className="flex gap-4">
                <MotionLink variant={posXVariant} href="https://nodechat-app.vercel.app" text="Live Demo" className="text-blue-400 hover:underline" />
                <MotionLink
                    variant={posXVariant}
                    href="https://github.com/dagisolo10/chat-app"
                    text="GitHub"
                    className="hover:text-primary text-neutral-400 transition-colors"
                />
            </MotionScrollContainer>
        </MotionScrollContainer>
    );
}
