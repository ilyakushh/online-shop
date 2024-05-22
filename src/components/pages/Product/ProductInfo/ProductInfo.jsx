import ProductRating from "../ProductRating/ProductRating";
import styles from "./ProductInfo.module.scss";

const ProductInfo = ({ title, category, price, description, rating }) => {
  return (
    <div className={styles.productInfo}>
      <h4>{title}</h4>
      <p>{category}</p>
      <ProductRating rating={rating} />
      <p>${price.toFixed(2)}</p>
      <span>{description}</span>
    </div>
  );
};

export default ProductInfo;
