"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

// 定義單個提示的介面
interface Tip {
  title: string;
  description: string;
}

// 定義整個分類的介面
interface TrainingTip {
  category: string;
  tips: Tip[];
  image: string;
}

export default function TrainingTipsPage() {
  const [trainingTips, setTrainingTips] = useState<TrainingTip[]>([]);
  const [openCategory, setOpenCategory] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/training-tips")
      .then((res) => res.json())
      .then((data) => setTrainingTips(data))
      .catch((error) => console.error("Error fetching training tips:", error));
  }, [])

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">🏐 排球訓練技巧</h1>
      {trainingTips.map((section, index) => (
        <div key={index} className="mb-6">
          <button
            onClick={() => setOpenCategory(openCategory === section.category ? null : section.category)}
            className="w-full text-left text-xl font-semibold p-3 bg-blue-500 text-white rounded-lg mb-2"
          >
            {section.category} {openCategory === section.category ? "▲" : "▼"}
          </button>
          {openCategory === section.category && (
            <div className="bg-white p-4 rounded-lg shadow-md">
              <Image src={section.image} alt={section.category} width={600} height={300} className="rounded-md mx-auto mb-4" />
              <ul className="list-disc pl-5 space-y-2">
                {section.tips.map((tip, i) => (
                  <li key={i}>
                    <strong>{tip.title}</strong> - {tip.description}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
