"use client";
import { containerVariant, imageVariant, posXVariant, posYSpringVariant } from "@/components/motion/motion-data";
import { MotionIcon, MotionImage, MotionLink, MotionScrollContainer, MotionText } from "@/components/motion/motion-wrappers";
import icons from "@/lib/icons";

export function Evently() {
    const EVENTLY_IMAGES = [
        { url: "/projects/evently/light-hero.png", alt: "Evently Hero" },
        { url: "/projects/evently/light-body.png", alt: "Evently Body" },
        { url: "/projects/evently/light-feature.png", alt: "Evently Body" },
        { url: "/projects/evently/light-dashboard.png", alt: "Evently Dashboard" },
    ] as const;

    return (
        <MotionScrollContainer key={"project-1"} variant={containerVariant} className="min-h-70 space-y-4">
            <div className="relative mb-6 h-56 overflow-hidden rounded-md sm:h-96 sm:shadow-sm">
                <MotionImage variant={imageVariant} src={EVENTLY_IMAGES[0]?.url} alt="Evently Hero" />
            </div>

            <MotionText tag="h1" variant={posXVariant} className="mb-2 text-3xl font-bold">
                Event Organizer
            </MotionText>

            <div className="mb-4 flex flex-wrap gap-2">
                {[
                    { label: "Realtime Engine", color: "border-cyan-500/20 bg-cyan-500/10 text-cyan-400" },
                    { label: "Event Workflows", color: "border-indigo-500/20 bg-indigo-500/10 text-indigo-400" },
                    { label: "Auth & RBAC", color: "border-amber-500/20 bg-amber-500/10 text-amber-400" },
                    { label: "Dashboard Arch", color: "border-emerald-500/20 bg-emerald-500/10 text-emerald-400" },
                    { label: "Payment Ready", color: "border-rose-500/20 bg-rose-500/10 text-rose-400" },
                    { label: "Product Engineering", color: "border-purple-500/20 bg-purple-500/10 text-purple-400" },
                ].map((badge) => (
                    <span key={badge.label} className={`rounded-full border px-2.5 py-0.5 font-mono text-[10px] tracking-widest uppercase ${badge.color}`}>
                        {badge.label}
                    </span>
                ))}
            </div>

            <MotionText tag="p" variant={posXVariant} className="muted mb-4 text-neutral-400">
                Full-cycle event management system featuring organizer dashboards, dynamic event workflows, role-based authentication, attendee management, and
                realtime event coordination. Architecture designed around <span className="text-indigo-400">modular service layers</span>,{" "}
                <span className="text-amber-400">state machine-driven event workflows</span>, and{" "}
                <span className="text-cyan-400">atomic database operations</span>. Realtime updates powered by WebSocket event bus with optimistic UI patterns
                across all event mutations.
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
                    JWT Auth
                </MotionText>
                <MotionText
                    tag="span"
                    variant={posXVariant}
                    className="rounded border border-cyan-500/20 bg-cyan-500/10 px-2 py-1 font-mono text-[10px] tracking-widest text-cyan-400 uppercase"
                >
                    WebSocket
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
