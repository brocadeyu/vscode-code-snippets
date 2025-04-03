import { promises as fs } from "fs";
import path from "path";
import { NextResponse } from "next/server";

const dataFilePath = path.join(process.cwd(), "snippets", "javascript.json");

// GET 请求 - 读取菜单数据
export async function GET() {
  return NextResponse.json({
    rate: "100%",
    rate2: "100%",
    rate3: "100%",
  });
  // try {
  //   const fileContents = await fs.readFile(dataFilePath, "utf8");
  //   const data = JSON.parse(fileContents);
  //   return NextResponse.json(data);
  // } catch (e) {
  //   return NextResponse.json(
  //     { error: "Failed to read menu data" },
  //     { status: 500 }
  //   );
  // }
}

// POST 请求 - 更新菜单数据
export async function POST(request: Request) {
  try {
    const newData = await request.json();

    // 验证数据格式（可选）
    if (!newData.menuItems) {
      return NextResponse.json(
        { error: "Invalid data format" },
        { status: 400 }
      );
    }

    // 写入文件
    await fs.writeFile(dataFilePath, JSON.stringify(newData, null, 2), "utf8");

    return NextResponse.json({ success: true });
  } catch (e) {
    return NextResponse.json(
      { error: "Failed to update menu data" },
      { status: 500 }
    );
  }
}
