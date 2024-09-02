import { API_URL } from "@/lib/directus";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export default function BannerCarousel({ banners }: { banners: any[] }) {
  return (
    <Carousel
      className=""
      opts={{
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 10000,
        }),
      ]}
    >
      <CarouselContent className="aspect-[21/9]">
        {banners.map((photo) => (
          <CarouselItem className="basis-4/5 w-full" key={photo.id}>
            <img
              src={`${API_URL}/assets/${photo.id}?format=webp&width=800`}
              alt={"carousel of events"}
              className="w-full h-full object-cover rounded-lg"
              width={500}
              height={500}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
