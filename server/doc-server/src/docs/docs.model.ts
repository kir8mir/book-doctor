import * as mongoose from 'mongoose';

export const DocsSchema = new mongoose.Schema({
  name: { type: String, required: true },
  position: { type: String, required: true },
});

export interface Doc extends mongoose.Document {
  id: string;
  name: string;
  position: string;
}
