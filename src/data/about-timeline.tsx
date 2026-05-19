"use client";
import { posXVariant } from "@/components/motion/motion-data";
import { MotionScrollText } from "@/components/motion/motion-wrappers";
import { cn } from "@/lib/utils";

export const aboutTimeline = [
    {
        title: "Present",
        content: (
            <div className="min-h-70">
                <MotionScrollText variant={posXVariant} tag="h1" className="mb-2 text-3xl">
                    Engineering Full Stack Systems
                </MotionScrollText>

                <MotionScrollText variant={posXVariant} tag="p" className="muted mb-4 text-sm md:text-base">
                    Building scalable full stack applications and moving toward <span>mobile development</span>. Currently working with <span>Next.js</span>, <span>TypeScript</span>,{" "}
                    <span>Express</span>, <span>MongoDB</span>, and <span>Prisma</span> to engineer performant digital products end-to-end.
                </MotionScrollText>

                <MotionScrollText variant={posXVariant} tag="p" className="muted mb-4">
                    Focused on real-time communication systems, authentication architecture, API design, and database optimization. Exploring React Native for mobile product development.
                </MotionScrollText>

                <div className="mb-8 flex max-w-80 flex-wrap items-center gap-4">
                    {[
                        { name: "React Native", color: "border-blue-500/20 bg-blue-500/10 text-blue-400" },
                        { name: "Next.js", color: "border-neutral-700 bg-neutral-800 text-neutral-300" },
                        { name: "TypeScript", color: "border-blue-500/20 bg-blue-500/10 text-blue-400" },
                        { name: "Express", color: "border-green-500/20 bg-green-500/10 text-green-400" },
                        { name: "Prisma", color: "border-purple-500/20 bg-purple-500/10 text-purple-400" },
                        { name: "Socket.io", color: "border-emerald-500/20 bg-emerald-500/10 text-emerald-400" },
                        { name: "PostgreSQL", color: "border-cyan-500/20 bg-cyan-500/10 text-cyan-400" },
                    ].map(({ name, color }) => (
                        <MotionScrollText key={name} variant={posXVariant} tag="p" className={cn(color, "rounded-full border px-3 py-1 text-sm")}>
                            {name}
                        </MotionScrollText>
                    ))}
                </div>
            </div>
        ),
    },

    {
        title: "2025",
        content: (
            <div className="min-h-70">
                <MotionScrollText variant={posXVariant} tag="h1" className="mb-2 text-3xl">
                    Full Stack Product Engineering
                </MotionScrollText>

                <MotionScrollText variant={posXVariant} tag="p" className="muted mb-4 text-sm md:text-base">
                    Transitioned into modern web development through the React ecosystem. Built production-ready full stack applications — real-time chat systems, booking platforms, and data-driven
                    dashboards.
                </MotionScrollText>

                <MotionScrollText variant={posXVariant} tag="p" className="muted mb-4">
                    Focused on component architecture, state management, authentication systems, and API design. Developed engineering principles around separation of concerns and scalable
                    architecture.
                </MotionScrollText>

                <MotionScrollText variant={posXVariant} tag="p" className="border-l-foreground mb-8 border-l pl-2 text-sm text-neutral-500 italic">
                    &quot;Solve the problem first. Optimize afterwards.&quot;
                </MotionScrollText>
            </div>
        ),
    },

    {
        title: "2023",
        content: (
            <div className="min-h-70">
                <MotionScrollText variant={posXVariant} tag="h1" className="mb-2 text-3xl">
                    Engineering Foundation at ASTU
                </MotionScrollText>

                <MotionScrollText variant={posXVariant} tag="p" className="muted mb-4 text-sm md:text-base">
                    Began studying <span>Electronics and Communication Engineering</span> at Adama Science and Technology University.
                </MotionScrollText>

                <MotionScrollText variant={posXVariant} tag="p" className="muted mb-8">
                    Engineering education shaped analytical thinking and systems mindset — skills that transfer directly to software architecture, problem decomposition, and building reliable systems.
                </MotionScrollText>
            </div>
        ),
    },

    {
        title: "The Beginning",
        content: (
            <div className="min-h-70">
                <MotionScrollText variant={posXVariant} tag="h1" className="mb-2 text-3xl">
                    Early Curiosity
                </MotionScrollText>

                <MotionScrollText variant={posXVariant} tag="p" className="muted mb-8 text-sm md:text-base">
                    Introduced to computers at an early age, which sparked a lasting interest in technology, systems, and digital creation. That curiosity evolved into software engineering and product
                    development.
                </MotionScrollText>
            </div>
        ),
    },
];
