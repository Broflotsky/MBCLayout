import { useContext, useState } from "react";
import "./Login.scss";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { PathRoutes } from "../../utils/path.utils";

const Login = ({ handleSeterAuth }) => {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch({ type: "LOGIN", payload: user });
        setTimeout(() => {
          navigate(PathRoutes.DASHBOARD);
        }, 5000);
      })
      .catch((error) => {
        setError(error);
      });
  };

  return (
    <div className="login">
      <h2>Login</h2>
      <form className="form-login" onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Correo electrónico"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Acceder</button>
        {error && <span>Correo o contraseña incorrectos.</span>}
      </form>
      <span>
        ¿No tienes una cuenta?{" "}
        <span
          onClick={handleSeterAuth}
          style={{
            fontWeight: "bolder",
            cursor: "pointer",
          }}
        >
          Registrate.
        </span>
      </span>
    </div>
  );
};

export default Login;
