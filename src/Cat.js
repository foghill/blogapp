import React, { useState } from "react";
import "./App.css";

const Cat = () => {
  const [url, setUrl] = useState("");

  const fetch_data = () => {
    fetch("https://api.thecatapi.com/v1/images/search")
      .then((r) => r.json())
      .then((jsonRes) => {
        setUrl(jsonRes[0].url);
      });
  };
  console.log(url)

  return (
    <>
      <div className="header__main">
        <h1>Cats 🐈</h1>
      </div>
      <div className="cat__main">
        <img src={url} alt={""} className="cat__img" />
        <button className="cat__btn" onClick={fetch_data}>
          Generate !
        </button>
      </div>
    </>
  );
};

export default Cat;
