"use client";
import { containerVariant, imageVariant, posXVariant, posYSpringVariant } from "@/components/motion/motion-data";
import { MotionIcon, MotionImage, MotionLink, MotionScrollContainer, MotionText } from "@/components/motion/motion-wrappers";
import icons from "@/lib/icons";
export function JobApplication() {
    return (
        <MotionScrollContainer key={"project-4"} variant={containerVariant} className="min-h-70">
            <div className="relative mb-6 h-56 overflow-hidden rounded-md sm:h-96 sm:shadow-sm">
                <MotionImage variant={imageVariant} src={`/projects/job.png`} alt="Kanban Job Tracker Screenshot" />
            </div>

            <MotionText tag="h1" variant={posXVariant} className="mb-2 text-3xl font-bold">
                Kanban Job Tracker
            </MotionText>

            <MotionText tag="p" variant={posXVariant} className="muted mb-4 text-neutral-400">
                Drag-and-drop job tracking board. Architecture separates column/position state from job data for independent updates — column reordering
                doesn&apos;t trigger job re-fetches. Prisma ORM provides <span className="text-green-400">type-safe database access</span> with MongoDB, while
                Stack Auth handles the full authentication lifecycle. Dynamic column creation allows custom pipeline stages without schema changes.
            </MotionText>

            <MotionScrollContainer variant={containerVariant} className="mb-6 flex items-center gap-4">
                <MotionIcon variant={posYSpringVariant} icon={icons.next.icon} />
                <MotionIcon variant={posYSpringVariant} icon={icons.tailwind.icon} />
                <MotionIcon variant={posYSpringVariant} icon={icons.mongo.icon} />
                <MotionIcon variant={posYSpringVariant} icon={icons.prisma.icon} />
                <MotionText
                    tag="span"
                    variant={posXVariant}
                    className="rounded border border-blue-500/20 bg-blue-500/10 px-2 py-1 font-mono text-[10px] tracking-widest text-blue-400 uppercase"
                >
                    Stack Auth
                </MotionText>
            </MotionScrollContainer>

            <MotionScrollContainer variant={containerVariant} className="flex gap-4">
                <MotionLink variant={posXVariant} href="https://job-application-next.vercel.app" text="Live Demo" className="text-blue-400 hover:underline" />
                <MotionLink
                    variant={posXVariant}
                    href="https://github.com/dagisolo10/job-application"
                    text="GitHub"
                    className="hover:text-primary text-neutral-400 transition-colors"
                />
            </MotionScrollContainer>
        </MotionScrollContainer>
    );
}
