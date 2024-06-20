"use client";
import React from "react";
import { PinContainer } from "./ui/3d-pin";
import Image from "next/image"; 
import AboutSection from "./AboutSection";




export function TeamGrid() {

    const data = [
        {
            name: "Shyamal Swali",
            img: "/shyamal.png",
            title: 'Director'
        },
        {
            name: "Hiten Damania",
            img: "/hiten.png",
            title: 'Head of Development'
        },
        {
            name: "Tarun Kapadia",
            img: "/tarun.png",
            title: 'Senior Project Manager'
        },
        {
            name: "Hemang Choksi",
            img: "/hemang.png",
            title: 'Project Manager/ Analyst'
        },
        {
            name: "Hani Damania",
            img: "/hani.png",
            title: 'Project Manager/ Analyst'
        },
        {
            name: "Sagar Shirke",
            img: "/sagar.png",
            title: 'Project Manager'
        },
        {
            name: "Kliston Fernandes",
            img: "/kliston.png",
            title: 'Project Manager'
        },
        {
            name: "Firdaus Minocher",
            img: "/firdaus.png",
            title: "Business Analyst / Project Manager"
        },

    ]

    return (
        <>
            <div className="flex flex-col justify-center items-center ">


                <div className="flex justify-center  w-full pt-40" >
                    <h1 className="text-white text-7xl md:text-9xl font-bold ">Our Team</h1>
                </div>

                <div className="h-[auto] w-full  items-center justify-center grid  grid-cols-1 md:grid-cols-4 container  pt-20  overflow-hidden  ">

                    {data.map((item, index) =>
                        <div className="my-10 " >
                            <PinContainer
                                title={item.title}
                                href="https://twitter.com/mannupaaji"

                            >
                                <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
                                    <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100 text-center md:text-left">
                                        {item.name}
                                    </h3>
                                    <div className="text-base !m-0 !p-0 font-normal text-center md:text-left ">
                                        <span className="text-slate-500 text-center ">
                                            {item.title}
                                        </span>
                                    </div>
                                    <div className="flex justify-center items-center mt-5">
                                        <Image className="object-cover h-auto w-full md:w-[300px]  " src={item.img} height={100} width={100} alt="img" />
                                    </div>
                                </div>

                            </PinContainer>
                        </div>
                    )}

                </div>
     

            </div>
        </>
    );
}
