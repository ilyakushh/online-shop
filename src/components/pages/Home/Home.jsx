import { useQuery } from "react-query";
import { Watch } from "react-loader-spinner";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import { fetchGoods } from "../../../utils/api";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import styles from "./Home.module.scss";

const Home = () => {
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

  const topRatingGoods = data
    .sort((a, b) => b.rating.rate - a.rating.rate)
    .slice(0, 5);

  return (
    <div className={styles.home}>
      <h2>Top 5 Customer Picks</h2>
      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
      >
        {topRatingGoods.map((data) => (
          <SwiperSlide key={data.id} className={styles.item}>
            <img src={data.image} alt="" />
            <div className={styles.itemDesc}>
              <Link to={`/products/${data.id}`}>
                <h5>{data.title}</h5>
              </Link>
              <Link to={`/categories/${data.category}`}>
                <span>{data.category}</span>
              </Link>
              <p>${data.price}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Home;
