import { CgPin } from "react-icons/cg";
import { VscGithub } from "react-icons/vsc";
import { FiLinkedin, FiPhone } from "react-icons/fi";
import { TbBrandDiscordFilled, TbBrandTelegram, TbMail } from "react-icons/tb";

const contactData = [
    { label: "Addis Ababa, Ethiopia", value: "Addis Ababa, Ethiopia", icon: CgPin, color: "text-blue-500" },
    { label: "+251 97 939 4379", value: "tel:+251979394379", icon: FiPhone, color: "text-green-500" },
    { label: "LinkedIn", value: "http://linkedin.com/in/dagmawi-solomon-2b350636b", icon: FiLinkedin, color: "text-blue-400" },
    { label: "dagisolo1023@gmail.com", value: "mailto:dagisolo1023@gmail.com", icon: TbMail, color: "text-red-500" },
    { label: "GitHub", value: "http://github.com/dagisolo10", icon: VscGithub, color: "text-neutral-500 dark:text-neutral-300" },
    { label: "Telegram", value: "https://t.me/Ayakashi101", icon: TbBrandTelegram, color: "text-cyan-500" },
    { label: "Discord", value: "https://discord.com/users/851991774733795369", icon: TbBrandDiscordFilled, color: "text-indigo-500" },
];

export default contactData;
