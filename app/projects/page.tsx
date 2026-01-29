import { projects } from "@/data/projects-timeline";
import { Timeline } from "@/components/ui/timeline";

export default function page() {
    return (
        <main className="scrollbar-none overflow-auto pt-8 pb-16">
            <Timeline hClassName="pt-0" data={projects} header="Featured Projects" subHeader="A showcase of my most defining builds — where creativity meets engineering." />
        </main>
    );
}
