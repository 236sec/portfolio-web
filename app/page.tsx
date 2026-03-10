import { ExperienceTimeline } from "@/components/experience-timeline";
import { SkillsMarquee } from "@/components/skills-marquee";
import SpecialText from "@/components/special-text";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import StatusIndicator from "@/components/ui/status-indicator";

export default function Home() {
  return (
    <div className="w-full flex flex-col">
      <div className="flex justify-end">
        <AnimatedThemeToggler />
      </div>

      <div className="flex flex-col gap-16">
        {/* 1. About Me */}
        <section className="w-full flex flex-col gap-2">
          <SpecialText
            words={["Hello World, I'm Sompon Onlam", "@236sec"]}
            type="typewriter"
          />
          <h1 className="text-3xl font-bold">About Me</h1>
          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
            I am a passionate software developer with a knack for building
            scalable web applications. I love learning new technologies and
            solving complex problems. Feel free to reach out!
          </p>
          <div className="flex gap-4 mt-2">
            <a
              href="mailto:sompon.onlam159@gmail.com"
              className="font-medium text-blue-600 dark:text-blue-400 hover:underline"
            >
              sompon.onlam159@gmail.com
            </a>
            <a
              target="_blank"
              href="https://github.com/236sec"
              className="font-medium text-blue-600 dark:text-blue-400 hover:underline"
            >
              GitHub
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/sompon-onlume-a0665a259/"
              className="font-medium text-blue-600 dark:text-blue-400 hover:underline"
            >
              LinkedIn
            </a>
          </div>
          <div className="flex items-center gap-2 mb-4">
            <StatusIndicator
              state="active"
              label="Available for new opportunities"
            />
          </div>
        </section>

        {/* 2. Skills */}
        <section className="w-full flex flex-col gap-4">
          <h2 className="text-2xl font-bold">Skills</h2>
          <div className="w-full">
            <SkillsMarquee />
          </div>
        </section>

        {/* 3. Experiences */}
        <section className="w-full flex flex-col gap-4">
          <h2 className="text-2xl font-bold">Experiences</h2>
          <div className="w-full overflow-x-auto">
            <ExperienceTimeline />
          </div>
        </section>

        {/* 4. Projects */}
        <section className="w-full flex flex-col gap-4">
          <h2 className="text-2xl font-bold">Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 border rounded-xl border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900">
              <h3 className="font-semibold text-lg">E-Commerce Platform</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2">
                A full-stack e-commerce solution built with Next.js, Stripe, and
                Tailwind CSS.
              </p>
            </div>
            <div className="p-4 border rounded-xl border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900">
              <h3 className="font-semibold text-lg">Portfolio Website</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2">
                The personal portfolio website you are currently viewing,
                featuring modern animations.
              </p>
            </div>
          </div>
        </section>

        {/* 5. Activities or Event */}
        <section className="w-full flex flex-col gap-4">
          <h2 className="text-2xl font-bold">Activities & Events</h2>
          <ul className="list-disc list-inside text-zinc-600 dark:text-zinc-400 space-y-2">
            <li>
              <strong className="text-zinc-900 dark:text-zinc-100">
                Hackathon Winner
              </strong>{" "}
              - Built an AI-powered code reviewer in 48 hours (2025).
            </li>
            <li>
              <strong className="text-zinc-900 dark:text-zinc-100">
                Tech Meetup Speaker
              </strong>{" "}
              - Delivered a talk on &quot;Modern React Patterns&quot; at the
              local JS user group.
            </li>
            <li>
              <strong className="text-zinc-900 dark:text-zinc-100">
                Open Source Contributor
              </strong>{" "}
              - Regular contributor to various popular UI libraries.
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
