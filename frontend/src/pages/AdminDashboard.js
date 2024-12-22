import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../redux/productSlice';
import { setTotalProducts, setTotalRevenue } from '../redux/adminSlice';
import AdminSidebar from '../components/AdminSidebar';

const AdminDashboard = () => {
  const dispatch = useDispatch();
  const { totalProducts, totalRevenue } = useSelector((state) => state.admin);
  const { products } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    if (products.length > 0) {
      dispatch(setTotalProducts(products.length));
      const revenue = products.reduce((acc, product) => acc + product.price, 0);
      dispatch(setTotalRevenue(revenue));
    }
  }, [products, dispatch]);

  return (
    <div className="flex h-screen">
      <AdminSidebar />
      <div className="flex-grow bg-gray-100 p-6">
        <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-white shadow-md rounded p-4 text-center">
            <h3 className="text-xl font-semibold">Total Products</h3>
            <p className="text-2xl text-gray-700">{totalProducts}</p>
          </div>
          <div className="bg-white shadow-md rounded p-4 text-center">
            <h3 className="text-xl font-semibold">Total Revenue</h3>
            <p className="text-2xl text-gray-700">${totalRevenue.toFixed(2)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
