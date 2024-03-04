import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "./features/dataSlice";

function UserData() {
  const user = useSelector((state) => state.data);
  const dispatch = useDispatch();

  return (
    <div>
      {user.data.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
      <button onClick={() => dispatch(fetchData())}>Fetch User</button>
    </div>
  );
}

export default UserData;
