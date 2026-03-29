"use client";
import { cn } from "@/lib/utils";
import Autoplay from "embla-carousel-autoplay";
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
  },
  {
    title: "Tech Meetup Speaker",
    description:
      'Delivered a talk on "Modern React Patterns" at the local JS user group.',
  },
  {
    title: "Open Source Contributor",
    description: "Regular contributor to various popular UI libraries.",
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
          <CarouselItem key={idx}>
            <Card>
              <CardHeader>{activity.title}</CardHeader>
              <CardContent>{activity.description}</CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
