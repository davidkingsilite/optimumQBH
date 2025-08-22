
import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import dbConnect from "@/lib/connectDB";
import HipaaSubmission from "@/models/HipaaSubmission";

const ENCRYPTION_KEY = process.env.ENCRYPTION_KEY!; // must be 32 chars
const IV_LENGTH = 16;

function encrypt(text: string) {
  const iv = crypto.randomBytes(IV_LENGTH);
  const cipher = crypto.createCipheriv(
    "aes-256-cbc",
    Buffer.from(ENCRYPTION_KEY),
    iv
  );
  let encrypted = cipher.update(text, "utf8", "hex");
  encrypted += cipher.final("hex");
  return iv.toString("hex") + ":" + encrypted;
}

export async function POST(req: NextRequest) {
  try {
    await dbConnect();

    const body = await req.json();
    const encryptedData = encrypt(JSON.stringify(body));

    await HipaaSubmission.create({
      data: encryptedData,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("HIPAA form error:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
