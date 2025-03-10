import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-static";

const matches = [
  { id: 1, teamA: "Team A", teamB: "Team B", date: "2025-02-15", location: "Stadium 1", logoA: "/images/teamA.png", logoB: "/images/teamB.png" },
  { id: 2, teamA: "Team C", teamB: "Team D", date: "2025-02-20", location: "Stadium 2", logoA: "/images/teamC.png", logoB: "/images/teamD.png" },
  { id: 3, teamA: "Team B", teamB: "Team D", date: "2025-03-05", location: "Stadium 3", logoA: "/images/teamB.png", logoB: "/images/teamD.png" },
  { id: 4, teamA: "Team A", teamB: "Team C", date: "2025-03-10", location: "Stadium 4", logoA: "/images/teamA.png", logoB: "/images/teamC.png" },
];
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function GET(_req: NextRequest) {
  return NextResponse.json(matches);
}
