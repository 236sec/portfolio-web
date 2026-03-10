import { cn } from "@/lib/utils";
import Image from "next/image";
import { Marquee } from "./ui/marquee";

const skills = [
  { name: "Go", slug: "go" },
  { name: "JavaScript", slug: "javascript" },
  { name: "TypeScript", slug: "typescript" },
  { name: "Python", slug: "python" },
  { name: "C", slug: "c" },
  { name: "C++", slug: "cplusplus" },
  { name: "Postman", slug: "postman" },
  { name: "Git", slug: "git" },
  { name: "Docker", slug: "docker" },
  { name: "Figma", slug: "figma" },
  { name: "MongoDB", slug: "mongodb" },
  { name: "PostgreSQL", slug: "postgresql" },
  { name: "MySQL", slug: "mysql" },
  { name: "React", slug: "react" },
  { name: "Next.js", slug: "nextdotjs" },
  { name: "NestJS", slug: "nestjs" },
  { name: "Tailwind CSS", slug: "tailwindcss" },
  { name: "MUI", slug: "mui" },
  { name: "HTML5", slug: "html5" },
  { name: "CSS", slug: "css" },
  { name: "Node-RED", slug: "nodered" },
];

const SkillIcon = ({ slug, name }: { slug: string; name: string }) => {
  return (
    <div
      className={cn(
        "relative flex cursor-pointer items-center justify-center overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
      title={name}
    >
      <Image
        width={70}
        height={70}
        src={`https://cdn.simpleicons.org/${slug}`}
        alt={name}
      />
    </div>
  );
};

export function SkillsMarquee() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:20s]">
        {skills.map((skill) => (
          <SkillIcon key={skill.name} {...skill} />
        ))}
      </Marquee>
      <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
      <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
    </div>
  );
}
