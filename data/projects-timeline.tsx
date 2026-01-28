import icons from "../lib/icons";

import Link from "next/link";
import { containerVariant, imageVariant, posXVariant, posYSpringVariant } from "@/components/motion/motion-data";
import { MotionText, MotionIcon, MotionScrollContainer, MotionImage, MotionInnerContainer } from "@/components/motion/motion-wrappers";

export const projects = [
    {
        title: "Job Application",
        content: (
            <MotionScrollContainer variant={containerVariant} className="min-h-70">
                <div className="mb-6 transition-all duration-300 lg:opacity-50 lg:grayscale lg:hover:opacity-100 lg:hover:grayscale-0">
                    <MotionImage variant={imageVariant} src={`/projects/job.png`} alt="Kanban Job Tracker Screenshot" />
                </div>
                <MotionText tag="h1" variant={posXVariant} className="mb-2 text-3xl font-bold text-white">
                    Kanban Job Tracker
                </MotionText>
                <MotionText tag="p" variant={posXVariant} className="muted mb-4 text-neutral-400">
                    Built with <span className="text-blue-400">Next.js</span>, <span className="text-cyan-400">Tailwind</span>,<span className="text-green-400"> MongoDB</span>, and <span className="text-purple-400">Prisma</span>. Features full Kanban workflow with draggable job cards, dynamic column
                    creation, Stack Auth authentication, and complete CRUD support for jobs and columns.
                </MotionText>
                <MotionScrollContainer variant={containerVariant} className="mb-6 flex items-center gap-4">
                    <MotionIcon variant={posYSpringVariant} src={icons.next.icon} alt="Next.js Icon" />
                    <MotionIcon variant={posYSpringVariant} src={icons.tailwind.icon} alt="Tailwind Icon" />
                    <MotionIcon variant={posYSpringVariant} src={icons.mongo.icon} alt="MongoDB Icon" />
                    <MotionIcon variant={posYSpringVariant} src={icons.prisma.icon} alt="Prisma Icon" />
                    <MotionText tag="span" variant={posXVariant} className="rounded border border-blue-500/20 bg-blue-500/10 px-2 py-1 font-mono text-[10px] tracking-widest text-blue-400 uppercase">
                        Stack Auth
                    </MotionText>
                </MotionScrollContainer>
                <div className="flex gap-4">
                    <Link href="https://job-application-next.vercel.app" target="_blank" className="text-blue-400 hover:underline">
                        Live Demo
                    </Link>
                    <Link href="https://github.com/dagisolo10/job-application" target="_blank" className="text-neutral-400 hover:text-white">
                        GitHub
                    </Link>
                </div>
            </MotionScrollContainer>
        ),
    },
    {
        title: "Expense Tracker",
        content: (
            <MotionScrollContainer variant={containerVariant} className="min-h-70">
                <div className="mb-6 transition-all duration-300 lg:opacity-50 lg:grayscale lg:hover:opacity-100 lg:hover:grayscale-0">
                    <MotionImage variant={imageVariant} src={`/projects/job.png`} alt="Kanban Job Tracker Screenshot" />
                </div>
                <MotionText tag="h1" variant={posXVariant} className="mb-2 text-3xl font-bold text-white">
                    Expense Tracker
                </MotionText>
                <MotionText tag="p" variant={posXVariant} className="muted mb-4 text-neutral-400">
                    MERN-based tracker with custom JWT authentication. Includes dashboard analytics with Pie, Bar graph and Area charts, category-wise stats, profile management, and emoji-powered transaction lookup. Users can manage income, expenses, and full CRUD for transactions.
                </MotionText>
                <MotionScrollContainer variant={containerVariant} className="mb-6 flex items-center gap-4">
                    <MotionIcon variant={posYSpringVariant} src={icons.mongo.icon} alt="MongoDB Icon" />
                    <MotionIcon variant={posYSpringVariant} src={icons.express.icon} alt="Express Icon" />
                    <MotionIcon variant={posYSpringVariant} src={icons.react.icon} alt="React Icon" />
                    <MotionIcon variant={posYSpringVariant} src={icons.node.icon} alt="Node.js Icon" />
                    <MotionIcon variant={posYSpringVariant} src={icons.tailwind.icon} alt="Tailwind Icon" />
                </MotionScrollContainer>
                <div className="flex gap-4">
                    <Link href="https://fullstack-expense-tracker-dagi.vercel.app" target="_blank" className="text-blue-400 hover:underline">
                        Live Demo
                    </Link>
                    <Link href="https://github.com/dagisolo10/expense-tracker" target="_blank" className="text-neutral-400 hover:text-white">
                        GitHub
                    </Link>
                </div>
            </MotionScrollContainer>
        ),
    },
    {
        title: "NoteBase",
        content: (
            <MotionScrollContainer variant={containerVariant} className="min-h-70">
                <div className="mb-6 transition-all duration-300 lg:opacity-50 lg:grayscale lg:hover:opacity-100 lg:hover:grayscale-0">
                    <MotionImage variant={imageVariant} src={`/projects/note.png`} alt="Kanban Job Tracker Screenshot" />
                </div>
                <MotionText tag="h1" variant={posXVariant} className="mb-2 text-3xl font-bold text-white">
                    NoteBase Sync
                </MotionText>
                <MotionText tag="p" variant={posXVariant} className="muted mb-4 text-neutral-400">
                    A MERN-powered note system with custom auth, tags, favorites, and pinning. Supports auto-save and sync, word and note analytics, and visual stats for favorites and pins.
                </MotionText>
                <MotionScrollContainer variant={containerVariant} className="mb-6 flex items-center gap-4">
                    <MotionIcon variant={posYSpringVariant} src={icons.mongo.icon} alt="MongoDB Icon" />
                    <MotionIcon variant={posYSpringVariant} src={icons.express.icon} alt="Express Icon" />
                    <MotionIcon variant={posYSpringVariant} src={icons.react.icon} alt="React Icon" />
                    <MotionIcon variant={posYSpringVariant} src={icons.node.icon} alt="Node.js Icon" />
                    <MotionIcon variant={posYSpringVariant} src={icons.tailwind.icon} alt="Tailwind Icon" />
                </MotionScrollContainer>
                <div className="flex gap-4">
                    <Link href="https://full-stack-note-base.vercel.app" target="_blank" className="text-blue-400 hover:underline">
                        Live Demo
                    </Link>
                    <Link href="https://github.com/dagisolo10/full-stack-note-app" target="_blank" className="text-neutral-400 hover:text-white">
                        GitHub
                    </Link>
                </div>
            </MotionScrollContainer>
        ),
    },
    {
        title: "Socket Chat",
        content: (
            <MotionScrollContainer variant={containerVariant} className="min-h-70">
                <div className="mb-6 transition-all duration-300 lg:opacity-50 lg:grayscale lg:hover:opacity-100 lg:hover:grayscale-0">
                    <MotionImage variant={imageVariant} src={`/projects/chat.png`} alt="Kanban Job Tracker Screenshot" />
                </div>
                <MotionText tag="h1" variant={posXVariant} className="mb-2 text-3xl font-bold text-white">
                    Socket Chat
                </MotionText>
                <MotionText tag="p" variant={posXVariant} className="muted mb-4 text-neutral-400">
                    Real-time chat platform built with Socket.io and MERN stack. Includes typing and notification sounds, image sending, timestamps, and live contact discovery. Features custom JWT authentication.
                </MotionText>
                <MotionScrollContainer variant={containerVariant} className="mb-6 flex items-center gap-4">
                    <MotionIcon variant={posYSpringVariant} src={icons.mongo.icon} alt="MongoDB Icon" />
                    <MotionIcon variant={posYSpringVariant} src={icons.express.icon} alt="Express Icon" />
                    <MotionIcon variant={posYSpringVariant} src={icons.react.icon} alt="React Icon" />
                    <MotionIcon variant={posYSpringVariant} src={icons.node.icon} alt="Node.js Icon" />
                    <MotionIcon variant={posYSpringVariant} src={icons.tailwind.icon} alt="Tailwind Icon" />
                    <MotionText tag="span" variant={posXVariant} className="rounded border border-orange-500/20 bg-orange-500/10 px-2 py-1 font-mono text-[10px] tracking-widest text-orange-400 uppercase">
                        Socket.io
                    </MotionText>
                </MotionScrollContainer>
                <div className="flex gap-4">
                    <Link href="https://nodechat-app.vercel.app" target="_blank" className="text-blue-400 hover:underline">
                        Live Demo
                    </Link>
                    <Link href="https://github.com/dagisolo10/chat-app" target="_blank" className="text-neutral-400 hover:text-white">
                        GitHub
                    </Link>
                </div>
            </MotionScrollContainer>
        ),
    },
    {
        title: "Recipe Finder",
        content: (
            <MotionScrollContainer variant={containerVariant} className="min-h-70">
                <div className="mb-6 transition-all duration-300 lg:opacity-50 lg:grayscale lg:hover:opacity-100 lg:hover:grayscale-0">
                    <MotionImage variant={imageVariant} src={`/projects/recipe.png`} alt="Kanban Job Tracker Screenshot" />
                </div>
                <MotionText tag="h1" variant={posXVariant} className="mb-2 text-3xl font-bold text-white">
                    Recipe Finder
                </MotionText>
                <MotionText tag="p" variant={posXVariant} className="muted mb-4 text-neutral-400">
                    React-based recipe browser using TheMealDB API. Supports search with error handling and displays full recipe details with video tutorials when available.
                </MotionText>
                <MotionScrollContainer variant={containerVariant} className="mb-6 flex items-center gap-4">
                    <MotionIcon variant={posYSpringVariant} src={icons.react.icon} alt="React Icon" />
                    <MotionIcon variant={posYSpringVariant} src={icons.css.icon} alt="CSS Icon" />
                </MotionScrollContainer>
                <div className="flex gap-4">
                    <Link href="https://dagisolo-recipe-finder.vercel.app" target="_blank" className="text-blue-400 hover:underline">
                        Live Demo
                    </Link>
                    <Link href="https://github.com/dagisolo10/recipe-finder" target="_blank" className="text-neutral-400 hover:text-white">
                        GitHub
                    </Link>
                </div>
            </MotionScrollContainer>
        ),
    },
    {
        title: "Core Logic",
        content: (
            <MotionScrollContainer variant={containerVariant} className="flex min-h-70 flex-col gap-4 lg:flex-row">
                {/* <MotionScrollContainer variant={containerVariant} className="grid min-h-70 grid-cols-1 gap-8 lg:grid-cols-2"> */}
                <MotionInnerContainer variant={containerVariant} className="flex flex-col gap-3 overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900/50 p-6">
                    <MotionText tag="h1" variant={posXVariant} className="mb-2 text-3xl font-bold text-white">
                        Quiz Engine
                    </MotionText>
                    <MotionText tag="p" variant={posXVariant} className="muted mb-4 text-neutral-400">
                        Vanilla JavaScript quiz app with four subjects, timed sessions, instant feedback, and dynamic result summaries.
                    </MotionText>
                    <div className="mb-6 transition-all duration-300 lg:opacity-50 lg:grayscale lg:hover:opacity-100 lg:hover:grayscale-0">
                        <MotionImage variant={imageVariant} src={`/projects/quiz.png`} alt="Kanban Job Tracker Screenshot" />
                    </div>
                    <MotionScrollContainer variant={containerVariant} className="mt-auto flex items-center gap-8">
                        <MotionIcon variant={posYSpringVariant} src={icons.js.icon} alt="JavaScript Icon" />
                        <MotionIcon variant={posYSpringVariant} src={icons.html.icon} alt="HTML Icon" />
                        <MotionIcon variant={posYSpringVariant} src={icons.css.icon} alt="CSS Icon" />
                    </MotionScrollContainer>
                    <div className="flex gap-4">
                        <Link href="https://dagisolo-new-quiz-app.vercel.app" target="_blank" className="text-blue-400 hover:underline">
                            Live Demo
                        </Link>
                        <Link href="https://github.com/dagisolo10/quiz-app" target="_blank" className="text-neutral-400 hover:text-white">
                            GitHub
                        </Link>
                    </div>
                </MotionInnerContainer>
                <MotionInnerContainer variant={containerVariant} className="flex flex-col gap-3 overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900/50 p-6">
                    <MotionText tag="h1" variant={posXVariant} className="mb-2 text-3xl font-bold text-white">
                        Image Search UI
                    </MotionText>
                    <MotionText tag="p" variant={posXVariant} className="muted mb-4 text-neutral-400">
                        A responsive image discovery app using the Pexels API. Supports pagination, deep-link downloads, and detailed metadata views for each asset.
                    </MotionText>
                    <div className="mb-6 transition-all duration-300 lg:opacity-50 lg:grayscale lg:hover:opacity-100 lg:hover:grayscale-0">
                        <MotionImage variant={imageVariant} src={`/projects/search.png`} alt="Kanban Job Tracker Screenshot" />
                    </div>
                    <span className="mb-2 rounded border border-neutral-700 bg-neutral-800 px-2 py-1 font-mono text-[10px] tracking-widest text-neutral-400 uppercase">Pexels API</span>
                    <MotionScrollContainer variant={containerVariant} className="mt-auto flex items-center gap-8">
                        <MotionIcon variant={posYSpringVariant} src={icons.js.icon} alt="JavaScript Icon" />
                        <MotionIcon variant={posYSpringVariant} src={icons.html.icon} alt="HTML Icon" />
                        <MotionIcon variant={posYSpringVariant} src={icons.css.icon} alt="CSS Icon" />
                    </MotionScrollContainer>
                    <div className="flex gap-4">
                        <Link href="https://dagisolo-image-search-engine.vercel.app" target="_blank" className="text-blue-400 hover:underline">
                            Live Demo
                        </Link>
                        <Link href="https://github.com/dagisolo10/image-search-engine" target="_blank" className="text-neutral-400 hover:text-white">
                            GitHub
                        </Link>
                    </div>
                </MotionInnerContainer>
            </MotionScrollContainer>
        ),
    },
];
