"use client";
import React from "react";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import UploadFile from "@/components/UploadFile";

import Accordion from "@/components/ui/accordion";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

import { useState } from "react";

function TeacherMode() {
  const [topics, setTopics] = useState<string[]>([]);
  const [result, setResult] = useState<string>("");

  // Function to handle the API call
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const cleanedTopics = topics
    .map((t) => t.trim())  // Remove leading/trailing spaces
    .filter((t) => t !== ""); 

  if (cleanedTopics.length === 0) {
    setResult("enter valid data");
    return;
  }

  try {
    const response = await fetch("/api/generateTasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ topics: cleanedTopics }),
    });

    if (response.ok) {
      const data = await response.json();
      setResult(data.tasks?.join("\n") || "No tasks");
    } else {
      setResult("Error generating tasks");
    }
  } catch (error) {
    setResult("Failed to connect to the server");
  }
};

  return (
    <div className="bg-custom-primary2 w-full h-fit">
      <Header />
      <div className="container h-full">
        <div className="h-full w-full mt-32 flex flex-col justify-center items-center">
          <div className="p-6 mb-44 w-fit bg-gray-900/20 rounded-xl space-y-4">
            <div className="teacher space-y-4">
              <h1 className="text-3xl text-white font-bold">Question</h1>
              <hr />
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
                  <Textarea placeholder="Type your message here." onChange={(e) => setTopics(e.target.value.split("\n").map((t) => t.trim()))}/>
                </div>

                <div className="grid w-full bg-custom-primary text-white p-4 rounded-xl">
                  <Accordion
                    title={"Upload file"}
                    description={<UploadFile />}
                  />
                </div>

                <div className="grid w-full bg-custom-primary text-white p-4 rounded-xl">
                  <Accordion
                    title={"Advanced Options"}
                    description={
                      <div>
                        <div className="flex items-center space-x-2 mt-3 mb-1">
                          <Switch id="explanation-area" />
                          <Label htmlFor="explanation-area">Explain</Label>
                        </div>
                        <p className="text-gray-300 text-sm">
                          Explain why the answer is correct
                        </p>
                        <div className="flex items-center space-x-2 mt-4 mb-1">
                          <Switch id="steps-area" />
                          <Label htmlFor="steps-area">Steps</Label>
                        </div>
                        <p className="text-gray-300 text-sm">
                          Show the work done to get the answer
                        </p>
                      </div>
                    }
                  />
                </div>

                <Button size={"lg"} variant={"pink"} onClick={handleSubmit}>
                  Send message
                </Button>
              </div>
            </div>

            <div className="teacher space-y-4 ">
              <h1 className="text-3xl text-white font-bold">Result</h1>
              <hr />
              <div className="flex flex-col bg-custom-primary text-white p-4 rounded-xl space-y-2">
                <div className="flex justify-between">
                  <p>Answer</p>
                  <Button variant={"pink"} size={"sm"}>
                    copy
                  </Button>
                </div>
                <Textarea
                  placeholder="your result"
                  value={result}
                  className="h-36"
                  disabled
                />
              </div>
              <div className="flex flex-col bg-custom-primary text-white p-4 rounded-xl w-full space-y-2">
                <div className="flex justify-between">
                  <p>Explanation</p>
                  <Button variant={"pink"} size={"sm"}>
                    copy
                  </Button>
                </div>
                <Textarea placeholder="Type your message here." disabled />
              </div>
              <div className="flex flex-col items-center space-y-4">
                <div className="grid w-full bg-custom-primary text-white p-4 rounded-xl space-y-2 ">
                  <div className="flex justify-between">
                    <p>Steps</p>
                    <Button variant={"pink"} size={"sm"}>
                      copy
                    </Button>
                  </div>
                  <Textarea placeholder="Type your message here." disabled />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeacherMode;
