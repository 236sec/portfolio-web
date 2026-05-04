"use client";
import { cn } from "@/lib/utils";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { Card, CardContent, CardHeader } from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution built with Next.js, Stripe, and Tailwind CSS.",
    image: "https://picsum.photos/seed/1/400/300",
    link: "https://example.com",
    repoName: "ecommerce-platform",
  },
  {
    title: "Portfolio Website",
    description:
      "The personal portfolio website you are currently viewing, featuring modern animations.",
    image: "https://picsum.photos/seed/2/400/300",
    link: "https://example.com",
    repoName: "portfolio-web",
  },
  {
    title: "Chat Application",
    description:
      "A real-time chat application using WebSockets and Node.js for seamless communication.",
    image: "https://picsum.photos/seed/3/400/300",
    link: null,
    repoName: "chat-app",
  },
  {
    title: "Task Management Tool",
    description:
      "A productivity tool to manage tasks and projects, built with React and Firebase.",
    image: "https://picsum.photos/seed/4/400/300",
    link: "https://example.com",
    repoName: "task-manager",
  },
];

export default function Projects() {
  return (
    <Carousel
      orientation="horizontal"
      opts={{ loop: true, align: "start" }}
      plugins={[Autoplay({ delay: 2000 })]}
      className={cn("w-full px-5 h-fit")}
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
              <CardContent className="flex flex-col justify-between">
                <div>{project.description}</div>
                <div className="mt-4 flex items-center space-x-4">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 transition"
                    >
                      Live Demo
                    </a>
                  )}
                  <a
                    href={`https://github.com/${project.repoName}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 hover:text-gray-900 transition"
                  >
                    <FaGithub className="mr-2 text-xl" />
                    {project.repoName}
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
