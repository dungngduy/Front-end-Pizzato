import { memo, useState, useEffect } from "react";
import { Card } from "antd";
import { Link } from "react-router-dom";
import AxiosInstance from "utils/apiServers";
import { formatCurrencyVND } from "utils/format";

const Menu = () => {
    const [tabLists, setTabList] = useState([]);
    const [contentList, setContentList] = useState({});
    const [activeTabKey1, setActiveTabKey1] = useState("");

    useEffect(() => {
        AxiosInstance.get("/menu")
            .then((res) => {
                const categories = res.data.categories;

                if (Array.isArray(categories) && categories.length > 0) {
                    const tabs = categories.map((item) => ({
                        key: `tab${item.category.id}`,
                        tab: item.category.name
                    }));
                    setTabList(tabs);

                    const content = categories.reduce((acc, item) => {
                        if (Array.isArray(item.pizzas) && item.pizzas.length > 0) {
                            acc[`tab${item.category.id}`] = (
                                <div className="row tab__content">
                                    <div className="col-xl-4" data-aos="zoom-in">
                                        <div className="menu__item__main">
                                            <img src={`/assets/images/menu-items/pizza-${item.category.id}.png`} alt={item.category.name} />
                                        </div>
                                    </div>
                                    <div className="col-xl-8">
                                        <div className="row">
                                            {item.pizzas.map((pizza, index) => (
                                                <div key={`pizza-${index}`} className="col-6 col-xl-6">
                                                    <div className="menu__item font-bold" data-aos="fade-left">
                                                        <Link to={`/detail/${pizza.id}`}>
                                                            <div className="menu__item__image">
                                                                <img src={pizza.thumb_image} alt={pizza.name} />
                                                            </div>
                                                            <div className="menu__item__content">
                                                                <h3>{pizza.name}</h3>
                                                                <p className="font-normal">{pizza.long_description}</p>
                                                                <h4>Giá: {formatCurrencyVND(pizza.offer_price)}</h4>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            );
                        } else {
                            acc[`tab${item.category.id}`] = <div className="product__not__found">
                                <img
                                    src="/assets/images/no-product.png"
                                    alt=""
                                    className="w-[250px] h-[150px]"
                                />
                                <p className="font-bold text-[16px] text-center">Thực đơn đang được cập nhật...</p>
                            </div>;
                        }
                        return acc;
                    }, {});
                    
                    setContentList(content);
                    setActiveTabKey1(tabs[0]?.key);
                } else {
                    console.log("No categories found or categories is not an array");
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    

    const onTab1Change = (key) => {
        setActiveTabKey1(key);
    };

    return (
        <div className="menu__container">
            <h2 className="our__menu" data-aos="fade-up"><strong>Thực đơn</strong> của chúng tôi</h2>
            <p className="description" data-aos="fade-up">
                Thực đơn của chúng tôi đa dạng với nhiều lựa chọn pizza hấp dẫn, <br /> từ các hương vị truyền thống đến
                những sáng tạo mới lạ, <br /> phù hợp với mọi khẩu vị và sở thích của khách hàng.
            </p>
            <div className="menu__list" data-aos="fade-up">
                <Card
                    style={{
                        width: '100%',
                    }}
                    tabList={tabLists}
                    activeTabKey={activeTabKey1}
                    onTabChange={onTab1Change}
                >
                    {contentList[activeTabKey1]}
                </Card>
            </div>
        </div>
    );
};

export default memo(Menu);