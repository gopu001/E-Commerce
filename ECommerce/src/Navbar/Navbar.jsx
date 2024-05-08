import React from "react";
import { IoMenu } from "react-icons/io5";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import "./Navbar.scss";

function Navbar() {
  // DropDown
  const options = ["Groceries", "Electronics", "Fashion"];
  const defaultOption = options[0];

  // Define the onSelect function
  const onSelect = (selectedOption) => {
    console.log("Selected Option:", selectedOption);
    // Add your logic here for handling the selected option
  };

  return (
    <section className="navbar">
      <div className="navbarMainContainer">
        <div className="logo">
          <h2>E-Commerce</h2>
        </div>
        <div className="navigationSearch">
          <div className="dropDown">
            <Dropdown
              options={options}
              onChange={onSelect}
              value={defaultOption}
              placeholder="Select an option"
            />
          </div>
          <div className="search">
            hj
          </div>
        </div>
        
        <div className="menu">
          <IoMenu />
        </div>
      </div>
    </section>
  );
}

export default Navbar;
