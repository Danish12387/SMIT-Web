import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';
// Assume you have an Auth Context set up

const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useContext(AuthContext); // Check authentication state

  // If user is not authenticated, redirect to login
  if (!isAuthenticated) {
    return <Navigate to="/admin-panel/login" />;
  }

  // If authenticated, render the children (Admin Dashboard)
  return children;
};

export default PrivateRoute;
