import React from "react";

const TodoModal = () => {
  const handelTodoSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const description = e.target.description.value;
    console.log(description, name);
  };
  return (
    <div className="">
      <input type="checkbox" id="todo-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle bg-gray-700">
        <div class="modal-box">
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
          <div class="modal-action">
            <label for="todo-modal">Add !</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoModal;
