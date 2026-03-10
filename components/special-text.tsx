import { AnnotationAction, Highlighter } from "./ui/highlighter";
import { TypingAnimation } from "./ui/typing-animation";

type SpecialTextProps = {
  words: string[];
  type: AnnotationAction | "typewriter";
  color?: string;
  text?: string | undefined;
};

export default function SpecialText({
  words,
  type,
  color = "#ffd1dc",
  text,
}: SpecialTextProps) {
  if (type === "typewriter") {
    return (
      <TypingAnimation
        words={words}
        blinkCursor
        cursorStyle="underscore"
        typeSpeed={50}
        deleteSpeed={10}
        pauseDelay={2000}
        loop
      >
        {text}
      </TypingAnimation>
    );
  }

  return (
    <Highlighter action={type} color={color}>
      {text}
    </Highlighter>
  );
}
