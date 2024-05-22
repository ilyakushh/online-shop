import { useParams } from "react-router-dom";
import { Watch } from "react-loader-spinner";
import { useQuery } from "react-query";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addtoCart } from "../../../redux/slices/cartSlice";
import { sizes } from "../../../data/constants";
import { fetchProductById } from "../../../utils/api";
import ProductInfo from "./ProductInfo/ProductInfo";
import SizeSelector from "./SizeSelector/SizeSelector";
import ProductInteraction from "./ProductInteraction/ProductInteraction";
import CartNotification from "./CartNotification/CartNotification";
import styles from "./Product.module.scss";

const Product = () => {
  const [selectedSize, setSelectedSize] = useState(sizes[0]);

  const [isAddedToCart, setIsAddedToCart] = useState(false);

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
    return (
      <div className="spinner">
        <Watch
          visible={true}
          height="150"
          width="150"
          radius="48"
          color="black"
          ariaLabel="watch-loading"
        />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="error">
        Oops! Something went wrong. Please try again later.
      </div>
    );
  }

  const handleAddtoCart = () => {
    dispatch(
      addtoCart({
        id: product.id,
        title: product.title,
        price: product.price,
        size:
          product.category === `men's clothing` ||
          product.category === `women's clothing`
            ? selectedSize
            : "",
        image: product.image,
        quantity: quantity,
      })
    );
    setIsAddedToCart(true);
    setTimeout(() => setIsAddedToCart(false), 5000);
  };

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  const closeNotification = () => {
    setIsAddedToCart(false);
  };

  return (
    <div className={styles.product}>
      <img src={product.image} alt="" />
      <div className={styles.desc}>
        <ProductInfo {...product} />
        {product.category === `men's clothing` ||
        product.category === `women's clothing` ? (
          <SizeSelector
            selectedSize={selectedSize}
            sizes={sizes}
            handleSizeSelect={handleSizeSelect}
          />
        ) : (
          ""
        )}
        <ProductInteraction
          quantity={quantity}
          setQuantity={setQuantity}
          handleAddtoCart={handleAddtoCart}
        />
      </div>
      {isAddedToCart && (
        <CartNotification
          title={product.title}
          price={product.price}
          closeNotification={closeNotification}
        />
      )}
    </div>
  );
};

export default Product;
