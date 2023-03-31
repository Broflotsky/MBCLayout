import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../../firebase";

const Register = ({ handleSeterAuth }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        setError(true);
        // ..
      });
  };

  return (
    <div className="login">
      <h2>Registrate</h2>
      <form className="form-login" onSubmit={handleRegister}>
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
        <button type="submit">Registrate</button>
        {error && <span>¡Parece que tu correo ya esta registrado!</span>}
      </form>
      <span>
        ¿Ya tienes una cuenta?{" "}
        <span
          onClick={handleSeterAuth}
          style={{
            fontWeight: "bolder",
            cursor: "pointer",
          }}
        >
          Logueate.
        </span>
      </span>
    </div>
  );
};

export default Register;
