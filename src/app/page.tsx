import Image from "next/image";
import SyllabusInput from "../../components/SyllabusInput";

export default function Home() {
  return (
    <div className="p-12">
    <div className="p-12 max-w-3xl mx-auto bg-gray-50 rounded-xl shadow-lg">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">hw Generator</h1>
      <p className="text-lg text-gray-600 mb-8">Enter hw:</p>
      <SyllabusInput />
    </div>
  </div>
  );
}
