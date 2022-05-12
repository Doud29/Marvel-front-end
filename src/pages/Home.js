import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = ({ comics }) => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:3000/avengers");
      setData(response.data);
      setIsLoading(false);
      console.log(response.data);
    };

    fetchData();
  }, []);

  return isLoading ? (
    <div>
      <h1>En cours de chargement</h1>
    </div>
  ) : (
    <div className="home-app">
      {data.results.map((item, index) => {
        return (
          <>
            {item.name.indexOf(comics) !== -1 && (
              <Link
                key={index}
                to={`/Comics/${item._id}`}
                style={{ width: 220, margin: "auto", marginTop: 20 }}
              >
                <div className="fiche-avengers">
                  <div className="name-avengers">{item.name}</div>
                  <div className="photo-avengers">
                    {item.thumbnail.path !== null ? (
                      <img
                        src={`${item.thumbnail.path}/portrait_fantastic.jpg`}
                        alt="logo avengers"
                      />
                    ) : (
                      <img
                        src={`${item.thumbnail.path}.jpg`}
                        alt="logo avengers"
                      />
                    )}
                  </div>
                  <div className="description-avengers">{item.description}</div>
                </div>
              </Link>
            )}
          </>
        );
      })}
    </div>
  );
};

export default Home;
