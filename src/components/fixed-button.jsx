import { memo, useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { AiOutlineArrowUp, AiFillBell } from "react-icons/ai";
import AxiosInstance from "utils/apiServers";

const FixedButton = () => {
    const navigate = useNavigate();

    const handleFixedButtonClick = () => {
        navigate("/profile/notification");
    };

    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const [user, setUser] = useState(null);
    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        const userFromStorage = JSON.parse(localStorage.getItem("user"));
        setUser(userFromStorage);
    }, []);

    useEffect(() => {
        let intervalId;

        const fetchNotifications = async () => {
            if (user && user.id) {
                try {
                    const res = await AxiosInstance.get(`/notifications/${user.id}`);
                    const notification = res.data.notification;
                    const unreadNotifications = notification.filter(notif => notif.is_read === 0);
                    setNotifications(unreadNotifications);
                } catch (err) {
                    console.log("Lỗi khi gọi API thông báo:", err);
                }
            }
        };

        if (user) {
            fetchNotifications();
            intervalId = setInterval(fetchNotifications, 10000);
        }

        return () => clearInterval(intervalId);
    }, [user]);

    return (
        <div className="flex flex-col">
            <div className="relative">
                {/* Hiệu ứng vòng tròn */}
                <div className="fixed z-50 bottom-[70px] right-[18px] w-10 h-10 rounded-full bg-blue-400 opacity-50 animate-pulseRing"></div>
                <div className="fixed z-50 bottom-[66px] right-[14px] w-12 h-12 rounded-full bg-blue-400 opacity-50 animate-pulseRing"></div>

                {/* Nút chính */}
                <button
                    className="fixed z-50 bottom-[70px] right-4 text-white px-3 py-3 rounded-full shadow-lg bg-[#418bfe] hover:bg-[#418bfe]/80 transition duration-200"
                    onClick={handleFixedButtonClick}
                >
                    <AiFillBell />
                    <span className="absolute top-[-12px] right-[-5px] bg-red-600 text-white text-xs rounded-full px-2 py-1">
                        {notifications.length}
                    </span>
                </button>
            </div>

            <button
                className="fixed z-50 bottom-4 right-4 px-3 py-3 text-white rounded-full shadow-lg bg-[#9ac1fd] hover:bg-[#9ac1fd]/80 transition duration-200"
                onClick={handleScrollToTop}
            >
                <AiOutlineArrowUp />
            </button>
        </div>
    );
};

export default memo(FixedButton);