import { memo, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const SideBar = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        } else {
            console.warn("Không tìm thấy người dùng");
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("user");
        window.location.href = "/";
    };


    return (
        <nav className="flex-1 my-4 me-4 border border-[#f0f0f0]-200">
            <ul>
                <li>
                    <NavLink
                        to="info"
                        className={({ isActive }) =>
                            `block px-6 py-3 border-b border-[#f0f0f0]-200 hover:text-white transition duration-200 ${isActive
                                ? "bg-[#BC9A6C] text-white"
                                : "hover:bg-[#BC9A6C]"
                            }`
                        }
                    >
                        🧑‍💼 Thông tin cá nhân
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="tracking"
                        className={({ isActive }) =>
                            `block px-6 py-3 border-b border-[#f0f0f0]-200 transition duration-200 ${isActive ? "bg-[#BC9A6C] text-white" : "hover:bg-[#BC9A6C] hover:text-white"
                            }`
                        }
                    >
                        📦 Đơn hàng
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="notification"
                        className={({ isActive }) =>
                            `block px-6 py-3 border-b border-[#f0f0f0]-200 transition duration-200 ${isActive ? "bg-[#BC9A6C] text-white" : "hover:bg-[#BC9A6C] hover:text-white"
                            }`
                        }
                    >
                        🛎️ Thông báo
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="settings"
                        className={({ isActive }) =>
                            `block px-6 py-3 border-b border-[#f0f0f0]-200 transition duration-200 ${isActive ? "bg-[#BC9A6C] text-white" : "hover:bg-[#BC9A6C] hover:text-white"
                            }`
                        }
                    >
                        ⚙️ Cài đặt
                    </NavLink>
                </li>
                {
                    user?.role_id === 2 && (
                        <li>
                            <Link
                                to="http://127.0.0.1:8000/admin/dashboard"
                                className="block px-6 py-3 hover:bg-[#BC9A6C] border-b border-[#f0f0f0]-200 hover:text-white transition duration-200 flex items-center"
                            >
                                📄 Đi vào trang quản trị
                            </Link>
                        </li>

                    )
                }
                <li>
                    <button
                        className="block w-full text-left px-6 py-3 hover:bg-[#BC9A6C] hover:text-white transition duration-200"
                        onClick={handleLogout}
                    >
                        🚪 Đăng xuất
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default memo(SideBar);