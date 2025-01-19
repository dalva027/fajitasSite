import { Container, Main, Section} from "@/components/craft";
import Hero from "@/components/home/hero";
import Image from "next/image";

export default function Home() {
  return (
    <Main>
      <Section>
        <Container>
          <Hero/>
          
        </Container>
        </Section>

    </Main>
  );
}
