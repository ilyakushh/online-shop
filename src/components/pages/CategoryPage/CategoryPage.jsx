import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { Watch } from "react-loader-spinner";
import { fetchGoods } from "../../../utils/api";
import ProductCard from "../../Reusable/ProductCard/ProductCard";
import styles from "./CategoryPage.module.scss";

const CategoryPage = () => {
  const { data, isError, isLoading } = useQuery({
    queryKey: "goods",
    queryFn: fetchGoods,
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

  const params = useParams().slug;

  const categoryList = data.filter((item) => item.category === params);

  return (
    <div className={styles.categoryPage}>
      {categoryList.map((product) => (
        <ProductCard {...product} key={product.id} />
      ))}
    </div>
  );
};

export default CategoryPage;
