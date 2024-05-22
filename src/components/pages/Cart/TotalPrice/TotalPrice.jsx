import { useSelector } from "react-redux";
import styles from "./TotalPrice.module.scss";

const TotalPrice = ({ sendData }) => {
  const subTotal = useSelector((state) => state.cart.subTotal);

  const grandTotal = useSelector((state) => state.cart.grandTotal);
  return (
    <div className={styles.totalPrice}>
      <div className={styles.subtotal}>
        <p>Subtotal</p>
        <span>${subTotal.toFixed(2)}</span>
      </div>

      <div className={styles.promoDeliveryInfo}>
        <span>Enter discount code</span>

        <div className={styles.promo}>
          <input type="text" placeholder="FLAT50" />
          <button>Apply</button>
        </div>

        <div className={styles.delivery}>
          <p>Delivery charge</p>
          <span>$5.00</span>
        </div>
      </div>

      <div className={styles.grandTotal}>
        <p>Grand Total</p>
        <span>${grandTotal.toFixed(2)}</span>
      </div>

      <button onClick={sendData}>Place Order</button>
    </div>
  );
};

export default TotalPrice;
