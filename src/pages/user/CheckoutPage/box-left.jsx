import { memo, useState, useEffect } from "react";
import { MdLocationOn } from "react-icons/md";
import { Link } from "react-router-dom";
import FormAddress from "./form-address";
import AddressSaved from "./address-saved";
import { useAddress } from "components/address";

const CheckoutBoxLeft = ({ setShippingFee, selectedPayment, setSelectedPayment, setSelectedAddress }) => {
    const [isPopupAddressVisible, setIsPopupAddressVisible] = useState(false);
    const [isPopupAddressSaved, setIsPopupAddressSaved] = useState(false);
    const [selectedAddress, setLocalSelectedAddress] = useState(null);
    const { user } = useAddress();

    const togglePopupAddress = () => {
        setIsPopupAddressVisible(!isPopupAddressVisible);
    }

    const togglePopupAddressSaved = () => {
        setIsPopupAddressSaved(!isPopupAddressSaved);
    }

    const handleSelectAddress = (address) => {
        setLocalSelectedAddress(address);
        setSelectedAddress(address);
        setIsPopupAddressSaved(false);
    };

    const handleInputChange = (e) => {
        const value = parseInt(e.target.value, 10) || 0;
        setShippingFee(value);
    };

    useEffect(() => {
        if (!selectedAddress || !user?.address?.some(addr => addr.id === selectedAddress.id)) {
            const defaultAddress = user?.address?.[0] || null;
            setLocalSelectedAddress(defaultAddress);
            setSelectedAddress(defaultAddress);
        }
    }, [user.address, selectedAddress, setSelectedAddress]);

    return (
        <div className="checkout__box__left pe-10" style={{ width: '800px' }}>
            <div className="delivery__box border border-[#f0f0f0]-100">
                <div className="delivery__box__title bg-[#f0f0f0] p-3 flex justify-between">
                    <div className="delivery__box__title__icon">
                        <h3 className="flex gap-1 items-center text-xl font-bold"><MdLocationOn /> Địa chỉ giao hàng</h3>
                    </div>
                    <div className="delivery__box__title__edit">
                        {
                            user?.address && user.address.length > 0 ? (
                                <Link onClick={togglePopupAddressSaved}><p className="text-[#676767]">Thay đổi</p></Link>
                            ) : (
                                <Link onClick={togglePopupAddress}><p className="text-[#676767]">Thêm địa chỉ</p></Link>
                            )
                        }
                    </div>
                </div>
                {
                    selectedAddress ? (
                        <div className="delivery__address p-3">
                            <p className="text-xl pb-3">{selectedAddress.last_name} {selectedAddress.first_name}</p>
                            <div className="flex gap-20">
                                <div className="delivery__address__title">
                                    <p className="text-[#676767]">Địa chỉ:</p>
                                    <p className="text-[#676767]">Điện thoại:</p>
                                    <p className="text-[#676767]">Email:</p>
                                </div>
                                <div className="delivery__address__content">
                                    <input type="text" value={selectedAddress.address || ''} disabled /><br />
                                    <input type="text" value={selectedAddress.phone || ''} disabled /><br />
                                    <input type="email" value={selectedAddress.email || ''} disabled />
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="delivery__address p-3">
                            <p className="text-xl pb-3">Chưa có</p>
                            <div className="flex gap-20">
                                <div className="delivery__address__title">
                                    <p className="text-[#676767]">Địa chỉ:</p>
                                    <p className="text-[#676767]">Điện thoại:</p>
                                    <p className="text-[#676767]">Email:</p>
                                </div>
                                <div className="delivery__address__content">
                                    <input type="text" value="Chưa có" disabled /><br />
                                    <input type="text" value="Chưa có" disabled /><br />
                                    <input type="email" value="Chưa có" disabled />
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
                    <label htmlFor="cash" className="radio-card w-1/3">
                        <input
                            type="radio"
                            name="payment_method"
                            id="cash"
                            checked={selectedPayment === "cash"}
                            onChange={() => setSelectedPayment("cash")}
                        />
                        <div className="card-content-wrapper">
                            <span className="check-icon"></span>
                            <div className="card-content">
                                <img
                                    className="w-[180px] h-[60px] mt-[10px]"
                                    src="/assets/images/payment/cash.png"
                                    alt=""
                                />
                            </div>
                        </div>
                    </label>
                    <label htmlFor="vnpay" className="radio-card w-1/3">
                        <input
                            type="radio"
                            name="payment_method"
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
                </div>
            </div>

            {/* Add new address */}
            {isPopupAddressVisible && <FormAddress onClose={togglePopupAddress} setSelectedAddress={setSelectedAddress} />}

            {/* Address saved */}
            {isPopupAddressSaved && <AddressSaved onClose={togglePopupAddressSaved} setSelectedAddress={setSelectedAddress} onSelectAddress={handleSelectAddress} />}
        </div>
    );
};

export default memo(CheckoutBoxLeft);