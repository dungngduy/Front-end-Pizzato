import React, { useState, useEffect } from "react";
import AxiosInstance from "utils/apiServers";
import { formatCurrencyVND } from "utils/format";

const Tracking = () => {
    const [searchText, setSearchText] = useState("");
    const [filterDate, setFilterDate] = useState("");
    const [orderList, setOrderList] = useState([]);

    const user = JSON.parse(localStorage.getItem("user"));

    useEffect(() => {
        AxiosInstance.get(`/orders?user_id=${user.id}`)
            .then((res) => {
                setOrderList(res.data.orders);
            })
            .catch((err) => {
                console.error("Error fetching orders:", err);
            });
    }, [user.id]);

    return (
        <div className="w-full mx-auto my-4 mb-4">
            <h2 className="text-lg font-bold text-[#BC9A6C] mb-4">
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
                            <th className="px-2 py-3 text-center text-gray-600 w-12">STT</th>
                            <th className="px-2 py-3 text-center text-gray-600 w-40">Mã hóa đơn</th>
                            <th className="px-2 py-3 text-center text-gray-600 w-16">Số SP</th>
                            <th className="px-2 py-3 text-center text-gray-600 w-32">Tổng tiền</th>
                            <th className="px-4 py-3 text-center text-gray-600 w-40">Tình trạng</th>
                            <th className="px-2 py-3 text-center text-gray-600 w-20">Hành động</th>
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
                                                    : order.order_status === "processed"
                                                        ? "bg-blue-500"
                                                        : order.order_status === "shipped"
                                                            ? "bg-orange-500"
                                                            : order.order_status === "delivered"
                                                                ? "bg-green-500"
                                                                : "bg-gray-500"
                                                }`}
                                        >
                                            {
                                                order.order_status === "pending"
                                                    ? "Chưa xử lý"
                                                    : order.order_status === "processed"
                                                        ? "Đã xử lý"
                                                        : order.order_status === "shipped"
                                                            ? "Đang giao"
                                                            : order.order_status === "delivered"
                                                                ? "Đã giao"
                                                                : "Không xác định"
                                            }
                                        </span>
                                    </td>
                                    <td className="w-[330px] flex items-center justify-start gap-2 px-2 py-2 text-center text-blue-500 cursor-pointer">
                                        <button className="px-2 py-2 rounded-lg border border-[#BC9A6C] bg-[#BC9A6C] text-white hover:bg-white hover:text-[#BD9A6C] transition duration-500">Chi tiết</button>
                                        <button className="px-2 py-2 rounded-lg border border-[#BC9A6C] bg-[#BC9A6C] text-white hover:bg-white hover:text-[#BD9A6C] transition duration-500">Hủy đơn hàng</button>
                                        {
                                            order.order_status === "delivered" && (
                                                <button className="px-2 py-2 rounded-lg border border-[#BC9A6C] bg-[#BC9A6C] text-white hover:bg-white hover:text-[#BD9A6C] transition duration-500">Viết đánh giá</button>
                                            )
                                        }
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="6" className="py-4 text-center">
                                    Không có đơn hàng
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Tracking;
