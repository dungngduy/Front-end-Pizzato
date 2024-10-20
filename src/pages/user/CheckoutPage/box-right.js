import { memo } from "react";
// import { MdLocationOn } from "react-icons/md";
// import { Link } from "react-router-dom";

const CheckoutBoxRight = () => {
    return (
        <div className="checkout__box__right flex flex-col justify-between bg-[#f0f0f0] px-5 rounded-md" style={{ width: '400px' }}>
            <div>
                <h2 className="text-xl font-bold text-[24px] border-b-2 border-[#000000]-400 py-3">Đơn hàng <em className="font-normal text-[16px]">(1 sản phẩm)</em></h2>
                <div className="checkout__box__right__content py-5 border-b-2 border-[#000000]-400">
                    <div className="checkout__box__right__content__item flex gap-3">
                        <div className="checkout__box__right__content__item__image w-[80px] h-[80px]">
                            <img src="/assets/images/products/product-1.jpg" alt="product" />
                            <div className="count">
                                <p>10</p>
                            </div>
                        </div>
                        <div className="checkout__box__right__content__item__info flex justify-between gap-5">
                            <div className="info__basic">
                                <h3 className="text-xl font-bold">Pizza 1</h3>
                                <p className="text-[#676767]">Size: Nhỏ</p>
                                <p className="text-[#676767]">Món ăn kèm: Rau xanh</p>
                            </div>
                            <div className="info__price">
                                <p className="font-bold text-[#f00000]">180.000đ</p>
                            </div>
                        </div>
                    </div>
                    <div className="checkout__box__right__content__item flex gap-3">
                        <div className="checkout__box__right__content__item__image w-[80px] h-[80px]">
                            <img src="/assets/images/products/product-1.jpg" alt="product" />
                            <div className="count">
                                <p>10</p>
                            </div>
                        </div>
                        <div className="checkout__box__right__content__item__info flex justify-between gap-5">
                            <div className="info__basic">
                                <h3 className="text-xl font-bold">Pizza 1</h3>
                                <p className="text-[#676767]">Size: Nhỏ</p>
                                <p className="text-[#676767]">Món ăn kèm: Rau xanh</p>
                            </div>
                            <div className="info__price">
                                <p className="font-bold text-[#f00000]">180.000đ</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="total__price flex justify-between py-3 border-b-2 border-[#000000]-400">
                    <div className="title__total">
                        <p className="text-[#676767]">Tạm tính</p>
                        <p className="text-[#676767]">Phí vận chuyển</p>
                    </div>
                    <div className="price__total">
                        <p className="text-[#f00000] font-bold">360.000đ</p>
                        <p className="text-[#f00000] font-bold">40.000đ</p>
                    </div>
                </div>
                <div className="total flex justify-between py-3 border-b-2 border-[#000000]-400">
                    <div className="title">
                        <p className="text-[#676767] font-bold">Tổng tiền</p>
                    </div>
                    <div className="price">
                        <p className="text-[#f00000] font-bold">400.000đ</p>
                    </div>
                </div>
            </div>
            <div className="button__checkout py-3 w-full">
                <button type="submit" className="bg-[#BC9A6C] w-full text-white font-bold rounded-lg px-6 py-3">Thanh toán</button>
            </div>
        </div>
    );
};

export default memo(CheckoutBoxRight);