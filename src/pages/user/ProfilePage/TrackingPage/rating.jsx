import { memo, useState } from "react";
import { Rate } from "antd";
import AxiosInstance from "utils/apiServers";
import "assets/user/scss/tracking.scss";

const Rating = ({ onClose, selectedItems }) => {
    const [rating, setRating] = useState(0);
    const [review, setReview] = useState("");
    const [error, setError] = useState(null);

    const user = JSON.parse(localStorage.getItem("user"));

    const handleSubmitReview = () => {
        setError(null);

        const reviewData = {
            user_id: user.id,
            product_id: selectedItems.product_id,
            order_id: selectedItems.order_id,
            rating,
            review,
        };

        AxiosInstance.post(`/reviews`, reviewData)
            .then((res) => {
                if (res.status === 201) {
                    onClose();
                    setRating(0);
                    setReview("");
                    alert("Cảm ơn bạn đã đánh giá sản phẩm!");
                } else {
                    setError(res.data.errors);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div className="popup-rating__overlay">
            <div className="bg-white p-6 rounded-lg w-[400px] shadow-lg" data-aos="fade-down">
                <h2 className="text-xl font-bold uppercase mb-4">Đánh giá sản phẩm</h2>

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
                        placeholder="Nhập nội dung nhận xét của bạn ..."
                        className="w-full border px-3 py-2 rounded-lg"
                        rows={5}
                        value={review}
                        onChange={(e) => setReview(e.target.value)}
                    />
                    {error && <span className="text-[#ff0000]">{error.review}</span>}
                </div>

                <div className="flex justify-end gap-4">
                    <button
                        className="px-4 py-2 bg-gray-300 text-gray-600 rounded hover:bg-gray-400 transition duration-300"
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