import { Link } from "react-router-dom";
import image from "../../../image/7906236_3804933.svg";
import styles from "./NotFound.module.scss";

const NotFound = () => {
  return (
    <div className={styles.notfound}>
      <img src={image} alt="" />
      <Link to="/">
        <button>go home</button>
      </Link>
    </div>
  );
};

export default NotFound;
