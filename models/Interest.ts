import mongoose, { Schema, type Model } from "mongoose";

export interface IInterest {
  fromUserId: string;
  toUserId: string;
  status: "pending" | "accepted" | "rejected";
  createdAt: Date;
}

const InterestSchema = new Schema<IInterest>(
  {
    fromUserId: { type: String, required: true, index: true },
    toUserId: { type: String, required: true, index: true },
    status: {
      type: String,
      required: true,
      enum: ["pending", "accepted", "rejected"],
      default: "pending",
    },
    createdAt: { type: Date, default: Date.now },
  },
  { versionKey: false }
);

const Interest =
  (mongoose.models.Interest as Model<IInterest>) ||
  mongoose.model<IInterest>("Interest", InterestSchema);

export default Interest;
