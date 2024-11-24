import { memo, useState } from "react";

const ProfileUpdate = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
    });
    const [message, setMessage] = useState({ type: "", content: "" });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Gửi form
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.name || !formData.email) {
            setMessage({ type: "error", content: "Tên và email không được để trống!" });
            return;
        }

        // Gửi dữ liệu tới API
        fetch("/api/update-profile", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.success) {
                    setMessage({ type: "success", content: "Cập nhật thông tin thành công!" });
                } else {
                    setMessage({ type: "error", content: "Cập nhật thất bại, vui lòng thử lại." });
                }
            })
            .catch((err) => {
                setMessage({ type: "error", content: "Có lỗi xảy ra khi kết nối đến máy chủ!" });
            });
    };

    return (
        <div className="my-4">
            <div className="border border-gray-300 p-6 rounded">
                <h2 className="text-2xl font-semibold text-center mb-6">Cập nhật thông tin cá nhân</h2>
                {message.content && (
                    <p
                        className={`text-sm mb-4 text-center ${message.type === "error" ? "text-red-500" : "text-green-500"
                            }`}
                    >
                        {message.content}
                    </p>
                )}
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="name">
                            Tên
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="block w-full px-4 py-2 border rounded focus:ring focus:ring-blue-300"
                            placeholder="Nhập tên của bạn"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="block w-full px-4 py-2 border rounded focus:ring focus:ring-blue-300"
                            placeholder="Nhập email của bạn"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="phone">
                            Số điện thoại
                        </label>
                        <input
                            type="text"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="block w-full px-4 py-2 border rounded focus:ring focus:ring-blue-300"
                            placeholder="Nhập số điện thoại"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="address">
                            Địa chỉ
                        </label>
                        <input
                            type="text"
                            id="address"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            className="block w-full px-4 py-2 border rounded focus:ring focus:ring-blue-300"
                            placeholder="Nhập địa chỉ của bạn"
                        />
                    </div>
                    <div className="flex items-center justify-center">
                        <button
                            type="submit"
                            className="bg-[#BC9A6C] text-white text-white py-2 px-4 rounded"
                        >
                            Cập nhật
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default memo(ProfileUpdate);