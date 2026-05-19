"use client";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useTopBar } from "../top-bar-provider";

const NAV_LINKS = [
    { title: "Home", href: "#" },
    { title: "About", href: "#about" },
    { title: "Stack", href: "#stack" },
    { title: "Principles", href: "#principles" },
    { title: "Projects", href: "#projects" },
    { title: "Journey", href: "#journey" },
];

export default function NavBar() {
    const { toggle } = useTopBar();

    return (
        <nav className="border-border/50 bg-background/80 fixed inset-x-0 top-0 z-50 mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 border-b px-5 shadow-xs backdrop-blur-lg">
            <Link href="#" className="font-syne text-xl font-bold tracking-tight">
                Dagmawi
            </Link>

            <div className="hidden flex-1 items-center justify-center gap-1 md:flex">
                {NAV_LINKS.map(({ title, href }) => (
                    <Link
                        key={href}
                        href={href}
                        className="text-muted-foreground hover:text-foreground after:bg-primary relative flex items-center gap-1 rounded-md px-4 py-2 text-sm font-medium transition-colors after:absolute after:inset-x-4 after:bottom-1 after:h-0.5 after:origin-left after:scale-x-0 after:rounded-full after:transition-transform after:duration-300 hover:after:scale-x-100"
                    >
                        {title}
                    </Link>
                ))}
            </div>

            <div className="flex shrink-0 items-center gap-3 sm:gap-8">
                <a
                    href="#contact"
                    className="border-primary/30 bg-primary text-primary-foreground hover:bg-primary/90 inline-flex min-h-8 items-center justify-center gap-2 rounded-full border px-4 text-xs font-medium whitespace-nowrap shadow-xs transition-all hover:shadow-sm active:scale-[0.97] sm:min-h-9 sm:px-5 sm:text-sm"
                >
                    Hire Me
                </a>

                <button onClick={toggle} className="block md:hidden">
                    <Menu className="size-5" />
                </button>
            </div>
            {/* </div> */}
        </nav>
    );
}
