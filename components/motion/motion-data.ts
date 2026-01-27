import { Variants } from "framer-motion";

export const containerVariant: Variants = {
    initial: {},
    final: { transition: { staggerChildren: 0.2 } },
};

export const delayedContainerVariant: Variants = {
    initial: {},
    final: { transition: { delayChildren: 0.7, staggerChildren: 0.2 } },
};

export const fadeInVariant: Variants = {
    initial: { opacity: 0 },
    final: { opacity: 1, transition: { duration: 1 } },
};
export const negXVariant: Variants = {
    initial: { x: -100, opacity: 0 },
    final: { x: 0, opacity: 1, transition: { duration: 1 } },
};

export const posXVariant: Variants = {
    initial: { opacity: 0, x: 100 },
    final: { opacity: 1, x: 0, transition: { duration: 1 } },
};

export const posYVariant: Variants = {
    initial: { y: 40, opacity: 0 },
    final: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};

export const posLongYVariant: Variants = {
    initial: { y: 100, opacity: 0 },
    final: { y: 0, opacity: 1, transition: { duration: 1 } },
};

export const posYSpringVariant: Variants = {
    initial: { y: 40, opacity: 0 },
    final: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 60, damping: 10 } },
};

export const formItemVariant: Variants = {
    initial: { x: "-25vw", opacity: 0 },
    final: { x: 0, opacity: 1, transition: { duration: 1 } },
};

export const circleVariant: Variants = {
    initial: { scale: 0, opacity: 0 },
    final: { scale: 1, opacity: 1, transition: { opacity: { duration: 1 }, scale: { type: "spring", damping: 16, stiffness: 150 } } },
};

export const scaleUpVariant: Variants = {
    initial: { opacity: 0, scale: 0.95 },
    final: { opacity: 1, scale: 1, transition: { duration: 1, ease: "easeOut" } },
};

export const imageVariant: Variants = {
    initial: { opacity: 0, scale: 0.95 },
    final: { opacity: 1, scale: 1, transition: { duration: 1, ease: "easeOut" } },
};

export const carouselVariant: Variants = {
    visible: { x: ["0%", "-50%"], transition: { duration: 20, ease: "linear", repeat: Infinity } },
};
