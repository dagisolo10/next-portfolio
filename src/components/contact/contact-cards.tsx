import Link from "next/link";
import contactData from "@/data/contact-info";
import { containerVariant, posYVariant } from "@/components/motion/motion-data";
import { MotionContainer, MotionItem } from "@/components/motion/motion-wrappers";

export default function ContactCards() {
    return (
        <MotionContainer variant={containerVariant} className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {contactData.map((data) => {
                const Icon = data.icon;
                if (data.label === "Addis Ababa, Ethiopia") {
                    return (
                        <MotionItem className="flex items-center gap-2" variant={posYVariant} key={data.label}>
                            <Icon className={`${data.color} size-6`} />
                            <p>{data.label}</p>
                        </MotionItem>
                    );
                }

                return (
                    <MotionItem variant={posYVariant} className="flex items-center gap-2" key={data.label}>
                        <Link className="flex items-center gap-2" target="_blank" href={data.value}>
                            <Icon className={`${data.color} size-6`} />
                            <p>{data.label}</p>
                        </Link>
                    </MotionItem>
                );
            })}
        </MotionContainer>
    );
}
