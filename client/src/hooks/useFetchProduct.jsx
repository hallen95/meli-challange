import { useState, useEffect } from "react";
import { fetchProductById, fetchProducts } from "../services/productService";

const useFetchProducts = ({ id, query }) => {
  const [data, setData] = useState(id ? null : []);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        let response;
        if (id) {
          response = await fetchProductById(id);
          setData(response.data.item);
        } else if (query) {
          response = await fetchProducts(query);
          setData(response.data);
        } else {
          throw new Error("No search parameters provided");
        }
      } catch (err) {
        console.error("Error fetching data:", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id, query]);

  return { data, loading, error };
};

export default useFetchProducts;
