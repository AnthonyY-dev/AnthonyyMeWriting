"use client";
import { useColorMode } from "./components/ui/color-mode";
import { Button } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Pages
import Homepage from "./pages/Homepage";
import Navbar from "./components/custom/Navbar";

const App = () => {
  const { toggleColorMode } = useColorMode();

  return (
    <div>
      <Navbar />

      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/chakra" element={<>hi chakra</>} />

          <Route path="*" element={<>hi 404</>} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
