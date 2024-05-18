import styles from "../../styles/Products.module.scss";
import { useQuery } from "react-query";
import { fetchGoods } from "../../utils/api";
import { Link } from "react-router-dom";
import { options } from "../../data/constants";
import Select from "react-select";
import { useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";

const Products = () => {
  const [sortedData, setSortedData] = useState([]);

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

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error occurred!</div>;
  }

  const sortData = (option) => {
    if (!data) return [];
    switch (option.value) {
      case "pricetolow":
        return [...data].sort((a, b) => b.price - a.price);
      case "precetohigh":
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
      <div className={styles.select}>
        <p>Sort by:</p>
        <Select
          options={options}
          classNamePrefix="react-select"
          className="w-52"
          onChange={handleSelectChange}
        />
      </div>
      <div className={styles.productsWrapper}>
        {sortedData.map((product) => (
          <Link
            to={`/products/${product.id}`}
            key={product.id}
            className={styles.item}
          >
            <img src={product.image} alt="" />
            <div className={styles.itemDesc}>
              <h5>{product.title}</h5>
              <ReactStars
                count={5}
                size={24}
                edit={false}
                isHalf={true}
                value={product.rating.rate}
              />
              <p>${product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Products;
