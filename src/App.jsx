import { Route, Routes } from "react-router";
import Layout from "./components/Layout/Layout";
import { lazy, useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchPizzas } from "./redux/pizzas/operations";
import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute";
import { fetchOrders } from "./redux/orders/operations";

const Home = lazy(() => import("./pages/Home/Home"));
const Catalog = lazy(() => import("./pages/Catalog/Catalog"));
const Favorite = lazy(() => import("./pages/Favorite/Favorite"));
const ShoppingList = lazy(() => import("./pages/ShoppingList/ShoppingList"));
const Register = lazy(() => import("./pages/Register/Register"));
const Login = lazy(() => import("./pages/Login/Login"));

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPizzas());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route
          path="/favorite"
          element={<PrivateRoute component={<Favorite />} />}
        />
        <Route path="/shopping-list" element={<ShoppingList />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
