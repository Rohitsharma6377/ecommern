import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { removeFromCart, updateCartItemQuantity } from '../redux/cartSlice';

const CartPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cartItems } = useSelector((state) => state.cart);

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const updateQuantityHandler = (id, quantity) => {
    dispatch(updateCartItemQuantity({ id, quantity }));
  };

  const checkoutHandler = () => {
    navigate('/shipping');
  };

  const totalItems = cartItems.reduce((acc, item) => acc + item.qty, 0);
  const totalPrice = cartItems.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2);

  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-8">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <p className="text-lg text-gray-600">Your cart is empty</p>
          <Link to="/" className="mt-4 inline-block text-blue-500 hover:text-blue-700 text-lg font-medium">
            Go Back
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items Section */}
          <div className="lg:col-span-2">
            {cartItems.map((item) => (
              <div key={item._id} className="flex items-center justify-between mb-6 bg-white p-4 rounded-lg shadow hover:shadow-lg transition duration-300">
                <div className="flex items-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-md mr-4"
                  />
                  <div>
                    <Link to={`/product/${item._id}`} className="text-lg font-semibold text-gray-800 hover:text-blue-500">
                      {item.name}
                    </Link>
                    <p className="text-gray-600 mt-1">${item.price}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <select
                    value={item.qty}
                    onChange={(e) => updateQuantityHandler(item._id, Number(e.target.value))}
                    className="mr-4 p-2 border rounded-md bg-gray-50 focus:ring-2 focus:ring-blue-400"
                  >
                    {[...Array(item.countInStock).keys()].map((x) => (
                      <option key={x + 1} value={x + 1}>
                        {x + 1}
                      </option>
                    ))}
                  </select>
                  <button
                    onClick={() => removeFromCartHandler(item._id)}
                    className="text-red-500 hover:text-red-700 font-medium"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Cart Summary Section */}
          <div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Cart Summary</h2>
              <p className="text-lg text-gray-700 mb-4">
                <span className="font-semibold">Total Items:</span> {totalItems}
              </p>
              <p className="text-xl font-bold text-gray-800 mb-6">
                <span className="font-semibold">Total Price:</span> ${totalPrice}
              </p>
              <button
                onClick={checkoutHandler}
                className={`w-full py-3 px-4 text-white font-medium rounded-lg ${
                  cartItems.length === 0
                    ? 'bg-gray-300 cursor-not-allowed'
                    : 'bg-blue-500 hover:bg-blue-600 transition duration-300'
                }`}
                disabled={cartItems.length === 0}
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
