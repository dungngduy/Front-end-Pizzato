import { memo, useState } from "react";
import { Rate } from "antd";
import AxiosInstance from "utils/apiServers";

const Rating = () => {
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
            rating,
            review
        };

        AxiosInstance.post(`/reviews`, reviewData)
            .then((res) => {
                alert("Cảm ơn bạn đã đánh giá!");
                setRating(0);
                setReview("");
            })
            .catch((err) => {
                console.error("Lỗi khi gửi đánh giá:", err);
                alert("Đã xảy ra lỗi khi gửi đánh giá!");
            });
    };

    return (
        <div className="product-review-form p-5 border border-gray-200 rounded-lg">
            <h2 className="text-xl font-bold mb-4">Đánh giá sản phẩm</h2>

            <div className="form-group mb-4">
                <label className="block text-lg font-medium mb-2">Đánh giá:</label>
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
                <label className="block text-lg font-medium mb-2">
                    Nội dung nhận xét:
                </label>
                <textarea
                    placeholder="Nhập nội dung nhận xét của bạn"
                    className="w-full border px-3 py-2 rounded-lg"
                    rows={5}
                    value={review}
                    onChange={(e) => setReview(e.target.value)}
                />
            </div>

            <button
                type="primary"
                size="large"
                className="w-full"
                onClick={handleSubmitReview}
            >
                Gửi đánh giá
            </button>
        </div>
    );
};

export default memo(Rating);