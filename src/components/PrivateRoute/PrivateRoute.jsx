import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsAuth } from "../../redux/user/selectors";

export const PrivateRoute = ({ component, redirectTo = "/" }) => {
  const isAuth = useSelector(selectIsAuth);

  const shouldRedirect = !isAuth;
  return <>{shouldRedirect ? <Navigate to={redirectTo} /> : component}</>;
};
