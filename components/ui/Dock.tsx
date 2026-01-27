"use client";
import { motion, MotionValue, useMotionValue, AnimatePresence, Variants } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { Children, cloneElement, useEffect, useState } from "react";

export type DockItemData = {
    icon: React.ReactNode;
    label: React.ReactNode;
    href: string;
    iconColor: string;
    activeColor: string;
    className?: string;
};

export type DockProps = {
    items: DockItemData[];
    className?: string;
    baseItemSize?: number;
};

type DockItemProps = {
    className?: string;
    children: React.ReactNode;
    href: string;
    activeColor: string;
    iconColor: string;
    baseItemSize: number;
};

const docContainerVariant: Variants = {
    initial: {},
    final: { transition: { staggerChildren: 0.2 } },
};
const docItemVariant: Variants = {
    initial: { x: 40, opacity: 0 },
    final: {
        x: 0,
        opacity: 1,
        transition: { opacity: { duration: 2 }, type: "spring", damping: 10 },
    },
};

function DockItem({ children, className = "", href, activeColor, iconColor, baseItemSize }: DockItemProps) {
    const isHovered = useMotionValue(0);
    const location = usePathname();
    const isActive = href === "/" ? location === "/" : location.startsWith(href);

    return (
        <Link href={href} className="group relative flex items-center justify-center">
            <div
                style={{ width: baseItemSize, height: baseItemSize }}
                onMouseEnter={() => isHovered.set(1)}
                onMouseLeave={() => isHovered.set(0)}
                onFocus={() => isHovered.set(1)}
                onBlur={() => isHovered.set(0)}
                className={`${isActive ? `${activeColor}` : `${iconColor}`} flex items-center justify-center shadow-md transition-all ${className}`}
            >
                {Children.map(children, (child) => (React.isValidElement(child) ? cloneElement(child as React.ReactElement<{ isHovered?: MotionValue<number> }>, { isHovered }) : child))}
            </div>
        </Link>
    );
}

type DockLabelProps = {
    className?: string;
    children: React.ReactNode;
    isHovered?: MotionValue<number>;
};

function DockLabel({ children, className = "", isHovered }: DockLabelProps) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (!isHovered) return;
        const unsubscribe = isHovered.on("change", (latest) => {
            setIsVisible(latest === 1);
        });
        return () => unsubscribe();
    }, [isHovered]);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, x: 0 }}
                    animate={{ opacity: 1, x: -10 }}
                    exit={{ opacity: 0, x: 0 }}
                    transition={{ duration: 0.2 }}
                    className={`${className} absolute left-[calc(-100%-10px)] hidden w-fit rounded-md border border-neutral-700 bg-[#060010] px-2 py-0.5 text-sm whitespace-pre text-white lg:block`}
                    role="tooltip"
                >
                    {children}
                </motion.div>
            )}
        </AnimatePresence>
    );
}

type DockIconProps = {
    iconColor: string;
    className?: string;
    children: React.ReactNode;
    isHovered?: MotionValue<number>;
};

function DockIcon({ children, iconColor, className = "" }: DockIconProps) {
    return <motion.div className={`${iconColor} flex items-center justify-center transition-transform duration-200 group-hover:scale-115 ${className}`}>{children}</motion.div>;
}

export default function Dock({ items, className = "", baseItemSize = 10 }: DockProps) {
    return (
        <div className="pointer-events-auto fixed bottom-0 left-1/2 z-900 -translate-x-1/2 rounded-full backdrop-blur-xl sm:bottom-4 lg:top-1/2 lg:right-4 lg:left-auto lg:translate-x-0 lg:translate-y-[-50%]">
            <motion.div variants={docContainerVariant} initial="initial" animate="final" className={`${className} flex items-center gap-2 lg:flex-col`} role="toolbar" aria-label="Vertical dock">
                {items.map((item, index) => (
                    <motion.div variants={docItemVariant} key={index}>
                        <DockItem iconColor={item.iconColor} activeColor={item.activeColor} href={item.href} className={item.className} baseItemSize={baseItemSize}>
                            <DockIcon iconColor={item.iconColor}>{item.icon}</DockIcon>
                            <DockLabel>{item.label}</DockLabel>
                        </DockItem>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}
