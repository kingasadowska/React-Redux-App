import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const activeStyle = { color: "#F15B2A" };
  return (
    <nav>
      <NavLink to="/" activeStyle={activeStyle} exact>
        Home
      </NavLink>
      {" | "}
      <NavLink to="/recipes" activeStyle={activeStyle}>
        Recipes
      </NavLink>
      {" | "}
      <NavLink to="/wrapper" activeStyle={activeStyle}>
        Chefs
      </NavLink>
      {" | "}
      <NavLink to="/ingredients" activeStyle={activeStyle}>
        Ingredients
      </NavLink>
    </nav>
  );
};

export default Header;
