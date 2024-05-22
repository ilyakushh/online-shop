import styles from "./SizeSelector.module.scss";

const SizeSelector = ({ sizes, selectedSize, handleSizeSelect }) => {
  return (
    <div className={styles.sizeSelector}>
      <p>Size</p>
      <div className={styles.sizes}>
        {sizes.map((size) => (
          <p
            onClick={() => handleSizeSelect(size)}
            className={selectedSize === size ? styles.active : ""}
            key={size}
          >
            {size}
          </p>
        ))}
      </div>
    </div>
  );
};

export default SizeSelector;
