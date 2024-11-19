import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import ChristmasList from "./ChristmasList";
import Contact from "./Contact";
import Staff from "./Staff";
import Topic from "./Topic";
import Home from "./Home";

const Main = () => {
  return (
    <main>
      <h1>Sección principal</h1>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/list" element={<ChristmasList/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/staff" element={<Staff/>} />
        <Route path="/topic" element={<Topic/>} />
        <Route path="/*" element={<Navigate to={"/"} />} />
      </Routes>

      {/* <ChristmasList/> */}
      {/* <Contact/> */}
      {/* <Staff/> */}
      {/* <Topic/> */}
    </main>
  );
};

export default Main;
