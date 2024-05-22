import { IoClose } from "react-icons/io5";
import { useDispatch } from "react-redux";
import {
  decrement,
  removeFromCart,
  increment,
} from "../../../../redux/slices/cartSlice";
import styles from "./CartItem.module.scss";

const CartItem = ({ image, title, quantity, size, price, id }) => {
  const dispatch = useDispatch();
  return (
    <div className={styles.cartItem}>
      <img src={image} alt="" />
      <div className={styles.desc}>
        <h4>{title}</h4>
        <div className={styles.quantity}>
          <span onClick={() => dispatch(decrement(id))}>-</span>
          <p>{quantity}</p>
          <span onClick={() => dispatch(increment(id))}>+</span>
        </div>
        {size ? <p>Size: {size}</p> : ""}
      </div>
      <p>${price.toFixed(2)}</p>
      <IoClose
        className={styles.icon}
        onClick={() => dispatch(removeFromCart(id))}
      />
    </div>
  );
};

export default CartItem;
