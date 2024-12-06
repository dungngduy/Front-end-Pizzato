import { memo } from "react";
import "assets/user/scss/tracking.scss";
import { formatCurrencyVND } from "utils/format";

const OrderStatus = ({ onClose }) => {
    const orderItems = [
        { id: 1, name: "Pizza Pepperoni", price: 150000, quantity: 2 },
        { id: 2, name: "Coca-Cola", price: 20000, quantity: 3 },
        { id: 3, name: "Salad Caesar", price: 50000, quantity: 1 },
        { id: 4, name: "Salad Caesar", price: 50000, quantity: 1 },
        { id: 5, name: "Salad Caesar", price: 50000, quantity: 1 },
        { id: 6, name: "Salad Caesar", price: 50000, quantity: 1 },
    ];

    return (
        <div>
            <div className="popup-refund__overlay show">
                <div className="bg-gray-100 p-2 container" data-aos="zoom-in">
                    <div className="flex justify-end items-center mb-2">
                        <button
                            className="bg-white px-2 py-1 rounded-md shadow-md hover:bg-gray-200 transition duration-200"
                            onClick={onClose}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    {/* Header */}
                    <div className="bg-white shadow-md rounded-md p-5 mb-6">
                        <div className="flex justify-between items-center">
                            <h1 className="text-lg font-semibold">Mã đơn hàng: 24112571XSG3B2</h1>
                            <span className="text-red-500 font-medium">GIAO HÀNG THÀNH CÔNG</span>
                        </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="bg-white shadow-md rounded-md p-4 mb-4">
                        <div className="flex items-center justify-between">
                            <div className="flex-1 flex flex-col items-center">
                                <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center">
                                    1
                                </div>
                                <span className="text-sm mt-2">Đơn Hàng Đã Đặt</span>
                            </div>

                            <div className="flex-1 border-t-2 border-green-500"></div>

                            <div className="flex-1 flex flex-col items-center">
                                <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center">
                                    2
                                </div>
                                <span className="text-sm mt-2">Đơn Hàng Đã Thanh Toán</span>
                            </div>

                            <div className="flex-1 border-t-2 border-green-500"></div>

                            <div className="flex-1 flex flex-col items-center">
                                <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center">
                                    4
                                </div>
                                <span className="text-sm mt-2">Chờ Giao Hàng</span>
                            </div>

                            <div className="flex-1 border-t-2 border-gray-300"></div>

                            <div className="flex-1 flex flex-col items-center">
                                <div className="w-8 h-8 bg-gray-300 text-white rounded-full flex items-center justify-center">
                                    5
                                </div>
                                <span className="text-sm mt-2">Đánh Giá</span>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 justify-between bg-white shadow-md rounded-md">
                        {/* Order Details */}
                        <div className="p-5 mb-4">
                            <h2 className="text-lg font-semibold mb-4">Địa Chỉ Nhận Hàng</h2>
                            <p className="text-sm mb-2 font-medium">Đỗ Bá Chính</p>
                            <p className="text-sm mb-2">(+84) 373860506</p>
                            <p className="text-sm mb-4">Số nhà 23, Hẻm 179/64/41...</p>

                            {/* Order Items */}
                            <div className="mt-6">
                                <h2 className="text-lg font-semibold mb-4">Chi Tiết Sản Phẩm</h2>
                                <div
                                    className="scrollbar-order overflow-y-auto max-h-[194px] space-y-4"
                                >
                                    {orderItems.map((item) => (
                                        <div key={item.id} className="flex items-center justify-between border-b pb-2">
                                            <div>
                                                <p className="text-sm font-medium">{item.name}</p>
                                                <p className="text-sm text-gray-500">
                                                    Số lượng: {item.quantity}
                                                </p>
                                                <p className="text-sm text-gray-500">
                                                    Kích thúc: Nhỏ
                                                </p>
                                                <p className="text-sm text-gray-500">
                                                    Đế bánh: Nâu | Mẫu: Xanh
                                                </p>
                                            </div>
                                            <div>
                                                <p className="text-sm font-medium">
                                                    {formatCurrencyVND(item.price * item.quantity)}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Timeline */}
                        <div className="p-5 mb-4 space-y-2">
                            <div className="flex items-start">
                                <div className="w-4 h-4 bg-green-500 rounded-full mt-1"></div>
                                <div className="ml-4">
                                    <p className="text-sm font-medium">18:59 27-11-2024</p>
                                    <p className="text-sm text-gray-500">
                                        Đã giao - Giao hàng thành công
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="w-4 h-4 bg-green-500 rounded-full mt-1"></div>
                                <div className="ml-4">
                                    <p className="text-sm font-medium">08:42 27-11-2024</p>
                                    <p className="text-sm text-gray-500">
                                        Đơn hàng đã đến trạm giao hàng tại khu vực của bạn và sẽ được
                                        giao trong vòng 24h
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="w-4 h-4 bg-green-500 rounded-full mt-1"></div>
                                <div className="ml-4">
                                    <p className="text-sm font-medium">08:42 27-11-2024</p>
                                    <p className="text-sm text-gray-500">
                                        Đơn hàng đã rời đến bưu cục
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="w-4 h-4 bg-green-500 rounded-full mt-1"></div>
                                <div className="ml-4">
                                    <p className="text-sm font-medium">08:42 27-11-2024</p>
                                    <p className="text-sm text-gray-500">
                                        Đơn hàng đã giao đến bưu cục{" "}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* Action Buttons */}
                    {/* <div className="bg-white shadow-md rounded-md p-4 flex justify-between items-center">
                        <button className="bg-red-500 text-white px-4 py-2 rounded-md">Đã Nhận Hàng</button>
                        <div className="flex space-x-2">
                            <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md">Yêu Cầu Trả Hàng/Hoàn Tiền</button>
                            <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md">Liên Hệ Người Bán</button>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default memo(OrderStatus);
