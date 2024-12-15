"use client";
import { useState } from "react";

const Accordion = ({
  title,
  description,
}: {
  title: string;
  description: string | JSX.Element | null;
}) => {
  const [show, setShow] = useState(false);
  return (
    <div
      className={` ${
        show ? "bg-custom-primary space-y-4" : "bg-secondary"
      } rounded-3xl transition duration-300`}
    >
      <div
        onClick={() => {
          setShow((prev) => !prev);
        }}
        className="flex justify-between items-center w-full cursor-pointer "
      >
        <div className={"font-medium"}>{title}</div>
        <svg
          className="fill-white shrink-0 ml-8"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              show && "!rotate-180"
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              show && "!rotate-180"
            }`}
          />
        </svg>
      </div>
      <div
        className={`grid overflow-hidden  transition-all duration-300 ease-in-out text-slate-600 text-sm sm:text-base md:text-lg ${
          show ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden text-zinc-300">{description}</div>
      </div>
    </div>
  );
};

export default Accordion;
