import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import auth from "../../firebase.init";

const TodoModal = ({ setTodoData }) => {
  const [user] = useAuthState(auth);

  const handelTodoSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const description = e.target.description.value;
    const email = user?.email;
    const todo = { name, description, email };
    fetch("http://localhost:5000/todo", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(todo),
    })
      .then((res) => res.json())
      .then((data) => {
        setTodoData(null);
        toast.success("New todo added");
      });
  };
  return (
    <div className="">
      <input type="checkbox" id="todo-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle bg-gray-700">
        <div class="modal-box">
          <label
            for="todo-modal"
            class="btn btn-sm btn-circle btn-accent absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-center text-2xl text-accent font-semibold mb-5">
            Add A Todo!
          </h3>
          <form onSubmit={handelTodoSubmit}>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Task Name</span>
              </label>
              <input
                type="text"
                placeholder="Task Name"
                name="name"
                required
                class="input input-bordered"
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Description</span>
              </label>
              <textarea
                class="textarea textarea-bordered h-32"
                placeholder="Task Description"
                required
                name="description"
              ></textarea>
            </div>
            <div class="modal-action">
              <input type="submit" className="btn btn-accent" value="ADD !" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TodoModal;
