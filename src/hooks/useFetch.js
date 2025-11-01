import { useEffect, useState } from "react";

function useFetch(url,method="GET") {
  let [data, setData] = useState(null);
  let [postData, setPostData] = useState(null);
  let [loading, setLoading] = useState(false);
  let [error, setError] = useState(null);

  useEffect(() => {
    let abortController = new AbortController();
    let signal = abortController.signal;

    setLoading(true);

    if(method==="POST"){
      console.log(postData);
    } 

    fetch(url, {
      signal,
      method
    })
      .then((res) => {
        if (!res.ok) {
          throw Error("som ething went wrong");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setError(null);
        setLoading(false);
      })
      .catch((e) => {
        setError(e.message);
      });

    //cleanup function
    return () => {
      abortController.abort();
    };
  }, [url,postData]);
  return {setPostData, data, loading, error };
}

export default useFetch;
