import { Suspense } from "react";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import { logOut } from "../../redux/user/userSlice";
import { useDispatch } from "react-redux";

const Layout = () => {
  const dispatch = useDispatch();
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/catalog">Catalog</Link>
        <Link to="/favorite">Favorite</Link>
        <Link to="/shopping-list">ShoppingList</Link>
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
      </nav>
      <button type="button" onClick={() => dispatch(logOut())}>
        LogOut
      </button>

      <Suspense>
        <Outlet />
      </Suspense>
    </header>
  );
};

export default Layout;
