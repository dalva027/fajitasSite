import Image from "next/image";
import Link from "next/link";
import Balancer from "react-wrap-balancer";
import { ArrowRight } from "lucide-react";
import FeatureNine from "./feature";

// UI Components
import { Button } from "@/components/ui/button";

// Custom Components
import { Section, Container } from "@/components/craft";

// Assets
import Placeholder from "@/public/placeholder.webp";
import Sign from "@/public/sign.png";

export default function Hero() {
  return (
    <Section>
      <Container>
        <div className="flex flex-col items-center text-center space-y-0">
           <div className="my-8 h-73 w-full h-full">
            <Image
              className="not-prose h-full w-full object-cover object-bottom"
              src={Sign}
              width={1920}
              height={1080}
              alt="hero image"
              placeholder="blur"
            />
           </div>  
          <h3 className="text-3xl font-bold font-fam">
            <Balancer>
              Proudly serving La Vernia and all surrounding communities.
            </Balancer>
          </h3>
          {/* <h3 className="text-muted-foreground">
            <Balancer>
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Balancer>
          </h3> */}
          <div className="w-full ">
            <FeatureNine />
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
