"use client";
import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import type { ComponentType, FormEventHandler, ReactNode } from "react";

interface ContainerPops {
    children: ReactNode;
    variant: Variants;
    className?: string;
}

interface LinkProps {
    href: string;
    icon?: ReactNode;
    text?: string;
    variant: Variants;
    className?: string;
}

export const MotionContainer = ({ children, variant, className = "" }: ContainerPops) => (
    <motion.div variants={variant} initial="initial" animate="final" className={className}>
        {children}
    </motion.div>
);

export const MotionScrollContainer = ({ children, variant, className = "" }: ContainerPops) => (
    <motion.div variants={variant} initial="initial" whileInView="final" viewport={{ once: false, amount: 0.1 }} className={className}>
        {children}
    </motion.div>
);

export const MotionInnerContainer = ({ children, variant, className = "" }: ContainerPops) => (
    <motion.div variants={variant} className={className}>
        {children}
    </motion.div>
);

export const MotionCircle = ({ children, variant, className }: ContainerPops) => (
    <motion.div variants={variant} whileHover={{ scale: 1.1, transition: { type: "spring", damping: 16, stiffness: 250 } }} className={className}>
        {children}
    </motion.div>
);

export const MotionItem = ({ children, variant, className = "" }: ContainerPops) => (
    <motion.div variants={variant} className={className}>
        {children}
    </motion.div>
);

export const MotionIcon = ({ icon: Icon, variant }: { icon: ComponentType<{ className?: string }>; variant: Variants }) => (
    <motion.div variants={variant} viewport={{ once: false, amount: 1 }}>
        <Icon className="size-8" />
    </motion.div>
);

export const MotionImage = ({ src, alt, variant }: { src: string; alt: string; variant: Variants }) => (
    <motion.div variants={variant} viewport={{ once: false, amount: 0.7 }} className="rounded-sm">
        <Image src={src} alt={alt} fill className="rounded-inherit object-contain sm:object-cover" />
    </motion.div>
);

export const MotionText = ({ children, tag, variant, className = "" }: ContainerPops & { tag: string }) =>
    tag === "h1" ? (
        <motion.h1 variants={variant} className={className}>
            {children}
        </motion.h1>
    ) : tag === "p" ? (
        <motion.p variants={variant} className={className}>
            {children}
        </motion.p>
    ) : tag === "span" ? (
        <motion.span variants={variant} className={className}>
            {children}
        </motion.span>
    ) : (
        <motion.div variants={variant} className={className}>
            {children}
        </motion.div>
    );

export const MotionScrollText = ({ children, tag, variant, className = "" }: ContainerPops & { tag: "h1" | "p" | "span" | "div" }) =>
    tag === "h1" ? (
        <motion.h1 variants={variant} initial="initial" whileInView="final" viewport={{ once: false, amount: 0.2 }} className={className}>
            {children}
        </motion.h1>
    ) : tag === "p" ? (
        <motion.p variants={variant} initial="initial" whileInView="final" viewport={{ once: false, amount: 0.2 }} className={className}>
            {children}
        </motion.p>
    ) : tag === "span" ? (
        <motion.span variants={variant} initial="initial" whileInView="final" viewport={{ once: false, amount: 0.2 }} className={className}>
            {children}
        </motion.span>
    ) : (
        <motion.div variants={variant} initial="initial" whileInView="final" viewport={{ once: false, amount: 0.2 }} className={className}>
            {children}
        </motion.div>
    );

export const MotionForm = ({ children, variant, className = "", onSubmit }: ContainerPops & { onSubmit: FormEventHandler<HTMLFormElement> }) => (
    <motion.form onSubmit={onSubmit} variants={variant} initial="initial" animate="final" className={className}>
        {children}
    </motion.form>
);

export const MotionLink = ({ href, icon, text, variant, className = "" }: LinkProps) =>
    icon ? (
        <motion.div variants={variant}>
            <Link className={className} target="_blank" href={href}>
                {icon}
            </Link>
        </motion.div>
    ) : (
        <motion.div variants={variant}>
            <Link className={className} target="_blank" href={href}>
                {text}
            </Link>
        </motion.div>
    );
