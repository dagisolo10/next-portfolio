import Carousel from "@/components/carousel";
import StackCards from "@/components/stack-cards";

export default function page() {
    return (
        <main className="scrollbar-none overflow-auto pt-12 pb-16 md:pt-6 lg:overflow-hidden">
            <StackCards />
            <Carousel />
        </main>
    );
}
