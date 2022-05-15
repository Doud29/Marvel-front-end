import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = ({ setUser }) => {
  //déclaration de nos states
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();
  //déclaration de notre route

  const handleSignup = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/signup", {
        username: username,
        email: email,
        password: password,
      });
      console.log(response.data);
      if (response.data === undefined) {
        alert("cet adresse email existe déjà, veuillez la changer");
      } else {
        setUser(response.data.token);
        navigate("/");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="signup-app">
      <h1>Sign up </h1>
      <form onSubmit={handleSignup}>
        <input
          value={username}
          type="text"
          placeholder="username"
          onChange={(event) => setUsername(event.target.value)}
        />
        <br />
        <input
          value={email}
          type="email"
          placeholder="email"
          onChange={(event) => setEmail(event.target.value)}
        />
        <br />
        <input
          value={password}
          type="password"
          placeholder="password"
          onChange={(event) => setPassword(event.target.value)}
        />
        <br />
        <input
          value={confirmpassword}
          type="password"
          placeholder="confirm your password"
          onChange={(event) => setConfirmPassword(event.target.value)}
        />
        <br />
        <input type="submit" value="S'inscrire" />
      </form>
    </div>
  );
};

export default Signup;
