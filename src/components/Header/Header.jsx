import css from "./Header.module.css";
import clsx from "clsx";
import { useSelector } from "react-redux";

import { NavLink } from "react-router-dom";
import {
  selectUserData,
  selectUserDataIsLoggedIn,
} from "../../redux/auth/selectors";

const Header = () => {
  const isLoggedIn = useSelector(selectUserDataIsLoggedIn);
  const userData = useSelector(selectUserData);
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
      {isLoggedIn ? (
        <div>
          <span>Hello, {userData.name}</span>
          <button>Logout</button>
        </div>
      ) : (
        <>
          {" "}
          <NavLink className={linkStyle} to="/login">
            Login
          </NavLink>
          <NavLink className={linkStyle} to="/register">
            Register
          </NavLink>
        </>
      )}
    </header>
  );
};

export default Header;
