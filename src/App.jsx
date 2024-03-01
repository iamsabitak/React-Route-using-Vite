import { BrowserRouter as Router } from "react-router-dom";
import AppContent from "./AppContent";
// import CounterRedux from "./CounterRedux";

function App() {
  return (
    <Router>
      {" "}
      <AppContent />
      {/* <CounterRedux /> */}
    </Router>
  );
}
export default App;
