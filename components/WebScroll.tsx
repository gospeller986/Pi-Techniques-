import React from "react";
import { MacbookScroll } from "./ui/macbook-scroll";
import Link from "next/link";
 
export function WebScroll({text} : {text :  string}) {
  return (
    <div className="overflow-hidden bg-black w-full ">
      <MacbookScroll
        title={
          <span className="text-white text-5xl" >
            {text} 
          </span>
        }
        badge={
              <div className=" bg-slate-600 h-8 w-8 rounded-full justify-center items-center  flex " >
                    <h1 className="text-orange-500 font-bold text-center mb-1">pi</h1>
              </div>
        }
        src={`/linear.png`}
        showGradient={false}
      />
    </div>
  );
}
// Peerlist logo
