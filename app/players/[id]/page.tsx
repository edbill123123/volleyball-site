"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";

interface Player {
  id: number;
  name: string;
  team: string;
  position: string;
  image: string;
};

export default function PlayerDetailPage() {
  const { id } = useParams();
  const [player, setPlayer] = useState<Player | null>(null);

  useEffect(() => {
    fetch(`/api/players`)
      .then((res) => res.json())
      .then((data: Player[]) => {
        const foundPlayer = data.find((p) => p.id === parseInt(id as string));
        setPlayer(foundPlayer || null);
      });
  }, [id]);

  if (!player) return <p className="text-center">球員資料載入中...</p>;

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{player.name} 詳細資訊</h1>
      <div className="bg-white shadow-md p-4 rounded-lg">
        <Image src={player.image} alt={player.name} width={150} height={150}  className="rounded-full mx-auto" />
        <h2 className="text-lg font-semibold text-center mt-2">{player.name}</h2>
        <p className="text-gray-600 text-center">{player.team}</p>
        <p className="text-gray-600 text-center">{player.position}</p>
        <hr className="my-4" />
        <p className="text-gray-700">🏐 <b>得分：</b> {Math.floor(Math.random() * 20)}</p>
        <p className="text-gray-700">🛑 <b>攔網：</b> {Math.floor(Math.random() * 5)}</p>
        <p className="text-gray-700">✨ <b>經歷：</b> 代表隊成員，參加過多次國際賽事。</p>
      </div>
    </div>
  );
}
