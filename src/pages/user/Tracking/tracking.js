import React, { useState } from "react";

const OrderTracking = () => {
  const [searchText, setSearchText] = useState("");
  const [filterDate, setFilterDate] = useState("");

  const orderData = [
    {
      id: 1,
      orderCode: "D0805H00036",
      date: "30/12/2020 10:30",
      productCount: 1,
      total: "15,797 ₫",
      paid: "15,797 ₫",
      remaining: "0 ₫",
      status: "Đã giao hàng",
    },
    {
      id: 2,
      orderCode: "D0805H00036",
      date: "30/12/2020 10:30",
      productCount: 1,
      total: "15,797 ₫",
      paid: "15,797 ₫",
      remaining: "0 ₫",
      status: "Đã giao hàng",
    },
  ];

  return (
    <div className="p-4 min-h-screen w-[1200px] mx-auto pt-10">
      <h2 className="text-lg font-bold text-yellow-500 mb-4">
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
          <option>Khởi tạo</option>
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
              <th className="px-2 py-3 text-left text-gray-600 w-12">STT</th>
              <th className="px-2 py-3 text-left text-gray-600 w-40">Mã hóa đơn</th>
              <th className="px-2 py-3 text-center text-gray-600 w-16">Số SP</th>
              <th className="px-2 py-3 text-right text-gray-600 w-32">Tổng tiền</th>
              <th className="px-2 py-3 text-right text-gray-600 w-32">Đã thanh toán</th>
              <th className="px-2 py-3 text-right text-gray-600 w-32">Còn thiếu</th>
              <th className="px-4 py-3 text-center text-gray-600 w-40">Tình trạng</th>
              <th className="px-2 py-3 text-center text-gray-600 w-20">Chi tiết</th>
            </tr>
          </thead>
          <tbody>
            {orderData.map((order, index) => (
              <tr key={order.id} className="border-t">
                <td className="px-2 py-2 text-center">{index + 1}</td>
                <td className="px-2 py-2">{order.orderCode}</td>
                <td className="px-2 py-2 text-center">{order.productCount}</td>
                <td className="px-2 py-2 text-right text-red-500">{order.total}</td>
                <td className="px-2 py-2 text-right">{order.paid}</td>
                <td className="px-2 py-2 text-right">{order.remaining}</td>
                <td className="px-4 py-2 text-center">
                  <span className="px-2 py-1 text-xs text-white bg-green-500 rounded">
                    {order.status}
                  </span>
                </td>
                <td className="px-2 py-2 text-center text-blue-500 cursor-pointer">
                  Chi tiết
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderTracking;
