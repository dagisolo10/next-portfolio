import ContactForm from "@/components/contact-form";
import ContactCards from "@/components/contact-cards";
import { containerVariant, negXVariant } from "@/components/motion/motion-data";
import { MotionContainer, MotionText } from "@/components/motion/motion-wrappers";

export default function page() {
    return (
        <MotionContainer tag="main" variant={containerVariant} className="scrollbar-none overflow-auto pt-12 pb-16 md:pt-8">
            <MotionText variant={negXVariant} tag="h1" className="mb-4">
                Get in Touch — Let&apos;s Connect
            </MotionText>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <ContactForm />
                <ContactCards />
            </div>
        </MotionContainer>
    );
}
