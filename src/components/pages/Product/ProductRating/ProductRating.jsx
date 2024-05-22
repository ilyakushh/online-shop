import ReactStars from "react-rating-stars-component";
import styles from "./ProductRating.module.scss";

const ProductRating = ({ rating }) => {
  return (
    <div className={styles.productRating}>
      <ReactStars
        count={5}
        size={32}
        edit={false}
        isHalf={true}
        value={rating.rate}
      />
      <span>{`${rating.rate} (${rating.count} Reviews)`}</span>
    </div>
  );
};

export default ProductRating;
