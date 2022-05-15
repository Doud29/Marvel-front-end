import Marvel from "../img/Marvel.jpg";
import { Link } from "react-router-dom";

const Header = ({ token, comics, setComics }) => {
  const handSummit = (event) => {
    event.preventDefault();
  };
  return (
    <div className="header-app">
      <img src={Marvel} alt="logo-marvel" />
      <form className="searchbar" onSubmit={handSummit}>
        <input
          type="text"
          placeholder="What are you looking for?"
          onChange={(event) => {
            setComics(event.target.value);
          }}
          value={comics}
        />
      </form>

      <div className="menu-header">
        <Link className="link-header" to="/">
          <div className="link-header"> Personnages</div>
        </Link>
        <Link className="link-header" to="/Allcomics">
          <div className="link-header">Comics</div>
        </Link>
        {token === null ? (
          <div style={{ opacity: 0.5 }} className="link-header">
            {" "}
            Favoris
          </div>
        ) : (
          <Link className="link-header" to="/Favoris">
            {" "}
            <div className="link-header">Favoris</div>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
