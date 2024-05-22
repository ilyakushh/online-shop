import styles from "./App.module.scss";
import Header from "../Header/Header.jsx";
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
