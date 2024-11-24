import { memo, useContext } from "react";
import Swal from "sweetalert2";
import { Navigate } from "react-router-dom";
import { CartContext } from "components/add-to-cart";

const ProtectedRoute = ({ children }) => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
        Swal.fire({
            title: "Lỗi truy cập!",
            text: "Bạn cần đăng nhập để tiếp tục.",
            icon: "warning",
            confirmButtonText: "OK",
        });

        return <Navigate to="/" />;
    }

    return children;
};

const ProtectedRouteCheckout = ({ children }) => {
    const user = JSON.parse(localStorage.getItem("user"));
    const { cart } = useContext(CartContext);
    const selectedItems = cart.filter(item => item.selected);

    if (!user) {
        Swal.fire({
            title: "Lỗi truy cập!",
            text: "Bạn cần đăng nhập để tiếp tục",
            icon: "warning",
            confirmButtonText: "OK",
        });

        return <Navigate to="/" />;
    } else if (user && selectedItems.length === 0) {
        Swal.fire({
            title: "Lỗi truy cập!",
            text: "Bạn cần có sản phẩm để thanh toán",
            icon: "warning",
            confirmButtonText: "OK",
        });

        return <Navigate to="/" />;
    }

    return children;
};

// const ProtectedRouteAdmin = ({ children }) => {
//     const user = JSON.parse(localStorage.getItem("user"));

//     if (!user) {
//         Swal.fire({
//             title: "Lỗi truy cập!",
//             text: "Bạn cần đăng nhập để tiếp tục",
//             icon: "warning",
//             confirmButtonText: "OK",
//         });

//         return <Navigate to="/" />;
//     } else if (user && user.role !== "admin") {
//         Swal.fire({
//             title: "Lỗi truy cập!",
//             text: "Vui lý đăng những quyen!",
//             icon: "warning",
//             confirmButtonText: "OK",
//         });

//         return <Navigate to="/" />;
//     }

//     return children;
// };

export const UseProtectedRoute = memo(ProtectedRoute);
export const UseProtectedRouteCheckout = memo(ProtectedRouteCheckout);