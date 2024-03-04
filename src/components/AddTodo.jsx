import { useState } from "react";
import { useDispatch } from "react-redux";
import Todos from "./Todo";
import { addTodo } from "../features/todoSlice";

const AddTodo = () => {
  const [input, setInput] = useState("");

  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col">
          <form onSubmit={addTodoHandler} className="d-flex">
            <input
              type="text"
              className="form-control me-2"
              placeholder="Enter the Todo.."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit" className="btn btn-primary">
              Add Todo
            </button>
          </form>
        </div>
      </div>
      <Todos />
    </div>
  );
};

export default AddTodo;
