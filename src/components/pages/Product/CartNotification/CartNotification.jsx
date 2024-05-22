import { IoClose } from "react-icons/io5";
import styles from "./CartNotification.module.scss";

const CartNotification = ({ title, price, closeNotification }) => {
  return (
    <div className={styles.cartNotification}>
      <h4>Product added to cart successfully!</h4>
      <p>
        “{title} has been added to your cart.
        <strong> Price: ${price.toFixed(2)}</strong>.
      </p>
      <IoClose className={styles.closeIcon} onClick={closeNotification} />
    </div>
  );
};

export default CartNotification;
