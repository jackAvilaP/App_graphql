import React, { useState } from "react";
import { useMutation } from "@apollo/client";

import { CREATE_TASK } from "../../tasks/graphql-mutations";
import { ALL_TASKS } from "../../tasks/graphql-queries";


const TaskCardCreate = () => {
  const [CreateTask] = useMutation(CREATE_TASK, {refetchQueries:[{query: ALL_TASKS}]}); // guarda en la bd y refresca la peticion de la lista
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [toggle, setToggle] = useState(true);

  const submit = (e) => {
    e.preventDefault();
    if (toggle === true) {
      setToggle(!toggle);
    } 
    if(toggle === false && title !=="" && description!=="") {
        CreateTask({
            variables: {
              task: {
                title,
                description,
              },
            },
          })
      setToggle(!toggle);
    }
  };
  return (
    <form
      className="flex justify-between items-center w-[16rem] p-2 text-left rounded-2xl bg-white shadow-2xl"
      onSubmit={submit}
    >
      <div className="flex flex-col gap-2 p-2">
        <header className="flex flex-col justify-between">
          {toggle ? (
            <h1 className="mt-2 text-[#575757]">
              <strong>Create New Task</strong>
            </h1>
          ) : (
            <input
              placeholder="Title"
              className="border-b-2 focus:outline-none"
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          )}
        </header>
        <body className="text-[#929292] my-2">
          {toggle ? (
            <p className="text-xs">You new task!</p>
          ) : (
            <input
              placeholder="You new task!"
              className="border-b-2 focus:outline-none"
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          )}
        </body>
      </div>
      <button
        className="border p-2 rounded-xl bg-[#AF7AC5] hover:scale-110 cursor-pointer"
        onClick={submit}
      >
        {toggle ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-white font-extrabold"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-white font-extrabold"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
            />
          </svg>
        )}
      </button>
    </form>
  );
};

export default TaskCardCreate;
