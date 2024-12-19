import { memo } from "react";

const PaymentFailPage = () => {
    return (
        <div className="container flex justify-center items-center my-4">
            <div className="bg-white p-8 rounded-lg w-full">
                <div className="text-center">
                    <h1 className="text-3xl font-semibold text-green-600 mb-4">Đặt hàng thất bại</h1>
                    <p className="text-gray-600 mb-6">Có một sự cố trong quá trình đặt hàng của bạn. Vui lòng thử lại sau hoặc liên hệ với chúng tôi nếu vấn đề tiếp diễn.</p>
                    <div className="flex justify-center w-[200px] h-[200px] mx-auto">
                        <img src="/assets/images/payment-fail.jpg" alt="" />
                    </div>
                    <p className="text-gray-500 mt-4 mb-8">Đơn hàng của bạn chưa được xử lý. Chúng tôi sẽ không tiến hành gửi hàng cho đến khi đặt hàng thành công.</p>
                    <div className="flex justify-center gap-4">
                        <button
                            onClick={() => window.location.href = "/"}
                            className="px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-200"
                        >
                            Quay về trang chủ
                        </button>
                        <button
                            onClick={() => window.location.href = "checkout"}
                            className="px-6 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition duration-200"
                        >
                            Thanh toán lại
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default memo(PaymentFailPage);