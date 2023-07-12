import { Schema, model } from "mongoose";
import iTask from "../Utils/Interface";

const TaskSchema: Schema<iTask> = new Schema(
  {
    task: {
      type: String,
      trim: true,
      required: true,
    },
    priority: {
      type: String,
      required: true,
    },
    isComplete: {
      type: Boolean,
    },
  },
  { timestamps: true }
);

export const TaskModel = model("Productivity Tool", TaskSchema);
