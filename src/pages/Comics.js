import React from "react";

// Use params permet de recuperer l'id de Home
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Comics = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`http://localhost:3000/comics/${id}`);
      setData(response.data);
      setIsLoading(false);
      console.log(response.data);
    };
    fetchData();
  }, [id]);

  return isLoading ? (
    <h1> En cours de chargements</h1>
  ) : (
    <div className="comics-app">
      {data.comics.map((item, index) => {
        return (
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
        );
      })}
    </div>
  );
};

export default Comics;
