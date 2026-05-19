"use client";
import { circleVariant, containerVariant, negXVariant } from "@/components/motion/motion-data";
import { MotionCircle, MotionInnerContainer, MotionScrollContainer, MotionText } from "@/components/motion/motion-wrappers";
import RotatingText from "@/components/ui/rotating-text";
import ScrollIndicator from "@/components/ui/scroll-indicator";
import TypingText from "@/components/ui/typing-text";
import Link from "next/link";
import { CgArrowRight } from "react-icons/cg";

export default function Hero() {
    return (
        <MotionScrollContainer variant={containerVariant} className="relative flex flex-col gap-2 space-y-4 border">
            <MotionText variant={negXVariant} tag="h1" className="font-bold">
                <TypingText text={["Realtime Systems", "Scalable Architectures", "Product Engineering", "Web + Mobile"]} />
                <br />
                Building <span>Digital Products</span> <br />
                <span className="text-base font-normal tracking-normal text-neutral-500 sm:text-lg">with systems thinking and engineering discipline</span>
            </MotionText>

            <MotionText variant={negXVariant} tag="p" className="max-w-2xl text-sm leading-relaxed text-gray-500 sm:text-base">
                Product engineer focused on full stack architecture, real-time systems, and moving toward mobile development. I build products that balance
                clean frontend experiences with scalable backend systems — from booking platforms to real-time communication tools.
            </MotionText>

            <MotionInnerContainer variant={containerVariant} className="space-y-2">
                <MotionText variant={negXVariant} tag="p" className="text-sm text-zinc-500 sm:text-base">
                    Currently exploring <span>React Native</span> and building the next generation of my projects.
                </MotionText>

                <MotionText variant={negXVariant} tag="div">
                    <Link href={`#projects`} className="text-primary text-sm font-medium sm:text-base">
                        View featured projects &rarr;
                    </Link>
                </MotionText>

                <MotionCircle variant={circleVariant} className="group relative flex w-fit items-center gap-2">
                    <Link href={`#projects`}>
                        <RotatingText />
                        <CgArrowRight className="text-primary absolute top-1/2 left-1/2 size-6 -translate-1/2 group-hover:animate-pulse" />
                    </Link>
                </MotionCircle>

                <a href="#about" className="flex justify-center pt-8 sm:pt-12">
                    <ScrollIndicator />
                </a>
            </MotionInnerContainer>
        </MotionScrollContainer>
    );
}
