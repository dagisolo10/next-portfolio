import { posXVariant } from "@/components/motion/motion-data";
import { MotionScrollText } from "@/components/motion/motion-wrappers";

export const data = [
    {
        title: "Present",
        content: (
            <main className="min-h-70">
                <MotionScrollText variant={posXVariant} tag="h1" className="mb-2 text-3xl">
                    Full Stack Transition
                </MotionScrollText>
                <MotionScrollText variant={posXVariant} tag="p" className="muted mb-4">
                    Currently bridging the gap between frontend and backend. After mastering the React ecosystem, I’ve moved into <span className="text-white">Full Stack Architecture</span>—utilizing Next.js APIs, Node.js, and MongoDB to build end-to-end applications.
                </MotionScrollText>
                <MotionScrollText variant={posXVariant} tag="p" className="muted mb-4">
                    Currently obsessed with the feedback loop of building—every project is a laboratory where I refine my precision and speed.
                </MotionScrollText>
                <div className="mb-8 flex flex-wrap gap-2">
                    <MotionScrollText variant={posXVariant} tag="span" className="rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-sm text-blue-400">
                        Next.js
                    </MotionScrollText>
                    <MotionScrollText variant={posXVariant} tag="span" className="rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-1 text-sm text-purple-400">
                        MongoDB
                    </MotionScrollText>
                    <MotionScrollText variant={posXVariant} tag="span" className="rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1 text-sm text-green-400">
                        Express
                    </MotionScrollText>
                </div>
            </main>
        ),
    },
    {
        title: "Mid 2025",
        content: (
            <div className="min-h-70">
                <MotionScrollText variant={posXVariant} tag="h1" className="mb-2 text-3xl">
                    The Web Development Pivot
                </MotionScrollText>
                <MotionScrollText variant={posXVariant} tag="p" className="muted mb-4">
                    Transitioned from Python logic to the visual and interactive world of Web Development. Self-taught the fundamentals of the JavaScript ecosystem, focusing on React and Tailwind CSS to build modern, responsive interfaces.
                </MotionScrollText>
                <MotionScrollText variant={posXVariant} tag="p" className="border-l-foreground mb-8 border-l pl-2 text-sm text-neutral-500 italic">
                    This period was defined by rapid growth—turning code into visible, functional products for the first time.
                </MotionScrollText>
            </div>
        ),
    },
    {
        title: "Late 2023",
        content: (
            <div className="min-h-70">
                <MotionScrollText variant={posXVariant} tag="h1" className="mb-2 text-3xl">
                    Academic Engineering Foundation
                </MotionScrollText>
                <MotionScrollText variant={posXVariant} tag="p" className="muted mb-4">
                    Began my 5-year journey in <span className="text-white">Electronic and Communication Engineering</span> at Adama Science and Technology University (ASTU).
                </MotionScrollText>
                <MotionScrollText variant={posXVariant} tag="p" className="muted mb-8">
                    While my degree focuses on the core principles of hardware and communication systems, I dedicated my side hours to software engineering—applying engineering logic to the web.
                </MotionScrollText>
            </div>
        ),
    },
    {
        title: "The Genesis",
        content: (
            <div className="min-h-70">
                <MotionScrollText variant={posXVariant} tag="h1" className="mb-2 text-3xl">
                    First Exposure (Age 6)
                </MotionScrollText>
                <MotionScrollText variant={posXVariant} tag="p" className="muted mb-8">
                    My journey started nearly two decades ago. Exposed to computers at just 6 years old, I developed an early intuition for technology. This lifelong curiosity is what eventually transformed a childhood interest into a career pursuit in Software Engineering.
                </MotionScrollText>
            </div>
        ),
    },
];
