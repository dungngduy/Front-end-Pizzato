import { memo, useState, useEffect } from "react";
import { MdLocationOn } from "react-icons/md";
import { Link } from "react-router-dom";
import FormAddress from "./form-address";

const CheckoutBoxLeft = ({setShippingFee, selectedPayment, setSelectedPayment}) => {
    const [isPopupAddressVisible, setIsPopupAddressVisible] = useState(false);
    const [user, setUser] = useState(null);

    const togglePopupAddress = () => {
        setIsPopupAddressVisible(!isPopupAddressVisible);
    }

    const handleInputChange = (e) => {
        const value = parseInt(e.target.value, 10) || 0;
        setShippingFee(value);
    };

    useEffect(() => {
        // Lấy dữ liệu giỏ hàng từ localStorage hoặc từ một nguồn dữ liệu khác
        const userData = JSON.parse(localStorage.getItem("user")) || [];
        setUser(userData);
    }, []);

    return (
        <div className="checkout__box__left pe-10" style={{ width: '800px' }}>
            <div className="delivery__box border border-[#f0f0f0]-100">
                <div className="delivery__box__title bg-[#f0f0f0] p-3 flex justify-between">
                    <div className="delivery__box__title__icon">
                        <h3 className="flex gap-1 items-center text-xl font-bold"><MdLocationOn /> Địa chỉ giao hàng</h3>
                    </div>
                    <div className="delivery__box__title__edit">
                        <Link onClick={togglePopupAddress}><p className="text-[#676767]">Thay đổi</p></Link>
                    </div>
                </div>
                {
                    user ? (
                        <div className="delivery__address p-3">
                            <p className="text-xl pb-3">{user.name}</p>
                            <div className="flex gap-20">
                                <div className="delivery__address__title">
                                    <p className="text-[#676767]">Địa chỉ:</p>
                                    <p className="text-[#676767]">Điện thoại:</p>
                                    <p className="text-[#676767]">Email:</p>
                                </div>
                                <div className="delivery__address__content">
                                    {/* Khi lưu dữ liệu thì nên đổi là value */}
                                    <input type="text" defaultValue={user.address.address} disabled /><br />
                                    <input type="text" defaultValue={user.address.phone} disabled /><br />
                                    <input type="email" defaultValue={user.email} disabled />
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="delivery__address p-3">
                            <p className="text-xl pb-3">Chưa có</p>
                            <div className="flex gap-20">
                                <div className="delivery__address__title">
                                    <p className="text-[#676767]">Địa chỉ:</p>
                                    <p className="text-[#676767]">Điện thoại:</p>
                                    <p className="text-[#676767]">Email:</p>
                                </div>
                                <div className="delivery__address__content">
                                    <input type="text" placeholder="Chưa có" disabled /><br />
                                    <input type="text" placeholder="Chưa có" disabled /><br />
                                    <input type="email" placeholder="Chưa có" disabled />
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
            <div className="checkout__box__left__express mt-10">
                <h2 className="text-xl font-bold mb-3">Hình thức vận chuyển</h2>
                <div className="shipping-options border border-[#f0f0f0]-100">
                    <label className="flex justify-between border-b border-[#f0f0f0]-100 px-3 py-3">
                        <div className="shipping-options__label">
                            <input type="radio" name="shipping" value="40000" onChange={handleInputChange} className="mr-1" defaultChecked />
                            Giao hàng chuẩn
                        </div>
                        <div className="shipping-options__price">
                            <p className="font-bold">40.000đ</p>
                        </div>
                    </label>
                    <label className="flex justify-between border-b border-[#f0f0f0]-100 px-3 py-3">
                        <div className="shipping-options__label">
                            <input type="radio" name="shipping" value="80000" onChange={handleInputChange} className="mr-1" />
                            Giao hàng nhanh
                        </div>
                        <div className="shipping-options__price">
                            <p className="font-bold">80.000đ</p>
                        </div>
                    </label>
                </div>
            </div>
            <div className="payment__method mt-10">
                <h2 className="text-xl font-bold mb-3">Hình thức thanh toán</h2>
                <div className="flex flex-wrap">
                    <label htmlFor="radio-card-1" className="radio-card w-1/3">
                        <input
                            type="radio"
                            name="radio-card"
                            id="radio-card-1"
                            checked={selectedPayment === "radio-card-1"}
                            onChange={() => setSelectedPayment("radio-card-1")}
                        />
                        <div className="card-content-wrapper">
                            <span className="check-icon"></span>
                            <div className="card-content">
                                <img
                                    className="w-[180px] h-[60px] mt-[10px]"
                                    src="/assets/images/payment/paypal.png"
                                    alt=""
                                />
                            </div>
                        </div>
                    </label>
                    <label htmlFor="radio-card-2" className="radio-card w-1/3">
                        <input
                            type="radio"
                            name="radio-card"
                            id="radio-card-2"
                            checked={selectedPayment === "radio-card-2"}
                            onChange={() => setSelectedPayment("radio-card-2")}
                        />
                        <div className="card-content-wrapper">
                            <span className="check-icon"></span>
                            <div className="card-content">
                                <img
                                    className="w-[180px] h-[60px] mt-[10px]"
                                    src="/assets/images/payment/google-pay.png"
                                    alt=""
                                />
                            </div>
                        </div>
                    </label>
                    <label htmlFor="vnpay" className="radio-card w-1/3">
                        <input
                            type="radio"
                            name="vnpay"
                            id="vnpay"
                            checked={selectedPayment === "vnpay"}
                            onChange={() => setSelectedPayment("vnpay")}
                        />
                        <div className="card-content-wrapper">
                            <span className="check-icon"></span>
                            <div className="card-content">
                                <img
                                    className="w-[180px] h-[60px] mt-[10px]"
                                    src="/assets/images/payment/vnpay.png"
                                    alt=""
                                />
                            </div>
                        </div>
                    </label>
                    <label htmlFor="radio-card-4" className="radio-card w-1/3">
                        <input
                            type="radio"
                            name="radio-card"
                            id="radio-card-4"
                            checked={selectedPayment === "radio-card-4"}
                            onChange={() => setSelectedPayment("radio-card-4")}
                        />
                        <div className="card-content-wrapper">
                            <span className="check-icon"></span>
                            <div className="card-content">
                                <img
                                    className="w-[180px] h-[60px] mt-[10px]"
                                    src="/assets/images/payment/visa.png"
                                    alt=""
                                />
                            </div>
                        </div>
                    </label>
                </div>
            </div>

            {isPopupAddressVisible && <FormAddress onClose={togglePopupAddress} />}
        </div>
    );
};

export default memo(CheckoutBoxLeft);