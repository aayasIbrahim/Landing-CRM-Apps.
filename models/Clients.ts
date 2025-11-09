import { Schema, model, models, Document } from "mongoose";

export interface IClient extends Document {
  fullName: string;
  email: string;
  mobile: string;
  country: string;
}

const ClientSchema = new Schema<IClient>(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    mobile: { type: String, required: true },
    country: { type: String, required: true },
  },
  { timestamps: true }
);

// Prevent model overwrite in dev
export const Client = models.Client || model<IClient>("Client", ClientSchema);
