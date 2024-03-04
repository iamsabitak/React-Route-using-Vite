import { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../features/userDetailSlice";

function CreateUser() {
  const [user, setUser] = useState();

  const dispatch = useDispatch();

  const handleOnChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const onHandleSubmit = (e) => {
    e.preventDefault();
    console.log("user...", user);
    dispatch(createUser(user));
  };
  return (
    <div>
      <h3>Fill The Data</h3>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" onChange={handleOnChange} />
        </div>
        <div>
          <label htmlFor="email">Email</label>{" "}
          <input
            type="email"
            name="email"
            id="email"
            onChange={handleOnChange}
          />
        </div>
        <div>
          <label htmlFor="contact">Contact</label>{" "}
          <input
            type="contact"
            name="contact"
            id="contact"
            onChange={handleOnChange}
          />
        </div>
        <div>
          <label htmlFor="gender">Female</label>{" "}
          <input
            type="radio"
            name="gender"
            id="gender"
            value="female"
            onChange={handleOnChange}
          />
        </div>
        <div>
          <label htmlFor="gender">Male</label>{" "}
          <input
            type="radio"
            name="gender"
            id="gender"
            value="male"
            onChange={handleOnChange}
          />
        </div>
      </form>
      <button onClick={onHandleSubmit}>submit</button>
    </div>
  );
}

export default CreateUser;
