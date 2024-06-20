"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
  {
    title: "Strong skill sets",
    description:
    `We have a team of highly qualified leaders including Masters in computer application, Microsoft certified engineers, MBAs, database experts, subject matter experts and core developers. Our greatest strength "Our passion & love for what we do!"`,
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Strong skill sets
      </div>
    ),
  },
  {
    title: "Knowledge across a range of business domains",
    description:
      `We get so involved when we build our applications we have no choice but to understand your business to the smallest detail. Over the years this has given our team tremendous knowledge in deverse business processes. Some of the sectors we have served are financial, warehousing, retail, car rental, consulting services, marine catering, e-commerce and more.`,
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/linear.webp"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Hunger for knowledge",
    description:
      `Our team has always believed in adopting the latest technology and trends of the software development and management industry. Our hunger for knowledge and continuous learning keeps us tuned to industry standards. These are then adopted and adapted to all our projects transferring the knowledge benefit to our clients.`,
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        Hunger for knowledge
      </div>
    ),
  },
  {
    title: "Agile project management",
    description:
      `At Pi we realised we twist and turn all the time and so do our client's requirements. To cope with the ever changing world of business we have successfully adopted AGILE project management. SCRUM is part of our daily life and has helped us successfully complete a large number of complex projects.`,
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Agile project management
      </div>
    ),
  },
];
export function StickyScrollReveal() {
  return (
    <div className="p-10">
      <StickyScroll content={content} />
    </div>
  );
}
