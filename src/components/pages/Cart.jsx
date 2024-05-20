import { useDispatch, useSelector } from "react-redux";
import { decrement, removeFromCart } from "../../redux/slices/cartSlice";
import { increment } from "../../redux/slices/cartSlice";
import { calculateSubTotal } from "../../redux/slices/cartSlice";
import { calculateGrandTodal } from "../../redux/slices/cartSlice";
import { IoClose } from "react-icons/io5";
import { useEffect } from "react";
import styles from "../../styles/Cart.module.scss";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const subTotal = useSelector((state) => state.cart.subTotal);
  const grandTotal = useSelector((state) => state.cart.grandTotal);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateSubTotal());
    dispatch(calculateGrandTodal(5));
  }, [cartItems, dispatch]);

  if (cartItems.length === 0) {
    return <div className={styles.isEmpty}>Your cart is empty</div>;
  }

  console.log(cartItems);
  return (
    <div className={styles.cart}>
      <h3>Checkout</h3>
      <div className={styles.cartContainer}>
        <div className={styles.cartItems}>
          {cartItems.map((product) => (
            <div className={styles.cartItem}>
              <img src={product.image} alt="" />
              <div className={styles.desc}>
                <h4>{product.title}</h4>
                <div className={styles.quantity}>
                  <span onClick={() => dispatch(decrement(product.id))}>-</span>
                  <p>{product.quantity}</p>
                  <span onClick={() => dispatch(increment(product.id))}>+</span>
                </div>
                <p>Size: {product.size}</p>
              </div>
              <p>${product.price}</p>
              <IoClose
                className={styles.icon}
                onClick={() => dispatch(removeFromCart(product.id))}
              />
            </div>
          ))}
        </div>
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
          <button>Proceed to Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
