import type { ReactNode } from "react";
import { FiMail } from "react-icons/fi";
import { TbBrain } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { VscHome, VscProject } from "react-icons/vsc";

export type DockItemData = {
    icon: ReactNode;
    label: string;
    href: string;
    iconColor: string;
    activeColor: string;
};

export const dockItems: DockItemData[] = [
    { icon: <VscHome size={24} />, label: "Home", href: "/", activeColor: "text-primary", iconColor: "group-hover:text-primary" },
    { icon: <CgProfile size={24} />, label: "About", href: "/about", activeColor: "text-red-500", iconColor: "group-hover:text-red-500" },
    { icon: <TbBrain size={24} />, label: "Skills", href: "/skills", activeColor: "text-yellow-500", iconColor: "group-hover:text-yellow-500" },
    { icon: <VscProject size={24} />, label: "Projects", href: "/projects", activeColor: "text-cyan-500", iconColor: "group-hover:text-cyan-500" },
    { icon: <FiMail size={24} />, label: "Contact", href: "/contact", activeColor: "text-violet-500", iconColor: "group-hover:text-violet-500" },
];
