import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/home">
          Navbar
        </Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/services">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>

          <Link to="/" />

          {/* <div className="grid gap-5">
            <button className="btn btn-outline-success">Login</button>
            <button
              className="btn btn-outline-success"
              onClick={() => {
                localStorage.removeItem("token");
                // Navigate("/");
              }}
            >
              Logout
            </button>
          </div> */}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
