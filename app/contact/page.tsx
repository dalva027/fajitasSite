import Map from "@/components/contact/map";
import { Section,Container} from "@/components/craft";
import Balancer from "react-wrap-balancer";
import GoogleMapComponent from "@/components/contact/map";

export default function Contact () {

  const mapCenter = {lat:29.35392,lng:-98.11122}

    return (
      <Section>
        <Container>
        <div className="flex flex-col items-center text-center space-y-0 mt-10">
            <h2 className="text-3xl font-bold font-sans">
                <Balancer>                
                    Find Us
                </Balancer>
            </h2>
            
            </div>
        </Container>
        <div className="flex flex-col items-center justify-center md:flex-row lg:px-20">
          <div className="p-2 text-xl font-fam">
            <p>Address -</p>
            <p>12880 U.S. Hwy 87 W, La Vernia, TX</p>
            <br />
            <p>Hours -</p>
            <p>MON - SUN</p>
            <p>6:00 A.M. - 3:00 P.M.</p>
            <br />
            <p>Phone Number -</p>  
            <p>(830) 581-7008</p>     
          </div>
          
          <GoogleMapComponent center={mapCenter} zoom={15}/>
          
          
          
        </div>
      </Section>
    )
  }