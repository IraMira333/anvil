import { NextRequest, NextResponse } from "next/server";
import { Readable } from "stream";

import { uploadToGooglDrive } from "@/utils/upload-to-drive";

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const file = formData.get("file") as File;

  if (!file) {
    return NextResponse.json(
      { success: false, message: "Файл не надано" },
      { status: 400 }
    );
  }

  const buffer = Buffer.from(await file.arrayBuffer());

  const response = await uploadToGooglDrive({
    name: file.name,
    mimeType: file.type,
    stream: () => Readable.from(buffer),
  });

  return NextResponse.json(response);
}
