import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const AdminSidebar = () => {
  const [isProductsMenuOpen, setProductsMenuOpen] = useState(false);
  const [isUsersMenuOpen, setUsersMenuOpen] = useState(false);

  return (
    <div className="h-full w-64 bg-gray-800 text-white flex flex-col">
      <h2 className="text-2xl font-bold p-4 border-b border-gray-700">Admin Panel</h2>
      <nav className="flex-grow">
        <NavLink
          to="/admin"
          className={({ isActive }) =>
            `block px-4 py-2 hover:bg-gray-700 ${isActive ? 'bg-gray-700' : ''}`
          }
        >
          Dashboard
        </NavLink>

        {/* Products Menu */}
        <div>
          <div
            className="block px-4 py-2 cursor-pointer hover:bg-gray-700"
            onClick={() => setProductsMenuOpen(!isProductsMenuOpen)}
          >
            Manage Products
          </div>
          {isProductsMenuOpen && (
            <div className="bg-gray-700">
              <NavLink
                to="/admin/products/add"
                className={({ isActive }) =>
                  `block px-6 py-2 hover:bg-gray-600 ${isActive ? 'bg-gray-600' : ''}`
                }
              >
                Add Product
              </NavLink>
              <NavLink
                to="/admin/products/edit"
                className={({ isActive }) =>
                  `block px-6 py-2 hover:bg-gray-600 ${isActive ? 'bg-gray-600' : ''}`
                }
              >
                Edit Products
              </NavLink>
              <NavLink
                to="/admin/products/categories"
                className={({ isActive }) =>
                  `block px-6 py-2 hover:bg-gray-600 ${isActive ? 'bg-gray-600' : ''}`
                }
              >
                Manage Categories
              </NavLink>
            </div>
          )}
        </div>

        {/* Users Menu */}
        <div>
          <div
            className="block px-4 py-2 cursor-pointer hover:bg-gray-700"
            onClick={() => setUsersMenuOpen(!isUsersMenuOpen)}
          >
            Manage Users
          </div>
          {isUsersMenuOpen && (
            <div className="bg-gray-700">
              <NavLink
                to="/admin/users/add"
                className={({ isActive }) =>
                  `block px-6 py-2 hover:bg-gray-600 ${isActive ? 'bg-gray-600' : ''}`
                }
              >
                Add User
              </NavLink>
              <NavLink
                to="/admin/users/edit"
                className={({ isActive }) =>
                  `block px-6 py-2 hover:bg-gray-600 ${isActive ? 'bg-gray-600' : ''}`
                }
              >
                Edit Users
              </NavLink>
              <NavLink
                to="/admin/users/roles"
                className={({ isActive }) =>
                  `block px-6 py-2 hover:bg-gray-600 ${isActive ? 'bg-gray-600' : ''}`
                }
              >
                Manage Roles
              </NavLink>
            </div>
          )}
        </div>
      </nav>
      <footer className="p-4 border-t border-gray-700">
        <p className="text-sm text-gray-400">&copy; 2024 Admin Panel</p>
      </footer>
    </div>
  );
};

export default AdminSidebar;
