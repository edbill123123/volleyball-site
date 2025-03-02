"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

interface Player {
  id: number,
  name: string,
  team: string,
  position: string,
  image: string
};

export default function PlayersPage() {

  const [players, setPlayers] = useState<Player[]>([]);

  useEffect(() => {
    fetch("/api/players")
      .then((res) => res.json())
      .then((data) => { setPlayers(data) });
  }, [])

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2x1 font-bold mb-4">球員介紹</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {players.map((player) => (
          <Link key={player.id} href={`/players/${player.id}`}>
            <div key={player.id} className="p-4 bg-white shadow-md rounded-lg">
              <Image src={player.image} alt={player.name} width={100} height={100}  className="rounded-full mx-auto" />
              <h2 className="text-lg font-semibold text-center mt-2">{player.name}</h2>
              <p className="text-gray-600 text-center">{player.team}</p>
              <p className="text-gray-600 text-center">{player.position}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}