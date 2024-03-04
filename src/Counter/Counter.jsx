import { useDispatch, useSelector } from "react-redux";
import { addCounter, deleteCounter } from "../features/counterSlice";

const Counter = () => {
  const dispatch = useDispatch();

  const counter = useSelector((state) => state.counter.amount);

  const handleAdd = () => {
    dispatch(addCounter(10));
  };

  const handleRemove = () => {
    dispatch(deleteCounter(10));
  };

  return (
    <div className="container my-3">
      <div className="row justify-content-center align-items-center">
        <div className="col-md-4">
          <button
            className="btn btn-primary btn-lg d-block mx-auto mb-3"
            onClick={handleAdd}
          >
            Add
          </button>
          <span className="d-block text-center">{counter}</span>
          <button
            className="btn btn-primary btn-lg d-block mx-auto mt-3"
            onClick={handleRemove}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
