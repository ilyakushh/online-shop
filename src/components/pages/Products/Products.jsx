import { useQuery } from "react-query";
import { useEffect, useState, useMemo } from "react";
import { Watch } from "react-loader-spinner";
import { fetchGoods } from "../../../utils/api";
import ProductsSearch from "./ProductsSearch/ProductsSearch";
import ProductCard from "../../Reusable/ProductCard/ProductCard";
import styles from "./Products.module.scss";

const Products = () => {
  const [sortedData, setSortedData] = useState([]);

  const [inputValue, setInputValue] = useState("");

  const { data, isError, isLoading } = useQuery({
    queryKey: "goods",
    queryFn: fetchGoods,
    keepPreviousData: true,
  });

  useEffect(() => {
    if (data) {
      setSortedData(data);
    }
  }, [data]);

  const filteredProducts = useMemo(() => {
    return sortedData.filter((product) =>
      product.title.toLowerCase().includes(inputValue.toLowerCase())
    );
  }, [inputValue, sortedData]);

  if (isLoading) {
    return (
      <div className="spinner">
        <Watch
          visible={true}
          height="150"
          width="150"
          radius="48"
          color="black"
          ariaLabel="watch-loading"
        />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="error">
        Oops! Something went wrong. Please try again later.
      </div>
    );
  }

  const sortData = (option) => {
    if (!data) return [];
    switch (option.value) {
      case "pricetolow":
        return [...data].sort((a, b) => b.price - a.price);
      case "pricetohigh":
        return [...data].sort((a, b) => a.price - b.price);
      case "toprated":
        return [...data].sort((a, b) => b.rating.rate - a.rating.rate);
      default:
        return data;
    }
  };

  const handleSelectChange = (selectedOption) => {
    setSortedData(sortData(selectedOption));
  };

  return (
    <div className={styles.products}>
      <ProductsSearch
        handleSelectChange={handleSelectChange}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />

      <div className={styles.productsWrapper}>
        {filteredProducts.map((product) => (
          <ProductCard {...product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default Products;
