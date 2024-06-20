"use client";
import React from "react";
import { BackgroundBeams } from "./ui/background-beams";

export function NewsLetterComponent () {
  return (
    <div className="h-[40rem] w-full  bg-black relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Sign up for NewsLetter
        </h1>
        <p></p>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
        Stay in touch with latest news from pi techniques,
        enter your email address below and start receiveing our newsletter.
        </p>
        <input
          type="text"
          placeholder="satyajit.pal@pitechniques.com"
          className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700 py-3 px-2 text-white "
        />
      </div>
      <BackgroundBeams />
    </div>
  );
}
