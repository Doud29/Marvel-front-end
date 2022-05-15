import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Signup = ({ token, setUser }) => {
  const navigate = useNavigate();
  return (
    <div className="connexion-app">
      {token === null ? (
        <>
          <div className="bouton-connexion">
            <Link
              style={{ textDecoration: "none", color: "red", fontWeight: 600 }}
              to="/signup"
            >
              S'inscrire
            </Link>
          </div>
          <div className="bouton-connexion">
            <Link
              style={{ textDecoration: "none", color: "red", fontWeight: 600 }}
              to="/login"
            >
              Se connecter
            </Link>
          </div>
        </>
      ) : (
        <div
          className="bouton-connexion"
          onClick={() => {
            setUser(null);
            navigate("/");
          }}
        >
          <span>Se déconnecter</span>
        </div>
      )}
    </div>
  );
};

export default Signup;
