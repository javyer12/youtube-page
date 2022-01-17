import React from "react";
import HeaderMenu from "./Header/HeaderMenu";
import HeaderSearch from "./Header/HeaderSearch";
import HeaderLogo from "./Header/HeaderLogo";
import HeaderOption from "./Header/HeaderOption";
import "../style/Header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="menu">
        <HeaderMenu />
      </div>
      <div className="logo">
        <HeaderLogo />
      </div>
      <div className="search">
        <HeaderSearch />
      </div>
      <div className="create">
        <HeaderOption />
      </div>
    </div>
  );
};
export default Header;
