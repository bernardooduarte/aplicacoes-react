import { useState, useEffect, useCallback } from "react";

// 5 - refatorando post

// 4 - custom hook
export const useFetch = (url) => {
  const [data, setData] = useState(null);

  // 5 - refatorando post
  const [config, setConfig] = useState(null);
  const [method, setMethod] = useState(null);
  const [callFetch, setCallFetch] = useState(false);

  // 6 - loading
  const [loading, setLoading] = useState(false);

  // 7 - tratando erros
  const [error, setError] = useState(null);

  // 8 - removendo produtos

  const removeProduct = useCallback(async (id) => {
    try {
      const res = await fetch(`${url}/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        throw new Error("Não foi possível deletar o produto!");
      }

      setCallFetch((prev) => !prev);
    } catch (error) {
      setError("Erro ao remover o produto.");
    }
  }, [url]);


  const httpConfig = (data, method) => {
    if (method === "POST") {
      setConfig({
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    }

    setMethod(method);
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(url);

        if (!res.ok) {
          throw new Error("Erro ao buscar os dados!");
        }

        const json = await res.json();
        setData(json);
      } catch (error) {
        setError("Houve um erro ao carregar os dados!");
      }
      setLoading(false);
    };

    fetchData();
  }, [url, callFetch]);

  // 5 -refatorando post
  useEffect(() => {
    const httpRequest = async () => {
      if (method === "POST") {
        let fetchOptions = [url, config];

        const res = await fetch(...fetchOptions);

        const json = await res.json();

        setCallFetch(json);
      }

      if (method === "DELETE" && config?.id) {
        await removeProduct(config.id);
      }
    };

    httpRequest();
  }, [config, method, url, removeProduct]);


  return { data, httpConfig, loading, error, removeProduct };
};
