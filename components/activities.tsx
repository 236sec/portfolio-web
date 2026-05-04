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

const activities = [
  {
    title: "Hackathon Winner",
    description: "Built an AI-powered code reviewer in 48 hours (2025).",
    image: "https://picsum.photos/seed/5/400/300",
    link: null,
    repoName: "ai-code-reviewer",
  },
  {
    title: "Tech Meetup Speaker",
    description:
      'Delivered a talk on "Modern React Patterns" at the local JS user group.',
    image: "https://picsum.photos/seed/6/400/300",
    link: null,
    repoName: "react-patterns-talk",
  },
  {
    title: "Open Source Contributor",
    description: "Regular contributor to various popular UI libraries.",
    image: "https://picsum.photos/seed/7/400/300",
    link: null,
    repoName: "open-source-contributor",
  },
  {
    title: "Hackathon Winner",
    description: "Built an AI-powered code reviewer in 48 hours (2025).",
    image: "https://picsum.photos/seed/5/400/300",
    link: null,
    repoName: "ai-code-reviewer",
  },
];

export default function Activities() {
  return (
    <Carousel
      orientation="horizontal"
      opts={{ loop: true, align: "start" }}
      plugins={[Autoplay({ delay: 2000 })]}
      className={cn("w-full px-5")}
    >
      <CarouselContent>
        {activities.map((activity, idx) => (
          <CarouselItem key={idx} className={cn("basis-1/3 pl-5")}>
            <Card>
              <CardHeader>
                <div className="relative w-full h-40 mb-4">
                  <Image
                    src={activity.image}
                    alt={activity.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg"
                  />
                </div>
                {activity.title}
              </CardHeader>
              <CardContent className="flex flex-col justify-between">
                <div className="mb-4">{activity.description}</div>
                <div className="mt-4">
                  {activity.link && (
                    <a
                      href={activity.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 transition"
                    >
                      Live Demo
                    </a>
                  )}
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
