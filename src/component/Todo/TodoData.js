import React from "react";

const TodoData = () => {
  return (
    <div class="overflow-x-auto w-full my-4">
      <table class="table w-full">
        <thead>
          <tr>
            <th>Complete</th>
            <th>Name</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>
              <label>
                <input type="checkbox" class="checkbox" />
              </label>
            </th>
            <td>Todo Name</td>
            <td>Todo Description</td>
            <td>
              <button className="btn btn-error btn-xs">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TodoData;
