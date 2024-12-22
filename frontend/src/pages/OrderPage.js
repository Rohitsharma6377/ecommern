import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getOrderDetails } from '../redux/orderSlice';

const OrderPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { order, loading, error } = useSelector((state) => state.order);
  const [isPaid, setIsPaid] = useState(false);

  useEffect(() => {
    dispatch(getOrderDetails(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (order && order.isPaid) {
      setIsPaid(true);
    }
  }, [order]);

  if (loading) return <div className="text-center mt-8">Loading...</div>;
  if (error) return <div className="text-center mt-8 text-red-500">{error}</div>;
  if (!order) return null;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Order {order._id}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">Shipping</h2>
          <p><strong>Name:</strong> {order.user.name}</p>
          <p><strong>Email:</strong> {order.user.email}</p>
          <p><strong>Address:</strong> {order.shippingAddress.address}, {order.shippingAddress.city}, {order.shippingAddress.postalCode}, {order.shippingAddress.country}</p>
          {order.isDelivered ? (
            <p className="text-green-500 mt-2">Delivered on {order.deliveredAt}</p>
          ) : (
            <p className="text-red-500 mt-2">Not Delivered</p>
          )}
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4">Payment Method</h2>
          <p><strong>Method:</strong> {order.paymentMethod}</p>
          {isPaid ? (
            <p className="text-green-500 mt-2">Paid on {order.paidAt}</p>
          ) : (
            <p className="text-red-500 mt-2">Not Paid</p>
          )}
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Order Items</h2>
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          {order.orderItems.map((item) => (
            <div key={item._id} className="flex items-center justify-between p-4 border-b last:border-b-0">
              <div className="flex items-center">
                <img src={item.image} alt={item.name} className="w-16 h-16 object-cover mr-4" />
                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                  <p>{item.qty} x ${item.price} = ${item.qty * item.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
        <div className="bg-white shadow-md rounded-lg overflow-hidden p-4">
          <p className="mb-2"><strong>Items:</strong> ${order.itemsPrice}</p>
          <p className="mb-2"><strong>Shipping:</strong> ${order.shippingPrice}</p>
          <p className="mb-2"><strong>Tax:</strong> ${order.taxPrice}</p>
          <p className="text-xl font-bold"><strong>Total:</strong> ${order.totalPrice}</p>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;