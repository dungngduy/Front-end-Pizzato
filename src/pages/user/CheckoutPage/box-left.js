import { memo, useState } from "react";
import { MdLocationOn } from "react-icons/md";
import { Link } from "react-router-dom";
import FormAddress from "./form-address";

const CheckoutBoxLeft = () => {
    const [isPopupAddressVisible, setIsPopupAddressVisible] = useState(false);

    const togglePopupAddress = () => {
        setIsPopupAddressVisible(!isPopupAddressVisible);
    }

    return (
        <div className="checkout__box__left px-10" style={{ width: '800px' }}>
            <div className="delivery__box border border-[#f0f0f0]-100">
                <div className="delivery__box__title bg-[#f0f0f0] p-3 flex justify-between">
                    <div className="delivery__box__title__icon">
                        <h3 className="flex gap-1 items-center text-xl font-bold"><MdLocationOn /> Địa chỉ giao hàng</h3>
                    </div>
                    <div className="delivery__box__title__edit">
                        <Link onClick={togglePopupAddress}><p className="text-[#676767]">Thay đổi</p></Link>
                    </div>
                </div>
                <div className="delivery__address p-3">
                    <p className="text-xl pb-3">Nguyễn Duy Dũng</p>
                    <div className="flex gap-20">
                        <div className="delivery__address__title">
                            <p className="text-[#676767]">Địa chỉ:</p>
                            <p className="text-[#676767]">Điện thoại:</p>
                            <p className="text-[#676767]">Email:</p>
                        </div>
                        <div className="delivery__address__content">
                            {/* Khi lưu dữ liệu thì nên đổi là value */}
                            <input type="text" defaultValue="Đường ĐH06, Đức Giang, Hoài Đức, Hà Nội" disabled /><br />
                            <input type="text" defaultValue="0376 999 999" disabled /><br />
                            <input type="email" defaultValue="TnVW4@example.com" disabled />
                        </div>
                    </div>
                </div>
            </div>
            <div className="checkout__box__left__express mt-10">
                <h2 className="text-xl font-bold mb-3">Hình thức vận chuyển</h2>
                <div className="shipping-options border border-[#f0f0f0]-100">
                    <label className="flex justify-between border-b border-[#f0f0f0]-100 px-3 py-3">
                        <div className="shipping-options__label">
                            <input type="radio" name="shipping" value="standard" className="mr-1" defaultChecked />
                            Giao hàng chuẩn
                        </div>
                        <div className="shipping-options__price">
                            <p className="font-bold">40.000đ</p>
                        </div>
                    </label>
                    <label className="flex justify-between border-b border-[#f0f0f0]-100 px-3 py-3">
                        <div className="shipping-options__label">
                            <input type="radio" name="shipping" value="express" className="mr-1" />
                            Giao hàng nhanh
                        </div>
                        <div className="shipping-options__price">
                            <p className="font-bold">80.000đ</p>
                        </div>
                    </label>
                </div>
            </div>
            <div className="check__box__left__payment mt-10">
                <h2 className="text-xl font-bold mb-3">Hình thức thanh toán</h2>
                <div className="payment-options border border-[#f0f0f0]-100">
                    <label className="flex justify-between border-b border-[#f0f0f0]-100 px-3 py-3">
                        <div className="payment-options__label">
                            <input type="radio" name="payment" value="cod" className="mr-1" defaultChecked />
                            Thanh toán khi giao hàng
                        </div>
                        <div className="payment-options__price">
                            <p className="font-bold"></p>
                        </div>
                    </label>
                    <label className="flex justify-between border-b border-[#f0f0f0]-100 px-3 py-3">
                        <div className="payment-options__label">
                            <input type="radio" name="payment" value="paypal" className="mr-1" />
                            Thanh toán Paypal
                        </div>
                        <div className="payment-options__price w-[24px] h-[24px]">
                            <img src="/assets/images/payment/paypal.jpg" alt="" />
                        </div>
                    </label>
                    <label className="flex justify-between border-b border-[#f0f0f0]-100 px-3 py-3">
                        <div className="payment-options__label">
                            <input type="radio" name="payment" value="momo" className="mr-1" />
                            Thanh toán Momo
                        </div>
                        <div className="payment-options__price w-[24px] h-[24px]">
                            <img src="/assets/images/payment/momo.webp" alt="" />
                        </div>
                    </label>
                    <label className="flex justify-between border-b border-[#f0f0f0]-100 px-3 py-3">
                        <div className="payment-options__label">
                            <input type="radio" name="payment" value="vnpay" className="mr-1" />
                            Thanh toán VNPay
                        </div>
                        <div className="payment-options__price w-[24px] h-[24px]">
                            <img src="/assets/images/payment/vnpay.png" alt="" />
                        </div>
                    </label>
                </div>
            </div>

            {isPopupAddressVisible && <FormAddress onClose={togglePopupAddress} />}
        </div>
    );
};

export default memo(CheckoutBoxLeft);