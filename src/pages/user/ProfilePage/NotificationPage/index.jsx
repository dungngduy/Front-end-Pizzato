import { memo, useState, useEffect } from "react";
import AxiosInstance from "utils/apiServers";
import { formatDate } from "utils/format";
import DetailNotification from "./detail-notification";

const Notifications = () => {
    const [user, setUser] = useState(null);
    const [notifications, setNotifications] = useState([]);
    const [selectedNotification, setSelectedNotification] = useState(null);

    useEffect(() => {
        const userFromStorage = JSON.parse(localStorage.getItem("user"));
        setUser(userFromStorage);
    }, []);

    useEffect(() => {
        const fetchNotifications = async () => {
            if (user && user.id) {
                try {
                    const res = await AxiosInstance.get(`/notifications/${user.id}`);
                    const notification = res.data.notification;
                    setNotifications(notification);
                } catch (err) {
                    console.log("Lỗi khi gọi API thông báo:", err);
                }
            }
        };

        fetchNotifications();
    }, [user]);

    const markAsRead = async (notificationId) => {
        try {
            await AxiosInstance.put(`/notifications/${notificationId}/read`);

            setNotifications(prevNotifications =>
                prevNotifications.map(notification =>
                    notification.id === notificationId
                        ? { ...notification, is_read: 1 }
                        : notification
                )
            );
        } catch (err) {
            console.log("Lỗi khi đánh dấu thông báo đã đọc:", err);
        }
    };

    const deleteAllNotifications = async () => {
        try {
            // Gọi API xóa tất cả thông báo theo user_id
            await AxiosInstance.delete(`/notifications/${user.id}`);

            setNotifications([]);
            alert("Đã xóa tất cả thông báo!");
        } catch (err) {
            console.log("Lỗi khi xóa tất cả thông báo:", err);
            alert("Xóa thông báo thất bại!");
        }
    };

    const openNotificationDetail = (notification) => {
        setSelectedNotification(notification);
    };

    const closeNotificationDetail = () => {
        setSelectedNotification(null);
    };

    return (
        <div className="max-w-4xl my-4 mx-auto p-6 border">
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-white shadow-md">
                <h1 className="text-lg font-bold">Thông báo</h1>
                <button className="text-blue-500 hover:underline" onClick={deleteAllNotifications}>Xóa tất cả</button>
            </div>

            {/* Notifications List */}
            <div className="mt-4">
                <div className="space-y-4">
                    {notifications.length > 0 ? (
                        notifications.map((notification, index) => (
                            <div
                                key={index}
                                className={`cursor-pointer flex items-start p-3 rounded-lg ${notification.is_read === 0 ? "bg-blue-100" : "bg-white"
                                    } shadow`}
                                onClick={() => {
                                    markAsRead(notification.id);
                                    openNotificationDetail(notification);
                                }}
                            >
                                <div>
                                    <p
                                        className={`text-sm ${notification.unread === 0
                                            ? "text-blue-700 font-bold"
                                            : "text-gray-700"
                                            }`}
                                    >
                                        {notification.invoice_id} - {notification.reason}
                                    </p>
                                    <p className="text-xs text-gray-500">{formatDate(notification.created_at)}</p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-500 text-center">Không có thông báo nào.</p>
                    )}
                </div>
            </div>
            {selectedNotification && (
                <DetailNotification
                    notification={selectedNotification}
                    onClose={closeNotificationDetail}
                />
            )}
        </div>
    );
};

export default memo(Notifications);