import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-static";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function GET(_req: NextRequest) {
  return NextResponse.json([
    {
      category: "基礎技巧",
      tips: [
        { title: "正確的發球姿勢", description: "確保站姿穩定，拇指朝上，手腕靈活控制球的方向。" },
        { title: "如何提升接球能力", description: "雙臂平行，身體微蹲，專注於來球的路徑。" },
      ],
      image: "/images/training1.png",
    },
    {
      category: "進階訓練",
      tips: [
        { title: "快速反應訓練", description: "使用障礙物訓練變速移動，提高比賽中的反應速度。" },
        { title: "強化扣球爆發力", description: "透過重量訓練和彈跳練習提升攻擊力。" },
      ],
      image: "/images/training2.png",
    },
    {
      category: "體能訓練",
      tips: [
        { title: "提升耐力與心肺能力", description: "進行間歇跑步訓練，提高整場比賽的耐力。" },
        { title: "核心肌群強化", description: "透過平板支撐和深蹲訓練提高身體穩定性。" },
      ],
      image: "/images/training3.png",
    },
  ]);
}
