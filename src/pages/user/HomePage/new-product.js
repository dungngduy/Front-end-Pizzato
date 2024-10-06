import { memo } from "react";
import { Checkbox } from "antd";
import { Link } from "react-router-dom";

const NewProduct = () => {
    return (
        <div className="row new__product__container">
            <div className="col-xl-6">
                <div className="new__product">
                    <h4 className="new__product__title" data-aos="fade-right">Sản phẩm <strong className="change_color">HOT</strong> hôm nay</h4>
                    <h2 className="new__product__description" data-aos="fade-right">
                        <strong>Chúng tôi</strong> tạo ra sản phẩm <br /> thực phẩm tốt nhất
                    </h2>
                    <p className="new__product__content" data-aos="fade-right">
                        Pizza Gà Nướng Mật Ong là sự kết hợp hoàn hảo giữa thịt gà nướng mềm mại, 
                        vị ngọt dịu của mật ong và phô mai tan chảy. Với lớp đế mỏng giòn và rau củ 
                        tươi ngon, mỗi miếng pizza là một trải nghiệm ẩm thực tuyệt vời. Hãy thưởng 
                        thức ngay để cảm nhận sự khác biệt!
                    </p>
                    <div className="new__product__truth" data-aos="fade-right">
                        <div className="new__product__truth__items">
                            <Checkbox defaultChecked />
                            <p>
                                Thưởng thức hương vị mới lạ từ Pizza Xốt Truffle, 
                                lớp đế mỏng giòn tan kết hợp phô mai béo ngậy.
                            </p>
                        </div>
                        <div className="new__product__truth__items">
                            <Checkbox defaultChecked />
                            <p>
                                Từng lát thịt bò đậm đà hoà quyện cùng rau củ tươi ngon, 
                                tạo nên món pizza đầy hấp dẫn.
                            </p>
                        </div>
                        <div className="new__product__truth__items">
                            <Checkbox defaultChecked />
                            <p>
                                Nhanh tay đặt ngay Pizza Hải Sản Thượng Hạng với giá chỉ 
                                199,000 VND, ưu đãi hấp dẫn hôm nay!
                            </p>
                        </div>
                    </div>
                    <div className="new__product__button" data-aos="fade-right">
                        <Link to={"/"}><button type="button">Đọc thêm</button></Link>
                    </div>
                </div>
            </div>
            <div className="col-xl-6">
                <div className="new__product__image">
                    <div className="col-xl-12 new__product__image-top" data-aos="fade-left">
                        <img src="/assets/images/new-products/new-pro-1.jpg" alt="New-pro-1" />
                    </div>
                    <div className="col-xl-12 new__product__image-bottom">
                        <div className="col-xl-6 new__product__image-bottom-left" data-aos="fade-left">
                            <img src="/assets/images/new-products/new-pro-2.jpeg" alt="New-pro-2" />
                        </div>
                        <div className="col-xl-6 new__product__image-bottom-right" data-aos="fade-left">
                            <img src="/assets/images/new-products/new-pro-3.webp" alt="New-pro-3" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default memo(NewProduct);