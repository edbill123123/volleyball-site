import { NextRequest, NextResponse } from "next/server";
const players = [
  { id: 1, name: "王大明", team: "Team A", position: "攻擊手", image: "/images/player1.png" },
  { id: 2, name: "李雪", team: "Team B", position: "自由球員", image: "/images/player2.png" },
  { id: 3, name: "張志強", team: "Team C", position: "舉球手", image: "/images/player3.png" },
  { id: 4, name: "陳美麗", team: "Team D", position: "欄中", image: "/images/player4.png" },
];

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function GET(_req: NextRequest) {
  return NextResponse.json(players);
}
