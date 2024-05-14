import { Suspense, useState } from "react";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import { logOut } from "../../redux/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectIsAuth } from "../../redux/user/selectors";
import { useNavigate } from "react-router-dom";
import Modal from "../Modal/Modal";
import ContactsModal from "../Modal/ContactsModal/ContactsModal";

const Layout = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        {isAuth && (
          <>
            <Link to="/favorite">Favorite</Link>
            <Link to="/preOrders">Previous Orders</Link>
          </>
        )}
        <Link to="/shopping-list">ShoppingList</Link>
        {!isAuth && (
          <>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
          </>
        )}
        <button type="button" onClick={() => setShow(true)}>
          Contacts
        </button>
      </nav>
      {isAuth && (
        <button
          type="button"
          onClick={() => {
            dispatch(logOut());
            navigate("/");
          }}
        >
          LogOut
        </button>
      )}
      {show && (
        <Modal setShow={setShow}>
          <ContactsModal />
        </Modal>
      )}
      <Suspense>
        <Outlet />
      </Suspense>
    </header>
  );
};

export default Layout;
