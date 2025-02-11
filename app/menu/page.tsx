import { Section,Container} from "@/components/craft";
import Balancer from "react-wrap-balancer";

export default function Menu () {
    return (
      <Section>
        <Container>
        <div className="flex flex-col items-center text-center space-y-0 my-8">
            <h2 className="text-3xl font-bold font-sans">
                <Balancer>
                    Our Menu
                </Balancer>
            </h2>
            </div>
        </Container>
      </Section>
    )
  }