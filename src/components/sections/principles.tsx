"use client";
import { containerVariant, negXVariant, posXVariant } from "@/components/motion/motion-data";
import { MotionContainer, MotionScrollContainer, MotionScrollText } from "@/components/motion/motion-wrappers";
import { CgLoadbar, CgServer, CgSmartphone } from "react-icons/cg";
import { TbArrowsSplit, TbRocket, TbScale } from "react-icons/tb";

const principles = [
    {
        icon: TbRocket,
        title: "Solve First, Optimize Later",
        description: "Ship working solutions fast, then refine. Premature optimization is the root of half-finished products.",
        color: "text-indigo-400",
    },
    {
        icon: TbArrowsSplit,
        title: "Separation of Concerns",
        description: "Data, logic, and presentation should be independent. Clean boundaries make systems maintainable and scalable.",
        color: "text-emerald-400",
    },
    {
        icon: TbScale,
        title: "Architecture Over Framework",
        description: "Choose architecture first, then pick tools. A well-structured system outlasts any framework trend.",
        color: "text-cyan-400",
    },
    {
        icon: CgServer,
        title: "End-to-End Ownership",
        description: "Build products from database to UI. Understanding the full stack enables better decisions at every layer.",
        color: "text-amber-400",
    },
    {
        icon: CgSmartphone,
        title: "Mobile-First Future",
        description: "Extending full stack principles into mobile. React Native brings the same architectural discipline to app development.",
        color: "text-rose-400",
    },
    {
        icon: CgLoadbar,
        title: "Products, Not Demos",
        description: "Build things people actually use. Real usage reveals edge cases, drives iteration, and builds engineering maturity.",
        color: "text-violet-400",
    },
];

export default function Principles() {
    return (
        <>
            <MotionScrollContainer variant={containerVariant} className="space-y-4">
                <MotionScrollText tag="h1" variant={negXVariant}>
                    Product Engineering <span>Principles</span>
                </MotionScrollText>
                <MotionScrollText tag="p" variant={negXVariant} className="text-muted-foreground max-w-2xl">
                    A set of guiding ideas that shape how I approach architecture, code, and product building.
                </MotionScrollText>
            </MotionScrollContainer>

            <MotionContainer variant={containerVariant} className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {principles.map((principle) => {
                    const Icon = principle.icon;

                    return (
                        <MotionScrollContainer
                            key={principle.title}
                            variant={containerVariant}
                            className="group overflow-hidden rounded-xl p-4 shadow-lg transition-all duration-500 hover:shadow-xl sm:p-5"
                        >
                            <Icon className={`${principle.color} mb-3 size-7`} />

                            <MotionScrollText tag="h1" variant={posXVariant} className="mb-2 text-base">
                                {principle.title}
                            </MotionScrollText>

                            <MotionScrollText tag="p" variant={posXVariant} className="text-muted-foreground text-sm leading-relaxed">
                                {principle.description}
                            </MotionScrollText>
                        </MotionScrollContainer>
                    );
                })}
            </MotionContainer>
        </>
    );
}
