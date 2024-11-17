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
