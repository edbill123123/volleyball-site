"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";

interface BlogPost {
  id: number;
  title: string;
  content: string;
  date: string;
}

export default function BlogDetailPage() {
  const { id } = useParams();
  const [post, setPost] = useState<BlogPost | null>(null);

  useEffect(() => {
    fetch(`/api/blog/${id}`)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, [id]);

  if (!post) return <p className="text-center">文章載入中...</p>;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
      <p className="text-gray-600">{post.date}</p>
      <hr className="my-4" />
      <p className="text-lg">{post.content}</p>
    </div>
  );
}
