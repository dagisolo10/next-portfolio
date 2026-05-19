import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import TechStack from "@/components/ui/tech-stack";
import { projects } from "@/data/projects-timeline";
import { Timeline } from "@/components/ui/timeline";
import Contact from "@/components/sections/contact";
import { aboutTimeline } from "@/data/about-timeline";
import MobileDev from "@/components/sections/mobile-dev";
import Principles from "@/components/sections/principles";
import CurrentlyBuilding from "@/components/sections/currently-building";

export default function Home() {
    return (
        <div className="space-y-12 overflow-hidden px-5 sm:px-6 md:space-y-16">
            <section className="mt-24 sm:mt-24 md:mt-28">
                <Hero />
            </section>

            <section id="about">
                <About />
            </section>

            <section id="stack">
                <TechStack />
            </section>

            <section id="principles">
                <Principles />
            </section>

            <section id="building" className="space-y-8">
                <CurrentlyBuilding />
            </section>

            <section id="projects">
                <Timeline
                    data={projects}
                    header="Featured Projects"
                    subHeader="A selection of projects that showcase engineering decisions, architecture thinking, and product-building capability."
                />
            </section>

            <section id="journey">
                <Timeline
                    data={aboutTimeline}
                    header="Journey"
                    subHeader="From childhood curiosity to Engineering at ASTU. Combining analytical discipline from Electronics Engineering with the creative drive of a Full Stack Developer."
                />
            </section>

            <section id="mobile">
                <MobileDev />
            </section>

            <section id="contact" className="scroll-mt-8">
                <Contact />
            </section>
        </div>
    );
}
