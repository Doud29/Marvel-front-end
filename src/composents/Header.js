import Marvel from "../img/Marvel";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header-app">
      {/* image logo marvel */}
      <div className="logo">
        <img src={Marvel} alt="logo-marvel" />
      </div>
      <div className="menu-header">
        <div className="liens-personnage"> Personnages</div>
        <div className="comics-link"> Comics</div>
        <div className="favorites-link"> Favorites</div>
      </div>
    </div>
  );
};

export default Header;
