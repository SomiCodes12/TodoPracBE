import { Document } from "mongoose";

interface iTask extends Document {
  task?: string;
  priority?: string;
  isComplete?: boolean;
}

export default iTask;