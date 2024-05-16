import { useQuery } from "react-query";
import { fetchGoods } from "../../utils/api";

const Home = () => {
  const { data, isError, isLoading } = useQuery({
    queryKey: "goods",
    queryFn: fetchGoods,
  });
  console.log(data);
  return <div>Home</div>;
};

export default Home;
