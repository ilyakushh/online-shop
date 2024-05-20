import styles from "../styles/Header.module.scss";
import { navData, routes } from "../data/constants.js";
import { RiSearchLine, RiShoppingCart2Line } from "react-icons/ri";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Link to="/">
          <h1>StyleSpoke</h1>
        </Link>
      </div>
      <ul className={styles.nav}>
        {navData.map((menu) => (
          <Link to={routes[menu]} key={menu}>
            <li>{menu}</li>
          </Link>
        ))}
      </ul>
      <div className={styles.userTools}>
        <RiSearchLine className={styles.icon} />
        <Link to="/cart">
          <RiShoppingCart2Line className={styles.icon} />
        </Link>
        <Link to="/login">
          <button>Login</button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
