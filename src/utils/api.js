import axios from "axios";

export const fetchGoods = () => {
  return axios
    .get("https://fakestoreapi.com/products/")
    .then((response) => response.data);
};
