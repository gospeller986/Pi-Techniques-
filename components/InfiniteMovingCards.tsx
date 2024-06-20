"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function InfiniteMovingCardsComponent() {
  return (
    <div className="h-[40rem] flex flex-col antialiased bg-black bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <h1 className="text-5xl text-white font-bold " >Our <span className=" text-[#FE8A02]" >Clients</span></h1>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="fast"
      />
    </div>
  );
}

const testimonials = [
  {

    title: "V Group",
    img : "/v-group.png"
  },
  {

    title: "Sea Tec",
    img : "/sea-tec.png"
  },
  {

    title: "Metro Shoes",
    img : "/metro-shoes.png"
  },
  {

    title: "Citius Tech",
    img : "/citiustech.png"
  },
  {

    title: "Staples",
    img : "/staple.png"
  },
  {

    title: "Star Groups",
    img : "/Hot_Star_Logo_Black.png"
  },
  {
    title: "Taj Group",
    img : "/taj.png"
  },
  {
    title: "World Resource Institutes",
    img : "/resource.png"
  },
  {
    title: "Chanakya",
    img : "/chanakya.png"
  },
];
