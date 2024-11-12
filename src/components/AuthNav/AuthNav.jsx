import clsx from "clsx";
import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";

const AuthNav = () => {

  const linkStyle = ({ isActive }) =>
    clsx({
      [css.link]: true,
      [css.linkActive]: isActive,
    });
  return (
    <div>
      <div className={css.userMenu}>
        <NavLink className={linkStyle} to="/login">
          Login
        </NavLink>
        <NavLink className={linkStyle} to="/register">
          Register
        </NavLink>
      </div>
    </div>
  );
};

export default AuthNav;
