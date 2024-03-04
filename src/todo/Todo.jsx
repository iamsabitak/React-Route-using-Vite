import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../features/todoSlice";

const Todos = () => {
  const todos = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  return (
    <div className="container mt-3">
      <h2>Todo List</h2>
      <ul className="list-group">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            {todo.text}
            <button
              className="btn btn-danger"
              onClick={() => dispatch(removeTodo(todo.id))}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
