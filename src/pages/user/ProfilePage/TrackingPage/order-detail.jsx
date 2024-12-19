import { memo, useEffect, useState } from "react";
import "assets/user/scss/tracking.scss";
import { Link } from "react-router-dom";
import { formatCurrencyVND, formatImage } from "utils/format";
import AxiosInstance from "utils/apiServers";
import Rating from "./rating";

const OrderStatus = ({ order, onClose }) => {
    const [orderItems, setOrderItems] = useState([]);
    const [address, setAddress] = useState({});
    const [isPopupVisibleRating, setIsPopupVisibleRating] = useState(false);
    const [selectedItems, setSelectedItems] = useState([]);

    useEffect(() => {
        const fetchOrderItems = () => {
            AxiosInstance.get(`/order/${order.id}`)
                .then((res) => {
                    const data = res.data.order;
                    setOrderItems(data.items || []);
                    setAddress(data.addresses || {});
                })
                .catch((err) => {
                    console.log(err);
                })
        }

        // Gọi hàm lấy đơn hàng ngay khi load
        fetchOrderItems();

        // Thực hiện polling mỗi 5 giây (5000ms)
        const intervalId = setInterval(fetchOrderItems, 5000);

        // Cleanup khi component unmount
        return () => {
            clearInterval(intervalId);
        };
    }, [order.id]);

    const handleRatingOrder = (orderItems) => {
        setSelectedItems(orderItems);
        setIsPopupVisibleRating(true);
    };

    return (
        <div>
            <div className="popup-refund__overlay show">
                <div className="bg-gray-100 p-2 container" data-aos="zoom-in">
                    <div className="flex justify-end items-center mb-2">
                        <button
                            className="bg-white px-2 py-1 rounded-md shadow-md hover:bg-gray-200 transition duration-200"
                            onClick={onClose}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>

                    {/* Header */}
                    <div className="bg-white shadow-md rounded-md p-5 mb-6">
                        <div className="flex justify-between items-center">
                            <h1 className="text-lg font-semibold">Mã đơn hàng: {order.invoice_id}</h1>
                            <span
                                className={`font-medium uppercase ${order.order_status === "pending"
                                    ? "text-red-500"
                                    : order.order_status === "processing"
                                        ? "text-green-500"
                                        : order.order_status === "completed"
                                            ? "text-blue-500"
                                            : "text-gray-500"
                                    }`}
                            >
                                {order.order_status === "pending"
                                    ? "Đơn Hàng Đã Đặt"
                                    : order.order_status === "processing"
                                        ? "Đang Xử Lý"
                                        : order.order_status === "completed"
                                            ? "Đã Giao Hàng"
                                            : order.order_status === "canceled"
                                                ? "Đơn Hàng Đã Bị Hủy"
                                                : "Trạng Thái Không Xác Định"}
                            </span>
                        </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="bg-white shadow-md rounded-md p-4 mb-4">
                        <div className="flex items-center justify-between">
                            {/* Đơn Hàng Đã Đặt */}
                            <div className="flex-1 flex flex-col items-center">
                                <div
                                    className={`w-8 h-8 rounded-full flex items-center justify-center ${order.order_status === "pending" ||
                                        order.order_status === "processing" ||
                                        order.order_status === "completed"
                                        ? "bg-green-500 text-white"
                                        : "bg-gray-300 text-gray-500"
                                        }`}
                                >
                                    1
                                </div>
                                <span
                                    className={`text-sm mt-2 ${order.order_status === "pending" ||
                                        order.order_status === "processing" ||
                                        order.order_status === "completed"
                                        ? "font-bold text-green-500"
                                        : "text-gray-500"
                                        }`}
                                >
                                    Đơn Hàng Đã Đặt
                                </span>
                            </div>

                            <div
                                className={`flex-1 border-t-2 ${order.order_status === "pending" ||
                                    order.order_status === "processing" ||
                                    order.order_status === "completed"
                                    ? "border-green-500"
                                    : "border-gray-300"
                                    }`}
                            ></div>

                            {/* Chờ Xử lý */}
                            <div className="flex-1 flex flex-col items-center">
                                <div
                                    className={`w-8 h-8 rounded-full flex items-center justify-center ${order.order_status === "processing" ||
                                        order.order_status === "completed"
                                        ? "bg-green-500 text-white"
                                        : "bg-gray-300 text-gray-500"
                                        }`}
                                >
                                    2
                                </div>
                                <span
                                    className={`text-sm mt-2 ${order.order_status === "processing" ||
                                        order.order_status === "completed"
                                        ? "font-bold text-green-500"
                                        : "text-gray-500"
                                        }`}
                                >
                                    Chờ Xử Lý
                                </span>
                            </div>

                            <div
                                className={`flex-1 border-t-2 ${order.order_status === "processing" ||
                                    order.order_status === "completed"
                                    ? "border-green-500"
                                    : "border-gray-300"
                                    }`}
                            ></div>
                            <div className="flex-1 flex flex-col items-center">
                                <div
                                    className={`w-8 h-8 rounded-full flex items-center justify-center ${order.order_status === "completed"
                                        ? "bg-green-500 text-white"
                                        : "bg-gray-300 text-gray-500"
                                        }`}
                                >
                                    3
                                </div>
                                <span
                                    className={`text-sm mt-2 ${order.order_status === "completed"
                                        ? "font-bold text-green-500"
                                        : "text-gray-500"
                                        }`}
                                >
                                    Hoàn Thành
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Order Details */}
                    <div className="grid grid-cols-2 justify-between bg-white shadow-md rounded-md">
                        <div className="p-5 mb-4">
                            {address && (
                                <>
                                    <h2 className="text-lg font-semibold mb-4">Địa Chị Nhận Hàng</h2>
                                    <p className="text-sm mb-2 font-medium">{`${address.first_name} ${address.last_name}`}</p>
                                    <p className="text-sm mb-2">{address.phone}</p>
                                    <p className="text-sm mb-4">{address.address}</p>
                                </>
                            )}
                            {/* Order Items */}
                            <div className="mt-6">
                                <h2 className="text-lg font-semibold mb-4">Chi Tiết Sản Phẩm</h2>
                                <div className="scrollbar-order overflow-y-auto max-h-[194px] space-y-4">
                                    {orderItems.map((item) => (
                                        <div key={item.id} className="flex items-center justify-between border-b pb-2">
                                            <div>
                                                <Link to={`/detail/${item.product.id}`} className="w-16 h-16">
                                                    <img
                                                        src={formatImage(item.product.thumb_image)}
                                                        alt={item.product.name}
                                                        className="w-16 h-16 object-cover rounded-md"
                                                    />
                                                </Link>
                                            </div>
                                            <div>
                                                <p className="text-sm font-medium">{item.product.name}</p>
                                                <p className="text-sm text-gray-500">
                                                    Số lượng: {item.qty}
                                                </p>
                                                <p className="text-sm text-gray-500">
                                                    Kích thước: {item.product_size || "Không có"}
                                                </p>
                                                <p className="text-sm text-gray-500">
                                                    Đế bánh: {item.pizza_base || "Không có"}
                                                </p>
                                                <p className="text-sm text-gray-500">
                                                    Viền bánh: {item.pizza_edge || "Không có"}
                                                </p>
                                            </div>
                                            <div className="flex justify-center items-center gap-5">
                                                <p className="text-sm font-medium">
                                                    {formatCurrencyVND(item.unit_price * item.qty)}
                                                </p>
                                                <div>
                                                    {
                                                        order.order_status === "completed" && (
                                                            <button
                                                                className={`px-2 py-2 rounded-lg border ${item.product_reviews !== null && item.product_reviews.product_id === item.product_id
                                                                    ? "border-gray-400 bg-gray-300 text-gray-600 cursor-not-allowed"
                                                                    : "border-[#ff0000] bg-[#ff0000] text-white"
                                                                    }`}
                                                                onClick={() => handleRatingOrder(item)}
                                                                disabled={item.product_reviews !== null && item.product_reviews.product_id === item.product_id ? true : false}
                                                            >
                                                                {item.product_reviews !== null && item.product_reviews.product_id === item.product_id ? "Đã đánh giá" : "Đánh giá"}
                                                            </button>
                                                        )
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {isPopupVisibleRating && <Rating onClose={() => setIsPopupVisibleRating(false)} selectedItems={selectedItems} />}
        </div>
    );
};

export default memo(OrderStatus);
