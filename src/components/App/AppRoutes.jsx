import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import Categories from "../pages/Categories/Categories";
import NotFound from "../pages/NotFound/NotFound";
import Login from "../pages/Login/Login";
import CategoryPage from "../pages/CategoryPage/CategoryPage";
import Products from "../pages/Products/Products";
import Product from "../pages/Product/Product";
import Cart from "../pages/Cart/Cart";
import Signup from "../pages/SignUp/Signup";
import ForgotPassword from "../pages/ForgotPassword/ForgotPassword ";

const AppRouter = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/products" element={<Products />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/products/:productId" element={<Product />} />
      <Route path="/categories/:slug" element={<CategoryPage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;
