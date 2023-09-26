import { Schema, model } from "mongoose";

const taskSchema = new Schema({
  title: {
    type: String,
    require: true,
  },
  description: String,
});

export default model("Task", taskSchema);
