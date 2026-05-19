"use client";

import { useTopBar } from "@/components/top-bar-provider";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import Link from "next/link";
import { NAV_LINKS } from "./navbar";

const linkVariants = {
    initial: { opacity: 0, y: 20 },
    final: (i: number) => ({ opacity: 1, y: 0, transition: { delay: 0.2 + i * 0.08, duration: 0.4, ease: "easeOut" as const } }),
};

export default function TopBar() {
    const { show, toggle } = useTopBar();

    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    role="dialog"
                    aria-modal="true"
                    aria-label="Mobile navigation"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { delay: 0.2 } }}
                    className="bg-background/95 fixed inset-0 z-60 flex flex-col backdrop-blur-xl md:hidden"
                >
                    <div className="border-border/50 flex h-16 items-center justify-between border-b px-5">
                        <Link href="#" className="font-syne text-xl font-bold tracking-tight" onClick={toggle}>
                            Dagmawi
                        </Link>
                        <button onClick={toggle} aria-label="Close navigation menu">
                            <X className="size-5" />
                        </button>
                    </div>

                    <nav className="flex flex-1 flex-col items-center justify-center gap-3 px-5">
                        {NAV_LINKS.map(({ title, href }, i) => (
                            <motion.div key={href} custom={i} variants={linkVariants} initial="initial" animate="final">
                                <Link href={href} onClick={toggle} className="text-foreground hover:text-primary text-3xl font-semibold transition-colors">
                                    {title}
                                </Link>
                            </motion.div>
                        ))}
                    </nav>

                    <div className="flex justify-center pb-12">
                        <a
                            href="#contact"
                            onClick={toggle}
                            className="border-primary/30 bg-primary text-primary-foreground hover:bg-primary/90 inline-flex min-h-10 items-center justify-center gap-2 rounded-full border px-8 text-sm font-medium whitespace-nowrap shadow-xs transition-all hover:shadow-sm active:scale-[0.97]"
                        >
                            Hire Me
                        </a>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
