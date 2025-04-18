import { PartnersData } from "@/api/PartnersData";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function PartnersSections() {
  return (
    <div className="PartnersSections min-h-[50vh] bg-[url('/Vector.jpg')] bg-cover bg-center w-full flex flex-col items-center py-16">
      <div className="partnersSections-title mb-8">
        <p className="text-4xl text-center ">Our Partners</p>
      </div>

      <div className="partnersSections-slider container">
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
      </div>
    </div>
  );
}
