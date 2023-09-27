import { gql } from "@apollo/client";

export const CREATE_TASK = gql`
mutation CreateTask($task: TaskInput!) {
  createTasks(task: $task) {
    id
    title
    description
  }
}
`;
