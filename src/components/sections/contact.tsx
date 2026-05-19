import Link from "next/link";
import ContactCards from "@/components/contact/contact-cards";
import { containerVariant, negXVariant } from "@/components/motion/motion-data";
import { MotionScrollContainer, MotionText } from "@/components/motion/motion-wrappers";

export default function Contact() {
    return (
        <MotionScrollContainer className="py-16 sm:py-24" variant={containerVariant}>
            <MotionText variant={negXVariant} tag="h1" className="mb-4">
                Get in Touch — Let&apos;s Connect
            </MotionText>

            <div className="grid grid-cols-1 gap-8 py-4 md:grid-cols-2 md:gap-4">
                <div className="flex flex-col gap-6">
                    <MotionText variant={negXVariant} tag="p" className="text-muted-foreground max-w-md">
                        Looking for a product engineer who thinks in systems? Let&apos;s talk about your next project.
                    </MotionText>

                    <MotionText variant={negXVariant} tag="div">
                        <Link href="mailto:dagisolo1023@gmail.com" className="text-primary font-medium break-all hover:underline">
                            dagisolo1023@gmail.com &rarr;
                        </Link>
                    </MotionText>
                </div>

                <ContactCards />
            </div>
        </MotionScrollContainer>
    );
}
