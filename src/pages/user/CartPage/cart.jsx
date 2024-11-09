import React, { useState, useEffect } from "react";
import { formatCurrencyVND } from "utils/format";
import { Link } from "react-router-dom";

function Cart() {
    const [cartItems, setCartItems] = useState([]);
    const [discountCode, setDiscountCode] = useState("");
    const shippingFee = 11000;

    useEffect(() => {
        // Lấy dữ liệu giỏ hàng từ localStorage hoặc từ một nguồn dữ liệu khác
        const cartData = JSON.parse(localStorage.getItem("cart")) || [];
        setCartItems(cartData);
    }, []);

    const handleQuantityChange = (id, amount) => {
        setCartItems((cartItems) => {
            const updatedCartWhenChangeQuantity = cartItems.map((item) =>
                item.subId === id
                    ? { ...item, quantity: Math.max(1, item.quantity + amount) }
                    : item
            )
            localStorage.setItem("cart", JSON.stringify(updatedCartWhenChangeQuantity));
            return updatedCartWhenChangeQuantity;
        });
    };

    const handleDelete = (id) => {
        const updatedCartWhenDelete = cartItems.filter((item) => item.subId !== id);
        setCartItems(updatedCartWhenDelete);
        localStorage.setItem("cart", JSON.stringify(updatedCartWhenDelete));
        alert("Item removed from cart.");
    };

    const handleApplyDiscount = () => {
        alert(`Discount code applied: ${discountCode}`);
    };

    const totalPrice = cartItems.reduce(
        (total, item) => total + item.price * item.quantity, 0
    );

    return (
        <div className="flex justify-center py-16 w-full max-w-7xl mx-auto">
            <div className="grid grid-cols-3 gap-4 w-full bg-white rounded-lg overflow-hidden">
                {/* Left Box: Product List */}
                <div className="col-span-2 border-r p-4">
                    <div className="flex items-center mb-2">
                        <input type="checkbox" className="form-checkbox h-4 w-4 text-orange-500" />
                        <span className="ml-2 font-semibold text-lg">Chọn tất cả</span>
                    </div>
                    {/* if else cart khi có sản phẩm và không có*/}
                    {cartItems.length === 0 ? (
                        // Hiển thị thông báo nếu giỏ hàng trống
                        <p>Giỏ hàng của bạn đang trống</p>
                    ) : (
                        cartItems.map((item, index) => (
                            <div key={index} className="flex items-center border-t py-4 h-46 hover:bg-gray-50 transition duration-200">
                                <input type="checkbox" className="form-checkbox h-4 w-4 text-orange-500" />
                                <div className="ml-4 w-16 h-16 rounded">
                                    <img
                                        src={item.image}
                                        alt={item.image}
                                        className="w-full h-full object-cover rounded-lg"
                                    />
                                </div>
                                <div className="ml-4 flex-grow">
                                    <h2 className="font-semibold text-gray-800">{item.name}</h2>
                                    <p className="text-sm text-gray-500">kích thước: {item.size} </p>
                                    <p className="text-sm text-gray-500">Chi tiết: {item.crust} </p>
                                    <p className="text-sm text-gray-500">Số lượng: {item.quantity}</p>
                                </div>
                                <div className="ml-8 flex-grow">
                                    <div className="text-orange-500 font-bold text-lg">{formatCurrencyVND(totalPrice)}</div>
                                </div>
                                {/* Quantity Control */}
                                <div className="flex items-center">
                                    <button onClick={() => handleQuantityChange(item.subId, -1)} className="px-2 py-1 border text-gray-500 bg-gray-100 rounded">-</button>
                                    <span className="mx-2">{item.quantity}</span>
                                    <button onClick={() => handleQuantityChange(item.subId, 1)} className="px-2 py-1 border text-gray-500 bg-gray-100 rounded">+</button>
                                </div>
                                {/* Delete Button */}
                                <button onClick={() => handleDelete(item.subId)} className="px-2 text-gray-400 hover:text-red-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                    </svg>
                                </button>
                            </div>
                        ))
                    )}
                </div>
                {/* Right Box: Order Summary */}
                <div className="p-4 bg-gray-50">
                    <h2 className="text-gray-800 font-semibold text-lg mb-4">Thông tin đơn hàng</h2>
                    <div className="flex justify-between text-gray-600 mb-2">
                        <span>Tạm tính</span>
                        <span>{formatCurrencyVND(totalPrice)}</span>
                    </div>
                    <div className="flex justify-between text-gray-600 mb-2">
                        <span>Phí giao hàng</span>
                        <span>{formatCurrencyVND(shippingFee)}</span>
                    </div>

                    {/* Discount Code */}
                    <div className="flex items-center mt-4 justify-between gap-2">
                        <input
                            type="text"
                            value={discountCode}
                            onChange={(e) => setDiscountCode(e.target.value)}
                            placeholder="Nhập mã giảm giá"
                            className="p-2 border rounded w-full  focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                        <button onClick={handleApplyDiscount} className="p-2 w-24 bg-[#BC9A6C] text-white rounded hover:bg-orange-600 transition duration-200">
                            Áp dụng
                        </button>
                    </div>

                    {/* Total */}
                    <div className="flex justify-between mt-4 text-lg font-semibold text-gray-800">
                        <span>Tổng cộng</span>
                        <span className="text-orange-500">{formatCurrencyVND(totalPrice + shippingFee)}</span>
                    </div>

                    <button className="mt-4 w-full py-2 bg-[#BC9A6C] text-white font-semibold rounded hover:bg-orange-600 transition duration-200">
                        <Link to="/checkout">Xác nhận đơn hàng</Link>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Cart;
