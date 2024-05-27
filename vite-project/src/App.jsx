import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Student from "./Components/Student";
import Drop from "./Components/Drop";
import Sympo from "./Components/Sympo";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Student" element={<Student />} />
          <Route path="Drop" element={<Drop />} />
          <Route path="Sympo" element={<Sympo />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
