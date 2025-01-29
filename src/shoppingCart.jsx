import React, { useState } from "react";

const ShoppingCart = () => {
  const [cart, setCart] = useState([
    { id: 1, name: "Floral Print Wrap Dress", price: 20.5, quantity: 2 },
    { id: 2, name: "Floral Print Wrap Dress", price: 30.5, quantity: 1 },
  ]);

  const updateQuantity = (id, change) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const discount = 4;
  const finalTotal = totalPrice - discount;

  return (
    <div className="bg-gradient-to-r from-yellow-100 to-white p-6 h-screen">
      <div className="max-w-5xl mx-auto bg-white p-6 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold">Shopping Bag</h2>
        <p className="text-gray-600">
          <strong>{cart.length} items</strong> in your bag.
        </p>
        git config —global user.email “chhavipaliwal1203@gmail.com”
        {/* Product List */}
        <div className="mt-4 space-y-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center bg-gray-100 p-4 rounded-lg"
            >
              <img
                src={
                  item.id === 1
                    ? "1_c6316707-0f46-4201-b45d-06b6509bd7ec.jpg"
                    : "-1117Wx1400H-466410399-white-MODEL.jpg.avif"
                }
                className="rounded-lg w-20 h-20 object-cover"
                alt="Dress"
              />
              <div className="ml-4 flex-grow">
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-sm text-gray-500">Color: Blue | Size: 42</p>
                <p className="font-semibold text-lg">
                  ${item.price.toFixed(2)}
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => updateQuantity(item.id, -1)}
                  className="px-2 py-1 bg-gray-200 rounded"
                >
                  -
                </button>
                <span className="px-3">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, 1)}
                  className="px-2 py-1 bg-gray-200 rounded"
                >
                  +
                </button>
              </div>
              <p className="ml-4 text-lg font-bold">
                ${(item.price * item.quantity).toFixed(2)}
              </p>
            </div>
          ))}
        </div>
        {/* Cart Summary */}
        <div className="mt-6 bg-gray-100 p-4 rounded-lg">
          <h3 className="font-bold text-lg">Cart Total</h3>
          <div className="flex justify-between py-2 border-b">
            <span>Cart Subtotal</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
          <div className="flex justify-between py-2 border-b">
            <span>Discount</span>
            <span className="text-red-500">- ${discount.toFixed(2)}</span>
          </div>
          <div className="flex justify-between py-2 text-xl font-bold">
            <span>Total</span>
            <span>${finalTotal.toFixed(2)}</span>
          </div>
          <button className="w-full bg-black text-white py-2 mt-3 rounded-lg">
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
