import axios from "axios";

export const fetchGoods = () => {
  return axios
    .get("https://fakestoreapi.com/products/")
    .then((response) => response.data);
};

export const fetchCategories = () => {
  return axios
    .get("https://fakestoreapi.com/products/categories")
    .then((response) => response.data);
};

export const fetchProductById = (productId) => {
  return axios
    .get(`https://fakestoreapi.com/products/${productId}`)
    .then((response) => response.data);
};
