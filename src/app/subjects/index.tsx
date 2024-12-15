import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import NetworkIcon from "../../assets/icons/NetworkIcon.png"

function Subjects() {
  const data = [
    {
      id: 1,
      subject: "algebra",
      icon: NetworkIcon
    },
    {
      id: 2,
      subject: "science",
      icon: NetworkIcon
    },
    {
      id: 3,
      subject: "literature",
      icon: NetworkIcon
    },
    {
      id: 4,
      subject: "music",
      icon: NetworkIcon
    },
  ];
  return (
    <>
      <div className="bg-custom-primary2">
        <div className="container w-full h-72 ">
          <div className="flex h-full items-center justify-center gap-6">
            <div className="flex flex-col items-center justify-center text-white space-y-2">
                <h2 className="text-4xl font-black tracking-widest">AI Tutor <br />for any<br /> subject</h2>
                <p className="underline text-custom-pink text-lg ">View all</p>
            </div>
            <div>
            <div className="grid grid-cols-4 gap-6 place-items-center">
              {data.map((item) => (
                <div key={item.id}>
                  <Card className="w-[230px] h-[150px] transform transition-all hover:scale-105 hover:shadow-2xl hover:rotate-3d text-white">
                    <CardHeader className="space-y-2 items-center justify-center">
                      <Image src={item.icon} alt="" className="w-16" />
                      <CardTitle className="text-2xl">{item.subject}</CardTitle>
                    </CardHeader>
                  </Card>
                </div>
              ))}
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Subjects;
