import { memo, useEffect, useContext } from "react";
import { CartContext } from "components/add-to-cart";

const PaymentSuccessPage = () => {
    const { clearCartAfterPayment } = useContext(CartContext);

    useEffect(() => {
        // Khi trang load, bạn xóa giỏ hàng sau khi thanh toán thành công
        clearCartAfterPayment();
    }, [clearCartAfterPayment]);

    return (
        <div className="container flex justify-center items-center my-4">
            <div className="bg-white p-8 rounded-lg w-full">
                <div className="text-center">
                    <h1 className="text-3xl font-semibold text-green-600 mb-4">Đặt hàng thành công</h1>
                    <p className="text-gray-600 mb-6">Cảm ơn bạn đã mua hàng tại cửa hàng của chúng tôi!</p>
                    <div className="flex justify-center w-[200px] h-[200px] mx-auto">
                        <img src="/assets/images/payment-success.png" alt="" />
                    </div>
                    <p className="text-gray-500 mt-4 mb-8">Đơn hàng của bạn đang được xử lý. Chúng tôi sẽ thông báo cho bạn khi đơn hàng được gửi đi.</p>
                    <div className="flex justify-center gap-4">
                        <button
                            onClick={() => window.location.href = "/"}
                            className="px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-200"
                        >
                            Quay về trang chủ
                        </button>
                        <button
                            onClick={() => window.location.href = "profile/tracking"}
                            className="px-6 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition duration-200"
                        >
                            Xem đơn hàng
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default memo(PaymentSuccessPage);