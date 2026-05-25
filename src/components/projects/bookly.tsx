"use client";
import { containerVariant, posXVariant, posYSpringVariant } from "@/components/motion/motion-data";
import { MotionIcon, MotionLink, MotionScrollContainer, MotionText } from "@/components/motion/motion-wrappers";
import icons from "@/lib/icons";
import { TbBell, TbCalendarCheck, TbCreditCard, TbCurrencyDollar, TbUsers } from "react-icons/tb";

export function Bookly() {
    return (
        <MotionScrollContainer key={"project-2"} variant={containerVariant} className="min-h-70">
            <div className="relative mb-8 flex h-56 items-center justify-center overflow-hidden rounded-xl bg-[linear-gradient(135deg,#0a0f1a_0%,#0a2a1a_30%,#0d3d2e_60%,#1a1a2e_100%)] shadow-lg shadow-emerald-500/10 before:pointer-events-none before:absolute before:inset-0 before:rounded-xl before:bg-linear-to-b before:from-emerald-400/20 before:to-transparent before:p-px lg:h-80">
                <div className="absolute inset-0 opacity-30">
                    <div className="absolute -top-8 -right-8 h-48 w-48 rounded-full bg-emerald-500/40 blur-3xl" />
                    <div className="absolute -bottom-8 -left-8 h-56 w-56 rounded-full bg-teal-500/30 blur-3xl" />
                    <div className="absolute top-1/2 left-1/4 h-32 w-32 -translate-y-1/2 rounded-full bg-amber-500/20 blur-3xl" />
                </div>

                <div className="relative z-10 grid w-full max-w-3xl grid-cols-3 gap-3 px-6">
                    <div className="space-y-2">
                        <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 p-3 backdrop-blur-sm">
                            <TbCalendarCheck className="size-5 text-emerald-300" />
                            <span className="text-[10px] font-medium tracking-wide text-white/70">Bookings</span>
                        </div>
                        <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 p-3 backdrop-blur-sm">
                            <TbCreditCard className="size-5 text-amber-300" />
                            <span className="text-[10px] font-medium tracking-wide text-white/70">Payments</span>
                        </div>
                    </div>

                    <div className="flex flex-col items-center justify-center gap-1">
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-emerald-400/30 bg-emerald-500/20 backdrop-blur-sm">
                            <TbCurrencyDollar className="size-7 text-emerald-300" />
                        </div>
                        <span className="text-[10px] font-semibold tracking-widest text-emerald-300 uppercase">Booking Engine</span>
                    </div>

                    <div className="space-y-2">
                        <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 p-3 backdrop-blur-sm">
                            <TbUsers className="size-5 text-teal-300" />
                            <span className="text-[10px] font-medium tracking-wide text-white/70">Customers</span>
                        </div>
                        <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 p-3 backdrop-blur-sm">
                            <TbBell className="size-5 text-emerald-300" />
                            <span className="text-[10px] font-medium tracking-wide text-white/70">Notifications</span>
                        </div>
                    </div>

                    <div className="col-span-3 mt-1 grid grid-cols-3 gap-2">
                        {["Availability Engine", "Payment Gateway", "Booking Analytics"].map((label) => (
                            <div key={label} className="flex items-center justify-center rounded-md border border-white/5 bg-white/2 px-2 py-1.5">
                                <span className="text-[8px] font-medium tracking-wider text-white/50">{label}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="absolute top-3 right-3 z-20 flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-amber-400" />
                    <span className="font-mono text-[9px] tracking-widest text-amber-400 uppercase">Active Development</span>
                </div>
            </div>

            <MotionText tag="h1" variant={posXVariant} className="mb-2 text-3xl font-bold">
                Bookly
            </MotionText>

            <div className="mb-4 flex flex-wrap gap-2">
                {[
                    { label: "Booking Engine", color: "border-emerald-500/20 bg-emerald-500/10 text-emerald-400" },
                    { label: "Payment Ready", color: "border-amber-500/20 bg-amber-500/10 text-amber-400" },
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
                    JWT Auth
                </MotionText>
                <MotionText
                    tag="span"
                    variant={posXVariant}
                    className="rounded border border-amber-500/20 bg-amber-500/10 px-2 py-1 font-mono text-[10px] tracking-widest text-amber-400 uppercase"
                >
                    Stripe
                </MotionText>
            </MotionScrollContainer>

            <MotionScrollContainer variant={containerVariant} className="flex gap-4">
                {/* <MotionLink variant={posXVariant} href="#" text="Coming Soon" className="text-neutral-500 italic" /> */}
                <MotionText tag="span" variant={posXVariant} className="text-neutral-500 italic">
                    Coming Soon
                </MotionText>
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
