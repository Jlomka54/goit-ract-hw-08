import { useDispatch, useSelector } from "react-redux";
import css from "./UserMenu.module.css";
import { selectUserData } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";

const UserMenu = () => {
  const userData = useSelector(selectUserData);

  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
     <div className={css.greeting}>
  <span>Hello,</span>
  <span>{userData.name}</span>
</div>


      <button type="button" onClick={onLogout} className={css.button}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
