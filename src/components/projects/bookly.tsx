"use client";
import { containerVariant, imageVariant, posXVariant, posYSpringVariant } from "@/components/motion/motion-data";
import { MotionIcon, MotionImage, MotionLink, MotionScrollContainer, MotionText } from "@/components/motion/motion-wrappers";
import icons from "@/lib/icons";

export function Bookly() {
    return (
        <MotionScrollContainer key={"project-2"} variant={containerVariant} className="min-h-70">
            <div className="relative mb-6 h-56 overflow-hidden rounded-md sm:h-96 sm:shadow-sm">
                <MotionImage variant={imageVariant} src="/projects/bookly.png" alt="Bookly" />
            </div>

            <MotionText tag="h1" variant={posXVariant} className="mb-2 text-3xl font-bold">
                Bookly
            </MotionText>

            <div className="mb-4 flex flex-wrap gap-2">
                {[
                    { label: "Booking Engine", color: "border-emerald-500/20 bg-emerald-500/10 text-emerald-400" },
                    // { label: "Payment Ready", color: "border-amber-500/20 bg-amber-500/10 text-amber-400" },
                    { label: "Auth & RBAC", color: "border-teal-500/20 bg-teal-500/10 text-teal-400" },
                    { label: "Availability Mgmt", color: "border-cyan-500/20 bg-cyan-500/10 text-cyan-400" },
                    { label: "Scalable Infra", color: "border-indigo-500/20 bg-indigo-500/10 text-indigo-400" },
                    { label: "Marketplace Arch", color: "border-purple-500/20 bg-purple-500/10 text-purple-400" },
                ].map((badge) => (
                    <span key={badge.label} className={`rounded-full border px-2.5 py-0.5 font-mono text-[10px] tracking-widest uppercase ${badge.color}`}>
                        {badge.label}
                    </span>
                ))}
            </div>

            <MotionText tag="p" variant={posXVariant} className="muted mb-4 text-neutral-400">
                Engineered a scalable booking platform with real-time availability management, payment-ready architecture, and role-based access control. The
                system handles dynamic booking workflows, conflict resolution through <span className="text-emerald-400">atomic database operations</span>, and{" "}
                <span className="text-amber-400">state machine-driven booking transitions</span> across <span className="text-cyan-400">pending</span>,{" "}
                <span className="text-emerald-400">confirmed</span>, and <span className="text-rose-400">cancelled</span> states. Modular backend layers
                separate booking logic, payment processing, notification delivery, and customer management for maintainable scalability.
            </MotionText>

            <MotionScrollContainer variant={containerVariant} className="mb-6 flex flex-wrap items-center gap-3">
                <MotionIcon variant={posYSpringVariant} icon={icons.next.icon} />
                <MotionIcon variant={posYSpringVariant} icon={icons.typescript.icon} />
                <MotionIcon variant={posYSpringVariant} icon={icons.prisma.icon} />
                <MotionIcon variant={posYSpringVariant} icon={icons.tailwind.icon} />
                <MotionIcon variant={posYSpringVariant} icon={icons.express.icon} />
                <MotionIcon variant={posYSpringVariant} icon={icons.node.icon} />
                <MotionText
                    tag="span"
                    variant={posXVariant}
                    className="rounded border border-yellow-500/20 bg-yellow-500/10 px-2 py-1 font-mono text-[10px] tracking-widest text-yellow-400 uppercase"
                >
                    PostgreSQL
                </MotionText>
                <MotionText
                    tag="span"
                    variant={posXVariant}
                    className="rounded border border-rose-500/20 bg-rose-500/10 px-2 py-1 font-mono text-[10px] tracking-widest text-rose-400 uppercase"
                >
                    Clerk Auth
                </MotionText>
            </MotionScrollContainer>

            <MotionScrollContainer variant={containerVariant} className="flex gap-4">
                <MotionLink variant={posXVariant} href="https://bookly.dagidev.com" text="Bookly" className="text-neutral-500 italic" />
                <MotionLink
                    variant={posXVariant}
                    href="https://github.com/dagisolo10/Bookly"
                    text="GitHub"
                    className="hover:text-primary text-neutral-400 transition-colors"
                />
            </MotionScrollContainer>
        </MotionScrollContainer>
    );
}
