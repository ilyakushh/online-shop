import { FaSearch } from "react-icons/fa";
import Select from "react-select";
import { options } from "../../../../data/constants";
import styles from "./ProductsSearch.module.scss";

const ProductsSearch = ({ handleSelectChange, setInputValue, inputValue }) => {
  return (
    <div className={styles.productsSearch}>
      <div className={styles.searchBar}>
        <FaSearch className={styles.icon} />
        <input
          type="text"
          placeholder="Enter product name…"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>
      <div className={styles.select}>
        <p>Sort by:</p>
        <Select
          options={options}
          classNamePrefix="react-select"
          className="w-52"
          onChange={handleSelectChange}
        />
      </div>
    </div>
  );
};

export default ProductsSearch;
