"use client";
import { containerVariant, imageVariant, posXVariant, posYSpringVariant } from "../motion/motion-data";
import { MotionIcon, MotionImage, MotionLink, MotionScrollContainer, MotionText } from "../motion/motion-wrappers";

import icons from "@/lib/icons";

export function NoteBase() {
    return (
        <MotionScrollContainer key={"project-8"} variant={containerVariant} className="min-h-70">
            <div className="relative mb-6 h-56 overflow-hidden rounded-md sm:h-96 sm:shadow-sm">
                <MotionImage variant={imageVariant} src={`/projects/note.png`} alt="NoteBase Screenshot" />
            </div>
            <MotionText tag="h1" variant={posXVariant} className="mb-2 text-3xl font-bold">
                NoteBase Sync
            </MotionText>
            <MotionText tag="p" variant={posXVariant} className="muted mb-4 text-neutral-400">
                Note-taking system with auto-save synchronization. The sync engine debounces writes and batches them to reduce database operations. Tag-based
                organization with favoring and pinning for priority management. Dashboard displays note creation patterns and{" "}
                <span className="text-amber-400">engagement metrics</span>.
            </MotionText>
            <MotionScrollContainer variant={containerVariant} className="mb-6 flex items-center gap-4">
                <MotionIcon variant={posYSpringVariant} icon={icons.mongo.icon} />
                <MotionIcon variant={posYSpringVariant} icon={icons.express.icon} />
                <MotionIcon variant={posYSpringVariant} icon={icons.react.icon} />
                <MotionIcon variant={posYSpringVariant} icon={icons.node.icon} />
                <MotionIcon variant={posYSpringVariant} icon={icons.tailwind.icon} />
            </MotionScrollContainer>
            <MotionScrollContainer variant={containerVariant} className="flex gap-4">
                <MotionLink variant={posXVariant} href="https://full-stack-note-base.vercel.app" text="Live Demo" className="text-blue-400 hover:underline" />
                <MotionLink
                    variant={posXVariant}
                    href="https://github.com/dagisolo10/full-stack-note-app"
                    text="GitHub"
                    className="hover:text-primary text-neutral-400 transition-colors"
                />
            </MotionScrollContainer>
        </MotionScrollContainer>
    );
}
