import { memo, useEffect, useState } from "react";
import Swal from "sweetalert2";
import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";
import Login from "pages/user/LoginPage/login/login";

const ProtectedRoute = ({ children }) => {
    const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);
    const user = JSON.parse(localStorage.getItem("user"));
    const navigate = useNavigate();

    const handleCloseLoginPopup = () => {
        setIsLoginPopupOpen(false);
        navigate("/");
    };

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
            {isLoginPopupOpen && ReactDOM.createPortal(
                <div>
                    <div className="overlay active" onClick={handleCloseLoginPopup}></div>
                    <Login />
                </div>,
                document.body
            )}
            {user && children}
        </>
    );
};

export const UseProtectedRoute = memo(ProtectedRoute);
