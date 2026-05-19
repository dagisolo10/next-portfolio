"use client";
import { containerVariant, imageVariant, posXVariant, posYSpringVariant } from "@/components/motion/motion-data";
import { MotionIcon, MotionImage, MotionLink, MotionScrollContainer, MotionText } from "@/components/motion/motion-wrappers";
import icons from "@/lib/icons";

export function ExpenseTracker() {
    return (
        <MotionScrollContainer key={"project-7"} variant={containerVariant} className="min-h-70">
            <div className="relative mb-6 h-56 overflow-hidden rounded-md sm:h-96 sm:shadow-sm">
                <MotionImage variant={imageVariant} src={`/projects/expense.png`} alt="Expense Tracker Screenshot" />
            </div>
            <MotionText tag="h1" variant={posXVariant} className="mb-2 text-3xl font-bold">
                Expense Tracker
            </MotionText>
            <MotionText tag="p" variant={posXVariant} className="muted mb-4 text-neutral-400">
                Full-stack financial tracking with a dashboard analytics layer. Custom JWT authentication with refresh token rotation. The charting system
                aggregates transactions into <span className="text-emerald-400">category-wise</span> and <span className="text-blue-400">time-series</span>{" "}
                visualizations. Emoji-powered transaction grouping provides intuitive categorization without a predefined taxonomy.
            </MotionText>
            <MotionScrollContainer variant={containerVariant} className="mb-6 flex items-center gap-4">
                <MotionIcon variant={posYSpringVariant} icon={icons.mongo.icon} />
                <MotionIcon variant={posYSpringVariant} icon={icons.express.icon} />
                <MotionIcon variant={posYSpringVariant} icon={icons.react.icon} />
                <MotionIcon variant={posYSpringVariant} icon={icons.node.icon} />
                <MotionIcon variant={posYSpringVariant} icon={icons.tailwind.icon} />
            </MotionScrollContainer>
            <MotionScrollContainer variant={containerVariant} className="flex gap-4">
                <MotionLink
                    variant={posXVariant}
                    href="https://fullstack-expense-tracker-dagi.vercel.app"
                    text="Live Demo"
                    className="text-blue-400 hover:underline"
                />
                <MotionLink
                    variant={posXVariant}
                    href="https://github.com/dagisolo10/expense-tracker"
                    text="GitHub"
                    className="hover:text-primary text-neutral-400 transition-colors"
                />
            </MotionScrollContainer>
        </MotionScrollContainer>
    );
}
