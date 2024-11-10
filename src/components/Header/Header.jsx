import css from "./Header.module.css";
import clsx from "clsx";

import { NavLink } from "react-router-dom";

const Header = () => {
  const linkStyle = ({ isActive }) =>
    clsx({
      [css.link]: true,
      [css.linkActive]: isActive,
    });

  return (
    <header className={css.header}>
      <NavLink className={linkStyle} to="/">
        Home page
      </NavLink>
      <NavLink className={linkStyle} to="/contacts">
        Phonebook
      </NavLink>
      <NavLink className={linkStyle} to="/login">
        Login
      </NavLink>
      <NavLink className={linkStyle} to="/register">
        Register
      </NavLink>
    </header>
  );
};

export default Header;
