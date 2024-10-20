import React, { useState } from 'react';

const Checkout = () => {
  const [coupon, setCoupon] = useState('');
  const [subtotal] = useState(120.00);
  const [shipping] = useState(0.00);
  const [discount, setDiscount] = useState(0.00);

  const applyCoupon = () => {
    if (coupon === 'DISCOUNT10') {
      setDiscount(10); // Giảm giá 10%
    } else {
      setDiscount(0);
    }
  };

  const total = subtotal + shipping - discount;

  return (
    <div className="container mx-auto p-6 max-w-screen-xl pb-20">
      {/* Grid chính */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Phần Coupon Code */}
        <div className="border p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Coupon Code</h2>
          <p className="text-gray-600 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non.
          </p>
          <div className="flex">
            <input
              type="text"
              value={coupon}
              onChange={(e) => setCoupon(e.target.value)}
              placeholder="Enter Here code"
              className="w-full p-2 border rounded-l-lg focus:outline-none"
            />
            <button
              onClick={applyCoupon}
              className="bg-[#BC9A6C] text-white px-4 py-2 rounded-r-lg hover:bg-orange-600 transition duration-200"
            >
              Apply
            </button>
          </div>
          {discount > 0 && (
            <p className="text-green-500 mt-2">Coupon applied: You saved ${discount.toFixed(2)}!</p>
          )}
        </div>

        {/* Phần Total Bill */}
        <div className="border p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Total Bill</h2>
          <div className="flex justify-between text-lg mb-2">
            <span>Cart Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-lg mb-2">
            <span>Shipping Charge</span>
            <span>${shipping.toFixed(2)}</span>
          </div>
          {discount > 0 && (
            <div className="flex justify-between text-lg mb-2">
              <span>Discount</span>
              <span>-${discount.toFixed(2)}</span>
            </div>
          )}
          <div className="flex justify-between text-xl font-bold border-t border-gray-300 pt-2 mt-4">
            <span>Total Amount</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>
      </div>
      {/* Proceed to Checkout Button */}
      <div class="grid grid-cols-subgrid gap-20 col-span-2">
            <div class="col-start-2">
                <button className="w-full bg-[#BC9A6C] text-white   py-3 mt-4 hover:bg-orange-600">
                    Proceed to Checkout
                </button>
            </div>
        </div>
    </div>
  );
};

export default Checkout;
