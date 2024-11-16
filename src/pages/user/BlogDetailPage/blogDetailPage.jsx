import React from "react";
const BlogDetail = () => {
  return (
    <div className="container py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Content chính */}
        <div className="col-span-2 bg-white rounded-md p-6">
          <h1 className="text-2xl font-bold text-red-600 mb-4">
            Trang chi tiết bài viết
          </h1>
          <div>
            <img
              src="https://www.pizzaexpress.vn/wp-content/uploads/2020/12/Artboard-7-copy-2-1.jpg"
              alt="Pizza khuyến mãi"
              className="mb-6 rounded-lg shadow-lg"
            />
            <p className="text-xl font-semibold text-yellow-600 mb-2">
              TẶNG NGAY 1 PIZZA + 1 COCA COLA
            </p>
            <p className="text-lg text-gray-600 mb-4">
              Code: <span className="text-red-500 font-bold">SN12</span>
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6">
              <li className="font-medium">🎉 Sinh nhật là phải có quà 🎉</li>
              <li>
                <span className="text-red-600 font-bold">
                  Pizza Express
                </span>{" "}
                khuyến mãi tưng bừng - Mừng sinh nhật bạn.
              </li>
              <li>
                <span className="text-red-600 font-bold">
                  Pizza Express tặng ngay 01 bánh Pizza (size S) và 1 Coca Cola
                  390ml.
                </span>
              </li>
            </ul>

            <p className="text-gray-700 font-bold mb-2">Điều kiện áp dụng:</p>
            <ul className="list-disc list-inside text-gray-700 ml-4 mb-4">
              <li>Có sinh nhật trùng với ngày đặt bánh.</li>
              <li>Đơn hàng tối thiểu từ 399k trở lên.</li>
            </ul>
            <p className="text-gray-700 mb-4">
              Vui lòng cung cấp mã{" "}
              <span className="text-red-500 font-bold">SN12</span> cho nhân
              viên khi đặt bánh.
            </p>
            <p className="text-gray-700 mb-4">
              <span className="font-bold">Lưu ý:</span> Không áp dụng đồng thời
              các chương trình khuyến mãi khác.
            </p>
            <p className="text-gray-700 mb-6">
              📞 Liên hệ tổng đài tư vấn:{" "}
              <span className="text-red-600 font-bold">024.3688.7777</span>
            </p>

            <h2 className="text-xl font-bold text-gray-700 mb-2">
              Pizza Express Vietnam hiện có 4 cơ sở tại Hà Nội:
            </h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>CS1: 107D3 Ngọc Khánh, Ba Đình, Hà Nội</li>
              <li>CS2: 14 Ngõ 497 Nguyễn Trãi, Thanh Xuân, Hà Nội</li>
              <li>CS3: 56 Ô Đồng Bát, Cầu Giấy, Hà Nội</li>
              <li>CS4: 52 Kim Đồng, Hoàng Mai, Hà Nội</li>
            </ul>
          </div>
        </div>

        {/* Danh sách bài viết khác */}
        <div className=" rounded-md bg-gray-200 p-6">
          <h2 className="text-xl font-bold text-gray-700 mb-4">
            Bài viết khác
          </h2>
          <ul className="space-y-4 border-b-4">
            {[
              "Pizza mua 1 tặng 1",
              "Sinh nhật rộn ràng",
              "Pizza khuyến mãi thứ 6",
              "Đặt bánh Pizza tiện lợi",
              "Pizza khuyến mãi thứ 7",
              "Pizza ship tận nhà Hà Nội",
            ].map((title, index) => (
              <li
                key={index}
                className="flex items-center space-x-4 pb-4 border-b-4"
              >
                <img
                  src="https://www.pizzaexpress.vn/wp-content/uploads/2020/12/Artboard-7-copy-2-1.jpg"
                  alt={title}
                  className="w-20 h-16 rounded-md object-cover"
                />
                <p className="text-gray-700">{title}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
