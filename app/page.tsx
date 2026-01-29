import Link from "next/link";
import { CgArrowRight } from "react-icons/cg";
import TypingText from "@/components/typing-text";
import RotatingText from "@/components/rotating-text";
import { circleVariant, containerVariant, negXVariant } from "@/components/motion/motion-data";
import { MotionContainer, MotionCircle, MotionText, MotionInnerContainer } from "@/components/motion/motion-wrappers";

export default function Home() {
    return (
        //  First Container
        <MotionContainer variant={containerVariant} tag="main" className="flex flex-col gap-2 overflow-auto pt-8 lg:overflow-hidden">
            <MotionText variant={negXVariant} tag="h1" className="font-bold">
                <TypingText text={["Full Stack", "Front End", "Back End"]} />
                <br />
                Web <span> Developer</span>
            </MotionText>

            <MotionText variant={negXVariant} tag="p" className="mt-4 max-w-2xl text-sm leading-relaxed text-gray-400 sm:text-base lg:text-sm">
                I&apos;m a passionate <strong>web developer</strong> based in Ethiopia who loves building modern, high-performance websites and digital experiences. I focus on clean design, smooth user interactions, and scalable code that turns creative ideas into real, functional products.
            </MotionText>

            {/* Second Container */}
            <MotionInnerContainer variant={containerVariant} className="mt-6 space-y-4">
                <MotionText variant={negXVariant} tag="p" className="text-foreground text-sm sm:text-base lg:text-sm">
                    Let&apos;s build something amazing together — whether it&apos;s a sleek portfolio, a powerful web app, or a brand that stands out online.
                </MotionText>

                <MotionText variant={negXVariant} tag="div">
                    <Link href={`/contact`} className="text-primary font-medium lg:text-sm">
                        Get in touch and let’s make it happen.
                    </Link>
                </MotionText>

                <MotionCircle variant={circleVariant} className="group relative mt-4 flex w-fit items-center gap-2">
                    <Link href={`/projects`}>
                        <RotatingText />
                        <CgArrowRight className="text-primary absolute top-1/2 left-1/2 size-6 -translate-1/2 group-hover:animate-pulse" />
                    </Link>
                </MotionCircle>
            </MotionInnerContainer>
        </MotionContainer>
    );
}
