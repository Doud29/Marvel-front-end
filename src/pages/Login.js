import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const Handlesubmit = async (event) => {
    event.preventdefault();

    try {
      const response = await axios.post("http://localhost:3000/login", {
        email: email,
        password: password,
      });

      console.log(response.data.token);

      if (response.data === undefined) {
        alert(
          "vous devez créer un compte car votre mail ou votre password n'est pas valide"
        );
        // navigate("/Signup");
      } else {
        setUser(response.data.token);
        // navigate("/");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="signup-app">
      <h1>Login</h1>
      <form onSubmit={Handlesubmit}>
        <input
          value={email}
          placeholder="email"
          type="email"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <br />

        <input
          value={password}
          placeholder="password"
          type="password"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <br />

        <input type="submit" value="Se connecter" />
      </form>
    </div>
  );
};

export default Login;
