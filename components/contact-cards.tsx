import { containerVariant, posYVariant } from "./motion/motion-data";
import { MotionContainer, MotionItem } from "./motion/motion-wrappers";

import Link from "next/link";
import contactData from "@/data/contact-info";

export default function ContactCards() {
    return (
        <MotionContainer variant={containerVariant} tag="div" className="grid grid-cols-1 gap-y-6 p-6 md:grid-cols-2">
            {contactData.map((data) => {
                const Icon = data.icon;
                if (data.label === "Addis Ababa, Ethiopia")
                    return (
                        <MotionItem className="flex items-center gap-2" variant={posYVariant} key={data.label}>
                            <Icon className={`${data.color} size-6`} />
                            <p>{data.label}</p>
                        </MotionItem>
                    );
                return (
                    <MotionItem variant={posYVariant} className="flex items-center gap-2" key={data.label}>
                        <Link className="flex items-center gap-2" href={data.value}>
                            <Icon className={`${data.color} size-6`} />
                            <p>{data.label}</p>
                        </Link>
                    </MotionItem>
                );
            })}
        </MotionContainer>
    );
}
