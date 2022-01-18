import React from "react";
import "../../style/Header.scss";

const MenuButton = () => {
  return (
    <>
      <div className="header-menu-component">
        <button type="button" className="btn btn-link">
          <svg
            fill="currentColor"
            viewBox="0 0 16 16"
            className="menu_header-icon bi bi-list"
          >
            <path
              fillRule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </button>
      </div>
    </>
  );
};

export default MenuButton;
