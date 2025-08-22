import mongoose, { Schema, InferSchemaType  } from "mongoose";

const HipaaSubmissionSchema = new Schema({
  data: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export type IBlog = InferSchemaType<typeof HipaaSubmissionSchema>;

// Avoid recompiling model on hot reload
export default mongoose.models.HipaaSubmission || mongoose.model<IBlog>("HipaaSubmission", HipaaSubmissionSchema);;
