import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import Swal from "sweetalert2";
import auth from "../../firebase.init";
import Spinner from "../Shared/Spinner/Spinner";

const TodoData = ({ setTodoData }) => {
  const [user] = useAuthState(auth);
  const { data, isLoading, refetch } = useQuery("todo", () =>
    fetch(`http://localhost:5000/todo/?email=${user?.email}`).then((res) => {
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
        fetch(`http://localhost:5000/todo/${id}`, {
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
                  <input type="checkbox" className="checkbox" />
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
