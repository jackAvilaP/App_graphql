import express from "express";
import { ApolloServer } from "apollo-server-express";
import dotenv from "dotenv"
import typeDefs from "./typeDefs.js";
import resolvers from "./resolvers.js";
import connectDB from "./db.js";


dotenv.config()


const app = express();
connectDB();
app.get("/", (req, res) => res.send("Welcome to api "));

export default app;

const start = async () => {
  const apolloServer = new ApolloServer({ typeDefs, resolvers });
  await apolloServer.start();

  apolloServer.applyMiddleware({ app });

  app.use("*", (req, res) => res.status(404).send("Not found"));

  app.listen(process.env.PORT, () =>
    console.log(`Server on port ${process.env.PORT}`)
  );
};

start();
