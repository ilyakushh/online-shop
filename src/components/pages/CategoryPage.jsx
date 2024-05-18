import { Link, useParams } from "react-router-dom";
import styles from "../../styles/CategoryPage.module.scss";
import { fetchGoods } from "../../utils/api";
import { useQuery } from "react-query";
import ReactStars from "react-rating-stars-component";

const CategoryPage = () => {
  const { data, isError, isLoading } = useQuery({
    queryKey: "goods",
    queryFn: fetchGoods,
  });
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error occurred!</div>;
  }

  const params = useParams().slug;

  const categoryList = data.filter((item) => item.category === params);

  console.log(categoryList);

  return (
    <div className={styles.categoryPage}>
      {categoryList.map((product) => (
        <Link
          to={`/products/${product.id}`}
          key={product.id}
          className={styles.item}
        >
          <img src={product.image} alt="" />
          <div className={styles.itemDesc}>
            <h5>{product.title}</h5>
            <ReactStars
              count={5}
              size={24}
              edit={false}
              isHalf={true}
              value={product.rating.rate}
            />
            <p>${product.price}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CategoryPage;
