import { memo } from "react";
import "assets/user/scss/tracking.scss";

const DetailNotification = ({ notification, onClose }) => {
    return (
        <div className="popup-refund__overlay show">
            <div className="bg-white rounded-lg shadow-lg w-[600px] relative p-6" data-aos="fade-down">
                <h1 className="text-2xl font-bold text-center mb-6">
                    Thông báo
                </h1>
                <div className="policy-content mb-6">
                    <ul>
                        <li>
                            <p>
                                <strong>Mã hóa đơn:</strong> {notification.invoice_id}
                            </p>
                            <p>
                                <strong>Lý do:</strong> {notification.reason}
                            </p>
                            <p>
                                <strong>Giải pháp:</strong> {notification.solution}
                            </p>
                        </li>
                    </ul>
                </div>
                <button
                    className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
                    onClick={onClose}
                >
                    Đóng
                </button>
            </div>
        </div>
    );
};

export default memo(DetailNotification);