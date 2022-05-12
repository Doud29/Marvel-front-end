import Marvel from "../img/Marvel.jpg";
import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { fa} from "@fortawesome/free-brand-svg-icons";

const Header = ({ comics, setComics }) => {
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
          <div className="link-header">
            {/* <FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon> */}
            Comics
          </div>
        </Link>
        <div className="link-header"> Favorites</div>
      </div>
    </div>
  );
};

export default Header;
