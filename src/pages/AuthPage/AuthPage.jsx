import { useContext, useEffect, useState } from "react";
import Login from "../../components/Login/Login";
import Register from "../../components/Register/Register";
import "./AuthPage.scss";
import Logo from "../../images/logosolutions.png";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { PathRoutes } from "../../utils/path.utils";

const AuthPage = () => {
  const [step, setStep] = useState(true);
  const { currentUser } = useContext(AuthContext);
  const handleSeterAuth = () => {
    setStep(!step);
  };
  const navigate = useNavigate();

  useEffect(() => {
    currentUser && navigate(PathRoutes.DASHBOARD);
  }, []);

  return (
    <div className={step ? "authpage" : "authpage-reverse"}>
      <div className="left">
        {step ? (
          <Login handleSeterAuth={handleSeterAuth} />
        ) : (
          <Register handleSeterAuth={handleSeterAuth} />
        )}
      </div>
      <div className="right">
        <img src={Logo} alt="logo to solutions dashboard" />
        <h2>Advanced logistics for your company</h2>
      </div>
    </div>
  );
};

export default AuthPage;
