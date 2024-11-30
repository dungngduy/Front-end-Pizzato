import React from "react";

const Discount  = ({ isOpen, setIsOpen, selectedCode, setSelectedCode }) => {
  const discountCodes = [
    { id: 1, title: "200k", minOrder: "Đơn Tối Thiểu 0đ", code: "ENFAGIFT8", expiry: "31-08-2018" },
    { id: 2, title: "10% OFF", minOrder: "Đơn Tối Thiểu 100k", code: "ENFAAU2", expiry: "31-08-2018" },
    { id: 3, title: "10% OFF", minOrder: "Đơn Tối Thiểu 100k", code: "ENFAAU1", expiry: "31-08-2018" },
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-11/12 max-w-lg p-4">
        <div className="text-lg font-bold text-gray-800 border-b pb-2 mb-4">Mã giảm giá</div>
        <div>
          {discountCodes.map((discount) => (
            <div
              key={discount.id}
              className="flex items-center justify-between p-2 border rounded-lg mb-2 cursor-pointer hover:bg-gray-100"
              onClick={() => setSelectedCode(discount.code)}
            >
              <div className="flex items-center space-x-4">
                <div className="bg-orange-500 text-white font-bold text-lg px-3 py-2 rounded">
                  {discount.title}
                </div>
                <div>
                  <div className="font-semibold text-gray-800">{discount.code}</div>
                  <div className="text-sm text-gray-600">{discount.minOrder}</div>
                  <div className="text-xs text-gray-400">HSD: {discount.expiry}</div>
                </div>
              </div>
              <div>
                <input
                  type="radio"
                  name="discountCode"
                  checked={selectedCode === discount.code}
                  onChange={() => setSelectedCode(discount.code)}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-4">
          <div className="text-gray-600 text-sm mb-2">
            Mã giảm giá: <span className="font-semibold text-gray-800">{selectedCode || "Chưa chọn"}</span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="w-full bg-orange-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-orange-600"
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
};

export default Discount ;
