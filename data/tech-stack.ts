import icons from "@/lib/icons";

const techStack = [
    { name: icons.express.name, icon: icons.express.icon },
    { name: icons.js.name, icon: icons.js.icon },
    { name: icons.mongo.name, icon: icons.mongo.icon },
    { name: icons.next.name, icon: icons.next.icon },
    { name: icons.node.name, icon: icons.node.icon },
    { name: icons.prisma.name, icon: icons.prisma.icon },
    { name: icons.react.name, icon: icons.react.icon },
    { name: icons.tailwind.name, icon: icons.tailwind.icon },
    { name: icons.typescript.name, icon: icons.typescript.icon },
];

export const doubledStack = [...techStack, ...techStack];

export const detailedStacks = {
    frontend: [
        { name: icons.react.name, icon: icons.react.icon, level: "Advanced" },
        { name: icons.tailwind.name, icon: icons.tailwind.icon, level: "Advanced" },
        { name: icons.next.name, icon: icons.next.icon, level: "Intermediate" },
        { name: icons.typescript.name, icon: icons.typescript.icon, level: "Intermediate" },
    ],
    backend: [
        { name: icons.node.name, icon: icons.node.icon, level: "Advanced" },
        { name: icons.express.name, icon: icons.express.icon, level: "Advanced" },
        { name: icons.mongo.name, icon: icons.mongo.icon, level: "Advanced" },
        { name: icons.prisma.name, icon: icons.prisma.icon, level: "Intermediate" },
    ],
};
