import { Link } from "react-router-dom";
import { RiShoppingCart2Line } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import { navData, routes } from "../../../data/constants";
import styles from "./SidebarMenu.module.scss";

const SidebarMenu = ({ toggleMenu }) => {
  return (
    <div className={styles.sidebarMenu}>
      <Link to="/cart" onClick={toggleMenu}>
        <RiShoppingCart2Line className={styles.icon} />
      </Link>
      {navData.map((menu) => (
        <Link to={routes[menu]} key={menu} onClick={toggleMenu}>
          <p>{menu}</p>
        </Link>
      ))}
      <Link to="/login" onClick={toggleMenu}>
        <button>Login</button>
      </Link>
      <IoClose className={styles.closeMenuIcon} onClick={toggleMenu} />
    </div>
  );
};

export default SidebarMenu;
