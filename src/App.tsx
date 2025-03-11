import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NotFound, RootErrorBoundary } from './page';
import Home from './page/Home';
import Dashboard from './page/Dashboard';
import WishList from './page/WishList';
import PricingPage from './page/PricingPage';
import Layout from './components/Layout';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route
            path="/"
            element={<Home />}
            errorElement={<RootErrorBoundary />}
          />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/wishlist" element={<WishList />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
