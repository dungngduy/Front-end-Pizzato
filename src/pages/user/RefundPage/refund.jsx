import React, { memo, useState } from "react";

const Refund = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {/* Nút mở form */}
      <button
        onClick={handleOpen}
        className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
      >
        Mở Form Yêu Cầu Hoàn Tiền
      </button>

      {/* Popup Form */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50"
          onClick={handleClose}
        >
          <div
            className="bg-white rounded-lg shadow-lg w-96 relative"
            onClick={(e) => e.stopPropagation()} // Ngăn chặn đóng modal khi nhấn bên trong
          >
            <form action="/refunds" method="POST" className="p-6">
              <h2 className="text-2xl font-bold text-center text-gray-700 mb-4">
                Yêu Cầu Hoàn Tiền
              </h2>

              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-600">
                  Tên người dùng
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value="Nguyễn Văn A"
                  readOnly
                  className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100 cursor-not-allowed"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  defaultValue="email@example.com"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="invoice_id" className="block text-sm font-medium text-gray-600">
                  Mã hóa đơn
                </label>
                <input
                  type="text"
                  id="invoice_id"
                  name="invoice_id"
                  readOnly
                  value="123456" 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100 cursor-not-allowed"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="refund_amount" className="block text-sm font-medium text-gray-600">
                  Số tiền hoàn trả
                </label>
                <input
                  type="text"
                  id="refund_amount"
                  name="refund_amount"
                  value="500,000 VNĐ"
                  readOnly
                  className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100 cursor-not-allowed"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="refund_reason" className="block text-sm font-medium text-gray-600">
                  Lý do hoàn tiền
                </label>
                <textarea
                  id="refund_reason"
                  name="refund_reason"
                  rows="4"
                  placeholder="Nhập lý do..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                ></textarea>
              </div>

              <div className="mb-4">
                <label htmlFor="bank_number" className="block text-sm font-medium text-gray-600">
                  Số tài khoản ngân hàng
                </label>
                <input
                  type="text"
                  id="bank_number"
                  name="bank_number"
                  placeholder="Nhập số tài khoản..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="bank_type" className="block text-sm font-medium text-gray-600">
                  Loại ngân hàng
                </label>
                <input
                  type="text"
                  id="bank_type"
                  name="bank_type"
                  placeholder="Nhập tên ngân hàng..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
              >
                Gửi Yêu Cầu
              </button>
            </form>
            <button
              onClick={handleClose}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 transition focus:outline-none"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default memo(Refund);
