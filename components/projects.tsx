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
    title: "Crypto Portfolio Dashboard",
    description:
      "A full-stack Web3 dashboard that consolidates and tracks cross-platform cryptocurrency assets. Built with Next.js and NestJS, its standout feature is an interactive AI agent that uses LLM function calling to autonomously analyze user portfolios and deliver personalized market insights.",
    image:
      "https://media.discordapp.net/attachments/1466050886978637939/1466065961302884402/image.png?ex=69f9f3d3&is=69f8a253&hm=dd554146454dc7e71997a91125bd742abf76f2fcfd747e58c4b52b0063240f92&=&format=webp&quality=lossless&width=1936&height=1674",
    link: "https://github.com/236sec/seniorProjectBackend",
    repoName: "crypto-portfolio",
    isLive: false,
  },
  {
    title: "Startdii (Collaborative Learning App)",
    description:
      "A mobile application designed to enhance educational collaboration through seamless resource sharing and interactive quizzes. Developed with React Native, it relies on a robust, scalable backend architecture utilizing containerized NestJS microservices and MongoDB to handle secure authentication and data pipelines.",
    image:
      "https://raw.githubusercontent.com/ProgrammerTon/Startdii/refs/heads/main/image/app-uxui.png",
    link: "https://github.com/ProgrammerTon/Startdii",
    repoName: "startdii",
    isLive: false,
  },
  {
    title: "KULAI (IoT Transit System)",
    description:
      "An end-to-end IoT solution engineered to provide real-time bus tracking for university transit. By integrating ESP32 GPS modules with Node-RED, the system continuously transmits live geolocation data to a responsive React web interface powered by the Google Maps API, significantly improving transit visibility for students.",
    image:
      "https://github.com/236sec/Esp32Project/blob/main/image.png?raw=true",
    link: "https://github.com/236sec/Esp32Project",
    repoName: "kulai",
    isLive: false,
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
                <h3 className="truncate text-lg font-semibold">
                  {project.title}
                </h3>
              </CardHeader>
              <CardContent className="flex flex-col justify-between">
                <div>{project.description}</div>
                <div className="mt-4 flex items-center space-x-4">
                  {project.isLive && (
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
                    href={project.link}
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
