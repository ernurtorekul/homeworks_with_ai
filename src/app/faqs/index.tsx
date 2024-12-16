import Accordion from "@/components/ui/accordion";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import React from "react";

function Faqs() {
  const data = [
    {
      id: 1,
      question: "What is AI-powered summaries?",
      answer:
        "AI-powered summaries are a result of advanced machine learning algorithms that analyze large amounts of text and generate concise summaries of information. They help you understand the key points of a document or webpage quickly, making it easier to focus on the important information.",
    },
    {
      id: 2,
      question: "What is AI-powered summaries?",
      answer:
        "AI-powered summaries are a result of advanced machine learning algorithms that analyze large amounts of text and generate concise summaries of information. They help you understand the key points of a document or webpage quickly, making it easier to focus on the important information.",
    },
    {
      id: 3,
      question: "What is AI-powered summaries?",
      answer:
        "AI-powered summaries are a result of advanced machine learning algorithms that analyze large amounts of text and generate concise summaries of information. They help you understand the key points of a document or webpage quickly, making it easier to focus on the important information.",
    },
    {
      id: 4,
      question: "What is AI-powered summaries?",
      answer:
        "AI-powered summaries are a result of advanced machine learning algorithms that analyze large amounts of text and generate concise summaries of information. They help you understand the key points of a document or webpage quickly, making it easier to focus on the important information.",
    },
  ];
  return (
    <div className="bg-custom-primary2 h-fit w-full">
      <div className="container">
        <div className=" pt-36 pb-36 text-white">
          <div className="flex justify-center">
            <h1 className="text-5xl font-black font-sans tracking-wider mb-12">
              FAQs
            </h1>
          </div>
        <div className="">
          {data.map((item) => (
            <div
              key={item.id}
              className="grid w-full bg-custom-primary text-2xl text-white p-4 rounded-xl my-2 border-b border-custom-pink"
            >
              <Accordion title={item.question} description={item.answer} />
            </div>
          ))}
        </div>
      </div>
      </div>

    </div>
  );
}

export default Faqs;
