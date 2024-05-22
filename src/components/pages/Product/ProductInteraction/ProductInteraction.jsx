import { RiHeartLine } from "react-icons/ri";
import styles from "./ProductInteraction.module.scss";

const ProductInteraction = ({ quantity, setQuantity, handleAddtoCart }) => {
  return (
    <div className={styles.productInteraction}>
      <div className={styles.quantity}>
        <span onClick={() => quantity > 1 && setQuantity(quantity - 1)}>-</span>
        <p>{quantity}</p>
        <span onClick={() => quantity < 50 && setQuantity(quantity + 1)}>
          +
        </span>
      </div>
      <button onClick={handleAddtoCart}>Add to Cart</button>
      <div className={styles.favorites}>
        <RiHeartLine />
      </div>
    </div>
  );
};

export default ProductInteraction;
