// import React from 'react';
// import { Navigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';

// const PrivateRoute = ({ children, adminOnly = false }) => {
//   const { userInfo } = useSelector((state) => state.user);

//   // If the user is not logged in, redirect to the login page
//   if (!userInfo) {
//     return <Navigate to="/login" />;
//   }

//   // If the route is admin-only and the user is not an admin, redirect to home
//   if (adminOnly && !userInfo.isAdmin) {
//     return <Navigate to="/home" />;
//   }

//   // If the route is admin-only and the user is an admin, redirect to the admin dashboard
//   if (adminOnly && userInfo.isAdmin && window.location.pathname !== '/admin') {
//     return <Navigate to="/admin" />;
//   }

//   // Render the child component if all conditions are met
//   return children;
// };

// export default PrivateRoute;

import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ children, adminOnly = false }) => {
  const { userInfo, isAdmin } = useSelector((state) => state.user);

  if (!userInfo) {
    return <Navigate to="/login" />;
  }

  if (adminOnly && !isAdmin) {
    return <Navigate to="/home" />;
  }

  return children;
};

export default PrivateRoute;
