import "./App.scss";

//-------------------------------- Composant -----------------------------//
import Header from "./composents/Header";
import Connexion from "./composents/Connexion";
//-------------------------------- Packages -----------------------------//

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Cookies from "js-cookie";

//---------------------------------- Pages -----------------------------//
import Home from "./pages/Home";
import Comics from "./pages/Comics";
import Allcomics from "./pages/Allcomics";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Favoris from "./pages/Favoris";

function App() {
  //state pour la search bar qu'il faudra envoyer en props à notre input et à nos pages
  const [comics, setComics] = useState("");
  const [token, setToken] = useState(Cookies.get("userToken") || null);

  const setUser = (token) => {
    if (token !== null) {
      //Action de connexion
      console.log("Création d'un cookie userTOken");
      Cookies.set("userToken", token, { expires: 10 });
    } else {
      //action de déconnexion
      console.log("Suppression d'un cookie userToken");
      Cookies.remove("userToken");
    }
    setToken(token);
  };
  return (
    <div className="App">
      <Router>
        <Header token={token} comics={comics} setComics={setComics} />
        <Connexion token={token} setUser={setUser} />
        <Routes>
          <Route path="/" element={<Home comics={comics} />} />
          <Route path="/comics/:id" element={<Comics />} />
          <Route path="/Allcomics" element={<Allcomics comics={comics} />} />
          <Route path="/Signup" element={<Signup setUser={setUser} />} />
          <Route path="/Login" element={<Login setUser={setUser} />} />
          <Route path="/Favoris" element={<Favoris />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
