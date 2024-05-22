import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { Watch } from "react-loader-spinner";
import { fetchCategories } from "../../../utils/api";
import images from "../../../data/categoryImages.json";
import styles from "./Categories.module.scss";

const Categories = () => {
  const { data, isError, isLoading } = useQuery({
    queryKey: "categories",
    queryFn: fetchCategories,
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

  return (
    <div className={styles.categories}>
      {data.map((category, index) => (
        <Link to={category} key={category} className={styles.item}>
          <img src={images[index]} alt="" />
          <p>{category}</p>
        </Link>
      ))}
    </div>
  );
};

export default Categories;
