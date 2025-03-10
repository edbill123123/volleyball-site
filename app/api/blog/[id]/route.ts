import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-static";

const blogPosts = [
  { id: "1", title: "排球基本技術", summary: "學習如何提升你的基本技術", content: "這是一篇關於排球技術的詳細文章...", date: "2025-02-11" },
  { id: "2", title: "如何提高你的跳躍能力", summary: "幾個訓練方法幫助你跳得更高", content: "這篇文章介紹了跳躍訓練的技巧...", date: "2025-02-12" }
];


export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const id = (await params).id

  if (!id) {
    return NextResponse.json({ error: "缺少文章 ID" }, { status: 400 });
  }

  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    return NextResponse.json({ error: "文章不存在" }, { status: 404 });
  }

  return NextResponse.json(post);
}
