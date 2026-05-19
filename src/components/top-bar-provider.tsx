"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

interface TopBarContextProp {
    show: boolean;
    toggle: () => void;
}

const TopBarContext = createContext<TopBarContextProp | null>(null);

export default function TopBarProvider({ children }: { children: ReactNode }) {
    const [show, setShow] = useState(false);

    const toggle = () => setShow((c) => !c);

    const value = { show, toggle };

    return <TopBarContext.Provider value={value}>{children}</TopBarContext.Provider>;
}

export function useTopBar() {
    const context = useContext(TopBarContext);
    if (!context) {
        throw new Error("Must wrap with TopBarProvider!");
    }

    return context;
}
