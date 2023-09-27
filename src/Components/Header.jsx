import React from "react";
import classes from "./Header.module.css"
const Header = () => {
  return (
    <div className={classes.header}>
      <h3 className={classes.header_title}>Find Your Favorite Cocktail</h3>
    </div>
  );
};

export default Header;
