import { memo, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import Login from "pages/user/LoginPage/login/login";

const ProtectedRoute = ({ children }) => {
    const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);
    const user = JSON.parse(localStorage.getItem("user"));
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            Swal.fire({
                title: "Lỗi truy cập!",
                text: "Bạn cần đăng nhập để tiếp tục.",
                icon: "warning",
                confirmButtonText: "OK",
            }).then(() => {
                setIsLoginPopupOpen(true);
            });
        }
    }, [user, navigate]);

    if (!user && !isLoginPopupOpen) {
        return null;
    }

    return (
        <>
            {isLoginPopupOpen && <Login onLoginSuccess={() => setIsLoginPopupOpen(false)} />}
            {user && children}
        </>
    );
};

export const UseProtectedRoute = memo(ProtectedRoute);
