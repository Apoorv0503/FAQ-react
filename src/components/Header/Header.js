import React from "react";
import "./Header.css";
import { tejasLogo } from "../../utils/constants";

const Header = () => {
  return (
    <div className="header">
      <div className="header-logo-box">
        <img src={tejasLogo} alt="logo" />
        <h3>FAQ Section</h3>
      </div>
    </div>
  );
};

export default Header;
