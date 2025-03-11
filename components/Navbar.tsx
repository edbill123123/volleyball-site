"use client"
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // 用 Lucide-react 圖標

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-xl font-bold">🏐 Volleyball</h1>

        {/* 漢堡選單按鈕 (小螢幕顯示) */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* 選單 (大螢幕顯示) */}
        <div className="hidden md:flex space-x-4">
          <Link href="/">Home</Link>
          <Link href="/matches">Matches</Link>
          <Link href="/players">Players</Link>
          <Link href="/training-tips">Training Tips</Link>
          <Link href="/blog">Blog</Link>
        </div>
      </div>

      {/* 漢堡選單展開 (小螢幕) */}
      <div className={`${isOpen ? "block" : "hidden"} md:hidden mt-2 bg-blue-700 p-2 hover:bg-blue-800`}>
        <Link href="/" className="block py-2 px-4">Home</Link>
        <Link href="/matches" className="block py-2 px-4">Matches</Link>
        <Link href="/players" className="block py-2 px-4">Players</Link>
        <Link href="/training-tips" className="block py-2 px-4">Training Tips</Link>
        <Link href="/blog" className="block py-2 px-4">Blog</Link>
      </div>
    </nav>
  );
}
