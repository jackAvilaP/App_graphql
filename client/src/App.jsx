// https://www.youtube.com/watch?v=sVFocedf-iU&t=1369s  (APRENDE a usar GRAPHQL en tu APP de REACT con APOLLO CLIENT)
import { gql, useQuery } from "@apollo/client";
import "./App.css";

const ALL_TASKS = gql`
  query {
    getAllTaks {
      id
      title
    }
  }
`;

function App() {
  const { data, error, loading } = useQuery(ALL_TASKS);

  if (error) return <span className="text-red-500">{error}</span>;
  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Hello world!
        {loading ? <p>loading...</p> :<><p>GraphQl + React!</p></> }
      </h1>
    </>
  );
}

export default App;
