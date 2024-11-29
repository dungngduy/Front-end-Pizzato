import { memo, useState, useEffect, useRef } from "react";
import AxiosInstance from "utils/apiServers";
import "assets/user/scss/tracking.scss";

const OrderTimeOut = () => {
    const [notifications, setNotifications] = useState([]);
    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const timeoutRef = useRef(null); // Dùng useRef để lưu timeout

    const user = JSON.parse(localStorage.getItem("user"));

    useEffect(() => {
        // Lấy thông báo từ backend
        AxiosInstance.get(`/notifications/${user.id}`)
            .then((res) => {
                setNotifications(res.data.notification); // Lưu thông báo vào state
                timeoutRef.current = setTimeout(() => {
                    setIsPopupVisible(true); // Hiển thị popup sau 5 giây
                }, 5000);
            })
            .catch((err) => {
                console.error("Error fetching notification:", err);
            });

        // Cleanup hàm setTimeout khi component bị unmount
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, [user.id]); // Dùng user.id làm dependency để chỉ chạy khi có thay đổi

    const handleClosePopup = () => {
        setIsPopupVisible(false);
    };

    return (
        <>
            {isPopupVisible && (
                <div className="popup-refund__overlay show">
                    <div className="bg-white rounded-lg shadow-lg w-[600px] relative p-6" data-aos="fade-down">
                        <h1 className="text-2xl font-bold text-center mb-6">
                            Thông báo
                        </h1>
                        <div className="policy-content mb-6">
                            <ul>
                                {notifications.map((notification, index) => (
                                    <li key={index}>
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
                                ))}
                            </ul>
                        </div>
                        <button
                            onClick={handleClosePopup}
                            className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
                        >
                            Đóng
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default memo(OrderTimeOut);