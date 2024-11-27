import React, { useState } from 'react';

const UpdateProfileForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        avatar: '',
        newPassword: '',
        confirmPassword: '',
        changePassword: false,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleRadioChange = () => {
        setFormData((prevState) => ({
            ...prevState,
            changePassword: !prevState.changePassword,
        }));
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFormData((prevState) => ({
                ...prevState,
                avatar: URL.createObjectURL(file),
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <div className="max-w-4xl my-4 mx-auto p-6 border">
            <h2 className="text-2xl text-[#BC9A6C] font-semibold text-center mb-6">Cập nhật thông tin cá nhân</h2>
            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Cột 1: Ảnh đại diện */}
                    <div className="space-y-4">
                        <div className="text-center">
                            <div className="w-64 h-64 mx-auto mb-4 relative">
                                <img
                                    src={formData.avatar || 'https://static.vecteezy.com/system/resources/thumbnails/004/141/669/small/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg'}
                                    alt="Avatar"
                                    className="w-full h-full object-cover rounded-full border-4 border-gray-300"
                                />
                                <label htmlFor="avatar" className="absolute inset-0 bg-gray-700 bg-opacity-50 flex justify-center items-center text-white font-semibold cursor-pointer rounded-full hover:bg-gray-800">
                                    Chọn ảnh
                                </label>
                            </div>
                            <input
                                type="file"
                                id="avatar"
                                name="avatar"
                                onChange={handleFileChange}
                                accept="image/*"
                                className="hidden" // Giấu input gốc
                            />
                        </div>
                    </div>

                    {/* Cột 2: Các trường còn lại */}
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-600">Tên đăng nhập</label>
                            <input
                                type="text"
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#BC9A6C]"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-600">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#BC9A6C]"
                                required
                            />
                        </div>

                        {/* Radio Button: Cập nhật mật khẩu */}
                        <div className="flex items-center space-x-4">
                            <div className="flex items-center">
                                <input
                                    type="radio"
                                    id="noChangePassword"
                                    name="changePassword"
                                    checked={!formData.changePassword}
                                    onChange={handleRadioChange}
                                    className="mr-2"
                                />
                                <label htmlFor="noChangePassword" className="text-sm text-gray-600">
                                    Không thay đổi mật khẩu
                                </label>
                            </div>
                            <div className="flex items-center">
                                <input
                                    type="radio"
                                    id="changePassword"
                                    name="changePassword"
                                    checked={formData.changePassword}
                                    onChange={handleRadioChange}
                                    className="mr-2"
                                />
                                <label htmlFor="changePassword" className="text-sm text-gray-600">
                                    Thay đổi mật khẩu
                                </label>
                            </div>
                        </div>

                        {/* Các trường mật khẩu mới */}
                        {formData.changePassword && (
                            <>
                                <div>
                                    <label className="block text-sm font-medium text-gray-600">Mật khẩu mới</label>
                                    <input
                                        type="password"
                                        name="newPassword"
                                        value={formData.newPassword}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#BC9A6C]"
                                        required={formData.changePassword}
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-600">Xác nhận mật khẩu mới</label>
                                    <input
                                        type="password"
                                        name="confirmPassword"
                                        value={formData.confirmPassword}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#BC9A6C]"
                                        required={formData.changePassword}
                                    />
                                </div>
                            </>
                        )}

                        <div className="text-center">
                            <button
                                type="submit"
                                className="w-full bg-[#BC9A6C] text-white py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-[#BC9A6C]"
                            >
                                Cập nhật thông tin
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default UpdateProfileForm;