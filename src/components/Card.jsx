"use client";
import Image from "next/image";
import { useState } from "react";

export default function SelectableCard({ name, content, profile }) {
  const [selected, setSelected] = useState(false);

  return (
    <div
      className={`p-6 rounded-md shadow-md transition-all cursor-pointer border-1 mb-10 ${
        selected ? "border-blue-500 bg-white" : "border-gray-300 bg-white"
      }`}
      onClick={() => setSelected(!selected)}
    >
      <div className="flex items-center justify-between">
        <div>
          <Image
            className="h-48 object-cover"
            src={profile}
            alt="profile"
            width={250}
            height={250}
          />
        </div>
        <div className="ml-6">
          <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
          <p className="text-gray-600 mt-2 leading-none">{content}</p>
        </div>
      </div>
    </div>
  );
}
