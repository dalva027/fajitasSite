import { Section,Container} from "@/components/craft";
import Balancer from "react-wrap-balancer";

export default function Contact () {
    return (
      <Section>
        <Container>
        <div className="flex flex-col items-center text-center space-y-0 my-10">
            <h2 className="text-3xl font-bold font-sans">
                <Balancer>
                    Contact Us
                </Balancer>
            </h2>
            </div>
        </Container>
      </Section>
    )
  }