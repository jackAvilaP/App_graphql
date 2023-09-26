import { gql } from "apollo-server-express";

const typeDefs = gql`
  type Task {
    id: ID
    title: String!
    description: String
  }
  type Query {
    hello: String
    getAllTaks: [Task]
    getTask(id: ID): Task
  }

  input TaskInput {
    title: String
    description: String
  }

  type Mutation {
    createTasks(task: TaskInput!): Task
    deleteTask(id: ID!): String
    updateTask(id: ID!, task:TaskInput): Task
  }
`;

export default typeDefs;
