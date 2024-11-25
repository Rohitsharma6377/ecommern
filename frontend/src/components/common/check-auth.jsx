import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const CheckAuth = ({ isAuthenticated, user, children }) => {
  const location = useLocation();

  // Redirect unauthenticated users away from protected routes
  if (
    !isAuthenticated &&
    !(location.pathname.includes('/login') || location.pathname.includes('/register'))
  ) {
    return <Navigate to="/auth/login" />;
  }

  // Redirect authenticated users away from auth pages to their respective dashboards
  if (isAuthenticated && (location.pathname.includes('/login') || location.pathname.includes('/register'))) {
    if (user?.role === 'admin') {
      return <Navigate to="/admin/dashboard" />;
    } else {
      return <Navigate to="/shop/home" />;
    }
  }
  if(isAuthenticated && user?.role !== 'admin' && location.pathname.includes('admin')){
    return <Navigate to="/un-authpage"/>;
  }
  if(isAuthenticated && user?.role === 'admin' && location.pathname.includes('shop')){
    return <Navigate to="/admin/dashboard"/>
  }
  // If no redirection is needed, render the wrapped content (children)
  return children;
};

export default CheckAuth;
