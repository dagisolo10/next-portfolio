import Image from "next/image";
import { circleVariant, containerVariant, posXVariant } from "@/components/motion/motion-data";
import { MotionCircle, MotionInnerContainer, MotionScrollContainer, MotionText } from "@/components/motion/motion-wrappers";

export default function About() {
    const today = new Date();
    const birthDate = new Date("2004-11-02:00:00:00.000Z");
    const secondsInYear = 1000 * 3600 * 24 * 365;
    const age = Math.floor((today.getTime() - birthDate.getTime()) / secondsInYear);

    return (
        <MotionScrollContainer variant={containerVariant} className="flex flex-col-reverse gap-8 md:grid md:grid-cols-[1fr_auto] md:gap-4">
            <div className="flex flex-col gap-4">
                <MotionText tag="h1" variant={posXVariant} className="mb-4 leading-tight">
                    Designing with <span>Intention</span> <br /> Coding with <span>Precision</span>
                </MotionText>

                <MotionInnerContainer variant={containerVariant} className="space-y-4">
                    <MotionText variant={posXVariant} tag="p" className="text-muted-foreground">
                        Hi! I&apos;m Dagmawi Solomon Tilahun, a Product Engineer based in <strong>Ethiopia</strong>. I bridge the gap between complex backend
                        logic and pixel-perfect frontend design to build products that actually work.
                    </MotionText>

                    <MotionText variant={posXVariant} tag="p" className="text-muted-foreground">
                        I&apos;m a natural problem solver focused on clean architecture and long-term maintainability. Whether optimizing databases or designing
                        real-time systems, I build with the intent to make digital products faster, more reliable, and more useful.
                    </MotionText>
                </MotionInnerContainer>

                <MotionInnerContainer
                    variant={containerVariant}
                    className="mt-6 grid grid-cols-2 gap-4 text-xs font-semibold tracking-widest text-neutral-500 uppercase sm:gap-6"
                >
                    <MotionText variant={posXVariant} tag="div">
                        Age: <span>{age}</span>
                    </MotionText>

                    <MotionText variant={posXVariant} tag="div">
                        Based: <span>Addis Ababa, ET</span>
                    </MotionText>

                    <MotionText variant={posXVariant} tag="div">
                        Status: <span>Available</span>
                    </MotionText>

                    <MotionText variant={posXVariant} tag="div">
                        Focus: <span>Full Stack + Mobile</span>
                    </MotionText>

                    <MotionText variant={posXVariant} tag="div">
                        Stack: <span>React Native + Next.js</span>
                    </MotionText>

                    <MotionText variant={posXVariant} tag="div">
                        Education: <span>ASTU Engineering</span>
                    </MotionText>
                </MotionInnerContainer>
            </div>

            <MotionCircle variant={circleVariant} className="flex items-center justify-center">
                <Image
                    className="size-48 rounded-full object-cover object-top sm:size-60 md:size-80"
                    src={`/images/profile.jpg`}
                    alt="Profile"
                    width={1080}
                    height={720}
                />
            </MotionCircle>
        </MotionScrollContainer>
    );
}
