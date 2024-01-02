import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [loading, setLoading] = useState(null);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    const fetchData = async () => {
      setLoading(true);

      try {
        let res = await fetch(url);
        if (!res.ok) {
          let err = new Error("La peticion ha fallado");
          err.status = res.status || "00";
          err.statusText = res.statusText || "Ocurrio un Error";
          throw err;
        }
        let json = await res.json();

        if (!signal.aborted) {
          setData(json);
          setError(null);
        }
      } catch (error) {
        if (!signal.aborted) {
          setError(error);
          setData(null);
        }
        //si la signal no es abort el error es de la peticion
      } finally {
        setLoading(false);
      }
    };
    fetchData();

    return () => {
      abortController.abort();
    };
  }, [url]);

  return {
    loading,
    data,
    error,
  };
};
