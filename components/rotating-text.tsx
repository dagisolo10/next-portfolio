"use client";
import CircularText from "@/components/ui/CircularText";

export default function RotatingText() {
    return (
        <div>
            <CircularText text="My Projects * My Projects * " onHover="slowDown" spinDuration={10} className="size-24 text-sm" />
        </div>
    );
}
