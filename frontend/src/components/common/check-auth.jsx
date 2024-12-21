import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const CheckAuth = ({ isAuthenticated, user, children }) => {
  const location = useLocation();

  // Redirect unauthenticated users away from protected routes
  if (!isAuthenticated && !['/login', '/register'].some(path => location.pathname.includes(path))) {
    return <Navigate to="/auth/login" state={{ from: location }} replace />;
  }

  // Redirect authenticated users away from auth pages to their respective dashboards
  if (isAuthenticated) {
    if (['/login', '/register'].some(path => location.pathname.includes(path))) {
      return user?.role === 'admin' ? (
        <Navigate to="/admin/dashboard" replace />
      ) : (
        <Navigate to="/shop/home" replace />
      );
    }

    // Redirect non-admin users trying to access admin pages
    if (user?.role !== 'admin' && location.pathname.includes('/admin')) {
      return <Navigate to="/un-authpage" replace />;
    }

    // Redirect admin users away from shop routes
    if (user?.role === 'admin' && location.pathname.includes('/shop')) {
      return <Navigate to="/admin/dashboard" replace />;
    }
  }

  // Render the wrapped content (children) if no redirection is needed
  return children;
};

export default CheckAuth;
