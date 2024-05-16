import axios from "axios";

export const fetchGoods = () => {
  return axios
    .get("https://api.escuelajs.co/api/v1/products")
    .then((response) => response.data);
};
