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
                    {/* Sử dụng NavLink thay vì Link */}
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
                    <Link
                        to="tracking"
                        className="block px-6 py-3 hover:bg-[#BC9A6C] border-b border-[#f0f0f0]-200 hover:text-white transition duration-200"
                    >
                        📦 Đơn hàng
                    </Link>
                </li>
                <li>
                    <Link
                        to="settings"
                        className="block px-6 py-3 hover:bg-[#BC9A6C] border-b border-[#f0f0f0]-200 hover:text-white transition duration-200"
                    >
                        ⚙️ Cài đặt
                    </Link>
                </li>
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