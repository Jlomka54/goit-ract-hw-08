import { useSelector } from "react-redux";
import { selectUserDataIsLoggedIn } from "../../redux/auth/selectors";
import { Navigate } from "react-router";

const PrivateRoute = ({ component, redirectTo = "/login" }) => {
  const isLoggedIn = useSelector(selectUserDataIsLoggedIn);
  return isLoggedIn ? component : <Navigate to={redirectTo} replace />;
};

export default PrivateRoute;
