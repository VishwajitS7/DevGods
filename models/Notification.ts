import mongoose, { Schema, type Model } from "mongoose";

export interface INotification {
  userId: string;
  message: string;
  type: "interest" | "match" | "view";
  isRead: boolean;
  createdAt: Date;
}

const NotificationSchema = new Schema<INotification>(
  {
    userId: { type: String, required: true, index: true },
    message: { type: String, required: true, trim: true },
    type: {
      type: String,
      required: true,
      enum: ["interest", "match", "view"],
    },
    isRead: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now },
  },
  { versionKey: false }
);

const Notification =
  (mongoose.models.Notification as Model<INotification>) ||
  mongoose.model<INotification>("Notification", NotificationSchema);

export default Notification;
