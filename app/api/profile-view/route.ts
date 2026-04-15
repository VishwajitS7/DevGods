import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db";
import Notification from "@/models/Notification";

export async function POST(request: Request) {
  const body = await request.json();
  const { viewedUserId, viewerName = "Someone" } = body as {
    viewedUserId?: string;
    viewerName?: string;
  };

  if (!viewedUserId) {
    return NextResponse.json(
      { error: "viewedUserId is required" },
      { status: 400 }
    );
  }

  const db = await connectToDatabase();
  if (db) {
    await Notification.create({
      userId: viewedUserId,
      message: `${viewerName} viewed your profile.`,
      type: "view",
      isRead: false,
    });
  }

  return NextResponse.json({ ok: true }, { status: 201 });
}
