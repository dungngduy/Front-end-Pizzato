import { memo, useState, useEffect } from "react";
import { Checkbox } from "antd";
import { Link } from "react-router-dom";
import AxiosInstance from "utils/apiServers";
import { formatCurrencyVND, formatImage } from "utils/format";
import useIncrementView from 'components/increment-view';

const NewProduct = () => {
    const [hotProduct, setHotProduct] = useState([]);
    const [gallaries, setGallaries] = useState([]);
    const { incrementView } = useIncrementView();

    useEffect(() => {
        AxiosInstance.get("/hot-product")
            .then(res => {
                setHotProduct(res.data.hotPizza);
                setGallaries(res.data.gallaries);
            })
    }, []);

    const handleProductClick = (productId) => {
        incrementView(productId);
    };

    return (
        <div className="flex justify-center ">
            <div className="">
                {hotProduct.map((item, index) => {
                    return (
                        <div key={index} className="new__product">
                            <h4 className="new__product__title" data-aos="fade-right">Sản phẩm <strong className="change_color">HOT</strong> hôm nay</h4>
                            <h2 className="new__product__description" data-aos="fade-right">
                                <strong>Chúng tôi</strong> tạo ra sản phẩm <br /> thực phẩm tốt nhất
                            </h2>
                            <p className="new__product__content" data-aos="fade-right">
                                {item.name} - {item.short_description}
                            </p>
                            <div className="new__product__truth" data-aos="fade-right">
                                <div className="new__product__truth__items">
                                    <Checkbox defaultChecked style={{ pointerEvents: 'none' }} />
                                    <p>
                                        Thưởng thức hương vị mới lạ từ {item.name},
                                        lớp đế mỏng giòn tan kết hợp phô mai béo ngậy.
                                    </p>
                                </div>
                                <div className="new__product__truth__items">
                                    <Checkbox defaultChecked style={{ pointerEvents: 'none' }} />
                                    <p>
                                        Từng lát thịt bò đậm đà hoà quyện cùng rau củ tươi ngon,
                                        tạo nên món pizza đầy hấp dẫn.
                                    </p>
                                </div>
                                <div className="new__product__truth__items">
                                    <Checkbox defaultChecked style={{ pointerEvents: 'none' }} />
                                    <p>
                                        Nhanh tay đặt ngay {item.name} với giá chỉ {formatCurrencyVND(item.offer_price)},
                                        ưu đãi hấp dẫn hôm nay!
                                    </p>
                                </div>
                            </div>
                            <div className="new__product__button" data-aos="fade-right">
                                <Link onClick={() => handleProductClick(item.id)} to={`/detail/${item.id}`}><button type="button">Đọc thêm</button></Link>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="">
                <div className="new__product__image">
                    {hotProduct.map((item, index) => {
                        return (
                            <div key={index} className="col-xl-12 new__product__image-top" data-aos="zoom-in">
                                <img src={formatImage(item.thumb_image)} alt={item.thumb_image} />
                            </div>
                        )
                    })}
                    <div className="col-xl-12 new__product__image-bottom">
                        {gallaries.map((item, index) => {
                            return (
                                <div
                                    className={`col-xl-6 new__product__image-bottom-${index === 0 ? "left" : "right"}`}
                                    data-aos="zoom-in"
                                    key={index}
                                >
                                    <img src={formatImage(item.galleries)} alt={`new-pro-${index + 1}`} />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default memo(NewProduct);