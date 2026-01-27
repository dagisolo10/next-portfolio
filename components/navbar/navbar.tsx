import SVGLogoLink from "./svgLogo";
import { MotionContainer, MotionLink } from "../motion/motion-wrappers";
import { containerVariant, posYSpringVariant } from "../motion/motion-data";

import { FiLinkedin } from "react-icons/fi";
import { VscGithub } from "react-icons/vsc";

export default function Navbar() {
    return (
        <header className="sticky top-0 z-50 p-4">
            <nav className="flex items-center justify-between">
                <SVGLogoLink />
                <MotionContainer className="flex items-center gap-6" variant={containerVariant} tag="div">
                    <MotionLink variant={posYSpringVariant} href="http://github.com/dagisolo10" icon={<VscGithub className="size-5" />} className="hover:text-primary hidden duration-300 hover:scale-115 sm:block" />
                    <MotionLink variant={posYSpringVariant} href="http://linkedin.com/in/dagmawi-solomon-2b350636b" icon={<FiLinkedin className="size-5" />} className="hover:text-primary hidden duration-300 hover:scale-115 sm:block" />
                    <MotionLink variant={posYSpringVariant} href="/contact" text="Hire Me" className="bg-primary/30 hover:bg-primary/60 rounded-md px-4 py-1 duration-300" />
                </MotionContainer>
            </nav>
        </header>
    );
}
