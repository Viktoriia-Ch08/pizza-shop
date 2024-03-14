import { Route, Routes } from 'react-router';
import Layout from './components/Layout/Layout';
import { lazy } from 'react';

const Home = lazy(() => import('./pages/Home/Home'));
const Favorite = lazy(() => import('./pages/Favorite/Favorite'));
const ShoppingList = lazy(() => import('./pages/ShoppingList/ShoppingList'));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/shopping-list" element={<ShoppingList />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
