import { useDispatch, useSelector } from "react-redux";
import { addCounter, deleteCounter } from "./ReduxToolkit/counterSlice";

function CounterRedux() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.amount);

  return (
    <div>
      <button onClick={() => dispatch(addCounter(10))}>Add</button>
      <span>{counter}</span>
      <button onClick={() => dispatch(deleteCounter(10))}>delete</button>
    </div>
  );
}

export default CounterRedux;
