import { memo, useState, useEffect, useContext } from "react";
import AxiosInstance from "utils/apiServers";
import { formatCurrencyVND } from "utils/format";
import { CartContext } from "components/add-to-cart";
import "assets/user/scss/tracking.scss";

const Discount = ({ isOpen, setIsOpen, setSelectedCode, subPrice }) => {
    const [discountCodes, setDiscountCodes] = useState([]);
    const [temporarySelectedCode, setTemporarySelectedCode] = useState(null);
    const { cart, applyDiscount } = useContext(CartContext);

    useEffect(() => {
        AxiosInstance.get("/coupons")
            .then((response) => {
                setDiscountCodes(response.data.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const handleSaveDiscount = () => {
        if (temporarySelectedCode) {
            setSelectedCode(temporarySelectedCode);
            applyDiscount(temporarySelectedCode);
        }
        setIsOpen(false);
    };

    useEffect(() => {
        if (!cart.some(item => item.selected)) {
            setTemporarySelectedCode(null);
        }

        if (temporarySelectedCode && subPrice < temporarySelectedCode.min_purchase_amount) {
            setTemporarySelectedCode(null);
        }
    }, [cart, subPrice, temporarySelectedCode]);

    if (!isOpen) return null;

    return (
        <div className="popup-refund__overlay show">
            {/* Popup Container */}
            <div className="bg-white rounded-lg shadow-lg w-11/12 max-w-lg p-4" data-aos="zoom-in">
                {/* Header */}
                <div className="flex justify-between items-center mb-4">
                    <div className="text-lg font-bold text-gray-800">Mã giảm giá</div>
                    <div>
                        <button
                            className="bg-white px-2 py-1 rounded-md shadow-md hover:bg-gray-200 transition duration-200"
                            onClick={() => setIsOpen(false)}
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
                </div>
                {/* Danh sách mã giảm giá */}
                <div className="overflow-y-auto custom-scrollbar max-h-[250px]">
                    {discountCodes.map((discount) => {
                        const isDisabled = subPrice < discount.min_purchase_amount || discount.qty <= 0;

                        return (
                            <div
                                key={discount.id}
                                className={`flex items-center justify-between p-2 border rounded-lg mb-2 cursor-pointer ${isDisabled ? "bg-gray-200 cursor-not-allowed" : "hover:bg-gray-100"
                                    }`}
                                onClick={() => !isDisabled && setTemporarySelectedCode(discount)}
                            >
                                <div className="flex items-center space-x-4">
                                    <div className="bg-orange-500 text-white font-bold text-lg px-3 py-2 rounded">
                                        {discount.name}
                                    </div>
                                    <div>
                                        <div className="font-semibold text-gray-800">{discount.code}</div>
                                        <div className="text-sm text-gray-600">Đơn hàng tối thiểu: {formatCurrencyVND(discount.min_purchase_amount)}</div>
                                        <div className="text-sm text-gray-600">Giảm giá: {discount.discount_type === "percent" ? `${discount.discount}%` : formatCurrencyVND(discount.discount)}</div>
                                        {
                                            discount.discount_type === "percent" && (
                                                <div className="text-sm text-gray-600">Giảm tối đa: {discount.discount_type === "percent" ? formatCurrencyVND(discount.max_discount_amount) : ""}</div>
                                            )
                                        }
                                        <div className="text-xs text-gray-400">HSD: {discount.expire_date_date}</div>
                                    </div>
                                </div>
                                <div>
                                    <input
                                        type="radio"
                                        name="discountCode"
                                        checked={temporarySelectedCode?.id === discount.id}
                                        onChange={() => !isDisabled && setTemporarySelectedCode(discount)}
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
                            {temporarySelectedCode
                                ? temporarySelectedCode.discount_type === "percent"
                                    ? `${temporarySelectedCode.discount}%`
                                    : formatCurrencyVND(temporarySelectedCode.discount)
                                : "Chưa chọn"
                            }
                        </span>
                    </div>
                    <button
                        onClick={() => handleSaveDiscount()}
                        className="w-full bg-orange-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-orange-600"
                    >
                        Chọn
                    </button>
                </div>
            </div>
        </div>
    );
};

export default memo(Discount);
