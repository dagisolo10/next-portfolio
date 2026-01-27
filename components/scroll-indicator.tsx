"use client";
import { motion, Variants } from "framer-motion";
import { CgArrowDown } from "react-icons/cg";

const itemVariant: Variants = {
    initial: {
        opacity: 0,
        scale: 0,
    },
    final: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 2,
        },
    },
};

export default function ScrollIndicator() {
    return (
        <motion.div variants={itemVariant} className="mt-8 flex animate-bounce flex-col items-center justify-center gap-1">
            <div className="rounded-2xl border px-1 py-6">
                <CgArrowDown className="size-6" />
            </div>
        </motion.div>
    );
}
