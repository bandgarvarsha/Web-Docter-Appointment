import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.css";
import { Context } from "../Context/Context";
const Navbar = () => {
  const { user, setUser } = useContext(Context);

  const onLogout = () => {
    setUser(null);
  };

  return (
    <>
      <nav>
        <NavLink to="/" className={classes.nav}>
          Home
        </NavLink>
        <NavLink to="/about" className={classes.nav}>
          About
        </NavLink>
        {!user && (
          <NavLink to="/login" className={classes.nav}>
            Login
          </NavLink>
        )}
        {user && <button onClick={() => onLogout()}>Logout</button>}
      </nav>
    </>
  );
};

export default Navbar;
