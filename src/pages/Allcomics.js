import { useState, useEffect } from "react";
import axios from "axios";

const Allcomics = ({ comics }) => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:3000/comics");
      setData(response.data);
      setIsLoading(false);
      console.log(response.data);
    };
    fetchData();
  }, []);
  return isLoading ? (
    <h1> En cours de chargements</h1>
  ) : (
    <div className="comics-app">
      {data.results.map((item, index) => {
        console.log(item.title);
        return (
          <>
            {item.title.indexOf(comics) !== -1 && (
              <div key={index} className="comics-description">
                <div className="comics-title">{item.title}</div>
                <div className="comics-image">
                  <img
                    src={`${item.thumbnail.path}/portrait_fantastic.jpg`}
                    alt="logo comics"
                  />
                </div>
                <div className="comics-intitulé">{item.description}</div>
              </div>
            )}
          </>
        );
      })}
    </div>
  );
};

export default Allcomics;
