import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("eve.holt@reqres.in");
  const [password, setPassword] = useState("cityslicka");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const navigate = useNavigate();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    console.log({ email, password });
    try {
      const res = await axios.post("https://reqres.in/api/login", {
        email: email,
        password: password,
      });
      console.log("token:", res.data.token);
      localStorage.setItem("token", res.data.token);
      navigate("/home");
    } catch (error) {
      console.log("Error:", error);
    }

    setEmailError("");
    setPasswordError("");

    if (!email.trim()) {
      setEmailError("Email is required");
      return;
    }

    if (!password.trim()) {
      setPasswordError("Password is required");
      return;
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h2 className="card-title text-center mb-4">Login</h2>
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <form onSubmit={onSubmitHandler}>
                <div className="mb-1">
                  <label htmlFor="inputEmail" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className={`form-control ${emailError ? "is-invalid" : ""}`}
                    id="inputEmail"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="current-address"
                  />
                  {emailError && (
                    <div className="invalid-feedback">{emailError}</div>
                  )}
                </div>
                <div className="mb-1">
                  <label htmlFor="inputPassword" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className={`form-control ${
                      passwordError ? "is-invalid" : ""
                    }`}
                    id="inputPassword"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="current-password"
                  />
                  {passwordError && (
                    <div className="invalid-feedback">{passwordError}</div>
                  )}
                </div>
                <div className="d-grid row mt-5 justify-content-center">
                  <button type="submit" className="btn btn-primary btn-block">
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
