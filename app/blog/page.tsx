"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface BlogPost {
  id: string;
  title: string;
  summary: string;
  date: string;
  category: string;
}

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("全部");

  useEffect(() => {
    fetch("/api/blog") // 從 API 獲取文章
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  // 獲取所有的分類
  const categories = ["全部", ...new Set(posts.map((post) => post.category))];

  // 篩選邏輯
  const filteredPosts = posts.filter((post) => {
    return (
      (selectedCategory === "全部" || post.category === selectedCategory) &&
      post.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">部落格</h1>

      {/* 🔍 搜尋框 */}
      <input
        type="text"
        placeholder="搜尋文章..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded mb-4"
      />

      {/* 📌 分類選擇 */}
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded mb-4"
      >
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>

      {/* 📝 文章列表 */}
      {filteredPosts.length === 0 ? (
        <p>沒有找到符合的文章。</p>
      ) : (
        <div className="space-y-4">
          {filteredPosts.map((post) => (
            <div key={post.id} className="bg-white shadow p-4 rounded-lg">
              <h2 className="text-xl font-bold">{post.title}</h2>
              <p className="text-gray-600">{post.date} - {post.category}</p>
              <p className="mt-2">{post.summary}</p>
              <Link href={`/blog/${post.id}`} className="text-blue-500 mt-2 inline-block">閱讀更多</Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
