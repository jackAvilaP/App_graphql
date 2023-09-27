import { Schema, model } from "mongoose";

const userSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  image: String,
});

export default model("user", userSchema);