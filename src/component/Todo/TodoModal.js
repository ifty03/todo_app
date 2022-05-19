import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import auth from "../../firebase.init";

const TodoModal = ({ setTodoData, setUpdate, update }) => {
  const [user] = useAuthState(auth);

  const handelTodoSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const description = e.target.description.value;
    const email = user?.email;
    const todo = { name, description, email };
    fetch("https://young-stream-12873.herokuapp.com/todo", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(todo),
    })
      .then((res) => res.json())
      .then((data) => {
        setTodoData(null);
        setUpdate(!update);
        toast.success("New todo added");
      });
  };
  return (
    <div className="">
      <input type="checkbox" id="todo-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle bg-gray-700">
        <div className="modal-box">
          <label
            for="todo-modal"
            className="btn btn-sm btn-circle btn-accent absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-center text-2xl text-accent font-semibold mb-5">
            Add A Todo!
          </h3>
          <form onSubmit={handelTodoSubmit}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Task Name</span>
              </label>
              <input
                type="text"
                placeholder="Task Name"
                name="name"
                required
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <textarea
                className="textarea textarea-bordered h-32"
                placeholder="Task Description"
                required
                name="description"
              ></textarea>
            </div>
            <div className="modal-action">
              <input type="submit" className="btn btn-accent" value="ADD !" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TodoModal;
