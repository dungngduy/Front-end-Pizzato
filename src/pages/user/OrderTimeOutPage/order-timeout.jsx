import { memo, useState, useEffect, useRef } from "react";
import AxiosInstance from "utils/apiServers";
import "assets/user/scss/tracking.scss";

const OrderTimeOut = () => {
    const [notifications, setNotifications] = useState([]);
    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const timeoutRef = useRef(null);

    const user = JSON.parse(localStorage.getItem("user"));

    useEffect(() => {
        const lastNotificationId = sessionStorage.getItem("lastNotificationId");

        AxiosInstance.get(`/notifications/${user.id}`)
            .then((res) => {
                const notifications = res.data.notification;

                if (
                    notifications.length === 0 ||
                    (lastNotificationId && lastNotificationId === notifications.id)
                ) {
                    return;
                }

                setNotifications(notifications);
                timeoutRef.current = setTimeout(() => {
                    setIsPopupVisible(true);
                    sessionStorage.setItem("lastNotificationId", notifications.id);
                }, 5000);
            })
            .catch((err) => {
                console.error(err);
            });
    
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, [user.id]);

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
                                {notifications && (
                                    <li key={notifications.id}>
                                        <p>
                                            <strong>Mã hóa đơn:</strong> {notifications.invoice_id}
                                        </p>
                                        <p>
                                            <strong>Lý do:</strong> {notifications.reason}
                                        </p>
                                        <p>
                                            <strong>Giải pháp:</strong> {notifications.solution}
                                        </p>
                                    </li>
                                )}
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