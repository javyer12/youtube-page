import React from "react";
import micro from "../../style/icon/micro1.png";
import "../../style/Header.scss";

const HeaderSearch = () => {
  return (
    <nav className="navbar navbar-light ">
      <div className="container-fluid search_item">
        <form className="d-flex ">
          <input
            className="form-control  bg-dark"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-secondary" type="submit">
            Search
          </button>
          <img
            src={micro}
            alt="microfono"
            className=" search_icon"
          />
        </form>
      </div>
    </nav>
  );
};

export default HeaderSearch;
