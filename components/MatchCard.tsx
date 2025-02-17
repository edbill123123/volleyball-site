interface Match {
  id: number;
  teams: string;
  date: string;
  time: string;
  location: string;
}

export default function MatchCard({ match }: { match: Match }) {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6 text-center">
      <h2 className="text-xl font-semibold">{match.teams}</h2>
      <p className="text-gray-600">{match.date} | {match.time}</p>
      <p className="text-blue-500 font-medium">{match.location}</p>
    </div>
  );
}
