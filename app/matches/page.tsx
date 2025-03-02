"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface Match {
  id: number;
  teamA: string;
  teamB: string;
  date: string;
  location: string;
  logoA: string;
  logoB: string;
};

export default function MatchesAll() {
  const [matches, setMatches] = useState<Match[]>([]);
  const [page, setPage] = useState(1);
  const itemsPerPage = 2;

  useEffect(() => {
    fetch("/api/matches")
      .then((res) => res.json())
      .then((data) => setMatches(data));
  }, []);

  // 計算目前頁面的比賽資料
  const startIndex = (page - 1) * itemsPerPage;
  const currentMatches = matches.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">所有比賽資訊</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {currentMatches.map((match) => (
          <div key={match.id} className="border rounded-lg p-4 shadow-lg bg-white">
            <div className="flex items-center justify-between mb-2">
              <Image src={match.logoA} alt={match.teamA} width={50} height={50} />
              <span className="text-xl font-semibold">VS</span>
              <Image src={match.logoB} alt={match.teamB} width={50} height={50} />
            </div>
            <p className="text-lg font-bold">{match.teamA} vs {match.teamB}</p>
            <p className="text-gray-600">📅 日期: {match.date}</p>
            <p className="text-gray-600">📍 地點: {match.location}</p>
          </div>
        ))}
      </div>

      {/* 分頁按鈕 */}
      <div className="mt-6 flex justify-center gap-4">
        <button 
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          className="px-4 py-2 bg-gray-300 rounded-lg disabled:opacity-50"
          disabled={page === 1}
        >
          上一頁
        </button>

        <button 
          onClick={() => setPage((prev) => (prev * itemsPerPage < matches.length ? prev + 1 : prev))}
          className="px-4 py-2 bg-gray-300 rounded-lg disabled:opacity-50"
          disabled={page * itemsPerPage >= matches.length}
        >
          下一頁
        </button>
      </div>
    </div>
  );
}
