import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import React from "react";
import { AvatarImage } from "@/components/ui/avatar";
import { Avatar } from "@radix-ui/react-avatar";

function Feedbacks() {
  const data = [
    {
      id: 1,
      name: "John Doe",
      profession: "Teacher",
      title: "Wonderful app",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, fugit. Quam delectus, atque molestias necessitatibus voluptatibus eligendi optio?",
    },
    {
      id: 2,
      name: "John Doe",
      profession: "Teacher",
      title: "Wonderful app",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, fugit. Quam delectus, atque molestias necessitatibus voluptatibus eligendi optio?",
    },
    {
      id: 3,
      name: "John Doe",
      profession: "Teacher",
      title: "Wonderful app",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, fugit. Quam delectus, atque molestias necessitatibus voluptatibus eligendi optio?",
    },
  ];
  return (
    <div className="bg-custom-primary">
      <div className="container ">
        <div className="w-full h-fit pt-36 pb-48">
          <div className="flex flex-col justify-center items-center text-white space-y-6">
            <h1 className="text-5xl font-extrabold tracking-wider ">What students and educators say</h1>
            <p className="text-xl font-bold  text-zinc-300">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-4 place-items-center mt-12">
            {data.map((item) => (
              <div key={item.id}>
                <Card className="w-[400px] transform transition-all hover:scale-105 hover:shadow-2xl hover:rotate-3d text-white">
                  <CardHeader className="space-y-2">
                    <div className="flex gap-4">
                      <div className="w-16 rounded-full overflow-hidden">
                        <Avatar >
                          <AvatarImage
                            src="https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/8f706226-0b67-41ea-b84e-a7add4ea0658/fadf9214-bad0-41cb-8318-272d81dfe466.png"
                            alt="@shadcn"
                          />
                        </Avatar>
                      </div>
                      <div>
                        <CardTitle className="text-2xl">{item.name}</CardTitle>
                        <CardTitle className="text-md text-custom-pink">
                          {item.profession}
                        </CardTitle>
                      </div>
                    </div>

                    <CardDescription className="text-2xl font-extrabold tracking-wide text-white">
                      {item.title}
                    </CardDescription>
                    <CardDescription className="text-lg">
                      {item.content}
                    </CardDescription>
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

export default Feedbacks;
