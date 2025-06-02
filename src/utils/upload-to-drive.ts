"use server"; // if you are using reactjs remove this line this is for nextjs only
import { google } from "googleapis";
import { Readable } from "stream";
interface UploadedFile {
  name: string;
  stream: () => Readable;
  mimeType?: string;
}
const holder = process.env.HOLDER_ID;

export const uploadToGooglDrive = async (file: UploadedFile) => {
  const auth = new google.auth.GoogleAuth({
    credentials: {
      type: process.env.GOOGLE_TYPE,
      project_id: process.env.GOOGLE_PROJECT_ID,
      private_key: process.env.GOOGLE_SERVICE_PRIVATE_KEY?.replace(
        /\\n/g,
        "\n"
      ),
      client_email: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_EMAIL,
      client_id: process.env.GOOGLE_CLIENT_ID,
    },
    scopes: ["https://www.googleapis.com/auth/drive"],
  });
  const fileBuffer = file.stream();
  const fileMetadata = {
    name: file.name,
    type: file.mimeType,
    parents: [`${holder}`],
  };
  const driveService = google.drive({ version: "v3", auth });

  const response = await driveService.files.create({
    requestBody: fileMetadata,
    media: {
      body: Readable.from(fileBuffer),
    },
    fields: "id, webViewLink",
  });
  const fileId = response.data.id;
  if (!fileId) {
    throw new Error("Не вдалося отримати fileId після створення файлу.");
  }

  // Add permissions
  await driveService.permissions.create({
    fileId,
    requestBody: {
      role: "reader",
      type: "anyone",
    },
  });
  await driveService.permissions.create({
    fileId,
    requestBody: {
      role: "writer",
      type: "anyone",
    },
  });
  const newFileviewLink = response.data.webViewLink;
  return { viewLink: newFileviewLink, success: true };
};
