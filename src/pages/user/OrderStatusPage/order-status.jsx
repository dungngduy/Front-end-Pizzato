import React from 'react';

const OrderStatus = () => {
  return (
    <div className="bg-gray-100 p-4">
      {/* Header */}
      <div className="bg-white shadow-md rounded-md p-4 mb-4">
        <div className="flex justify-between items-center">
          <h1 className="text-lg font-semibold">Mã đơn hàng: 24112571XSG3B2</h1>
          <span className="text-red-500 font-medium">GIAO HÀNG THÀNH CÔNG</span>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="bg-white shadow-md rounded-md p-4 mb-4">
        <div className="flex items-center justify-between">
          <div className="flex-1 flex flex-col items-center">
            <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center">1</div>
            <span className="text-sm mt-2">Đơn Hàng Đã Đặt</span>
          </div>

          <div className="flex-1 border-t-2 border-green-500"></div>

          <div className="flex-1 flex flex-col items-center">
            <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center">2</div>
            <span className="text-sm mt-2">Đơn Hàng Đã Thanh Toán</span>
          </div>

          <div className="flex-1 border-t-2 border-green-500"></div>

          <div className="flex-1 flex flex-col items-center">
            <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center">3</div>
            <span className="text-sm mt-2">Đã Giao Cho ĐVVC</span>
          </div>

          <div className="flex-1 border-t-2 border-green-500"></div>

          <div className="flex-1 flex flex-col items-center">
            <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center">4</div>
            <span className="text-sm mt-2">Chờ Giao Hàng</span>
          </div>

          <div className="flex-1 border-t-2 border-gray-300"></div>

          <div className="flex-1 flex flex-col items-center">
            <div className="w-8 h-8 bg-gray-300 text-white rounded-full flex items-center justify-center">5</div>
            <span className="text-sm mt-2">Đánh Giá</span>
          </div>
        </div>
      </div>

      {/* Order Details */}
      <div className="bg-white shadow-md rounded-md p-4 mb-4">
        <h2 className="text-lg font-semibold mb-4">Địa Chỉ Nhận Hàng</h2>
        <p className="text-sm mb-2 font-medium">Đỗ Bá Chính</p>
        <p className="text-sm mb-2">(+84) 373860506</p>
        <p className="text-sm mb-4">Số nhà 23, Hẻm 179/64/41...</p>

        {/* Timeline */}
        <div className="space-y-2">
          <div className="flex items-start">
            <div className="w-4 h-4 bg-green-500 rounded-full mt-1"></div>
            <div className="ml-4">
              <p className="text-sm font-medium">18:59 27-11-2024</p>
              <p className="text-sm text-gray-500">Đã giao - Giao hàng thành công</p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="w-4 h-4 bg-green-500 rounded-full mt-1"></div>
            <div className="ml-4">
              <p className="text-sm font-medium">08:42 27-11-2024</p>
              <p className="text-sm text-gray-500">Đang vận chuyển</p>
            </div>
          </div>

          {/* Add more timeline items as needed */}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="bg-white shadow-md rounded-md p-4 flex justify-between items-center">
        <button className="bg-red-500 text-white px-4 py-2 rounded-md">Đã Nhận Hàng</button>
        <div className="flex space-x-2">
          <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md">Yêu Cầu Trả Hàng/Hoàn Tiền</button>
          <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md">Liên Hệ Người Bán</button>
        </div>
      </div>
    </div>
  );
};

export default OrderStatus;
