import { memo, useState, useEffect, useContext } from "react";
import AxiosInstance from "utils/apiServers";
import { formatCurrencyVND } from "utils/format";
import { CartContext } from "components/add-to-cart";
import "assets/user/scss/tracking.scss";

const Discount = ({ isOpen, setIsOpen, selectedCode, setSelectedCode, subPrice }) => {
    const [discountCodes, setDiscountCodes] = useState([]);
    const { applyDiscount } = useContext(CartContext);

    useEffect(() => {
        AxiosInstance.get("/coupons")
            .then((response) => {
                setDiscountCodes(response.data.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const handleApplyDiscount = (discount) => {
        applyDiscount(discount);
        setSelectedCode(discount);
    };

    if (!isOpen) return null;

    return (
        <div className="popup-refund__overlay show">
            {/* Popup Container */}
            <div className="bg-white rounded-lg shadow-lg w-11/12 max-w-lg p-4" data-aos="zoom-in">
                {/* Header */}
                <div className="text-lg font-bold text-gray-800 border-b pb-2 mb-4">Mã giảm giá</div>
                {/* Danh sách mã giảm giá */}
                <div className="overflow-y-auto custom-scrollbar max-h-[310px]">
                    {discountCodes.map((discount) => {
                        const isDisabled = subPrice < discount.min_purchase_amount;

                        return (
                            <div
                                key={discount.id}
                                className={`flex items-center justify-between p-2 border rounded-lg mb-2 cursor-pointer ${isDisabled ? "bg-gray-200 cursor-not-allowed" : "hover:bg-gray-100"
                                    }`}
                                onClick={() => !isDisabled && handleApplyDiscount(discount)}
                            >
                                <div className="flex items-center space-x-4">
                                    <div className="bg-orange-500 text-white font-bold text-lg px-3 py-2 rounded">
                                        {discount.name}
                                    </div>
                                    <div>
                                        <div className="font-semibold text-gray-800">{discount.code}</div>
                                        <div className="text-sm text-gray-600">Đơn hàng tối thiểu: {formatCurrencyVND(discount.min_purchase_amount)}</div>
                                        <div className="text-sm text-gray-600">Giảm giá: {discount.discount_type === "percent" ? `${discount.discount}%` : formatCurrencyVND(discount.discount)}</div>
                                        <div className="text-xs text-gray-400">HSD: {discount.expire_date_date}</div>
                                    </div>
                                </div>
                                <div>
                                    <input
                                        type="radio"
                                        name="discountCode"
                                        checked={selectedCode?.id === discount.id}
                                        onChange={() => !isDisabled && handleApplyDiscount(discount)}
                                        disabled={isDisabled}
                                    />
                                </div>
                            </div>
                        )
                    })}
                </div>

                {/* Footer */}
                <div className="mt-4">
                    <div className="text-gray-600 text-sm mb-2">
                        Mã giảm giá: <span className="font-semibold text-gray-800">
                            {selectedCode
                                ? selectedCode.discount_type === "percent"
                                    ? `${selectedCode.discount}%`
                                    : formatCurrencyVND(selectedCode.discount)
                                : "Chưa chọn"
                            }
                        </span>
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

export default memo(Discount);
