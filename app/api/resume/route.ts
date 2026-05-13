import { NextResponse } from "next/server";
import { readFile } from "fs/promises";
import path from "path";

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), "public", "resume.pdf");
    const fileBuffer = await readFile(filePath);

    return new NextResponse(fileBuffer, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'attachment; filename="Lakshay_Saini_Resume.pdf"',
        "Content-Length": fileBuffer.length.toString(),
        "Cache-Control": "no-cache",
      },
    });
  } catch {
    return NextResponse.json({ error: "Resume not found" }, { status: 404 });
  }
}
