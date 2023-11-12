import React, { useState } from "react";
import { BsToggleOff, BsToggleOn } from "react-icons/bs";

export default function Navbar({ toggleMode, mode }) {
  return (
    <nav className={`${mode ? "nav light-nav" : "nav"}`}>
      <div className="nav--logo">
        <img src={"./src/img/react-icon-small.png"} className="nav--icon" />
        <h3 className="nav--logo_text">ReactFacts</h3>
      </div>
      {mode ? (
        <BsToggleOff style={{ fontSize: "40px" }} onClick={toggleMode} />
      ) : (
        <BsToggleOn style={{ fontSize: "40px" }} onClick={toggleMode} />
      )}
    </nav>
  );
}
