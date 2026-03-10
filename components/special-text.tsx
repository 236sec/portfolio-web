import { AnnotationAction, Highlighter } from "./ui/highlighter";
import { TypingAnimation } from "./ui/typing-animation";

type SpecialTextProps = {
  text: string;
  type: AnnotationAction | "typewriter";
  color?: string;
};

export default function SpecialText({
  text,
  type,
  color = "#ffd1dc",
}: SpecialTextProps) {
  if (type === "typewriter") {
    return (
      <TypingAnimation
        blinkCursor
        cursorStyle="underscore"
        typeSpeed={50}
        deleteSpeed={150}
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
