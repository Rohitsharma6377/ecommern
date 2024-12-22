import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCategories, addCategory, updateCategory, deleteCategory, toggleCategoryVisibility } from '../redux/categorySlice';
import AdminSidebar from '../components/AdminSidebar';

const AdminCategories = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.category);  // Updated to 'state.category'
  const [currentCategory, setCurrentCategory] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    visible: true,
  });

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentCategory) {
      dispatch(updateCategory({ id: currentCategory._id, updates: formData }));
    } else {
      dispatch(addCategory(formData));
    }
    setCurrentCategory(null);
    setFormData({ name: '', visible: true });
  };

  const handleEdit = (category) => {
    setCurrentCategory(category);
    setFormData({
      name: category.name,
      visible: category.visible,
    });
  };

  const handleDelete = (categoryId) => {
    if (window.confirm('Are you sure you want to delete this category?')) {
      dispatch(deleteCategory(categoryId));
    }
  };

  const handleToggleVisibility = (categoryId, visible) => {
    dispatch(toggleCategoryVisibility({ id: categoryId, visible }));
  };

  return (
    <div className="flex h-screen">
      <AdminSidebar />
      <div className="flex-grow bg-gray-100 p-8">
        <div className="bg-white shadow-md rounded p-6">
          <h1 className="text-2xl font-bold mb-4">
            {currentCategory ? 'Edit Category' : 'Add New Category'}
          </h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Category Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter category name"
                className="mt-1 w-full p-2 border rounded shadow-sm focus:ring-primary focus:border-primary"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-primary text-black font-semibold rounded shadow hover:bg-primary-dark"
            >
              {currentCategory ? 'Update' : 'Add'} Category
            </button>
          </form>
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-bold mb-4">Category List</h2>
          <div className="bg-white shadow-md rounded">
            <ul className="divide-y divide-gray-200">
              {categories.map((category) => (
                <li key={category._id} className="p-4 flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-gray-700">
                      {category.name}
                      {!category.visible && (
                        <span className="ml-2 text-red-500 text-sm">(Hidden)</span>
                      )}
                    </p>
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleEdit(category)}
                      className="py-1 px-3 bg-primary text-black text-sm rounded shadow hover:bg-primary-dark"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(category._id)}
                      className="py-1 px-3 bg-red-500 text-black text-sm rounded shadow hover:bg-red-700"
                    >
                      Delete
                    </button>
                    <button
                      onClick={() => handleToggleVisibility(category._id, category.visible)}
                      className={`py-1 px-3 text-sm rounded shadow ${
                        category.visible ? 'bg-gray-300 hover:bg-gray-400' : 'bg-green-500 hover:bg-green-700'
                      }`}
                    >
                      {category.visible ? 'Hide' : 'Show'}
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminCategories;
