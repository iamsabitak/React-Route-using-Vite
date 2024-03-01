import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Login from "./components/LogInLogoOut";

import { Routes, Route, useLocation } from "react-router-dom";

function AppContent() {
  const location = useLocation();
  const isLoginPage = location.pathname === "/";

  return (
    <>
      {!isLoginPage && <Navbar />}
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </>
  );
}

export default AppContent;
