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

const activities = [
  {
    title: "GCP Chaiyo Event",
    description:
      "Visit the official GCP Chaiyo event page for information, updates, and event details.",
    image: `${process.env.NEXT_PUBLIC_BASE_PATH}/images/gcp.png`,
    link: "https://rsvp.withgoogle.com/events/chaiyogcp-s6/home",
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
                <div className="relative w-full h-40 mb-4 overflow-hidden rounded-t-lg">
                  <Image
                    src={activity.image}
                    alt={activity.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <a
                  href={activity.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {activity.title}
                </a>
              </CardHeader>
              <CardContent className="flex flex-col justify-between">
                <div className="mb-4">{activity.description}</div>
                <div className="mt-4">
                  <a
                    href={activity.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 transition"
                  >
                    Visit Event
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
