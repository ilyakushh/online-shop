import styles from "../styles/App.module.scss";
import Header from "./Header";
import AppRoutes from "./AppRoutes.jsx";

const App = () => {
  return (
    <div className={styles.app}>
      <div className="container">
        <Header />
        <AppRoutes />
      </div>
    </div>
  );
};

export default App;
