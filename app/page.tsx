import MatchCard from "@/components/MatchCard";

interface Match {
  id: number;
  teams: string;
  date: string;
  time: string;
  location: string;
}

const upcomingMatches: Match[] = [
  {
    id: 1,
    teams: "Team A vs Team B",
    date: "2025-03-15",
    time: "18:00",
    location: "Taipei Arena",
  },
  {
    id: 2,
    teams: "Team C vs Team D",
    date: "2025-03-20",
    time: "19:30",
    location: "Kaohsiung Stadium",
  },
  {
    id: 3,
    teams: "Team E vs Team F",
    date: "2025-03-25",
    time: "17:45",
    location: "Taichung Gymnasium",
  },
];

export default function Home() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-6">🏐 即將到來的比賽</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {upcomingMatches.map((match) => (
          <MatchCard key={match.id} match={match} />
        ))}
      </div>
    </div>
  );
}
