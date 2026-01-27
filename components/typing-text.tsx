import TextType from "./ui/TextType";

export default function TypingText({ text }: { text: string[] }) {
    return <TextType text={text} typingSpeed={100} pauseDuration={1000} showCursor cursorCharacter="_" deletingSpeed={75} cursorBlinkDuration={0.5} />;
}
