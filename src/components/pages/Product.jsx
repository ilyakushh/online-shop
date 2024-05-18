import { useParams } from "react-router-dom";
import styles from "../../styles/Product.module.scss";
import { fetchProductById } from "../../utils/api";
import { useQuery } from "react-query";
import ReactStars from "react-rating-stars-component";
import { RiHeartLine } from "react-icons/ri";
import { useState } from "react";

const Product = () => {
  const [quantity, setQuantity] = useState(1);

  const { productId } = useParams();
  const {
    data: product,
    isLoading,
    isError,
  } = useQuery(["product", productId], () => fetchProductById(productId), {
    keepPreviousData: true,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error occurred!</div>;
  }

  const incrementQuantity = () => {
    if (quantity < 50) {
      setQuantity((prev) => prev + 1);
    }
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  return (
    <div className={styles.product}>
      <img src={product.image} alt="" />
      <div className={styles.desc}>
        <h4>{product.title}</h4>
        <p>{product.category}</p>
        <div className={styles.rating}>
          <ReactStars
            count={5}
            size={32}
            edit={false}
            isHalf={true}
            value={product.rating.rate}
          />
          <span>{`${product.rating.rate} (${product.rating.count} Reviews)`}</span>
        </div>
        <p>${product.price}</p>
        <span>{product.description}</span>
        <div className={styles.cart}>
          <div className={styles.quantity}>
            <span onClick={decrementQuantity}>-</span>
            <p>{quantity}</p>
            <span onClick={incrementQuantity}>+</span>
          </div>
          <button>Add to Cart</button>
          <div className={styles.favorites}>
            <RiHeartLine />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
