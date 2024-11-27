import { memo, useState } from "react";
import RefundCash from "./refund-cash";
import "assets/user/scss/tracking.scss";

const Notification = ({ order }) => {
    const [isPopupVisibleRefund, setIsPopupVisibleRefund] = useState(false);
    const [isAgreed, setIsAgreed] = useState(false);

    const handleAgreePolicy = () => {
        setIsAgreed(true);
        setIsPopupVisibleRefund(true);
    };

    const handleClosePopup = () => {
        setIsPopupVisibleRefund(false);
    };

    const handleRadioChange = (e) => {
        setIsAgreed(e.target.value === "agree");
    };

    return (
        <div>
            <div className="popup-refund__overlay show">
                <div className="bg-white rounded-lg shadow-lg w-[600px] relative p-6" data-aos="fade-down">
                    <h1 className="text-2xl font-bold text-center mb-6">
                        Điều Khoản và Chính Sách
                    </h1>
                    <div className="policy-content mb-6">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                            volutpat, lorem nec suscipit dapibus, justo magna luctus risus, vel
                            ullamcorper tortor sem nec arcu. Proin at efficitur orci, nec
                            fermentum lorem. Curabitur sed nisl id nulla vulputate malesuada.
                        </p>
                        <p className="mt-4">
                            Hãy đọc kỹ các điều khoản và chính sách trước khi tiếp tục sử dụng
                            dịch vụ. Việc đồng ý điều khoản đồng nghĩa với việc bạn chấp nhận
                            mọi điều khoản trong tài liệu này.
                        </p>
                    </div>
                    <div className="mb-4">
                        <div className="flex items-center">
                            <input
                                type="radio"
                                id="agree"
                                name="policy"
                                value="agree"
                                checked={isAgreed}
                                onChange={handleRadioChange}
                                className="mr-2"
                            />
                            <label htmlFor="agree" className="text-sm text-gray-600">
                                Tôi đồng ý với các điều khoản
                            </label>
                        </div>
                    </div>

                    {/* Button Đồng ý điều khoản chỉ hiển thị khi đã chọn đồng ý */}
                    <div className="flex justify-end gap-2">
                        <button
                            onClick={handleAgreePolicy}
                            className={`border border-[#BC9A6C] bg-[#BC9A6C] text-white px-6 py-3 rounded-md ${!isAgreed && "cursor-not-allowed opacity-50"
                                }`}
                            disabled={!isAgreed}
                        >
                            Đồng ý điều khoản
                        </button>
                    </div>
                </div>
            </div>
            {isPopupVisibleRefund && <RefundCash onClose={handleClosePopup} order={order} />}
        </div>
    );
};

export default memo(Notification);