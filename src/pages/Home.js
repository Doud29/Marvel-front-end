import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const heart = <FontAwesomeIcon icon={faHeart} />;

const Home = ({ comics }) => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const limit = 10;
  const skip = limit * (page - 1);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `http://localhost:3000/avengers?skip=${skip}&limit=${limit}`
      );
      setData(response.data);
      setIsLoading(false);
      // console.log(response.data);
    };

    fetchData();
  }, [skip, limit]);

  return isLoading ? (
    <div>
      <h1>En cours de chargement</h1>
    </div>
  ) : (
    <div className="home-app">
      {data.results.map((item, index) => {
        return (
          <div key={index}>
            {item.name.indexOf(comics) !== -1 && (
              <Link
                state={{
                  description: item.description,
                  name: item.name,
                }}
                to={`/Comics/${item._id}`}
                style={{
                  width: 220,
                  margin: "auto",
                  marginTop: 20,
                  textDecoration: "none",
                }}
              >
                <div className="fiche-avengers">
                  <div className="name-avengers">
                    {item.name} {heart}
                  </div>
                  <div className="photo-avengers">
                    {item.thumbnail.name !== "Beef" ||
                    "Battering Ram" ||
                    "Batroc the Leaper" ||
                    "Aegis (Trey Rollins)" ? (
                      <img
                        src={`${item.thumbnail.path}/portrait_fantastic.${item.thumbnail.extension}`}
                        alt="logo avengers"
                      />
                    ) : (
                      <img
                        src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                        alt="logo avengers"
                      />
                    )}
                  </div>
                </div>
              </Link>
            )}
          </div>
        );
      })}
      {page === 1 ? (
        <div className="Bouton">
          {" "}
          <div
            className="bouton"
            onClick={() => {
              setPage(page + 1);
            }}
          >
            page suivante
          </div>{" "}
        </div>
      ) : (
        <div className="Bouton">
          <div
            className="bouton"
            onClick={() => {
              setPage(page - 1);
            }}
          >
            page précédente
          </div>
          <div
            className="bouton"
            onClick={() => {
              setPage(page + 1);
            }}
          >
            page suivante
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
