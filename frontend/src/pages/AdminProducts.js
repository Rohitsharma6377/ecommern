import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../redux/productSlice';
import { addProduct, updateProduct } from '../redux/adminSlice';
import AdminSidebar from '../components/AdminSidebar';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const AdminProducts = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.product);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    description: '',
    category: '',
    image: '',
  });

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleEditorChange = (event, editor) => {
    const data = editor.getData();
    setFormData({ ...formData, description: data });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentProduct) {
      dispatch(updateProduct({ productId: currentProduct._id, productData: formData }));
    } else {
      dispatch(addProduct(formData));
    }
    setCurrentProduct(null);
    setFormData({ name: '', price: '', description: '', category: '', image: '' });
  };

  const handleEdit = (product) => {
    setCurrentProduct(product);
    setFormData({
      name: product.name,
      price: product.price,
      description: product.description,
      category: product.category,
      image: product.image,
    });
  };

  return (
    <div className="flex h-screen">
      <AdminSidebar />
      <div className="flex-grow bg-gray-100 p-8">
        <div className="bg-white shadow-md rounded p-6">
          <h1 className="text-2xl font-bold mb-4">
            {currentProduct ? 'Edit Product' : 'Add New Product'}
          </h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Product Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter product name"
                className="mt-1 w-full p-2 border rounded shadow-sm focus:ring-primary focus:border-primary"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Price</label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleInputChange}
                placeholder="Enter price"
                className="mt-1 w-full p-2 border rounded shadow-sm focus:ring-primary focus:border-primary"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Description</label>
              <CKEditor
                editor={ClassicEditor}
                data={formData.description}
                onChange={handleEditorChange}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Category</label>
              <input
                type="text"
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                placeholder="Enter category"
                className="mt-1 w-full p-2 border rounded shadow-sm focus:ring-primary focus:border-primary"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Image URL</label>
              <input
                type="text"
                name="image"
                value={formData.image}
                onChange={handleInputChange}
                placeholder="Enter image URL"
                className="mt-1 w-full p-2 border rounded shadow-sm focus:ring-primary focus:border-primary"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-primary text-white font-semibold rounded shadow hover:bg-primary-dark"
            >
              {currentProduct ? 'Update' : 'Add'} Product
            </button>
          </form>
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-bold mb-4">Product List</h2>
          <div className="bg-white shadow-md rounded">
            <ul className="divide-y divide-gray-200">
              {products.map((product) => (
                <li key={product._id} className="p-4 flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-gray-700">{product.name}</p>
                    <p className="text-sm text-gray-500">${product.price}</p>
                  </div>
                  <button
                    onClick={() => handleEdit(product)}
                    className="py-1 px-3 bg-primary text-white text-sm rounded shadow hover:bg-primary-dark"
                  >
                    Edit
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProducts;
