import { Section,Container} from "@/components/craft";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import Balancer from "react-wrap-balancer";
import Place from "@/public/placeholder.webp"


const items = [
  {
  title: "Tacos",
  photo: Place
  },  
  {
  title: "Breakfast",
  photo: Place
  },
  {
  title: "Parrilladas",
  photo: Place
  },
  {
  title: "Lunch",
  photo: Place
  },
  {
  title: "Gorditas",
  photo: Place
  },
  {
  title: "Tortas",
  photo: Place
  },
  {
  title: "Kids",
  photo: Place
  },
  {
  title: "Side Orders",
  photo: Place
  },

]

export default function Menu () {
    return (
      <Section>
        <Container>
        <div className="flex flex-col items-center text-center space-y-0 my-10">
            <h2 className="text-3xl font-bold font-sans mb-5">
                <Balancer>
                    Our Menu
                </Balancer>
            </h2>

            <div className="my-60 grid grid-cols-1 gap-4 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4; w-full">
            {items.map((item) => (
              <Card className="bg-opacity-10 relative backdrop-filter backdrop-blur-lg bg-white flex flex-col w-50 h-40 border-slate-100 border-4 border-opacity-20">
              <CardContent className="justify-center items-center flex flex-col">
                <CardHeader>
                  {item.title}
                </CardHeader>
                <Image 
                  src={item.photo}
                  alt="menu photo"
                  height={100}
                  width={100}
                  />
              </CardContent>         
            </Card>

            ))}
            </div>    
           </div>

        </Container>
      </Section>
    )
  }