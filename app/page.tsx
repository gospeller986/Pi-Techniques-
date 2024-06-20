import { GlobeComponent } from "@/components/GlobeComponent";
import { GridBackground } from "@/components/GridBackround";
import { InfiniteMovingCardsComponent } from "@/components/InfiniteMovingCards";
import { NewsLetterComponent } from "@/components/NewsLetterComponent";
import { ServiceCardGrid } from "@/components/ServiceCardGrid";
import Image from "next/image";

export default function Home() {
  return (
     <>
       <div>
            <GridBackground/>
            <div>
               <GlobeComponent/>
            </div>
            <ServiceCardGrid/>
            <InfiniteMovingCardsComponent/>
       </div>
     </>
  );
}
