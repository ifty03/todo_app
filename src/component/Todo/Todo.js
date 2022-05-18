import React, { useState } from "react";
import TodoData from "./TodoData";
import TodoModal from "./TodoModal";

const Todo = () => {
  const [todoData, setTodoData] = useState(null);

  return (
    <div className="flex items-center min-h-screen">
      <div className="card  bg-gray-700 lg:max-w-[50%] mx-auto shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-2xl mx-auto">Your Todo List!</h2>
          <TodoData todoData={todoData} setTodoData={setTodoData} />

          <div className="card-actions justify-center ">
            <label
              for="todo-modal"
              className="modal-button btn btn-accent px-6"
            >
              New Task
            </label>
          </div>
        </div>
      </div>
      {todoData && <TodoModal setTodoData={setTodoData} />}
    </div>
  );
};

export default Todo;
