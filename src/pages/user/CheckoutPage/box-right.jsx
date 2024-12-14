import { memo, useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AxiosInstance from "utils/apiServers";
import Swal from "sweetalert2";
import { formatCurrencyVND, formatImage } from "utils/format";
import { CartContext } from "components/add-to-cart";

const CheckoutBoxRight = ({ shippingFee, selectedPayment, selectedAddress }) => {
    const { cart, calculateTotalPrice, removeItemsAfterPayment } = useContext(CartContext);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        // Lấy dữ liệu người dùng từ localStorage
        const userData = JSON.parse(localStorage.getItem("user")) || [];
        setUser(userData);
    }, []);

    const selectedItems = cart.filter(item => item.selected);

    const cartDiscount = cart.filter(item => item.discount);
    const discount = cartDiscount[0]?.discount;

    const subPrice = selectedItems.reduce((total, item) => total + item.price * item.quantity, 0);
    const totalPrice = calculateTotalPrice(cart, discount);

    const discountValue = discount && discount.discount_type === "percent"
        ? (subPrice * discount.discount) / 100
        : discount?.discount || 0;

    const handleSelectItem = () => {
        Swal.fire({
            title: "Lỗi thanh toán!",
            text: "Bạn không có sản phẩm để thực hiện thanh toán!",
            icon: "warning",
            confirmButtonText: "OK",
        }).then(() => {
            navigate("/cart")
        });
    }

    const handleCheckout = () => {
        setLoading(true);
        setError(null);

        if (selectedItems.length === 0) {
            handleSelectItem();
            setLoading(false);
            return;
        }

        if (!selectedAddress) {
            Swal.fire({
                title: "Lỗi thanh toán!",
                text: "Bạn cần có địa chỉ để thanh toán đơn hàng!",
                icon: "warning",
                confirmButtonText: "OK",
            });

            setLoading(false);
            return;
        }

        const orderData = {
            user_id: user?.id,
            address: selectedAddress.address,
            sub_total: subPrice,
            grand_total: totalPrice + shippingFee,
            discount: discountValue,
            product_qty: selectedItems.reduce((total, item) => total + item.quantity, 0),
            payment_method: selectedPayment,
            delivery_charge: shippingFee,
            coupon_info: JSON.stringify(discount?.code) || null,
            address_id: selectedAddress.id,
            cartItems: selectedItems
        };

        if (orderData.user_id && orderData.address) {
            if (selectedPayment === "vnpay") {
                AxiosInstance.post('/checkout', orderData)
                    .then(res => {
                        const paymentUrl = res.data.vnp_Url;
                        window.location.href = paymentUrl;
                    })
                    .catch(error => {
                        setError(error?.response?.data?.message || 'Đã xảy ra lỗi khi thanh toán qua VNPAY.');
                        console.error('Lỗi:', error);
                    })
                    .finally(() => {
                        setLoading(false);
                    });
            } else {
                AxiosInstance.post('/checkout', orderData)
                    .then(() => {
                        window.location.href = '/payment-successed';
                        removeItemsAfterPayment(selectedItems);
                    })
                    .catch(error => {
                        setError(error?.response?.data?.message || 'Đã xảy ra lỗi khi thanh toán.');
                        console.error('Lỗi:', error);
                    })
                    .finally(() => {
                        setLoading(false);
                    });
            }
        } else {
            alert("Vui lòng nhập địa chỉ giao hàng");
            setLoading(false);
        }
    };

    return (
        <div className="checkout__box__right flex flex-col justify-between bg-[#f0f0f0] px-5 rounded-md" style={{ width: '400px' }}>
            <div>
                <h2 className="text-xl font-bold text-[24px] border-b-2 border-[#000000]-400 py-3">Đơn hàng <em className="font-normal text-[16px]">({selectedItems.length} sản phẩm)</em></h2>
                {
                    selectedItems.length === 0 ? (
                        <p className="text-center m-3">Không có sản phẩm cần thanh toán</p>
                    ) : (
                        selectedItems.map((item, index) => (
                            <div key={index} className="checkout__box__right__content py-5 border-b-2 border-[#000000]-400">
                                <div className="checkout__box__right__content__item flex gap-3">
                                    <div className="checkout__box__right__content__item__image w-[80px] h-[60px]">
                                        <img src={formatImage(item.image)} alt={item.name} className="w-full h-full" />
                                        <div className="count">
                                            <p>{item.quantity}</p>
                                        </div>
                                    </div>
                                    <div className="checkout__box__right__content__item__info flex justify-between gap-5">
                                        <div className="info__basic">
                                            <h3 className="text-xl font-bold">{item.name}</h3>
                                            {item.crust && item.border && item.size ? (
                                                <>
                                                    <p className="text-[#676767]">Kích thước: {item.size}</p>
                                                    <p className="text-[#676767]">
                                                        Chi tiết: <br />
                                                        + {item.crust} <br />
                                                        + {item.border}
                                                    </p>
                                                </>
                                            ) : (
                                                null
                                            )}
                                        </div>
                                        <div className="info__price w-[110px] flex justify-end">
                                            <p className="font-bold text-[#f00000]">{formatCurrencyVND(item.price)}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    )
                }
                {
                    selectedItems.length > 0 && (
                        <div className="total__price flex justify-between gap-5 py-3 border-b-2 border-[#000000]-400">
                            <div className="title__total">
                                <p className="text-[#676767] mb-2">Tạm tính: </p>
                                <p className="text-[#676767] mb-2">Phí vận chuyển: </p>
                                <p className="text-[#676767] mb-2">Mã giảm giá: </p>
                                <p className="text-[#676767]">Giảm giá: </p>
                            </div>
                            <div className="price__total">
                                <p className="text-[#f00000] font-bold mb-2">{formatCurrencyVND(subPrice)}</p>
                                <p className="text-[#f00000] font-bold mb-2">{formatCurrencyVND(shippingFee)}</p>
                                <p className="text-[#f00000] font-bold mb-2">
                                    {discount ? discount.name : "Chưa có mã giảm giá"}
                                </p>
                                <p className="text-[#f00000] font-bold">
                                    {formatCurrencyVND(discountValue)}
                                </p>
                            </div>
                        </div>
                    )
                }
                {
                    selectedItems.length > 0 && (
                        <div className="total flex justify-between gap-5 py-3 border-b-2 border-[#000000]-400">
                            <div className="title">
                                <p className="text-[#676767] font-bold">Tổng tiền</p>
                            </div>
                            <div className="price">
                                <p className="text-[#f00000] font-bold">{formatCurrencyVND(totalPrice + shippingFee)}</p>
                            </div>
                        </div>
                    )
                }
            </div>
            <div className="button__checkout py-3 w-full">
                <button
                    type="button"
                    className="bg-[#BC9A6C] w-full text-white font-bold rounded-lg px-6 py-3"
                    onClick={handleCheckout}
                    disabled={loading}
                >
                    {loading ? 'Đang xử lý...' : 'Thanh toán'}
                </button>
                {error && <p className="text-red-500 mt-2">{error}</p>}
            </div>
        </div>
    );
};

export default memo(CheckoutBoxRight);