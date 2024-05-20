import { useParams } from "react-router-dom";
import styles from "../../styles/Product.module.scss";
import { fetchProductById } from "../../utils/api";
import { useQuery } from "react-query";
import ReactStars from "react-rating-stars-component";
import { RiHeartLine } from "react-icons/ri";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addtoCart } from "../../redux/slices/cartSlice";
import { sizes } from "../../data/constants";

const Product = () => {
  const [selectedSize, setSelectedSize] = useState(sizes[0]);
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();

  const { productId } = useParams();

  const {
    data: product,
    isLoading,
    isError,
  } = useQuery(["product", productId], () => fetchProductById(productId), {
    keepPreviousData: true,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error occurred!</div>;
  }

  const handleAddtoCart = () => {
    dispatch(
      addtoCart({
        id: product.id,
        title: product.title,
        price: product.price,
        size: selectedSize,
        image: product.image,
        quantity: quantity,
      })
    );
  };

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  return (
    <div className={styles.product}>
      <img src={product.image} alt="" />
      <div className={styles.desc}>
        <h4>{product.title}</h4>
        <p>{product.category}</p>
        <div className={styles.rating}>
          <ReactStars
            count={5}
            size={32}
            edit={false}
            isHalf={true}
            value={product.rating.rate}
          />
          <span>{`${product.rating.rate} (${product.rating.count} Reviews)`}</span>
        </div>
        <p>${product.price}</p>
        <span>{product.description}</span>
        <div className={styles.size}>
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
        <div className={styles.cart}>
          <div className={styles.quantity}>
            <span onClick={() => quantity > 1 && setQuantity(quantity - 1)}>
              -
            </span>
            <p>{quantity}</p>
            <span onClick={() => quantity < 50 && setQuantity(quantity + 1)}>
              +
            </span>
          </div>
          <button onClick={handleAddtoCart}>Add to Cart</button>
          <div className={styles.favorites}>
            <RiHeartLine />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
