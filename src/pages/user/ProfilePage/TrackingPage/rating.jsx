import { memo, useState } from "react";
import { Rate } from "antd";
import Swal from "sweetalert2";
import AxiosInstance from "utils/apiServers";
import "assets/user/scss/tracking.scss";

const Rating = ({ onClose, order }) => {
    const [rating, setRating] = useState(0);
    const [review, setReview] = useState("");

    const user = JSON.parse(localStorage.getItem("user"));

    const handleSubmitReview = () => {
        if (!review.trim() || !rating) {
            alert("Vui lòng điền đầy đủ thông tin đánh giá!");
            return;
        }

        const reviewData = {
            user_id: user.id,
            // product_id: product.id,
            order_id: order,
            rating,
            review
        };

        AxiosInstance.post(`/reviews`, reviewData)
            .then(() => {
                console.log(reviewData);
                
                Swal.fire({
                    title: "Đánh giá thành công!",
                    text: "Cảm ơn bạn đã đánh giá đơn hàng!",
                    icon: "success",
                    confirmButtonText: "Đóng",
                });
                setRating(0);
                setReview("");
                onClose();
            })
            .catch(() => {
                Swal.fire({
                    title: "Đánh giá thất bại!",
                    text: "Đánh giá của bạn không thành công!",
                    icon: "error",
                    confirmButtonText: "Đóng",
                });
            });
    };

    return (
        <div className="popup-rating__overlay">
            <div className="bg-white p-6 rounded-lg w-[400px] shadow-lg" data-aos="fade-down">
                <h2 className="text-xl font-bold mb-4">Đánh giá đơn hàng</h2>

                <div className="form-group mb-4">
                    <label className="block text-lg font-medium mb-2">Đánh giá</label>
                    <Rate
                        className="text-[16px]"
                        value={rating}
                        onChange={(value) => setRating(value)}
                    />
                    <p className="text-sm text-gray-500 mt-1">
                        Đánh giá của bạn: {rating} sao
                    </p>
                </div>

                <div className="form-group mb-4">
                    <label className="block text-lg font-medium mb-2">Nội dung nhận xét</label>
                    <textarea
                        placeholder="Nhập nội dung nhận xét của bạn"
                        className="w-full border px-3 py-2 rounded-lg"
                        rows={5}
                        value={review}
                        onChange={(e) => setReview(e.target.value)}
                    />
                </div>

                <div className="flex justify-end gap-4">
                    <button
                        className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
                        onClick={onClose}
                    >
                        Hủy
                    </button>
                    <button
                        className="px-4 py-2 bg-[#BC9A6C] text-white rounded"
                        onClick={handleSubmitReview}
                    >
                        Gửi đánh giá
                    </button>
                </div>
            </div>
        </div>
    );
};

export default memo(Rating);