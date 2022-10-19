import React, {useState} from "react";
import "./App.css";

const Cat = () => {
  const [url, setUrl] = useState("");

  function fetch_data() {
    fetch("https://api.thecatapi.com/v1/images/search")
      .then(
        (res) => {
          if (res.ok) {
            return res.json();
          }
          throw new Error("Request Failed");
        },
        (networkError) => console.log(networkError.message)
      )
      .then((jsonRes) => {
        setUrl(jsonRes[0].url);
      });
  }

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
