"use client";
import { useScroll, useTransform, motion, Variants } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
    title: string;
    content: React.ReactNode;
}

export const Timeline = ({ data, header, subHeader, hClassName = "" }: { data: TimelineEntry[]; header: string; subHeader: string; hClassName: string }) => {
    const ref = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        const updateHeight = () => {
            if (ref.current) setHeight(ref.current.getBoundingClientRect().height);
        };
        updateHeight();
        window.addEventListener("resize", updateHeight);
        return () => window.removeEventListener("resize", updateHeight);
    }, []);

    const { scrollYProgress } = useScroll();
    const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
    const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

    const titleVariant: Variants = {
        hidden: { opacity: 0, y: 40 },
        show: { opacity: 1, y: 0, transition: { type: "spring", damping: 8, opacity: { duration: 3, ease: "easeOut" } } },
    };
    const headerVariant: Variants = {
        hidden: { opacity: 0, y: 60 },
        show: { opacity: 1, y: 0, transition: { type: "spring", damping: 8 } },
    };

    return (
        <div className="overflow-clip">
            <div className="w-full font-sans md:px-10" ref={containerRef}>
                <motion.div variants={headerVariant} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.2 }} className={`mx-auto max-w-7xl px-4 md:px-8 lg:px-10 ${hClassName}`}>
                    <h1 className="mb-4">{header}</h1>
                    <p className="muted">{subHeader}</p>
                </motion.div>

                <div ref={ref} className="relative mx-auto max-w-7xl pb-20">
                    {data.map((item, index) => (
                        <div key={index} className="flex justify-start gap-4 pt-10 md:gap-0 md:pt-40">
                            <div className="sticky top-40 z-40 flex max-w-xs flex-col items-center self-start md:w-full md:flex-row lg:max-w-sm">
                                <div className="bg-primary/10 absolute left-0 flex h-10 w-10 items-center justify-center rounded-full">
                                    <div className="h-4 w-4 rounded-full border border-neutral-400 bg-neutral-600 p-2" />
                                </div>
                                <motion.h3 variants={titleVariant} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.2 }} className="hidden font-bold md:block md:pl-16 md:text-4xl lg:text-5xl">
                                    {item.title}
                                </motion.h3>
                            </div>

                            <div className="relative w-full pr-4 pl-16 md:pl-4">
                                <h3 className="mb-4 block text-left text-2xl font-bold text-neutral-500 md:hidden">{item.title}</h3>
                                {item.content}
                            </div>
                        </div>
                    ))}
                    <div style={{ height: height + "px" }} className="absolute top-0 left-5 w-0.5 overflow-hidden bg-neutral-700 mask-[linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]">
                        <motion.div style={{ height: heightTransform, opacity: opacityTransform }} className="absolute inset-x-0 top-0 z-50 w-full bg-[linear-gradient(to_bottom,blue_0%,red_20%,darkcyan_40%,green_60%,purple_80%,darkslateblue_100%)] shadow-[0_0_15px_rgba(59,130,246,0.6)]" />
                    </div>
                </div>
            </div>
        </div>
    );
};
