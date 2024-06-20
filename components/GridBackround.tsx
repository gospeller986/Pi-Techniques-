import React from "react";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import { Spotlight } from "./ui/Spotlight";

export function GridBackground() {
    const words = [
        {
            text: "Inside",
        },
        {
            text: "every",
        },
        {
            text: "problem",
        },
        {
            text: "lies an",
        },
        {
            text: "Oppurtunity",
            className: "text-[#fe8a02] ",
        },
    ];
    return (
        <div className=" h-[30rem] md:h-[50rem] w-full bg-black   bg-grid-white/[0.2]  relative flex items-center justify-center">
            <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20"
                fill="white"
            />
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black  [mask-image:radial-gradient(ellipse_at_center,transparent_0%,black)]"></div>
            <div className="flex flex-col">
                <p className="md:text-9xl text-4xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
                    <span className="text-[#fe8a02]" >Pi</span> Techniques
                </p>
                <div className="flex justify-center items-center text-center ">
                    <TypewriterEffectSmooth words={words} />
                </div>

            </div>
        </div>
    );
}
