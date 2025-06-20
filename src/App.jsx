import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // ✅ Required for routing

import Landing from "./components/Landing";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </Router>
  );
}

export default App;
