import { NextRequest, NextResponse } from "next/server";

import { sendDataToGoogleSheet } from "@/utils/sendDataToGoogleSheet";

const SPREADSHEET_ID =
  process.env.NEXT_PUBLIC_CONSULTATION_SPREADSHEET_ID || "";

const RANGE = "Аркуш1!A2:G2";

export async function POST(request: NextRequest) {
  const { name, organization, email, phone, comment, fileUrl } =
    await request.json();
  const date = new Date().toLocaleString();

  if (request.method === "POST") {
    try {
      await sendDataToGoogleSheet(SPREADSHEET_ID, RANGE, [
        name,
        organization,
        email,
        phone,
        comment,
        fileUrl,
        date,
      ]);

      return NextResponse.json({ message: "Data appended successfully" });
    } catch (error) {
      console.error(
        "🚨 Google Sheets API error:",
        JSON.stringify(error, null, 2)
      );
      return NextResponse.json(
        { error: "Failed to append data to the sheet", details: error },
        { status: 500 }
      );
    }
  }
}
