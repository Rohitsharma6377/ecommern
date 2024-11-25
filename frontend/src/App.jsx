import React from "react";
import { Route, Routes } from "react-router-dom";
import Authlayout from "./components/auth/layout";
import AuthLogin from "./pages/auth/login";
import AuthRegister from "./pages/auth/register";
import AdminLayout from "./components/admin/layout";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminProducts from "./pages/admin/Products";
import AdminOrder from "./pages/admin/Order";
import Adminfeature from "./pages/admin/feature";
import ShopingView from "./pages/ecommerce/layout";
import Notfound from "./pages/not-found/Notfound";
import Home from "./pages/ecommerce/home";
import Checkout from "./pages/ecommerce/checkoutpage";
import Listing from "./pages/ecommerce/listinng";
import Account from "./pages/ecommerce/account";
import CheckAuth from "./components/common/check-auth";
import unAuthpages from "./pages/unauth/unAuthpages";

const App = () => {
  // const isAuthenticated = true;
  // const user = {
  //   name:'Rohit',
  //   role:'user',
  // };
  const isAuthenticated = false;
  const user = null;
  return (
    <div className="flex flex-col overflow-hidden bg-white">
      <Routes>
        <Route
          path="/auth"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <Authlayout />
            </CheckAuth>
          }
        >
          <Route path="login" element={<AuthLogin />} />
          <Route path="register" element={<AuthRegister />} />
        </Route>
        <Route
          path="/admin"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <AdminLayout />
            </CheckAuth>
          }
        >
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="products" element={<AdminProducts />} />
          <Route path="order" element={<AdminOrder />} />
          <Route path="feature" element={<Adminfeature />} />
        </Route>
        <Route
          path="/shop"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <ShopingView />
            </CheckAuth>
          }
        >
          <Route path="home" element={<Home />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="listing" element={<Listing />} />
          <Route path="account" element={<Account />} />
        </Route>
        <Route path="*" element={<Notfound />} />
        <Route path="/un-authpage" element={<unAuthpages/>} />

      </Routes>
    </div>
  );
};

export default App;
