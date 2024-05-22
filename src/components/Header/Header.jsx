import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { useLocation } from "react-router-dom";
import { RiShoppingCart2Line } from "react-icons/ri";
import { navData, routes } from "../../data/constants.js";
import styles from "./Header.module.scss";
import SidebarMenu from "./SidebarMenu/SidebarMenu.jsx";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const cartItemsCount = useSelector((state) => state.cart.cartItems).length;

  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Link to="/">
          <h1>GlimmerGoods</h1>
        </Link>
      </div>
      <ul className={styles.nav}>
        {navData.map((menu) => (
          <Link
            to={routes[menu]}
            key={menu}
            className={location.pathname === routes[menu] ? styles.active : ""}
          >
            <li>{menu}</li>
          </Link>
        ))}
      </ul>

      <div className={styles.userTools}>
        <Link to="/cart">
          <RiShoppingCart2Line className={styles.icon} />
          {cartItemsCount > 0 && (
            <span className={styles.itemsCount}>{cartItemsCount}</span>
          )}
        </Link>
        <Link to="/login">
          <button>Login</button>
        </Link>
        <IoMenu className={styles.menu} onClick={toggleMenu} />
      </div>
      {isOpen ? <SidebarMenu toggleMenu={toggleMenu} /> : ""}
    </div>
  );
};

export default Header;
