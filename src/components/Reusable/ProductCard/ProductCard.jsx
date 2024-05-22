import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import styles from "./ProductCard.module.scss";

const ProductCard = ({ id, image, title, rating, price }) => {
  return (
    <Link to={`/products/${id}`} key={id} className={styles.productCard}>
      <img src={image} alt="" />
      <div className={styles.itemDesc}>
        <h5>{title}</h5>
        <ReactStars
          count={5}
          size={24}
          edit={false}
          isHalf={true}
          value={rating.rate}
        />
        <p>${price.toFixed(2)}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
