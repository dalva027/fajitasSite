import Image from "next/image";
import Link from "next/link";
import Balancer from "react-wrap-balancer";
import { ArrowRight } from "lucide-react";
import FeatureShow from "./feature";

// UI Components
import { Button } from "@/components/ui/button";

// Custom Components
import { Section, Container } from "@/components/craft";

// Assets
import Sign from "@/public/sign.png";

export default function Hero() {
  return (
    <Section>
      <Container>
        <div className="flex flex-col items-center text-center space-y-0 ">
           <div className="my-2 h-73 w-full h-full">
            <Image
              className="not-prose h-full w-full object-cover object-bottom"
              src={Sign}
              width={1920}
              height={1080}
              alt="hero image"
              placeholder="blur"
            />
           </div>  
          <h3 className="text-4xl font-bold font-fam lg:text-7xl">
            <Balancer>
              Proudly serving La Vernia and all surrounding communities.
            </Balancer>
          </h3>
        
          <div className="w-full">
            <FeatureShow />
          </div>
          
          <Button
            asChild
            className="not-prose mb-6 flex w-fit"
            size="sm"
            variant="outline"
          >
            <Link href="/menu">
              See Menu <ArrowRight className="ml-2 w-4" />
            </Link>
          </Button>
          
        </div>
      </Container>
    </Section>
  );
}
