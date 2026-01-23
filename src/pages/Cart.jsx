import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart, clearCart, decreaseQuantity } from "../store/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  // Calculate Total Price
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4">
        <h2 className="text-2xl font-bold text-slate-800 mb-4">Your cart is empty 🛒</h2>
        <Link to="/" className="bg-indigo-600 !text-white px-6 py-3 rounded-xl font-bold hover:bg-indigo-700 transition-colors">
          Go Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-3xl font-extrabold text-slate-900">Your <span className="text-indigo-600  ">Shopping Cart</span></h1>
          <button 
            onClick={() => dispatch(clearCart())}
            className="text-sm font-bold text-red-500 hover:text-red-700 underline"
          >
            Clear All
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* List of Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-6">
                <img src={item.image} alt={item.title} className="w-20 h-20 object-contain" />
                
                <div className="flex-grow">
                  <h3 className="font-bold text-slate-800 line-clamp-1">{item.title}</h3>
                  <p className="text-indigo-600 font-bold">${item.price}</p>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center gap-3 bg-slate-100 rounded-lg p-1">
                  <button 
                    onClick={() => dispatch(decreaseQuantity(item.id))}
                    className="w-8 h-8 flex items-center justify-center bg-white rounded-md shadow-sm font-bold hover:bg-slate-50"
                  >
                    -
                  </button>
                  <span className="font-bold text-slate-700 w-4 text-center">{item.quantity}</span>
                  <button 
                    onClick={() => dispatch(addToCart(item))}
                    className="w-8 h-8 flex items-center justify-center bg-white rounded-md shadow-sm font-bold hover:bg-slate-50"
                  >
                    +
                  </button>
                </div>

                <button 
                  onClick={() => dispatch(removeFromCart(item.id))}
                  className="text-slate-300 hover:text-red-500 transition-colors"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>

          {/* Order Summary Section */}
          <div className="lg:col-span-1">
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm sticky top-8">
              <h2 className="text-xl font-bold text-slate-900 mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-slate-500">
                  <span>Subtotal</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-slate-500">
                  <span>Shipping</span>
                  <span className="text-green-600 font-medium">FREE</span>
                </div>
                <div className="border-t border-slate-50 pt-4 flex justify-between font-black text-xl text-slate-900">
                  <span>Total</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
              </div>

              <button className="w-full py-4 bg-slate-900 rounded-2xl font-bold text-lg hover:bg-indigo-600 transition-all shadow-lg active:scale-95">
                Checkout Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;