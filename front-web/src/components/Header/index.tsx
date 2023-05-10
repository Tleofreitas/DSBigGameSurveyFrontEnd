import React from "react";
import Logo from "../../assets/logo.svg";
import './styles.css';
import { Link } from "react-router-dom";

const Header = () => (
    <header className="main-header">
        <img src={Logo} alt="Logo" />
        <Link to="/">
            <div className="logo-text">
                <span className="logo-text-1">Big Game </span>
                <span className="logo-text-2">Survey</span>
            </div>
        </Link>
    </header>
);

export default Header;