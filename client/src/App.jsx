// https://www.youtube.com/watch?v=sVFocedf-iU&t=1369s  (APRENDE a usar GRAPHQL en tu APP de REACT con APOLLO CLIENT)
import { gql, useQuery } from "@apollo/client";
import "./App.css";
import backimg from './assets/s.jpg'
import TaskCard from "./components/TaskCard";

const ALL_TASKS = gql`
  query {
    getAllTasks {
      id
      title
      description
    }
  }
`;

function App() {
  const { data, error, loading } = useQuery(ALL_TASKS);

  if (error) return <span className="text-red-500">{error}</span>;
  return (

      <div className="flex flex-col justify-center items-center">
        <img 
        src={backimg}
        width="450"
        height="300"
        />
        <div className="absolute">

        <h1 className=" text-3xl font-medium font-cursive text-[#0000AA]">Tasks list : </h1>
        {loading ? (
          <p>loading...</p>
        ) : (
          <>
            {data.getAllTasks.map((task) => (
              <TaskCard task={task} />
            ))}
          </>
        )}
        </div>
      </div>

  );
}

export default App;
