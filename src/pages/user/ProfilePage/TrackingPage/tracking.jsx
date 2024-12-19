import React, { useState, useEffect } from "react";
import AxiosInstance from "utils/apiServers";
import OrderDetail from "./order-detail";
import Swal from "sweetalert2";
import { formatCurrencyVND, formatDate } from "utils/format";

const Tracking = () => {
    const [searchText, setSearchText] = useState("");
    const [filterDate, setFilterDate] = useState("");
    const [orderList, setOrderList] = useState([]);
    const [selectedOrder, setSelectedOrder] = useState(null);
    const [isPopupVisibleOrderDetail, setIsPopupVisibleOrderDetail] = useState(false);

    const user = JSON.parse(localStorage.getItem("user"));

    useEffect(() => {
        // Lấy danh sách đơn hàng của user lần đầu tiên
        const fetchOrders = () => {
            AxiosInstance.get(`/orders?user_id=${user.id}`)
                .then((res) => {
                    setOrderList(res.data.orders);
                })
                .catch((err) => {
                    console.error("Error fetching orders:", err);
                });
        };

        // Gọi hàm lấy đơn hàng ngay khi load
        fetchOrders();

        // Thực hiện polling mỗi 5 giây (5000ms)
        const intervalId = setInterval(fetchOrders, 5000);

        // Cleanup khi component unmount
        return () => {
            clearInterval(intervalId);
        };
    }, [user.id]);

    const handleViewOrderDetail = (order) => {
        setSelectedOrder(order);
        setIsPopupVisibleOrderDetail(true);
    };

    const handleCancelOrder = async (order) => {
        try {
            const confirmCancel = await Swal.fire({
                title: "Hủy đơn hàng?",
                text: "Bạn có chắc chắn muốn hủy đơn hàng này không?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonText: "Đồng ý",
                cancelButtonText: "Đóng",
            })

            if (!confirmCancel.isConfirmed) return;

            const response = await AxiosInstance.put(`/order/${order.id}`);

            if (response.status === 200) {
                await Swal.fire({
                    title: "Hủy đơn hàng thành công!",
                    text: "Đơn hàng của bạn đã được xử lý",
                    icon: "success",
                    confirmButtonText: "OK",
                });

                const updatedOrders = await AxiosInstance.get(
                    `/orders?user_id=${order.user_id}`
                );
                setOrderList(updatedOrders.data.orders);
            } else {
                throw new Error("Có lỗi xảy ra khi hủy đơn hàng.");
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="w-full mx-auto my-4 mb-4">
            <h2 className="text-2xl font-bold text-[#BC9A6C] mb-4">
                Theo dõi trạng thái đơn hàng
            </h2>

            {/* Filter and Search Bar */}
            <div className="flex items-center bg-gray-100 p-4 rounded-md mb-4 shadow">
                <input
                    type="text"
                    placeholder="Thời gian"
                    className="p-2 border border-gray-300 rounded mr-2 w-1/4"
                    value={filterDate}
                    onChange={(e) => setFilterDate(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Tìm kiếm"
                    className="p-2 border border-gray-300 rounded mr-2 w-1/4"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                />
                <select className="p-2 border border-gray-300 rounded mr-2 w-1/4">
                    <option>-- Sắp xếp --</option>
                    <option>Mới nhất</option>
                    <option>Cũ nhất</option>
                </select>
                <button className="p-2 w-1/5 bg-[#BC9A6C] text-white rounded">
                    Đồng ý
                </button>
            </div>

            {/* Order Table */}
            <div className="bg-white rounded-lg shadow overflow-hidden w-full">
                <table className="min-w-full bg-white">
                    <thead>
                        <tr className="bg-gray-50">
                            <th className="px-2 py-3 text-center text-gray-600">STT</th>
                            <th className="px-2 py-3 text-center text-gray-600">Mã hóa đơn</th>
                            <th className="px-2 py-3 text-center text-gray-600">Số lượng</th>
                            <th className="px-2 py-3 text-center text-gray-600">Tổng tiền</th>
                            <th className="px-4 py-3 text-center text-gray-600">Tình trạng</th>
                            <th className="px-4 py-3 text-center text-gray-600">Thơi gian đặt hàng</th>
                            <th className="flex items-center justify-center px-2 py-3 text-center text-gray-600">Hành động</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.isArray(orderList) && orderList.length > 0 ? (
                            orderList.map((order, index) => (
                                <tr key={order.id} className="border-t">
                                    <td className="px-2 py-2 text-center">{index + 1}</td>
                                    <td className="px-2 py-2 text-center">{order.invoice_id}</td>
                                    <td className="px-2 py-2 text-center">{order.product_qty}</td>
                                    <td className="px-2 py-2 text-center text-red-500">{formatCurrencyVND(order.grand_total)}</td>
                                    <td className="px-4 py-2 text-center">
                                        <span
                                            className={`px-2 py-1 text-xs text-white rounded ${order.order_status === "pending"
                                                ? "bg-yellow-500"
                                                : order.order_status === "processing"
                                                    ? "bg-orange-500"
                                                    : order.order_status === "completed"
                                                        ? "bg-green-500"
                                                        : order.order_status === "canceled"
                                                            ? "bg-red-500"
                                                            : "bg-gray-500"
                                                }`}
                                        >
                                            {
                                                order.order_status === "pending"
                                                    ? "Chưa xử lý"
                                                    : order.order_status === "processing"
                                                        ? "Đang giao"
                                                        : order.order_status === "completed"
                                                            ? "Đã giao"
                                                            : order.order_status === "canceled"
                                                                ? "Đã hủy"
                                                                : "Không xác định"
                                            }
                                        </span>
                                    </td>
                                    <td className="px-4 py-2 text-center">{formatDate(order.created_at)}</td>
                                    <td className="flex items-center justify-center gap-2 px-2 py-2 text-center text-blue-500 cursor-pointer">
                                        {
                                            order.order_status === "canceled" ? (
                                                <>
                                                    <button onClick={() => handleViewOrderDetail(order)} className="px-2 py-2 rounded-lg border border-[#BC9A6C] bg-[#BC9A6C] text-white">Chi tiết</button>
                                                    <button
                                                        className={`px-2 py-2 rounded-lg border ${order.order_status === "canceled"
                                                            ? "border-gray-400 bg-gray-300 text-gray-600 cursor-not-allowed"
                                                            : "border-[#ff0000] bg-[#ff0000] text-white"
                                                            }`}
                                                    >
                                                        Đã bị hủy
                                                    </button>
                                                </>
                                            ) : (
                                                <>
                                                    <button onClick={() => handleViewOrderDetail(order)} className="px-2 py-2 rounded-lg border border-[#BC9A6C] bg-[#BC9A6C] text-white">Chi tiết</button>
                                                    {order.order_status !== "completed" && order.order_status !== "processing" && (
                                                        <button onClick={() => handleCancelOrder(order)} className="px-2 py-2 rounded-lg border border-[#ff0000] bg-[#ff0000] text-white">Hủy đơn hàng</button>
                                                    )}
                                                </>
                                            )
                                        }
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="7" className="py-4 text-center">
                                    Không có đơn hàng
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {isPopupVisibleOrderDetail && <OrderDetail onClose={() => setIsPopupVisibleOrderDetail(false)} order={selectedOrder} />}
        </div>
    );
};

export default Tracking;
