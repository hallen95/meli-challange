import api from "./api";

export const fetchProducts = (query) => {
  return api.get(`api/items?q=${query}`);
};

export const fetchProductById = (id) => {
  return api.get(`api/items/${id}`);
};
