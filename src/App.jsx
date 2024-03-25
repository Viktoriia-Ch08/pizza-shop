import { Route, Routes } from 'react-router';
import Layout from './components/Layout/Layout';
import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchInfo } from './redux/operations';

const Home = lazy(() => import('./pages/Home/Home'));
const Catalog = lazy(() => import('./pages/Catalog/Catalog'));
const Favorite = lazy(() => import('./pages/Favorite/Favorite'));
const ShoppingList = lazy(() => import('./pages/ShoppingList/ShoppingList'));

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchInfo());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/shopping-list" element={<ShoppingList />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
