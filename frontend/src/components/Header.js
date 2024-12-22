import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/userSlice';

const Header = () => {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.user);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <header className="bg-gray-800 text-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/home" className="text-2xl font-bold text-teal-400">
          E-commerce Store
        </Link>

        {/* Search Bar with Category Dropdown */}
        <div className="flex items-center mx-4 space-x-2">
          <div className="flex">
            <input
              type="text"
              placeholder="Search..."
              className="w-56 px-4 py-2 rounded-l-md text-gray-700 focus:outline-none"
            />
            <button className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-r-md">
              Search
            </button>
          </div>
          <select
            className="bg-gray-700 text-gray-300 text-sm px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            aria-label="Category"
          >
            <option value="">All Categories</option>
            <option value="electronics">Electronics</option>
            <option value="fashion">Fashion</option>
            <option value="home">Home & Kitchen</option>
            <option value="books">Books</option>
            <option value="toys">Toys</option>
          </select>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center space-x-4">
          <Link
            to="/cart"
            className="hover:text-teal-400 transition-colors duration-200"
          >
            Cart
          </Link>

          {userInfo ? (
            <>
              <Link
                to="/profile"
                className="hover:text-teal-400 transition-colors duration-200"
              >
                {userInfo.name}
              </Link>
              <button
                onClick={handleLogout}
                className="hover:text-teal-400 transition-colors duration-200"
              >
                Logout
              </button>
              {userInfo.isAdmin && (
                <Link
                  to="/admin"
                  className="hover:text-teal-400 transition-colors duration-200"
                >
                  Admin
                </Link>
              )}
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="hover:text-teal-400 transition-colors duration-200"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="hover:text-teal-400 transition-colors duration-200"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
