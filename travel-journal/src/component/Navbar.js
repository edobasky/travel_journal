import React from "react"
import reactLogo from "../component/images/earth.png"

export default function Navbar() {
    return (
        <div>
            <nav>
                <img
                src={reactLogo} 
                alt="earth-logo"
                className="nav--logo"
                />
               <p className="nav--text"> my travel journal</p>
            </nav>
        </div>
    )
}