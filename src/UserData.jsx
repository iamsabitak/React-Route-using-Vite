import { useSelector } from "react-redux";

function UserData() {
  const Users = useSelector((state) => state.userData.data);
  return (
    <div>
      {Users.map((user) => (
        <li key={user.id}>{user.email}</li>
      ))}
    </div>
  );
}

export default UserData;
