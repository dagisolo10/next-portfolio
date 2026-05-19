import icons from "@/lib/icons";

const techStack = [
    { name: icons.express.name, icon: icons.express.icon },
    { name: icons.expo.name, icon: icons.expo.icon },
    { name: icons.zustand.name, icon: icons.zustand.icon },
    { name: icons.postgres.name, icon: icons.postgres.icon },
    { name: icons.js.name, icon: icons.js.icon },
    { name: icons.mongo.name, icon: icons.mongo.icon },
    { name: icons.next.name, icon: icons.next.icon },
    { name: icons.node.name, icon: icons.node.icon },
    { name: icons.prisma.name, icon: icons.prisma.icon },
    { name: icons.react.name, icon: icons.react.icon },
    { name: icons.tailwind.name, icon: icons.tailwind.icon },
    { name: icons.typescript.name, icon: icons.typescript.icon },
    { name: icons.reactNative.name, icon: icons.reactNative.icon },
];

export const doubledStack = [...techStack, ...techStack];

export const detailedStacks = {
    frontend: [
        { name: icons.next.name, icon: icons.next.icon, level: "Advanced" },
        { name: icons.expo.name, icon: icons.expo.icon, level: "Advanced" },
        { name: icons.typescript.name, icon: icons.typescript.icon, level: "Advanced" },
        { name: icons.react.name, icon: icons.react.icon, level: "Advanced" },
        // { name: icons.tailwind.name, icon: icons.tailwind.icon, level: "Advanced" },
    ],
    backend: [
        { name: icons.express.name, icon: icons.express.icon, level: "Advanced" },
        { name: icons.postgres.name, icon: icons.postgres.icon, level: "Advanced" },
        { name: icons.prisma.name, icon: icons.prisma.icon, level: "Advanced" },
        { name: icons.node.name, icon: icons.node.icon, level: "Advanced" },
        // { name: icons.mongo.name, icon: icons.mongo.icon, level: "Advanced" },
    ],
};
