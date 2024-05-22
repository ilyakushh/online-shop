import { GiShoppingBag } from "react-icons/gi";
import { Link } from "react-router-dom";
import styles from "./OrderModal.module.scss";

const OrderModal = ({ clearData }) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.orderModal}>
        <div className={styles.icon}>
          <GiShoppingBag />
        </div>

        <p>Your order is confirmed</p>

        <span>
          Thanks for shopping! your order hasn't shipped yet, but we will send
          you and email when it done.
        </span>

        <Link to="/">
          <button onClick={clearData}>back to home</button>
        </Link>
      </div>
    </div>
  );
};

export default OrderModal;
