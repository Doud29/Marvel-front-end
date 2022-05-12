import "./App.scss";

//-------------------------------- Composant -----------------------------//
import Header from "./composents/Header";
//-------------------------------- Packages -----------------------------//

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//---------------------------------- Pages -----------------------------//
import Home from "./pages/Home";
import Comics from "./pages/Comics";
import Allcomics from "./pages/Allcomics";
import { useState } from "react";

function App() {
  //state pour la search bar qu'il faudra envoyer en props à notre input et à nos pages
  const [comics, setComics] = useState("");

  return (
    <div className="App">
      {/* toujours réaliser la démarche ci-dessous */}
      {/* on englobe toute notre naviguation dans un composant Router (Router = Browser Router) */}
      {/* on déclare l'existance d'une naviguation : d'un router */}
      <Router>
        <Header comics={comics} setComics={setComics} />
        {/* on englobe ensuite dans routes qui va nous permettre de mettre en place route  */}
        <Routes>
          {/* ci-dessous : nous Route qui feront appelle à nos pages */}
          {/* path : correspond au chemin */}
          {/*  sa props est element qui aura pour composant product */}
          <Route path="/" element={<Home comics={comics} />} />
          <Route path="/comics/:id" element={<Comics />} />
          <Route path="/Allcomics" element={<Allcomics comics={comics} />} />
          {/* la route / me renvoie le composant home */}
          {/* <Route path="/product/:id" element={<Product token={token} />} /> */}
          {/* la route / me renvoie le composant Product */}
          {/* ID :  la route /product s'attend à recevoir en params un iD. Cela signifique que la route doit être capable de lui en envoyer un */}
          {/* <Route path="/Publish" element={<Publish token={token} />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
