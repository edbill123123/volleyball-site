import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 text-white">
      <div className="container mx-auto flex justify-between">
        <h1 className="text-xl font-bold">🏐 Volleyball</h1>
        <div className="flex space-x-4">
          <Link href="/">Home</Link>
          <Link href="/matches">Matches</Link>
          <Link href="/players">Players</Link>
          <Link href="/training-tips">Training Tips</Link>
          <Link href="/blog">Blog</Link>
        </div>
      </div>
    </nav>
  );
}
