import Header from "@/components/Header";
import React from "react";
import Modes from "../../components/Modes";

function First() {
  return (
    <div className="colorful-bg">
      <Header />
      <div className="w-full  h-fit">
        <div className="w-full flex flex-col justify-center">
          <div className="mt-32 mb-12 space-y-8 flex flex-col justify-center items-center text-white">
            <p className="text-xl">Logo</p>
            <h2 className="text-7xl font-extrabold font-sans tracking-wider">Your Personal</h2>
            <h2 className="text-7xl font-extrabold font-sans tracking-wider">AI Helper</h2>
          </div>
          <div className="flex justify-center">
            <Modes></Modes>
          </div>
        </div>
      </div>
    </div>
  );
}
export default First;
