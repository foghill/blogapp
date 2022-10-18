import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    //use IIFE or Axios
    (async function () {
      let data = await fetch(url).then((res) => res.json()); //returns a promise amd converts to json
      setData(data);
      console.log("blogs", data);
      //user setter to setjson data to state
    })();
  }, [url]);
  //whenever API changes, change data in state

  return { data };
};

export default useFetch