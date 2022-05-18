import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./component/Login/Login";
import SignUp from "./component/Login/SignUp";
import RequireAuth from "./component/RequireAuth";
import Navbar from "./component/Shared/Navbar";
import Todo from "./component/Todo/Todo";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signUp" element={<SignUp />}></Route>
        <Route
          path="/"
          element={
            <RequireAuth>
              <Todo />
            </RequireAuth>
          }
        ></Route>
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
