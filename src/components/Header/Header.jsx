import css from "./Header.module.css";
import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";

import { NavLink } from "react-router-dom";
import {
  selectUserData,
  selectUserDataIsLoggedIn,
} from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";

const Header = () => {
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout());
  };

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
      {isLoggedIn && (
        <NavLink className={linkStyle} to="/contacts">
          Phonebook
        </NavLink>
      )}

      {isLoggedIn ? (
        <div className={css.userMenu}>
          <span className={css.span}>Hello, {userData.name}</span>
          <button type="button" onClick={onLogout} className={css.button}>
            Logout
          </button>
        </div>
      ) : (
        <div className={css.userMenu}>
          <NavLink className={linkStyle} to="/login">
            Login
          </NavLink>
          <NavLink className={linkStyle} to="/register">
            Register
          </NavLink>
        </div>
      )}
    </header>
  );
};

export default Header;
