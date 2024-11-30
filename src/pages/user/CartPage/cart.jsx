import React, { memo, useState, useContext } from "react";
import { formatCurrencyVND, formatImage } from "utils/format";
import { Link } from "react-router-dom";
import { CartContext } from "components/add-to-cart";

const Cart = () => {
    const { cart, updateCartItem, removeFromCart, toggleItemSelection } = useContext(CartContext);
    const [discountCode, setDiscountCode] = useState("");

    const handleApplyDiscount = () => {
        alert(`Discount code applied: ${discountCode}`);
    };

    const selectedItems = cart.filter(item => item.selected);
    const totalPrice = selectedItems.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div className="flex justify-center py-16 w-[1200px] max-w-7xl mx-auto">
            <div className="grid grid-cols-3 gap-4 w-full bg-white rounded-lg overflow-hidden">
                {/* Left Box: Product List */}
                {cart.length === 0 ? (
                    <div className="col-span-2 border p-4 flex justify-center items-center">
                        <img
                            className="w-[350px] h-[300px]"
                            src="/assets/images/empty-cart.webp"
                            alt=""
                        />
                    </div>
                ) : (
                    <div className="col-span-2 border-r p-4">
                        <div className="flex items-center mb-2">
                            <input
                                type="checkbox"
                                className="form-checkbox h-4 w-4 text-orange-500"
                                onChange={() => {
                                    const allSelected = cart.every(item => item.selected);
                                    cart.forEach(item => toggleItemSelection(item.subId, !allSelected));
                                }}
                            />
                            <span className="ml-2 font-semibold text-lg">Chọn tất cả</span>
                        </div>

                        {cart.map((item, index) => (
                            <div key={index} className="flex items-center border-t py-4 h-46 hover:bg-gray-50 transition duration-200">
                                <input
                                    type="checkbox"
                                    className="form-checkbox h-4 w-4 text-orange-500"
                                    checked={item.selected || false}
                                    onChange={() => toggleItemSelection(item.subId)}
                                />
                                <div className="ml-4 w-16 h-16 rounded">
                                    <img
                                        src={formatImage(item.image)}
                                        alt={item.name}
                                        className="w-full h-full object-cover rounded-lg"
                                    />
                                </div>
                                <div className="ml-4 flex-grow">
                                    <h2 className="font-semibold text-gray-800">{item.name}</h2>
                                    <p className="text-sm text-gray-500">Kích thước: {item.size}</p>
                                    <p className="text-sm text-gray-500">Chi tiết: {item.crust}</p>
                                    <p className="text-sm text-gray-500">Số lượng: {item.quantity}</p>
                                </div>
                                <div className="ml-8 flex-grow">
                                    <div className="text-orange-500 font-bold text-lg">{formatCurrencyVND(item.price * item.quantity)}</div>
                                </div>
                                {/* Quantity Control */}
                                <div className="flex items-center">
                                    <button onClick={() => item.quantity > 1 && updateCartItem(item.subId, item.quantity - 1)} className="px-2 py-1 border text-gray-500 bg-gray-100 rounded">-</button>
                                    <span className="mx-2">{item.quantity}</span>
                                    <button onClick={() => updateCartItem(item.subId, item.quantity + 1)} className="px-2 py-1 border text-gray-500 bg-gray-100 rounded">+</button>
                                </div>
                                {/* Delete Button */}
                                <button onClick={() => removeFromCart(item.subId)} className="px-2 text-gray-400 hover:text-red-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                    </svg>
                                </button>
                            </div>
                        ))}
                    </div>
                )}

                {/* Right Box: Order Summary */}
                <div className="p-4 bg-gray-50 flex flex-col h-full">
                    <div className="flex-grow">
                        <h2 className="text-gray-800 font-semibold text-lg mb-4">Thông tin đơn hàng</h2>
                        <div className="flex justify-between text-gray-600 mb-2">
                            <span>Tạm tính</span>
                            <span>{formatCurrencyVND(totalPrice)}</span>
                        </div>
                        {/*<div className="flex justify-between text-gray-600 mb-2">
                            <span>Phí giao hàng</span>
                            <span>{formatCurrencyVND(shippingFee)}</span>
                        </div>*/}

                        {/* Discount Code */}
                        <div className="flex items-center mt-4 justify-between gap-2">
                            <input
                                type="text"
                                value={discountCode}
                                onChange={(e) => setDiscountCode(e.target.value)}
                                placeholder="Nhập mã giảm giá"
                                className="p-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-orange-500"
                            />
                            <button
                                onClick={handleApplyDiscount}
                                className="p-2 w-24 bg-[#BC9A6C] text-white rounded hover:bg-orange-600 transition duration-200"
                            >
                                Áp dụng
                            </button>
                        </div>

                        {/* Total */}
                        <div className="flex justify-between mt-4 text-lg font-semibold text-gray-800">
                            <span>Tổng cộng</span>
                            <span className="text-orange-500">{formatCurrencyVND(totalPrice)}</span>
                        </div>
                    </div>

                    {/* Confirm Button */}
                    <Link to="/checkout">
                        <button className="mt-4 w-full py-2 bg-[#BC9A6C] text-white font-semibold rounded hover:bg-[#BC9A6C]-600 transition duration-200">
                            Xác nhận đơn hàng
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default memo(Cart);
