import Home from "./pages/Home";
import Categories from "./pages/Categories";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import { Route, Routes } from "react-router-dom";
import CategoryPage from "./pages/CategoryPage";
import Products from "./pages/Products";
import Product from "./pages/Product";

const AppRouter = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/products" element={<Products />} />
      <Route path="/login" element={<Login />} />
      <Route path="/products/:productId" element={<Product />} />
      <Route path="/categories/:slug" element={<CategoryPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;
