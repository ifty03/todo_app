import React from "react";
import TodoData from "./TodoData";
import TodoModal from "./TodoModal";

const Todo = () => {
  return (
    <div className="flex items-center min-h-screen">
      <div class="card  bg-gray-700 mx-auto shadow-xl">
        <div class="card-body">
          <h2 class="card-title text-2xl mx-auto">Your Todo List!</h2>
          <TodoData />

          <div class="card-actions justify-center ">
            <label for="todo-modal" class="modal-button btn btn-accent px-6">
              New Task
            </label>
          </div>
        </div>
      </div>
      <TodoModal />
    </div>
  );
};

export default Todo;
