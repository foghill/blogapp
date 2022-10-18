import { useState, useEffect } from "react";

const API = "http://localhost:8000/blogs/";

const useFetch = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    //use IIFE or Axios
    (async function () {
      let data = await fetch(API).then((res) => res.json()); //returns a promise amd converts to json
      setData(data);
      console.log("blogs", data);
      //user setter to setjson data to state
    })();
  }, []);
  //whenever API changes, change data in state

  return { data };
};

export default useFetch;
