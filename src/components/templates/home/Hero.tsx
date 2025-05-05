import { CarouselData } from "@/api/CarouselData";
import Header from "@/components/organisms/Header";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Hero() {
  return (
    <div className="h-screen bg-[url('/Back.png')] bg-cover bg-center relative  w-full">
      <Carousel>
        <CarouselContent>
          {" "}
          {CarouselData.map((ele, index) => (
            <CarouselItem>
              <CarouselItem key={index}>
                <Header
                  title={ele.title}
                  description={ele.description}
                  image={ele.image}
                />
              </CarouselItem>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
