"use client";
import { dockItems } from "@/data/dockLinks";
import Dock from "../ui/Dock";

export default function Nav() {
    return (
        <div className="pointer-events-none fixed inset-0 z-1000 p-4">
            <Dock items={dockItems} baseItemSize={50} />
        </div>
    );
}
