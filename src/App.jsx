import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";

export default function App() {
  const [mode, setMode] = useState(false);

  const toggleMode = () => {
    setMode((prev) => !prev);
  };
  useEffect(() => {
    if (mode) {
      document.body.style.backgroundColor = "#deebf8";
    } else {
      document.body.style.backgroundColor = "#21222a";
    }
  });

  return (
    <>
      <Navbar toggleMode={toggleMode} mode={mode} />
      <Main mode={mode} />
    </>
  );
}
