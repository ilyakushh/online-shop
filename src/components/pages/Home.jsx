import { useQuery } from "react-query";
import { fetchGoods } from "../../utils/api";
import styles from "../../styles/Home.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const Home = () => {
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
              <h5>{data.title}</h5>
              <span>{data.category}</span>
              <p>${data.price}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Home;
