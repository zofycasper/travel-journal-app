import React from "react";
import logo from "../image/logo.png";

export default function Header() {
    return (
        <div className="header">
            <img src={logo} alt="logo" className="header-logo" />
            <h1 className="header-title">my travel journal.</h1>
        </div>
    );
}
