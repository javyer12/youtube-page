import React from "react";
import HeaderMenu from "../utils/Button/MenuButton";
import HeaderSearch from "./Header/HeaderSearch";
import HeaderLogo from "./Header/HeaderLogo";
import HeaderOption from "./Header/HeaderOption";
import "../style/Header.scss";

const Header = () => {
  return (
    <div className="header">
      <HeaderMenu />
      <HeaderLogo />
      <HeaderSearch />
      <HeaderOption />
    </div>
  );
};
export default Header;
