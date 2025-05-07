import { useSelector } from "react-redux";
import c from "./HomePage.module.css"
import { selectUserDataIsLoggedIn } from "../../redux/auth/selectors";
import AuthNav from "../../components/AuthNav/AuthNav";
const HomePage = () => {
  const isLogedIn = useSelector(selectUserDataIsLoggedIn)
  return <div className={c.homePage}>
    {isLogedIn ? (<p>Enjoy using the phone book!</p>) : (
      <>
      <p >To access the functionality, you need to log in to your account</p>
      <div className={c.buttons}>
            <AuthNav></AuthNav>
          </div>
          </>
    ) }
  </div>;
};

export default HomePage;
