import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../features/dataSlice";

function UserData() {
  const user = useSelector((state) => state.data);
  const dispatch = useDispatch();

  const handleFetchData = () => {
    dispatch(fetchData());
  };

  return (
    <div className="container mt-5">
      {user.loading ? (
        <div className="text-center">
          <p>Loading...</p>
        </div>
      ) : user.error ? (
        <div className="text-center">
          <p>Error: {user.error}</p>
          <button className="btn btn-primary" onClick={handleFetchData}>
            Retry
          </button>
        </div>
      ) : (
        <>
          <div className="row">
            {user.data.map((userData) => (
              <div className="col-md-4 mb-4" key={userData.id}>
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">{userData.name}</h5>
                    <p className="card-text">Email: {userData.email}</p>
                    <p className="card-text">Phone: {userData.phone}</p>
                    <p className="card-text">
                      Address: {userData.address.street},{" "}
                      {userData.address.city}, {userData.address.zipcode}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-3">
            <button className="btn btn-primary" onClick={handleFetchData}>
              Fetch User
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default UserData;
