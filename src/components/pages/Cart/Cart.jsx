import { useDispatch, useSelector } from "react-redux";
import {
  calculateSubTotal,
  calculateGrandTodal,
  clearCart,
} from "../../../redux/slices/cartSlice";
import { useEffect, useState } from "react";
import CartItem from "./CartItem/CartItem";
import TotalPrice from "./TotalPrice/TotalPrice";
import styles from "./Cart.module.scss";
import OrderModal from "./OrderModal/OrderModal";

const Cart = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const cartItems = useSelector((state) => state.cart.cartItems);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateSubTotal());
    dispatch(calculateGrandTodal(5));
  }, [cartItems, dispatch]);

  if (cartItems.length === 0) {
    return <div className={styles.isEmpty}>Your cart is empty</div>;
  }

  const clearData = () => {
    dispatch(clearCart());
  };

  const sendData = () => {
    setModalIsOpen((prev) => !prev);
    console.log(cartItems);
  };

  return (
    <div className={styles.cart}>
      <h3>Checkout</h3>
      <div className={styles.cartContainer}>
        <div className={styles.cartItems}>
          {cartItems.map((product) => (
            <CartItem {...product} key={product.id} />
          ))}
        </div>
        <TotalPrice sendData={sendData} />
      </div>
      {modalIsOpen ? <OrderModal clearData={clearData} /> : ""}
    </div>
  );
};

export default Cart;
