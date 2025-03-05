import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NotFound, RootErrorBoundary } from './page';
import Home from './page/Home';
import Dashboard from './page/Dashboard';
import WishList from './page/WishList';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home />}
          errorElement={<RootErrorBoundary />}
        />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
