"use client";
import Image from "next/image";
import React from "react";
import { WobbleCard } from "./ui/wobble-card";
import { div } from "three/examples/jsm/nodes/Nodes.js";
import Link from "next/link";


export function ServiceCardGrid() {
  return (
    <div className=" bg-black w-full px-2">
    <div>
        <h1 className="md:text-7xl text-4xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8 text-center " >
            Our <span className=" text-transparent  bg-clip-text bg-gradient-to-b  from-orange-300 to-[#FE8A02] " >Services</span>
        </h1>
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full bg-black  ">
      
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
        className=""
      > 
      <Link href='/sw-app'>
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Application Development
          </h2>
          <p className="mt-4 text-left  text-base/6 text-neutral-200">
          Development and implement software applications across a dynamic range of industries. 
          Our strength is developing complex business applications into simple intuitive solutions.
          </p>
        </div>
        <Image
          src="/linear.webp"
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-4 lg:-right-[30%] grayscale filter -bottom-10 object-contain rounded-2xl"
        />
        </Link>
      </WobbleCard>

      <WobbleCard containerClassName="col-span-1 min-h-[300px]">
        <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          SEO
        </h2>
        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
        High visibility on internet is now a fundamental requirement of every company,SEO needs to be part of the marketing plan.
        At Pi Techniques we guarantee Search Engine Optimization results. When you outsource your SEO to us, 
        we do extensive keyword research to make sure that you get the best results.
        </p>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px]">
        <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
           IT Infrastructure and Support
        </h2>
        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
        Design & development from basic corporate websites to advance CMS and Ecommerce websites.
         Our designers and developers use industry standard Next Js , React Js , Nest Js  to achieve high quality, easy navigational websites.
        </p>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 lg:col-span-2 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="max-w-sm">
          <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          Website Design And Development
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
          Implement a robust and fast IT infrastructure, with industry standard structured cabling, network racks and security.
          Call us for any technology problem and get Immediate Support ,as well as a permanent fix to your issues
          </p>
        </div>
        <Image
          src="/linear.webp"
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
    </div>
    </div>
  );
}
