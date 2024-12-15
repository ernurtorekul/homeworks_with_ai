'use client'


import React, { useState } from "react";


const SyllabusInput: React.FC = () => {
  const [topics, setTopics] = useState<string>("");
  const [result, setResult] = useState<string[] | string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    const cleanTopics = topics.split("\n").filter((topic) => topic.trim() !== "");
  
    try {
      const response = await fetch("http://localhost:3000/api/generateTasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ topics: cleanTopics }),
      });
  
      console.log("Response status:", response.status);
  
      if (!response.ok) {
        const errorText = await response.text();
        console.error("Error response body:", errorText);
        throw new Error(`API Error: ${errorText}`);
      }
  
      const data = await response.json();
      console.log("API response data:", data);
  
      setResult(data.tasks || "no task");
    } catch (error) {
      console.error("err handleSubmit:", error);
      setResult("err generating tasks");
    }  
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-4 flex ">
        <textarea
          placeholder="Enter hw"
          value={topics}
          onChange={(e) => setTopics(e.target.value)}
          rows={10}
          className="w-full p-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>
        <button type="submit" className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300">
          generate
        </button>
      </form>

      {result && (
        <div className="mt-8 p-4 bg-white rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4">Generated hw:</h3>
          <pre className="whitespace-pre-wrap">{JSON.stringify(result, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default SyllabusInput;
