import * as React from "react";
import Image from "next/image";

import { Section, Container } from "@/components/craft";
import { Card, CardContent } from "@/components/ui/card";

import Placeholder from "@/public/placeholder.webp";
import Skillet from "@/public/skillet.jpg";
import Caldo from "@/public/caldo.webp";
import Asada from "@/public/asada.jpeg";
import Chori from "@/public/chorizopapas.jpg"
import Taco from "@/public/tacos.webp"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";


const photos = [
  {
    src: Skillet,
  },
  {
    src: Asada,
  },
  {
    src: Chori,
  },
  {
    src: Caldo,
  },
  {
    src: Taco,
  },
];

const FeatureShow = () => {
  return (
    <Section>
      <Container className="flex flex-col items-center gap-12 p-2 md:p-0">
        
        <Carousel className="w-full mb-6">
          <CarouselContent className="-ml-1">
            {photos.map((photo, index) => (
              <CarouselItem
                key={index}
                className="pl-1 md:basis-1/2 lg:basis-1/3"
              >
                <div className="p-1">
                  <Card className="relative overflow-hidden">
                    <CardContent className="not-prose flex aspect-square items-center justify-center">
                      <Image
                        src={photo.src}
                        alt="Presets.com Example Image"
                        width={720}
                        height={480}
                        className="absolute inset-0 h-full w-full object-cover"
                      ></Image>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </Container>
    </Section>
  );
};

export default FeatureShow;
