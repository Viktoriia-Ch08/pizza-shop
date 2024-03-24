import { Suspense } from 'react';
import { Outlet } from 'react-router';
import { Link } from 'react-router-dom';

const Layout = () => {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/catalog">Catalog</Link>
        <Link to="/favorite">Favorite</Link>
        <Link to="/shopping-list">ShoppingList</Link>
      </nav>

      <Suspense>
        <Outlet />
      </Suspense>
    </header>
  );
};

export default Layout;
