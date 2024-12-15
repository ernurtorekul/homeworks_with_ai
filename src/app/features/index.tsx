import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import Image from "next/image";
import ChatIcon from "../../assets/icons/ChatIcon.png";
import NetworkIcon from "../../assets/icons/NetworkIcon.png";
import FastIcon from "../../assets/icons/FastIcon.png";

function Features() {
  const data = [
    {
      id: 1,
      title: "Chat with ai",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Voluptatum, dolor!Lorem,ipsum dolor sit amet consectetur adipisicing elit.",
      icon: ChatIcon,
    },
    {
      id: 2,
      title: "Connect everywhere",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Voluptatum, dolor!Lorem,ipsum dolor sit amet consectetur adipisicing elit.",
      icon: NetworkIcon,
    },
    {
      id: 3,
      title: "Fast responding",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Voluptatum, dolor!Lorem,ipsum dolor sit amet consectetur adipisicing elit.",
      icon: FastIcon,
    },
  ];

  return (
    <>
      <div>
        <div className="w-full h-full h-screen bg-custom-primary ">
          <div className="container">
            <div className="flex flex-col pt-36 text-white">
              <h1 className="text-5xl font-black font-sans tracking-wider mb-12">
                Learn Smarter, Not <br /> Harder with AI
              </h1>
              <p className="mb-12 font-medium text-lg tracking-wide">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum, dolor!Lorem, <br />
                ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
                dolor!
              </p>
            </div>
            <div className="grid grid-cols-3 gap-4 place-items-center">
              {data.map((item) => (
                <div key={item.id}>
                  <Card className="w-[370px] transform transition-all hover:scale-105 hover:shadow-2xl hover:rotate-3d text-white">
                    <CardHeader className="space-y-2">
                      <Image src={item.icon} alt="" className="w-10" />
                      <CardTitle className="text-xl">{item.title}</CardTitle>
                      <CardDescription className="text-md">{item.description}</CardDescription>
                    </CardHeader>
                    <CardFooter className="flex justify-between">
                      <Button
                        variant="pink"
                        size={"md"}
                        className="hover:bg-custom-pink"
                      >
                        Explore Now
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Features;
