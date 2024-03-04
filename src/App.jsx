import { BrowserRouter as Router } from "react-router-dom";
// import CreateUser from "./components/CreateUser";

// import AppContent from "./AppContent";
import UserData from "./userdata/UserData";

function App() {
  return (
    <Router>
      {/* <AppContent /> */}
      {/* <CreateUser /> */}
      <UserData />
    </Router>
  );
}
export default App;
