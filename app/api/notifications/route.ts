import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db";
import Notification from "@/models/Notification";
import { mockNotifications } from "@/lib/mockData";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const userId = searchParams.get("userId") || "u-current";

  const db = await connectToDatabase();
  if (!db) {
    const notifications = mockNotifications
      .filter((item) => item.userId === userId)
      .sort((a, b) => b.createdAt.localeCompare(a.createdAt));
    return NextResponse.json({ notifications });
  }

  const notifications = await Notification.find({ userId })
    .sort({ createdAt: -1 })
    .lean();
  return NextResponse.json({ notifications });
}

export async function POST(request: Request) {
  const body = await request.json();
  const { userId, message, type } = body as {
    userId?: string;
    message?: string;
    type?: "interest" | "match" | "view";
  };

  if (!userId || !message || !type) {
    return NextResponse.json(
      { error: "userId, message and type are required" },
      { status: 400 }
    );
  }

  const db = await connectToDatabase();
  if (!db) {
    const notification = {
      id: `n-${Date.now()}`,
      userId,
      message,
      type,
      isRead: false,
      createdAt: new Date().toISOString(),
    };
    mockNotifications.unshift(notification);
    return NextResponse.json({ notification }, { status: 201 });
  }

  const notification = await Notification.create({
    userId,
    message,
    type,
    isRead: false,
  });

  return NextResponse.json({ notification }, { status: 201 });
}
