"use client";
import { cn } from "@/lib/utils";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import StatusIndicator from "./ui/status-indicator";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution built with Next.js, Stripe, and Tailwind CSS.",
    image: "https://picsum.photos/seed/1/400/300",
    link: "https://example.com",
  },
  {
    title: "Portfolio Website",
    description:
      "The personal portfolio website you are currently viewing, featuring modern animations.",
    image: "https://picsum.photos/seed/2/400/300",
    link: "https://example.com",
  },
  {
    title: "Chat Application",
    description:
      "A real-time chat application using WebSockets and Node.js for seamless communication.",
    image: "https://picsum.photos/seed/3/400/300",
  },
  {
    title: "Task Management Tool",
    description:
      "A productivity tool to manage tasks and projects, built with React and Firebase.",
    image: "https://picsum.photos/seed/4/400/300",
    link: "https://example.com",
  },
];

export default function Projects() {
  return (
    <Carousel
      orientation="horizontal"
      opts={{ loop: true, align: "start" }}
      plugins={[Autoplay({ delay: 2000 })]}
      className={cn("w-full px-5")}
    >
      <CarouselContent className={cn("-ml-5 w-full")}>
        {projects.map((project, idx) => (
          <CarouselItem key={idx} className={cn("basis-1/3 pl-5")}>
            <Card>
              <CardHeader>
                <div className="relative w-full h-40 mb-4">
                  <Image
                    src={project.image}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg"
                  />
                </div>
                {project.title}
              </CardHeader>
              <CardContent>
                {project.description}
                <div className="mt-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn({
                      "pointer-events-none": !project.link,
                    })}
                  >
                    <StatusIndicator
                      state={project.link ? "active" : "down"}
                      label={project.link ? "Live" : "Down"}
                    />
                  </a>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
