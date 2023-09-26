import { connect } from "mongoose";

const connectDB = async () => {
  try {
      await connect(process.env.DB_URI,{
        useNewUrlParser:true,
      });
      console.log("MongoDB connected");
    
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
