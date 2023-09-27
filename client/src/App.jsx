// https://www.youtube.com/watch?v=sVFocedf-iU&t=1369s  (APRENDE a usar GRAPHQL en tu APP de REACT con APOLLO CLIENT)
import { gql, useQuery } from "@apollo/client";
import "./App.css";
import backimg from './assets/s.jpg'
import TaskCard from "./components/cards/TaskCard";
import TaskCardCreate from "./components/cards/TaskCardCreate";
import { ALL_TASKS } from "./tasks/graphql-queries";


function App() {
  const { data, error, loading } = useQuery(ALL_TASKS);

  if (error) return <span className="text-red-500">{error}</span>;
  return (

      <div className="h-screen flex flex-col justify-center items-center gap-4 bg-gradient-to-tl from-green-300 via-blue-500 to-purple-600">
        <div className="text-left flex flex-col gap-6">
        <h1 className=" text-xl font-medium font-cursive text-white ">Project Tasks </h1>
        <TaskCardCreate/>
        </div>
        {loading ? (
          <p>loading...</p>
          ) : (
            <div className="flex flex-col text-left items-center gap-6">
            <h1 className=" text-xl font-medium font-cursive text-white">Ongoing task </h1>
            <div className="flex flex-grow flex-col gap-4 p-2">
            {data.getAllTasks.map((task) => (
              <TaskCard task={task} key={task.id}/>
            ))}
            </div>
          </div>
        )}
        
      </div>

  );
}

export default App;
