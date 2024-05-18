import { useQuery } from "react-query";
import { fetchCategories } from "../../utils/api";
import styles from "../../styles/Categories.module.scss";
import images from "../../data/categoryImages.json";
import { Link } from "react-router-dom";

const Categories = () => {
  const { data, isError, isLoading } = useQuery({
    queryKey: "categories",
    queryFn: fetchCategories,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error occurred!</div>;
  }

  console.log(data);
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
