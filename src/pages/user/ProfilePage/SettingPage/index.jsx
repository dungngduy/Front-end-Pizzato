import { memo, useState } from "react";

const SettingPage = () => {
    // State cho các cài đặt
    const [theme, setTheme] = useState("light");
    const [language, setLanguage] = useState("vi");
    const [paymentMethod, setPaymentMethod] = useState("cash");
    const [reviewsEnabled, setReviewsEnabled] = useState(true);
    const [autoDiscount, setAutoDiscount] = useState(false);

    const handleLanguageChange = (e) => setLanguage(e.target.value);
    const handleThemeChange = (e) => setTheme(e.target.value);
    const handlePaymentMethodChange = (e) => setPaymentMethod(e.target.value);
    const handleReviewsChange = () => setReviewsEnabled(!reviewsEnabled);
    const handleAutoDiscountChange = () => setAutoDiscount(!autoDiscount);

    return (
        <div className="max-w-4xl my-4 mx-auto p-6 border">
            <h2 className="text-2xl text-[#BC9A6C] font-semibold text-center mb-6">Cài đặt tính năng</h2>

            {/* Cài đặt giao diện */}
            <div className="mb-6">
                <label className="block text-sm font-medium text-gray-600">Chế độ giao diện</label>
                <div className="flex space-x-4">
                    <div>
                        <input
                            type="radio"
                            id="light"
                            name="theme"
                            value="light"
                            checked={theme === "light"}
                            onChange={handleThemeChange}
                            className="mr-2"
                        />
                        <label htmlFor="light" className="text-sm text-gray-600">Sáng</label>
                    </div>
                    <div>
                        <input
                            type="radio"
                            id="dark"
                            name="theme"
                            value="dark"
                            checked={theme === "dark"}
                            onChange={handleThemeChange}
                            className="mr-2"
                        />
                        <label htmlFor="dark" className="text-sm text-gray-600">Tối</label>
                    </div>
                </div>
            </div>

            <div className="mb-6">
                <label className="block text-sm font-medium text-gray-600">Ngôn ngữ</label>
                <select
                    value={language}
                    onChange={handleLanguageChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
                >
                    <option value="vi">Tiếng Việt</option>
                    <option value="en">English</option>
                </select>
            </div>

            {/* Cài đặt phương thức thanh toán */}
            <div className="mb-6">
                <label className="block text-sm font-medium text-gray-600">Phương thức thanh toán</label>
                <div className="flex space-x-4">
                    <div>
                        <input
                            type="radio"
                            id="cash"
                            name="paymentMethod"
                            value="cash"
                            checked={paymentMethod === "cash"}
                            onChange={handlePaymentMethodChange}
                            className="mr-2"
                        />
                        <label htmlFor="cash" className="text-sm text-gray-600">Thanh toán tiền mặt</label>
                    </div>
                    <div>
                        <input
                            type="radio"
                            id="card"
                            name="paymentMethod"
                            value="card"
                            checked={paymentMethod === "card"}
                            onChange={handlePaymentMethodChange}
                            className="mr-2"
                        />
                        <label htmlFor="card" className="text-sm text-gray-600">Thanh toán thẻ</label>
                    </div>
                </div>
            </div>

            {/* Cài đặt nhận xét */}
            <div className="mb-6">
                <label className="flex items-center space-x-2">
                    <input
                        type="checkbox"
                        checked={reviewsEnabled}
                        onChange={handleReviewsChange}
                        className="h-5 w-5"
                    />
                    <span className="text-sm text-gray-600">Cho phép nhận xét sau khi mua hàng</span>
                </label>
            </div>

            {/* Cài đặt giảm giá tự động */}
            <div className="mb-6">
                <label className="flex items-center space-x-2">
                    <input
                        type="checkbox"
                        checked={autoDiscount}
                        onChange={handleAutoDiscountChange}
                        className="h-5 w-5"
                    />
                    <span className="text-sm text-gray-600">Bật giảm giá tự động khi đạt mức giá tối thiểu</span>
                </label>
            </div>

            {/* Nút Lưu cài đặt */}
            <div className="text-center mt-6">
                <button
                    type="submit"
                    className="w-full bg-[#BC9A6C] text-white py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-[#BC9A6C]"
                >
                    Lưu cài đặt
                </button>
            </div>
        </div>
    );
};

export default memo(SettingPage);