import { BrowserRouter as Router } from "react-router-dom";
// import CreateUser from "./components/CreateUser";

import AppContent from "./AppContent";
// import ShowUser from "./components/ShowUser";

function App() {
  return (
    <Router>
      <AppContent />
      {/* <ShowUser /> */}
      {/* <CreateUser /> */}
    </Router>
  );
}
export default App;
