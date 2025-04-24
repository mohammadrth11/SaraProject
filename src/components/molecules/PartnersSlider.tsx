import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { PartnersData } from "@/api/PartnersData";

export default function PartnersSlider() {
  return (
    <>
      <Carousel className="w-full">
        <CarouselContent className="flex">
          {PartnersData?.map((ele) => (
            <CarouselItem className="basis-1/2 sm:basis-1/3 md:basis-1/4 flex justify-between items-center ">
              <img src={ele.Src} className="w-50 h-auto" />
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="border-none cursor-pointer" />
        <CarouselNext className="border-none cursor-pointer" />
      </Carousel>
    </>
  );
}
