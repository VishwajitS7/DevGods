import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db";
import Interest from "@/models/Interest";
import Notification from "@/models/Notification";
import { interests } from "@/lib/mockData";

export async function POST(request: Request) {
  const body = await request.json();
  const { fromUserId, toUserId, status = "pending" } = body as {
    fromUserId?: string;
    toUserId?: string;
    status?: "pending" | "accepted" | "rejected";
  };

  if (!fromUserId || !toUserId) {
    return NextResponse.json(
      { error: "fromUserId and toUserId are required" },
      { status: 400 }
    );
  }

  const db = await connectToDatabase();
  if (!db) {
    interests.push({
      id: `i-${Date.now()}`,
      fromUserId,
      toUserId,
      status,
    });
  } else {
    await Interest.create({ fromUserId, toUserId, status });
  }

  const message =
    status === "accepted"
      ? "Your interest request was accepted."
      : "You have a new interest request.";

  if (db) {
    await Notification.create({
      userId: toUserId,
      message,
      type: "interest",
      isRead: false,
    });
  }

  return NextResponse.json({ ok: true }, { status: 201 });
}
