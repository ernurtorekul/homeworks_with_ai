import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import Image from "next/image";
import FastIcon from "../../assets/icons/FastIcon.png";

function Price() {
  const data = [
    {
      id: 1,
      title: "Starter",
      model: "GPT 3.5",
      price: "14",
    },
    {
      id: 2,
      title: "Plus",
      model: "GPT 4.5",
      price: "14",
    },
    {
      id: 3,
      title: "Premium",
      model: "GPT 5.5",
      price: "14",
    },
  ];
  return (
    <div className="bg-custom-primary2">
      <div className="container">
        <div className="w-full h-screen pt-36 pb-48">
          <div className="flex flex-col justify-center items-center text-white space-y-6">
            <h1 className="text-5xl font-extrabold tracking-wider ">
              Plans that best suit your needs
            </h1>
            <p className="text-xl font-bold  text-zinc-300">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-4 place-items-center mt-12">
            {data.map((item) => (
              <div key={item.id}>
                <Card className="w-[400px] h-fit transform transition-all hover:scale-105 hover:shadow-2xl hover:rotate-3d text-white">
                  <CardHeader className="space-y-2 h-full">
                    <div className="space-y-2 ">
                      <CardTitle className="text-3xl">{item.title}</CardTitle>
                      <CardTitle className="text-md text-zinc-300">
                        {item.model}
                      </CardTitle>
                      <div className="flex gap-2 items-center ">
                        <CardTitle className="text-4xl font-extrabold text-custom-pink">
                          ${item.price}
                        </CardTitle>
                        <CardDescription className="text-lg">
                          /month
                        </CardDescription>
                      </div>
                      <div className="h-full">
                        <Button className="w-full mb-4 mt-4">Sign up now</Button>
                      </div>
                      <CardDescription className="text-lg tracking-wide space-y-4 text-zinc-300">
                        <div className="flex gap-2 items-center">
                          <Image src={FastIcon} alt="" className="w-6" />
                          <p><span className="font-extrabold text-white">Unlimited</span> Tokens</p>
                        </div>
                        <div className="flex gap-2 items-center">
                          <Image src={FastIcon} alt="" className="w-6" />
                          <p><span className="font-extrabold text-white">30+</span> Roles</p>
                        </div>
                        <div className="flex gap-2 items-center">
                          <Image src={FastIcon} alt="" className="w-6" />
                          <p><span className="font-extrabold text-white">50+</span> Languages</p>
                        </div>
                        <div className="flex gap-2 items-center">
                          <Image src={FastIcon} alt="" className="w-6" />
                          <p>Easy to use chat</p>
                        </div>
                        <div className="flex gap-2 items-center">
                          <Image src={FastIcon} alt="" className="w-6" />
                          <p>Live Support</p>
                        </div>
                      </CardDescription>
                    </div>
                  </CardHeader>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Price;
