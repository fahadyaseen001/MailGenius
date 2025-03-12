import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import { NotFound, RootErrorBoundary } from './page';
import Home from './page/Home';
import Dashboard from './page/Dashboard';
import WishList from './page/WishList';
import PricingPage from './page/PricingPage';


import Layout from './components/Layout';
import Login from './page/Login';
import SignUp from './page/SignUp';
import ForgotPassword from './page/ForgotPassword';
import ResetLinkSentPage from './page/ResetLinkSent';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Dashboard route excluded from Layout */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/forgot-password" element={<ForgotPassword/>} />
        <Route path="/reset-password" element={<ResetLinkSentPage/>} />
        {/* All other routes with the common Layout */}
        <Route element={<LayoutWrapper />}>
          <Route
            path="/"
            element={<Home />}
            errorElement={<RootErrorBoundary />}
          />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/wishlist" element={<WishList />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

// Wrapper component to use Layout with Outlet
const LayoutWrapper = () => (
  <Layout>
    <Outlet />
  </Layout>
);


export default App;
