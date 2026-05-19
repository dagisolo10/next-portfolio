import Link from "next/link";
import { Mail } from "lucide-react";
import { FiLinkedin } from "react-icons/fi";
import { VscGithub } from "react-icons/vsc";
import { TbBrandTelegram } from "react-icons/tb";

export default function Footer() {
    return (
        <footer className="w-full border-t py-6 text-zinc-500">
            <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
                <p className="text-sm">
                    &copy; {new Date().getFullYear()} <span className="font-semibold">Dagmawi Solomon</span>. All rights reserved.
                </p>

                <div className="flex items-center gap-5">
                    <Link
                        href="https://github.com/dagisolo10"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors duration-200 hover:text-white"
                        aria-label="GitHub"
                    >
                        <VscGithub className="size-4" />
                    </Link>
                    <Link
                        href="https://linkedin.com/in/dagmawi-solomon-2b350636b"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors duration-200 hover:text-white"
                        aria-label="LinkedIn"
                    >
                        <FiLinkedin className="size-4" />
                    </Link>
                    <Link
                        href="https://t.me/Ayakashi101"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors duration-200 hover:text-white"
                        aria-label="Telegram"
                    >
                        <TbBrandTelegram className="size-4" />
                    </Link>
                    <Link href="mailto:dagisolo1023@gmail.com" className="transition-colors duration-200 hover:text-white" aria-label="Email">
                        <Mail className="size-4" />
                    </Link>
                </div>
            </div>
        </footer>
    );
}
