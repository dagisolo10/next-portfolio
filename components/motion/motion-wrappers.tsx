"use client";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FormEventHandler, ReactNode } from "react";

export const MotionContainer = ({ children, tag, variant, className = "" }: { children: React.ReactNode; tag: string; variant: Variants; className?: string }) =>
    tag === "main" ? (
        <motion.main variants={variant} initial="initial" animate="final" className={className}>
            {children}
        </motion.main>
    ) : (
        <motion.div variants={variant} initial="initial" animate="final" className={className}>
            {children}
        </motion.div>
    );

export const MotionScrollContainer = ({ children, variant, className = "" }: { children: React.ReactNode; variant: Variants; className?: string }) => (
    <motion.div variants={variant} initial="initial" whileInView="final" viewport={{ once: false, amount: 0.1 }} className={className}>
        {children}
    </motion.div>
);

export const MotionInnerContainer = ({ children, variant, className = "" }: { children: React.ReactNode; variant: Variants; className?: string }) => (
    <motion.div variants={variant} className={className}>
        {children}
    </motion.div>
);

export const MotionCircle = ({ children, variant, className }: { children: React.ReactNode; variant: Variants; className?: string }) => (
    <motion.div variants={variant} whileHover={{ scale: 1.1, transition: { type: "spring", damping: 16, stiffness: 250 } }} className={className}>
        {children}
    </motion.div>
);

export const MotionItem = ({ children, variant, className = "" }: { children: React.ReactNode; variant: Variants; className?: string }) => (
    <motion.div variants={variant} className={className}>
        {children}
    </motion.div>
);

export const MotionIcon = ({ src, alt, variant }: { src: string; alt: string; variant: Variants }) => (
    <motion.div variants={variant} viewport={{ once: false, amount: 1 }}>
        <Image src={src} alt={alt} width={32} height={32} />
    </motion.div>
);

export const MotionImage = ({ src, alt, variant }: { src: string; alt: string; variant: Variants }) => (
    <motion.div variants={variant} viewport={{ once: false, amount: 0.7 }}>
        <Image src={src} alt={alt} width={500} height={720} />
    </motion.div>
);

export const MotionText = ({ children, tag, variant, className = "" }: { children: React.ReactNode; tag: string; variant: Variants; className?: string }) =>
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

export const MotionScrollText = ({ children, tag, variant, className = "" }: { children: React.ReactNode; tag: string; variant: Variants; className?: string }) =>
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

export const MotionForm = ({ children, variant, className = "", onSubmit }: { children: React.ReactNode; variant: Variants; className?: string; onSubmit: FormEventHandler<HTMLFormElement> }) => (
    <motion.form onSubmit={onSubmit} variants={variant} initial="initial" animate="final" className={className}>
        {children}
    </motion.form>
);

export const MotionLink = ({ href, icon, text, variant, className = "" }: { href: string; icon?: ReactNode; text?: string; variant: Variants; className: string }) =>
    icon ? (
        <motion.div variants={variant}>
            <Link className={className} href={href}>
                {icon}
            </Link>
        </motion.div>
    ) : (
        <motion.div variants={variant}>
            <Link className={className} href={href}>
                {text}
            </Link>
        </motion.div>
    );
