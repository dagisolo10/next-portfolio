import Image from "next/image";
import { data } from "@/data/about-timeline";
import { Timeline } from "@/components/ui/timeline";
import ScrollIndicator from "@/components/scroll-indicator";
import { circleVariant, containerVariant, posXVariant } from "@/components/motion/motion-data";
import { MotionCircle, MotionContainer, MotionInnerContainer, MotionText } from "@/components/motion/motion-wrappers";

export default function page() {
    return (
        <main className="scrollbar-none overflow-auto pt-8">
            <MotionContainer tag="div" variant={containerVariant} className="flex gap-8">
                <div className="flex flex-col gap-4">
                    <MotionText tag="h1" variant={posXVariant} className="mb-4 leading-tight">
                        Designing with <span>Intention</span> <br /> Coding with <span>Precision</span>
                    </MotionText>

                    <MotionInnerContainer variant={containerVariant} className="space-y-4">
                        <MotionText variant={posXVariant} tag="p" className="muted">
                            Hi! I’m Dagmawi Solomon Tilahun, a Full Stack Developer based in <strong>Ethiopia</strong>. I bridge the gap between complex backend logic and pixel-perfect frontend design to build products that actually work.
                        </MotionText>
                        <MotionText variant={posXVariant} tag="p" className="muted">
                            I’m a natural problem solver focused on clean code and long-term maintainability. Whether optimizing databases or managing complex state, I build with the intent to make the web faster and more reliable.
                        </MotionText>
                    </MotionInnerContainer>

                    <MotionInnerContainer variant={containerVariant} className="mt-6 grid grid-cols-2 gap-x-8 gap-y-4 text-xs font-medium tracking-widest text-neutral-500 uppercase md:grid-cols-3">
                        <MotionText variant={posXVariant} tag="div">
                            Age: <span className="text-white">20</span>
                        </MotionText>
                        <MotionText variant={posXVariant} tag="div">
                            Based: <span className="text-white">Addis Ababa, ET</span>
                        </MotionText>
                        <MotionText variant={posXVariant} tag="div">
                            Status: <span className="text-white">Available for Work</span>
                        </MotionText>
                        <MotionText variant={posXVariant} tag="div" className="border-t border-white/10 pt-2">
                            Experience: <span className="text-white">~1 Year</span>
                        </MotionText>
                        <MotionText variant={posXVariant} tag="div" className="border-t border-white/10 pt-2">
                            Projects: <span className="text-white">12+ Built</span>
                        </MotionText>
                        <MotionText variant={posXVariant} tag="div" className="border-t border-white/10 pt-2">
                            Focus: <span className="text-white">Full Stack</span>
                        </MotionText>
                    </MotionInnerContainer>
                </div>
                <MotionCircle variant={circleVariant}>
                    <Image className="size-80 object-cover" src={`/images/img.jpg`} alt="Profile" width={1080} height={720} />
                </MotionCircle>
            </MotionContainer>

            <ScrollIndicator />

            <Timeline hClassName="pt-24" data={data} header="Architecting the Stack" subHeader="From childhood curiosity to rigorous Engineering studies at ASTU. I combine the analytical mind of an Electronic Engineer with the creative drive of a Full Stack Developer." />

            {/* Footer */}
            <div className="border-foreground/15 from-primary/5 mt-20 mb-6 rounded-2xl border bg-linear-to-b to-transparent p-8 backdrop-blur-xl">
                <div className="flex flex-col justify-between gap-6 md:flex-row md:items-start">
                    <div className="max-w-2xl">
                        <h3 className="mb-2 text-xl font-bold text-white">The Engineering Discipline</h3>
                        <p className="text-sm leading-relaxed text-neutral-400">
                            I am currently a 3rd-year student at Adama Science & Tech University (ASTU). While my degree focuses on <span className="text-white italic">Electronics and Communication</span>, my passion lies in <span className="text-primary font-medium">Software Engineering</span>.
                        </p>
                        <p className="mt-4 text-sm leading-relaxed text-neutral-400">
                            Balancing a rigorous 5-year engineering curriculum with self-taught web development has taught me one thing: **how to learn complex systems fast.** I apply the analytical problem-solving skills from my studies to build clean, logical, and scalable web applications.
                        </p>
                    </div>
                    <div className="border-foreground/10 bg-primary/10 rounded-xl border p-4">
                        <p className="mb-2 text-[10px] tracking-widest text-neutral-500 uppercase">Academic Status</p>
                        <p className="text-sm text-white">Adama Science & Tech University</p>
                        <p className="text-[12px] text-neutral-500 italic">Expected Graduation: June 2028</p>
                    </div>
                </div>
            </div>
        </main>
    );
}
