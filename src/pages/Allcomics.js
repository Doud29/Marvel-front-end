import { useState, useEffect } from "react";
import axios from "axios";

const Allcomics = ({ comics }) => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const limit = 10;
  const skip = limit * (page - 1);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `http://localhost:3000/comics?skip=${skip}&limit=${limit}`
      );
      setData(response.data);
      setIsLoading(false);
      console.log(response.data);
    };
    fetchData();
  }, [skip, limit, comics]);
  return isLoading ? (
    <h1> En cours de chargements</h1>
  ) : (
    <div className="bd-app">
      {data.results.map((item, index) => {
        console.log(item.title);
        return (
          <div key={index} className="bd-description">
            {item.title.indexOf(comics) !== -1 && (
              <div key={index} className="bd-description">
                <div className="bd-title">{item.title}</div>
                <div className="bd-image">
                  <img
                    src={`${item.thumbnail.path}/portrait_fantastic.jpg`}
                    alt="logo comics"
                  />
                </div>
                <div className="bd-intitule">{item.description}</div>
              </div>
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

export default Allcomics;
