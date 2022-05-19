import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import { useQuery } from "react-query";
import Swal from "sweetalert2";
import auth from "../../firebase.init";
import Spinner from "../Shared/Spinner/Spinner";

const TodoData = ({ setTodoData, update }) => {
  const [user] = useAuthState(auth);
  const [complete, setComplete] = useState(false);
  console.log(complete);
  const { data, isLoading, refetch } = useQuery(["todo", update], () =>
    fetch(
      `https://young-stream-12873.herokuapp.com/todo/?email=${user?.email}`
    ).then((res) => {
      setTodoData(data || []);
      return res.json();
    })
  );
  const handelTodoData = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://young-stream-12873.herokuapp.com/todo/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            refetch();
          });
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };
  const handelComplete = (id) => {
    fetch(`https://young-stream-12873.herokuapp.com/todo/${id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ complete }),
    })
      .then((res) => res.json())
      .then((data) => {
        refetch();
        toast.success("Todo is completed");
      });
  };

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div className="overflow-x-auto w-full my-4">
      <table className="table w-full">
        <thead>
          <tr>
            <th>Complete</th>
            <th>Name</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>{" "}
        <tbody>
          {data.map((todo) => (
            <tr>
              <th>
                <label>
                  <input
                    onChange={(e) => setComplete(e.target.checked)}
                    onClick={() => {
                      handelComplete(todo._id);
                    }}
                    name="checked"
                    type="checkbox"
                    className="checkbox"
                  />
                </label>
              </th>
              <td>{todo?.name}</td>
              <td>{todo?.description}</td>
              <td>
                <button
                  onClick={() => {
                    handelTodoData(todo._id);
                  }}
                  className="btn btn-error btn-xs"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TodoData;
