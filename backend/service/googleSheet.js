import dotenv from "dotenv";
dotenv.config()

import { google } from "googleapis";
import { GoogleAuth } from "google-auth-library";

const authClient = new GoogleAuth({
  keyFile: process.env.GOOGLE_APPLICATION_CREDENTIALS,
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

const sheets = google.sheets({ version: "v4", auth: await authClient.getClient() });

export { sheets };
