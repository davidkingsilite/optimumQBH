// models/Subscriber.ts
import mongoose, { Schema, InferSchemaType  } from 'mongoose';

const SubscriberSchema = new Schema({
  email: { type: String, required: true, unique: true },
  subscribedAt: { type: Date, default: Date.now },
});

export type IBlog = InferSchemaType<typeof SubscriberSchema>;

export default mongoose.models.Subscriber || mongoose.model<IBlog>("Subscriber", SubscriberSchema);
