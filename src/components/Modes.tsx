"use client";
import React, { useState } from "react";

import {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectScrollDownButton,
  SelectContent,
} from "../components/ui/select";
import { SelectItem } from "@radix-ui/react-select";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import Link from "next/link";

function Modes() {
  const [isHidden, setIsHidden] = useState<string | null>(null);

  const hideDiv = (id: string) => {
    setIsHidden((arg) => (arg === id ? null : id));
  };
  return (
    <div>
      <div className="p-6 mb-44 w-fit bg-pink-200/20 rounded-xl">
        {!isHidden && (
          <div className="space-x-8 mb-4 flex justify-center items-center">
            <Button size={"lg"} onClick={() => hideDiv("student")}>
              Student
            </Button>
            <Button size={"lg"} onClick={() => hideDiv("teacher")}>
              Teacher
            </Button>
          </div>
        )}
        {isHidden === "student" && (
          <div className="student space-y-4" id="student">
            <div className="flex space-x-4">
              <div className="flex flex-col bg-custom-primary text-white p-4 rounded-xl w-full space-y-2">
                <p>Subject</p>
                <Select>
                  <SelectTrigger className="w-[400px]">
                    <SelectValue placeholder="Any" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Algebra</SelectItem>
                    <SelectItem value="dark">Chemistry</SelectItem>
                    <SelectItem value="system">Science</SelectItem>
                    <SelectItem value="system">Literature</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col bg-custom-primary text-white p-4 rounded-xl w-full space-y-2">
                <p>Level</p>
                <Select>
                  <SelectTrigger className="w-[400px]">
                    <SelectValue placeholder="Any" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">School</SelectItem>
                    <SelectItem value="dark">University</SelectItem>
                    <SelectItem value="system">Masters</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <div className="grid w-full bg-custom-primary text-white p-4 rounded-xl space-y-2 ">
                <p>Your homework question</p>
                <Textarea placeholder="Type your message here." />
              </div>
              <Link href="/studentmodepage">
                <Button size={"lg"} variant={"pink"}>
                  Send message
                </Button>
              </Link>
            </div>
          </div>
        )}

        {isHidden === "teacher" && (
          <div className="teacher space-y-4">
            <div className="flex space-x-4">
              <div className="flex flex-col bg-custom-primary text-white p-4 rounded-xl w-full space-y-2">
                <p>Subject</p>
                <Select>
                  <SelectTrigger className="w-[400px]">
                    <SelectValue placeholder="Any" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Algebra</SelectItem>
                    <SelectItem value="dark">Chemistry</SelectItem>
                    <SelectItem value="system">Science</SelectItem>
                    <SelectItem value="system">Literature</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col bg-custom-primary text-white p-4 rounded-xl w-full space-y-2">
                <p>Task</p>
                <Select>
                  <SelectTrigger className="w-[400px]">
                    <SelectValue placeholder="Any" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Create tasks</SelectItem>
                    <SelectItem value="dark">Lesson plan</SelectItem>
                    <SelectItem value="system">
                      Prepare a presentation
                    </SelectItem>
                    <SelectItem value="system">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <div className="grid w-full bg-custom-primary text-white p-4 rounded-xl space-y-2 ">
                <p>Your task</p>
                <Textarea placeholder="Type your message here." />
              </div>
              <Link href="/teachermodepage">
                <Button size={"lg"} variant={"pink"}>
                  Send message
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Modes;
