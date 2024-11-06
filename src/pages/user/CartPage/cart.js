import React, { useState } from "react";

function Cart() {
  const [quantity, setQuantity] = useState(1);
  const [discountCode, setDiscountCode] = useState("");
  const price = 26500;
  const originalPrice = 37000;
  const shippingFee = 11000;
  const discountedTotal = price * quantity + shippingFee;

  const handleIncrease = () => setQuantity(quantity + 1);
  const handleDecrease = () => setQuantity(quantity > 1 ? quantity - 1 : 1);
  const handleDelete = () => alert("Item removed from cart.");
  const handleApplyDiscount = () => alert(`Discount code applied: ${discountCode}`);

  return (
    <div className="flex justify-center py-16 w-full max-w-7xl mx-auto">
      <div className="grid grid-cols-3 gap-4 w-full bg-white rounded-lg overflow-hidden">
        
        {/* Left Box: Product List */}
        <div className="col-span-2 border-r p-4">
          <div className="flex items-center mb-2">
            <input type="checkbox" className="form-checkbox h-4 w-4 text-orange-500" />
            <span className="ml-2 font-semibold text-lg">Chọn tất cả</span>
          </div>
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="flex items-center border-t py-4 h-46 hover:bg-gray-50 transition duration-200">
              <input type="checkbox" className="form-checkbox h-4 w-4 text-orange-500" />
              <div className="ml-4 w-16 h-16 rounded">
                <img
                  src={`/assets/images/menu-items/pizza-${item}.png`}
                  alt="Product"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="ml-4 flex-grow">
                <h2 className="font-semibold text-gray-800">Pizza</h2>
                <p className="text-sm text-gray-500">size: 9</p> 
                <p className="text-sm text-gray-500 w-56 break-words">Mô tả: Sample description for pizza item {item}.</p>
              </div>
              <div className="ml-8 flex-grow">
                <div className="text-orange-500 font-bold text-lg">{price.toLocaleString()} đ</div>
                <div className="text-gray-500 line-through text-sm">{originalPrice.toLocaleString()} đ</div>
              </div>
              {/* Quantity Control */}
              <div className="flex items-center">
                <button onClick={handleDecrease} className="px-2 py-1 border text-gray-500 bg-gray-100 rounded">-</button>
                <span className="mx-2">{quantity}</span>
                <button onClick={handleIncrease} className="px-2 py-1 border text-gray-500 bg-gray-100 rounded">+</button>
              </div>
              {/* Delete Button */}
              <button onClick={handleDelete} className="px-2 text-gray-400 hover:text-red-500">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          ))}
        </div>

        {/* Right Box: Order Summary */}
        <div className="p-4 bg-gray-50">
          <h2 className="text-gray-800 font-semibold text-lg mb-4">Thông tin đơn hàng</h2>
          <div className="flex justify-between text-gray-600 mb-2">
            <span>Tạm tính (1 sản phẩm)</span>
            <span>{(price * quantity).toLocaleString()} đ</span>
          </div>
          <div className="flex justify-between text-gray-600 mb-2">
            <span>Phí giao hàng</span>
            <span>{shippingFee.toLocaleString()} đ</span>
          </div>

          {/* Discount Code */}
          <div className="flex items-center mt-4">
            <input
              type="text"
              value={discountCode}
              onChange={(e) => setDiscountCode(e.target.value)}
              placeholder="Nhập mã giảm giá"
              className="p-2 border rounded w-2/3 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <button onClick={handleApplyDiscount} className="p-2 bg-[#BC9A6C] text-white rounded ml-6  hover:bg-orange-600 transition duration-200">
              Áp dụng
            </button>
          </div>

          {/* Total */}
          <div className="flex justify-between mt-4 text-lg font-semibold text-gray-800">
            <span>Tổng cộng</span>
            <span className="text-orange-500">{discountedTotal.toLocaleString()} đ</span>
          </div>

          <button className="mt-4 w-full py-2 bg-[#BC9A6C] text-white font-semibold rounded hover:bg-orange-600 transition duration-200">
            Xác nhận giỏ hàng
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
