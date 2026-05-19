"use client";
import CircularText from "@/components/ui/circular-text";

export default function RotatingText() {
    return <CircularText text="My Projects * My Projects * " onHover="slowDown" spinDuration={10} className="size-24 text-sm" />;
}
