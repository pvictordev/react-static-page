import React from "react"

export default function Navbar() {
    return (
        <nav>
            <div className="nav--logo">
                <img src={"./src/img/react-icon-small.png"} className="nav--icon" />
                <h3 className="nav--logo_text">ReactFacts</h3>
            </div>
            <h4 className="nav--title">React Static Page</h4>
        </nav>
    )
}
