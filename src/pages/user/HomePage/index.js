import { memo, useState } from "react";
import { Link } from "react-router-dom";
import { Checkbox, Carousel, Card, Rate } from 'antd';
import {
    MdFastfood,
    MdOutlineFeedback,
    MdDateRange,
    MdOutlineTrendingFlat
} from "react-icons/md";
import {
    PiChefHatBold,
    PiMoneyWavyBold,
    PiUser
} from "react-icons/pi";
import CarouselMulti from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import 'assets/user/scss/home-page.scss';

const tabList = [
    {
        key: 'tab1',
        tab: 'Pizza Margarita',
    },
    {
        key: 'tab2',
        tab: 'Pizza Peperoni',
    },
    {
        key: 'tab3',
        tab: 'Pizza Vegetarian',
    },
    {
        key: 'tab4',
        tab: 'Pizza Mexican',
    },
    {
        key: 'tab5',
        tab: 'Pizza Calzone',
    },
    {
        key: 'tab6',
        tab: 'Pizza Chicken',
    },
];
const contentList = {
    tab1: (
        <div className="row tab__content">
            <div className="col-xl-4" data-aos="fade-right">
                <div className="menu__item__main">
                    <img src="/assets/images/menu-items/pizza-1.png" alt="Pizza-1" />
                </div>
            </div>
            <div className="col-xl-8">
                <div className="row">
                    <div className="col-6 col-xl-6">
                        <div className="menu__item" data-aos="fade-left">
                            <div className="menu__item__image">
                                <img src="/assets/images/menu-items/sub-pizza-1.jpg" alt="Sub-pizza-1" />
                            </div>
                            <div className="menu__item__content">
                                <h3>Pizza Margarita</h3>
                                <p>
                                    HHT - Pizza là môn ăn đặc trưng của nên ứng thực nước Ý, nhưng thực tế, nó được cả thế giới
                                    ½m chí, người dân ở nhiều nước khác còn ăn pizza nhiều hơn cả người Ý luôn! Vì sao bạn nên lựa chọn Pizzato?
                                </p>
                                <h4>Giá: 125.000đ</h4>
                            </div>
                        </div>
                        <div className="menu__item" data-aos="fade-left">
                            <div className="menu__item__image">
                                <img src="/assets/images/menu-items/sub-pizza-1.jpg" alt="Sub-pizza-1" />
                            </div>
                            <div className="menu__item__content">
                                <h3>Pizza Margarita</h3>
                                <p>
                                    HHT - Pizza là môn ăn đặc trưng của nên ứng thực nước Ý, nhưng thực tế, nó được cả thế giới
                                    ½m chí, người dân ở nhiều nước khác còn ăn pizza nhiều hơn cả người Ý luôn! Vì sao bạn nên lựa chọn Pizzato?
                                </p>
                                <h4>Giá: 125.000đ</h4>
                            </div>
                        </div>
                        <div className="menu__item" data-aos="fade-left">
                            <div className="menu__item__image">
                                <img src="/assets/images/menu-items/sub-pizza-1.jpg" alt="Sub-pizza-1" />
                            </div>
                            <div className="menu__item__content">
                                <h3>Pizza Margarita</h3>
                                <p>
                                    HHT - Pizza là môn ăn đặc trưng của nên ứng thực nước Ý, nhưng thực tế, nó được cả thế giới
                                    ½m chí, người dân ở nhiều nước khác còn ăn pizza nhiều hơn cả người Ý luôn! Vì sao bạn nên lựa chọn Pizzato?
                                </p>
                                <h4>Giá: 125.000đ</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-xl-6">
                        <div className="menu__item" data-aos="fade-left">
                            <div className="menu__item__image">
                                <img src="/assets/images/menu-items/sub-pizza-2.jpg" alt="Sub-pizza-1" />
                            </div>
                            <div className="menu__item__content">
                                <h3>Pizza Margarita</h3>
                                <p>
                                    HHT - Pizza là môn ăn đặc trưng của nên ứng thực nước Ý, nhưng thực tế, nó được cả thế giới
                                    ½m chí, người dân ở nhiều nước khác còn ăn pizza nhiều hơn cả người Ý luôn! Vì sao bạn nên lựa chọn Pizzato?
                                </p>
                                <h4>Giá: 125.000đ</h4>
                            </div>
                        </div>
                        <div className="menu__item" data-aos="fade-left">
                            <div className="menu__item__image">
                                <img src="/assets/images/menu-items/sub-pizza-2.jpg" alt="Sub-pizza-1" />
                            </div>
                            <div className="menu__item__content">
                                <h3>Pizza Margarita</h3>
                                <p>
                                    HHT - Pizza là môn ăn đặc trưng của nên ứng thực nước Ý, nhưng thực tế, nó được cả thế giới
                                    ½m chí, người dân ở nhiều nước khác còn ăn pizza nhiều hơn cả người Ý luôn! Vì sao bạn nên lựa chọn Pizzato?
                                </p>
                                <h4>Giá: 125.000đ</h4>
                            </div>
                        </div>
                        <div className="menu__item" data-aos="fade-left">
                            <div className="menu__item__image">
                                <img src="/assets/images/menu-items/sub-pizza-2.jpg" alt="Sub-pizza-1" />
                            </div>
                            <div className="menu__item__content">
                                <h3>Pizza Margarita</h3>
                                <p>
                                    HHT - Pizza là môn ăn đặc trưng của nên ứng thực nước Ý, nhưng thực tế, nó được cả thế giới
                                    ½m chí, người dân ở nhiều nước khác còn ăn pizza nhiều hơn cả người Ý luôn! Vì sao bạn nên lựa chọn Pizzato?
                                </p>
                                <h4>Giá: 125.000đ</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ),
    tab2: (
        <div className="row tab__content">
            <div className="col-xl-4" data-aos="fade-right">
                <div className="menu__item__main">
                    <img src="/assets/images/menu-items/pizza-2.png" alt="Pizza-2" />
                </div>
            </div>
            <div className="col-xl-8">
                <div className="row">
                    <div className="col-6 col-xl-6">
                        <div className="menu__item">
                            <div className="menu__item__image">
                                <img src="/assets/images/menu-items/sub-pizza-1.jpg" alt="Sub-pizza-1" />
                            </div>
                            <div className="menu__item__content">
                                <h3>Pizza Margarita</h3>
                                <p>
                                    HHT - Pizza là môn ăn đặc trưng của nên ứng thực nước Ý, nhưng thực tế, nó được cả thế giới
                                    ½m chí, người dân ở nhiều nước khác còn ăn pizza nhiều hơn cả người Ý luôn! Vì sao bạn nên lựa chọn Pizzato?
                                </p>
                                <h4>Giá: 125.000đ</h4>
                            </div>
                        </div>
                        <div className="menu__item" data-aos="fade-left">
                            <div className="menu__item__image">
                                <img src="/assets/images/menu-items/sub-pizza-1.jpg" alt="Sub-pizza-1" />
                            </div>
                            <div className="menu__item__content">
                                <h3>Pizza Margarita</h3>
                                <p>
                                    HHT - Pizza là môn ăn đặc trưng của nên ứng thực nước Ý, nhưng thực tế, nó được cả thế giới
                                    ½m chí, người dân ở nhiều nước khác còn ăn pizza nhiều hơn cả người Ý luôn! Vì sao bạn nên lựa chọn Pizzato?
                                </p>
                                <h4>Giá: 125.000đ</h4>
                            </div>
                        </div>
                        <div className="menu__item" data-aos="fade-left">
                            <div className="menu__item__image">
                                <img src="/assets/images/menu-items/sub-pizza-1.jpg" alt="Sub-pizza-1" />
                            </div>
                            <div className="menu__item__content">
                                <h3>Pizza Margarita</h3>
                                <p>
                                    HHT - Pizza là môn ăn đặc trưng của nên ứng thực nước Ý, nhưng thực tế, nó được cả thế giới
                                    ½m chí, người dân ở nhiều nước khác còn ăn pizza nhiều hơn cả người Ý luôn! Vì sao bạn nên lựa chọn Pizzato?
                                </p>
                                <h4>Giá: 125.000đ</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-xl-6">
                        <div className="menu__item" data-aos="fade-left">
                            <div className="menu__item__image">
                                <img src="/assets/images/menu-items/sub-pizza-2.jpg" alt="Sub-pizza-1" />
                            </div>
                            <div className="menu__item__content">
                                <h3>Pizza Margarita</h3>
                                <p>
                                    HHT - Pizza là môn ăn đặc trưng của nên ứng thực nước Ý, nhưng thực tế, nó được cả thế giới
                                    ½m chí, người dân ở nhiều nước khác còn ăn pizza nhiều hơn cả người Ý luôn! Vì sao bạn nên lựa chọn Pizzato?
                                </p>
                                <h4>Giá: 125.000đ</h4>
                            </div>
                        </div>
                        <div className="menu__item" data-aos="fade-left">
                            <div className="menu__item__image">
                                <img src="/assets/images/menu-items/sub-pizza-2.jpg" alt="Sub-pizza-1" />
                            </div>
                            <div className="menu__item__content">
                                <h3>Pizza Margarita</h3>
                                <p>
                                    HHT - Pizza là môn ăn đặc trưng của nên ứng thực nước Ý, nhưng thực tế, nó được cả thế giới
                                    ½m chí, người dân ở nhiều nước khác còn ăn pizza nhiều hơn cả người Ý luôn! Vì sao bạn nên lựa chọn Pizzato?
                                </p>
                                <h4>Giá: 125.000đ</h4>
                            </div>
                        </div>
                        <div className="menu__item" data-aos="fade-left">
                            <div className="menu__item__image">
                                <img src="/assets/images/menu-items/sub-pizza-2.jpg" alt="Sub-pizza-1" />
                            </div>
                            <div className="menu__item__content">
                                <h3>Pizza Margarita</h3>
                                <p>
                                    HHT - Pizza là môn ăn đặc trưng của nên ứng thực nước Ý, nhưng thực tế, nó được cả thế giới
                                    ½m chí, người dân ở nhiều nước khác còn ăn pizza nhiều hơn cả người Ý luôn! Vì sao bạn nên lựa chọn Pizzato?
                                </p>
                                <h4>Giá: 125.000đ</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ),
    tab3: (
        <div className="row tab__content">
            <div className="col-xl-4" data-aos="fade-right">
                <div className="menu__item__main">
                    <img src="/assets/images/menu-items/pizza-3.png" alt="Pizza-3" />
                </div>
            </div>
            <div className="col-xl-8">
                <div className="row">
                    <div className="col-6 col-xl-6">
                        <div className="menu__item" data-aos="fade-left">
                            <div className="menu__item__image">
                                <img src="/assets/images/menu-items/sub-pizza-1.jpg" alt="Sub-pizza-1" />
                            </div>
                            <div className="menu__item__content">
                                <h3>Pizza Margarita</h3>
                                <p>
                                    HHT - Pizza là môn ăn đặc trưng của nên ứng thực nước Ý, nhưng thực tế, nó được cả thế giới
                                    ½m chí, người dân ở nhiều nước khác còn ăn pizza nhiều hơn cả người Ý luôn! Vì sao bạn nên lựa chọn Pizzato?
                                </p>
                                <h4>Giá: 125.000đ</h4>
                            </div>
                        </div>
                        <div className="menu__item" data-aos="fade-left">
                            <div className="menu__item__image">
                                <img src="/assets/images/menu-items/sub-pizza-1.jpg" alt="Sub-pizza-1" />
                            </div>
                            <div className="menu__item__content">
                                <h3>Pizza Margarita</h3>
                                <p>
                                    HHT - Pizza là môn ăn đặc trưng của nên ứng thực nước Ý, nhưng thực tế, nó được cả thế giới
                                    ½m chí, người dân ở nhiều nước khác còn ăn pizza nhiều hơn cả người Ý luôn! Vì sao bạn nên lựa chọn Pizzato?
                                </p>
                                <h4>Giá: 125.000đ</h4>
                            </div>
                        </div>
                        <div className="menu__item" data-aos="fade-left">
                            <div className="menu__item__image">
                                <img src="/assets/images/menu-items/sub-pizza-1.jpg" alt="Sub-pizza-1" />
                            </div>
                            <div className="menu__item__content">
                                <h3>Pizza Margarita</h3>
                                <p>
                                    HHT - Pizza là môn ăn đặc trưng của nên ứng thực nước Ý, nhưng thực tế, nó được cả thế giới
                                    ½m chí, người dân ở nhiều nước khác còn ăn pizza nhiều hơn cả người Ý luôn! Vì sao bạn nên lựa chọn Pizzato?
                                </p>
                                <h4>Giá: 125.000đ</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-xl-6">
                        <div className="menu__item" data-aos="fade-left">
                            <div className="menu__item__image">
                                <img src="/assets/images/menu-items/sub-pizza-2.jpg" alt="Sub-pizza-1" />
                            </div>
                            <div className="menu__item__content">
                                <h3>Pizza Margarita</h3>
                                <p>
                                    HHT - Pizza là môn ăn đặc trưng của nên ứng thực nước Ý, nhưng thực tế, nó được cả thế giới
                                    ½m chí, người dân ở nhiều nước khác còn ăn pizza nhiều hơn cả người Ý luôn! Vì sao bạn nên lựa chọn Pizzato?
                                </p>
                                <h4>Giá: 125.000đ</h4>
                            </div>
                        </div>
                        <div className="menu__item" data-aos="fade-left">
                            <div className="menu__item__image">
                                <img src="/assets/images/menu-items/sub-pizza-2.jpg" alt="Sub-pizza-1" />
                            </div>
                            <div className="menu__item__content">
                                <h3>Pizza Margarita</h3>
                                <p>
                                    HHT - Pizza là môn ăn đặc trưng của nên ứng thực nước Ý, nhưng thực tế, nó được cả thế giới
                                    ½m chí, người dân ở nhiều nước khác còn ăn pizza nhiều hơn cả người Ý luôn! Vì sao bạn nên lựa chọn Pizzato?
                                </p>
                                <h4>Giá: 125.000đ</h4>
                            </div>
                        </div>
                        <div className="menu__item" data-aos="fade-left">
                            <div className="menu__item__image">
                                <img src="/assets/images/menu-items/sub-pizza-2.jpg" alt="Sub-pizza-1" />
                            </div>
                            <div className="menu__item__content">
                                <h3>Pizza Margarita</h3>
                                <p>
                                    HHT - Pizza là môn ăn đặc trưng của nên ứng thực nước Ý, nhưng thực tế, nó được cả thế giới
                                    ½m chí, người dân ở nhiều nước khác còn ăn pizza nhiều hơn cả người Ý luôn! Vì sao bạn nên lựa chọn Pizzato?
                                </p>
                                <h4>Giá: 125.000đ</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ),
    tab4: (
        <div className="row tab__content">
            <div className="col-xl-4" data-aos="fade-right">
                <div className="menu__item__main">
                    <img src="/assets/images/menu-items/pizza-4.png" alt="Pizza-4" />
                </div>
            </div>
            <div className="col-xl-8" data-aos="fade-left">
                <div className="row">
                    <div className="col-6 col-xl-6">
                        <div className="menu__item" data-aos="fade-left">
                            <div className="menu__item__image">
                                <img src="/assets/images/menu-items/sub-pizza-1.jpg" alt="Sub-pizza-1" />
                            </div>
                            <div className="menu__item__content">
                                <h3>Pizza Margarita</h3>
                                <p>
                                    HHT - Pizza là môn ăn đặc trưng của nên ứng thực nước Ý, nhưng thực tế, nó được cả thế giới
                                    ½m chí, người dân ở nhiều nước khác còn ăn pizza nhiều hơn cả người Ý luôn! Vì sao bạn nên lựa chọn Pizzato?
                                </p>
                                <h4>Giá: 125.000đ</h4>
                            </div>
                        </div>
                        <div className="menu__item" data-aos="fade-left">
                            <div className="menu__item__image">
                                <img src="/assets/images/menu-items/sub-pizza-1.jpg" alt="Sub-pizza-1" />
                            </div>
                            <div className="menu__item__content">
                                <h3>Pizza Margarita</h3>
                                <p>
                                    HHT - Pizza là môn ăn đặc trưng của nên ứng thực nước Ý, nhưng thực tế, nó được cả thế giới
                                    ½m chí, người dân ở nhiều nước khác còn ăn pizza nhiều hơn cả người Ý luôn! Vì sao bạn nên lựa chọn Pizzato?
                                </p>
                                <h4>Giá: 125.000đ</h4>
                            </div>
                        </div>
                        <div className="menu__item" data-aos="fade-left">
                            <div className="menu__item__image">
                                <img src="/assets/images/menu-items/sub-pizza-1.jpg" alt="Sub-pizza-1" />
                            </div>
                            <div className="menu__item__content">
                                <h3>Pizza Margarita</h3>
                                <p>
                                    HHT - Pizza là môn ăn đặc trưng của nên ứng thực nước Ý, nhưng thực tế, nó được cả thế giới
                                    ½m chí, người dân ở nhiều nước khác còn ăn pizza nhiều hơn cả người Ý luôn! Vì sao bạn nên lựa chọn Pizzato?
                                </p>
                                <h4>Giá: 125.000đ</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-xl-6">
                        <div className="menu__item" data-aos="fade-left">
                            <div className="menu__item__image">
                                <img src="/assets/images/menu-items/sub-pizza-2.jpg" alt="Sub-pizza-1" />
                            </div>
                            <div className="menu__item__content">
                                <h3>Pizza Margarita</h3>
                                <p>
                                    HHT - Pizza là môn ăn đặc trưng của nên ứng thực nước Ý, nhưng thực tế, nó được cả thế giới
                                    ½m chí, người dân ở nhiều nước khác còn ăn pizza nhiều hơn cả người Ý luôn! Vì sao bạn nên lựa chọn Pizzato?
                                </p>
                                <h4>Giá: 125.000đ</h4>
                            </div>
                        </div>
                        <div className="menu__item" data-aos="fade-left">
                            <div className="menu__item__image">
                                <img src="/assets/images/menu-items/sub-pizza-2.jpg" alt="Sub-pizza-1" />
                            </div>
                            <div className="menu__item__content">
                                <h3>Pizza Margarita</h3>
                                <p>
                                    HHT - Pizza là môn ăn đặc trưng của nên ứng thực nước Ý, nhưng thực tế, nó được cả thế giới
                                    ½m chí, người dân ở nhiều nước khác còn ăn pizza nhiều hơn cả người Ý luôn! Vì sao bạn nên lựa chọn Pizzato?
                                </p>
                                <h4>Giá: 125.000đ</h4>
                            </div>
                        </div>
                        <div className="menu__item" data-aos="fade-left">
                            <div className="menu__item__image">
                                <img src="/assets/images/menu-items/sub-pizza-2.jpg" alt="Sub-pizza-1" />
                            </div>
                            <div className="menu__item__content">
                                <h3>Pizza Margarita</h3>
                                <p>
                                    HHT - Pizza là môn ăn đặc trưng của nên ứng thực nước Ý, nhưng thực tế, nó được cả thế giới
                                    ½m chí, người dân ở nhiều nước khác còn ăn pizza nhiều hơn cả người Ý luôn! Vì sao bạn nên lựa chọn Pizzato?
                                </p>
                                <h4>Giá: 125.000đ</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ),
    tab5: (
        <div className="row tab__content">
            <div className="col-xl-4" data-aos="fade-right">
                <div className="menu__item__main">
                    <img src="/assets/images/menu-items/pizza-5.png" alt="Pizza-5" />
                </div>
            </div>
            <div className="col-xl-8" data-aos="fade-left">
                <div className="row">
                    <div className="col-6 col-xl-6">
                        <div className="menu__item" data-aos="fade-left">
                            <div className="menu__item__image">
                                <img src="/assets/images/menu-items/sub-pizza-1.jpg" alt="Sub-pizza-1" />
                            </div>
                            <div className="menu__item__content">
                                <h3>Pizza Margarita</h3>
                                <p>
                                    HHT - Pizza là môn ăn đặc trưng của nên ứng thực nước Ý, nhưng thực tế, nó được cả thế giới
                                    ½m chí, người dân ở nhiều nước khác còn ăn pizza nhiều hơn cả người Ý luôn! Vì sao bạn nên lựa chọn Pizzato?
                                </p>
                                <h4>Giá: 125.000đ</h4>
                            </div>
                        </div>
                        <div className="menu__item" data-aos="fade-left">
                            <div className="menu__item__image">
                                <img src="/assets/images/menu-items/sub-pizza-1.jpg" alt="Sub-pizza-1" />
                            </div>
                            <div className="menu__item__content">
                                <h3>Pizza Margarita</h3>
                                <p>
                                    HHT - Pizza là môn ăn đặc trưng của nên ứng thực nước Ý, nhưng thực tế, nó được cả thế giới
                                    ½m chí, người dân ở nhiều nước khác còn ăn pizza nhiều hơn cả người Ý luôn! Vì sao bạn nên lựa chọn Pizzato?
                                </p>
                                <h4>Giá: 125.000đ</h4>
                            </div>
                        </div>
                        <div className="menu__item" data-aos="fade-left">
                            <div className="menu__item__image">
                                <img src="/assets/images/menu-items/sub-pizza-1.jpg" alt="Sub-pizza-1" />
                            </div>
                            <div className="menu__item__content">
                                <h3>Pizza Margarita</h3>
                                <p>
                                    HHT - Pizza là môn ăn đặc trưng của nên ứng thực nước Ý, nhưng thực tế, nó được cả thế giới
                                    ½m chí, người dân ở nhiều nước khác còn ăn pizza nhiều hơn cả người Ý luôn! Vì sao bạn nên lựa chọn Pizzato?
                                </p>
                                <h4>Giá: 125.000đ</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-xl-6">
                        <div className="menu__item" data-aos="fade-left">
                            <div className="menu__item__image">
                                <img src="/assets/images/menu-items/sub-pizza-2.jpg" alt="Sub-pizza-1" />
                            </div>
                            <div className="menu__item__content">
                                <h3>Pizza Margarita</h3>
                                <p>
                                    HHT - Pizza là môn ăn đặc trưng của nên ứng thực nước Ý, nhưng thực tế, nó được cả thế giới
                                    ½m chí, người dân ở nhiều nước khác còn ăn pizza nhiều hơn cả người Ý luôn! Vì sao bạn nên lựa chọn Pizzato?
                                </p>
                                <h4>Giá: 125.000đ</h4>
                            </div>
                        </div>
                        <div className="menu__item" data-aos="fade-left">
                            <div className="menu__item__image">
                                <img src="/assets/images/menu-items/sub-pizza-2.jpg" alt="Sub-pizza-1" />
                            </div>
                            <div className="menu__item__content">
                                <h3>Pizza Margarita</h3>
                                <p>
                                    HHT - Pizza là môn ăn đặc trưng của nên ứng thực nước Ý, nhưng thực tế, nó được cả thế giới
                                    ½m chí, người dân ở nhiều nước khác còn ăn pizza nhiều hơn cả người Ý luôn! Vì sao bạn nên lựa chọn Pizzato?
                                </p>
                                <h4>Giá: 125.000đ</h4>
                            </div>
                        </div>
                        <div className="menu__item" data-aos="fade-left">
                            <div className="menu__item__image">
                                <img src="/assets/images/menu-items/sub-pizza-2.jpg" alt="Sub-pizza-1" />
                            </div>
                            <div className="menu__item__content">
                                <h3>Pizza Margarita</h3>
                                <p>
                                    HHT - Pizza là môn ăn đặc trưng của nên ứng thực nước Ý, nhưng thực tế, nó được cả thế giới
                                    ½m chí, người dân ở nhiều nước khác còn ăn pizza nhiều hơn cả người Ý luôn! Vì sao bạn nên lựa chọn Pizzato?
                                </p>
                                <h4>Giá: 125.000đ</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ),
    tab6: (
        <div className="row tab__content">
            <div className="col-xl-4" data-aos="fade-right">
                <div className="menu__item__main">
                    <img src="/assets/images/menu-items/pizza-6.png" alt="Pizza-6" />
                </div>
            </div>
            <div className="col-xl-8" data-aos="fade-left">
                <div className="row">
                    <div className="col-6 col-xl-6">
                        <div className="menu__item" data-aos="fade-left">
                            <div className="menu__item__image">
                                <img src="/assets/images/menu-items/sub-pizza-1.jpg" alt="Sub-pizza-1" />
                            </div>
                            <div className="menu__item__content">
                                <h3>Pizza Margarita</h3>
                                <p>
                                    HHT - Pizza là môn ăn đặc trưng của nên ứng thực nước Ý, nhưng thực tế, nó được cả thế giới
                                    ½m chí, người dân ở nhiều nước khác còn ăn pizza nhiều hơn cả người Ý luôn! Vì sao bạn nên lựa chọn Pizzato?
                                </p>
                                <h4>Giá: 125.000đ</h4>
                            </div>
                        </div>
                        <div className="menu__item" data-aos="fade-left">
                            <div className="menu__item__image">
                                <img src="/assets/images/menu-items/sub-pizza-1.jpg" alt="Sub-pizza-1" />
                            </div>
                            <div className="menu__item__content">
                                <h3>Pizza Margarita</h3>
                                <p>
                                    HHT - Pizza là môn ăn đặc trưng của nên ứng thực nước Ý, nhưng thực tế, nó được cả thế giới
                                    ½m chí, người dân ở nhiều nước khác còn ăn pizza nhiều hơn cả người Ý luôn! Vì sao bạn nên lựa chọn Pizzato?
                                </p>
                                <h4>Giá: 125.000đ</h4>
                            </div>
                        </div>
                        <div className="menu__item" data-aos="fade-left">
                            <div className="menu__item__image">
                                <img src="/assets/images/menu-items/sub-pizza-1.jpg" alt="Sub-pizza-1" />
                            </div>
                            <div className="menu__item__content">
                                <h3>Pizza Margarita</h3>
                                <p>
                                    HHT - Pizza là môn ăn đặc trưng của nên ứng thực nước Ý, nhưng thực tế, nó được cả thế giới
                                    ½m chí, người dân ở nhiều nước khác còn ăn pizza nhiều hơn cả người Ý luôn! Vì sao bạn nên lựa chọn Pizzato?
                                </p>
                                <h4>Giá: 125.000đ</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-xl-6">
                        <div className="menu__item" data-aos="fade-left">
                            <div className="menu__item__image">
                                <img src="/assets/images/menu-items/sub-pizza-2.jpg" alt="Sub-pizza-1" />
                            </div>
                            <div className="menu__item__content">
                                <h3>Pizza Margarita</h3>
                                <p>
                                    HHT - Pizza là môn ăn đặc trưng của nên ứng thực nước Ý, nhưng thực tế, nó được cả thế giới
                                    ½m chí, người dân ở nhiều nước khác còn ăn pizza nhiều hơn cả người Ý luôn! Vì sao bạn nên lựa chọn Pizzato?
                                </p>
                                <h4>Giá: 125.000đ</h4>
                            </div>
                        </div>
                        <div className="menu__item" data-aos="fade-left">
                            <div className="menu__item__image">
                                <img src="/assets/images/menu-items/sub-pizza-2.jpg" alt="Sub-pizza-1" />
                            </div>
                            <div className="menu__item__content">
                                <h3>Pizza Margarita</h3>
                                <p>
                                    HHT - Pizza là môn ăn đặc trưng của nên ứng thực nước Ý, nhưng thực tế, nó được cả thế giới
                                    ½m chí, người dân ở nhiều nước khác còn ăn pizza nhiều hơn cả người Ý luôn! Vì sao bạn nên lựa chọn Pizzato?
                                </p>
                                <h4>Giá: 125.000đ</h4>
                            </div>
                        </div>
                        <div className="menu__item" data-aos="fade-left">
                            <div className="menu__item__image">
                                <img src="/assets/images/menu-items/sub-pizza-2.jpg" alt="Sub-pizza-1" />
                            </div>
                            <div className="menu__item__content">
                                <h3>Pizza Margarita</h3>
                                <p>
                                    HHT - Pizza là môn ăn đặc trưng của nên ứng thực nước Ý, nhưng thực tế, nó được cả thế giới
                                    ½m chí, người dân ở nhiều nước khác còn ăn pizza nhiều hơn cả người Ý luôn! Vì sao bạn nên lựa chọn Pizzato?
                                </p>
                                <h4>Giá: 125.000đ</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ),
};

const HomePage = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    const [activeTabKey1, setActiveTabKey1] = useState('tab1');
    const onTab1Change = (key) => {
        setActiveTabKey1(key);
    };

    return (
        <main>
            <nav className="carousel" data-aos="fade-up">
                <Carousel autoplay>
                    <div className="carousel__item">
                        <img src="/assets/images/banners/banner-1.webp" alt="Banner-1" />
                    </div>
                    <div className="carousel__item">
                        <img src="/assets/images/banners/banner-2.jpg" alt="Banner-2" />
                    </div>
                    <div className="carousel__item">
                        <img src="/assets/images/banners/banner-3.jpg" alt="Banner-3" />
                    </div>
                </Carousel>
            </nav>
            <div className="container">
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
                <div className="row categories__container">
                    <div className="col-xl-12" data-aos="fade-up">
                        <h4 className="categories__title">Danh mục</h4>
                        <h2 className="categories__description">Chọn thực đơn món ăn</h2>
                        <CarouselMulti 
                            responsive={responsive}
                            autoPlaySpeed={3000}
                            autoPlay={true}
                            infinite={true}
                            arrows={false}
                            className="categories__list"
                        >
                            <div className="categories__item">
                                <img src="/assets/images/categories/category-1.jpeg" alt="Danh mục 1" />
                                <p>Danh mục 1</p>
                            </div>
                            <div className="categories__item">
                                <img src="/assets/images/categories/category-2.jpg" alt="Danh mục 2" />
                                <p>Danh mục 2</p>
                            </div>
                            <div className="categories__item">
                                <img src="/assets/images/categories/category-3.jpg" alt="Danh mục 3" />
                                <p>Danh mục 3</p>
                            </div>
                            <div className="categories__item">
                                <img src="/assets/images/categories/category-4.jpeg" alt="Danh mục 4" />
                                <p>Danh mục 4</p>
                            </div>
                            <div className="categories__item">
                                <img src="/assets/images/categories/category-5.jpg" alt="Danh mục 5" />
                                <p>Danh mục 5</p>
                            </div>
                        </CarouselMulti>
                    </div>
                </div>
                <div className="row choose__food">
                    <div className="col-xl-6 left__choose__food__box">
                        <div className="choose__food__image" data-aos="fade-up">
                            <img src="/assets/images/pizza-choose.jpeg" alt="Choose food" />
                            <div className="choose__food__content" data-aos="fade-right">
                                <p>
                                    HHT - Pizza là món ăn đặc trưng của nền ẩm thực nước Ý,
                                    nhưng thực tế, nó được cả thế giới ưa chuộng. Thậm chí, người dân
                                    ở nhiều nước khác còn ăn pizza nhiều hơn cả người Ý luôn! Vì sao lại thế?
                                </p>
                                <h4>Nguyễn Duy Dũng</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 right__choose__food__box">
                        <h4 data-aos="fade-left">Vì sao bạn nên lựa chọn Pizzato?</h4>
                        <h2 data-aos="fade-left">Con người chúng ta bị hấp dẫn bởi những món ăn nhiều chất béo, ngọt, đậm đà và nhiều hương vị</h2>
                        <p className="outside__text" data-aos="fade-left">
                            Hiện nay, bánh Pizza đã và đang trở thành món ăn quen thuộc với nhiều gia đình tại Việt Nam, đặc biệt
                            được phần đông giới trẻ rất yêu thích. Tuy nhiên, khi bạn đói hay quá bận rộn để vào bếp thì việc đặt
                            hàng và chờ đợi sẽ tốn khá nhiều thời gian và công sức. Vậy còn gì hấp dẫn hơn một chiếc Pizza cấp đông
                            của Pizzato ???
                        </p>
                        <div className="resson__choose">
                            <div className="resson__choose__content" data-aos="fade-left">
                                <div className="resson__choose__icon">
                                    <MdFastfood />
                                </div>
                                <div className="resson__choose__text">
                                    <h2>Chất lượng cao</h2>
                                    <p>
                                        Pizza của chúng tôi được làm từ nguyên liệu tươi ngon nhất, hương vị tuyệt vời
                                        trong từng miếng. Kết hợp hoàn hảo với phô mai thơm ngon và các loại nhân đa dạng,
                                        mang đến trải nghiệm ẩm thực tuyệt vời.
                                    </p>
                                </div>
                            </div>
                            <div className="resson__choose__content" data-aos="fade-left">
                                <div className="resson__choose__icon">
                                    <PiChefHatBold />
                                </div>
                                <div className="resson__choose__text">
                                    <h2>Những đầu bếp chuyên nghiệp</h2>
                                    <p>
                                        Đầu bếp của chúng tôi là những chuyên gia ẩm thực dày dạn kinh nghiệm, tận tâm mang đến những chiếc pizza
                                        thơm ngon và độc đáo, được chế biến theo công thức truyền thống và đầy sáng tạo.
                                    </p>
                                </div>
                            </div>
                            <div className="resson__choose__content" data-aos="fade-left">
                                <div className="resson__choose__icon">
                                    <PiMoneyWavyBold />
                                </div>
                                <div className="resson__choose__text">
                                    <h2>Khuyến mãi cực khủng</h2>
                                    <p>
                                        Chúng tôi cung cấp pizza chất lượng cao với giá cả hợp lý, giúp bạn thưởng thức món ăn yêu thích mà không
                                        lo về ngân sách.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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
                            tabList={tabList}
                            activeTabKey={activeTabKey1}
                            onTabChange={onTab1Change}
                        >
                            {contentList[activeTabKey1]}
                        </Card>
                    </div>
                </div>
            </div>
            <div className="sub__banner" data-aos="fade-up" style={{ backgroundImage: "url('/assets/images/sub-banner.webp')" }}>
                <div className="overlay__sub__banner">
                    <div className="container">
                        <div className="sub__banner__flexbox" data-aos="fade-up">
                            <CarouselMulti 
                                responsive={responsive}
                                infinite={true}
                                className="sub__banner__list"
                            >
                                <div className="sub__banner__item">
                                    <div className="infomation__chef">
                                        <img src="/assets/images/our-chef.jpg" alt="Our Chef" />
                                        <div className="infomation__chef__name">
                                            <h3>Nguyễn Duy Dũng</h3>
                                            <p>Đầu bếp chính</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="sub__banner__item">
                                    <div className="infomation__chef">
                                        <img src="/assets/images/our-chef.jpg" alt="Our Chef" />
                                        <div className="infomation__chef__name">
                                            <h3>Nguyễn Duy Dũng</h3>
                                            <p>Đầu bếp chính</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="sub__banner__item">
                                    <div className="infomation__chef">
                                        <img src="/assets/images/our-chef.jpg" alt="Our Chef" />
                                        <div className="infomation__chef__name">
                                            <h3>Nguyễn Duy Dũng</h3>
                                            <p>Đầu bếp chính</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="sub__banner__item">
                                    <div className="infomation__chef">
                                        <img src="/assets/images/our-chef.jpg" alt="Our Chef" />
                                        <div className="infomation__chef__name">
                                            <h3>Nguyễn Duy Dũng</h3>
                                            <p>Đầu bếp chính</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="sub__banner__item">
                                    <div className="infomation__chef">
                                        <img src="/assets/images/our-chef.jpg" alt="Our Chef" />
                                        <div className="infomation__chef__name">
                                            <h3>Nguyễn Duy Dũng</h3>
                                            <p>Đầu bếp chính</p>
                                        </div>
                                    </div>
                                </div>
                            </CarouselMulti>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div data-aos="fade-up">
                    <Carousel arrows infinite={true}>
                        <div className="feedback__box">
                            <div className="row">
                                <div className="col-xl-6" data-aos="fade-right">
                                    <div className="feedback__content">
                                        <h2><strong>Phản hồi</strong> từ khách hàng</h2>
                                        <div className="feedback__icon">
                                            <MdOutlineFeedback />
                                        </div>
                                        <p className="feedback__description">
                                            Pizza rất ngon! Vỏ bánh giòn tan, nhân đầy đặn và phô mai béo
                                            ngậy. Mình rất ấn tượng với sự tươi ngon của các nguyên liệu.
                                            Chắc chắn sẽ quay lại đặt thêm lần sau!
                                        </p>
                                        <div className="feedback__person">
                                            <div className="feedback__person__image">
                                                <img src="/assets/images/avt.jpeg" alt="Person 1" />
                                            </div>
                                            <div className="feedback__person__info">
                                                <div className="rating">
                                                    <Rate disabled defaultValue={4} />
                                                </div>
                                                <h4>Nguyễn Duy Dũng</h4>
                                                <p>Khách hàng</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6" data-aos="fade-left">
                                    <div className="feedback__image">
                                        <img src="/assets/images/feedback.jpg" alt="Feedback" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="feedback__box">
                            <div className="row">
                                <div className="col-xl-6" data-aos="fade-right">
                                    <div className="feedback__content">
                                        <h2><strong>Phản hồi</strong> từ khách hàng</h2>
                                        <div className="feedback__icon">
                                            <MdOutlineFeedback />
                                        </div>
                                        <p className="feedback__description">
                                            Pizza rất ngon! Vỏ bánh giòn tan, nhân đầy đặn và phô mai béo
                                            ngậy. Mình rất ấn tượng với sự tươi ngon của các nguyên liệu.
                                            Chắc chắn sẽ quay lại đặt thêm lần sau!
                                        </p>
                                        <div className="feedback__person">
                                            <div className="feedback__person__image">
                                                <img src="/assets/images/avt.jpeg" alt="Person 1" />
                                            </div>
                                            <div className="feedback__person__info">
                                                <div className="rating">
                                                    <Rate disabled defaultValue={4} />
                                                </div>
                                                <h4>Nguyễn Duy Dũng</h4>
                                                <p>Khách hàng</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6" data-aos="fade-left">
                                    <div className="feedback__image">
                                        <img src="/assets/images/feedback.jpg" alt="Feedback" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="feedback__box">
                            <div className="row">
                                <div className="col-xl-6" data-aos="fade-right">
                                    <div className="feedback__content">
                                        <h2><strong>Phản hồi</strong> từ khách hàng</h2>
                                        <div className="feedback__icon">
                                            <MdOutlineFeedback />
                                        </div>
                                        <p className="feedback__description">
                                            Pizza rất ngon! Vỏ bánh giòn tan, nhân đầy đặn và phô mai béo
                                            ngậy. Mình rất ấn tượng với sự tươi ngon của các nguyên liệu.
                                            Chắc chắn sẽ quay lại đặt thêm lần sau!
                                        </p>
                                        <div className="feedback__person">
                                            <div className="feedback__person__image">
                                                <img src="/assets/images/avt.jpeg" alt="Person 1" />
                                            </div>
                                            <div className="feedback__person__info">
                                                <div className="rating">
                                                    <Rate disabled defaultValue={4} />
                                                </div>
                                                <h4>Nguyễn Duy Dũng</h4>
                                                <p>Khách hàng</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6" data-aos="fade-left">
                                    <div className="feedback__image">
                                        <img src="/assets/images/feedback.jpg" alt="Feedback" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Carousel>
                </div>
                <div className="news__box">
                    <div className="row">
                        <div className="title__new">
                            <h2 data-aos="fade-up"><strong>Tin tức</strong> nổi bật</h2>
                            <p data-aos="fade-up">
                                Theo dõi diễn biến các sự kiện đáng chú ý trên toàn cầu,
                                cập nhật liên tục <br /> để bạn luôn nắm bắt thông tin một cách nhanh chóng và chính xác
                            </p>
                        </div>
                        <div className="col-xl-4" data-aos="fade-up">
                            <div className="new__item">
                                <div className="news__image">
                                    <img src="/assets/images/news.jpg" alt="News" />
                                </div>
                                <div className="new__content">
                                    <div className="new__author">
                                        <div className="date">
                                            <MdDateRange />
                                            <p>19-05-2024</p>
                                        </div>
                                        <div className="author">
                                            <PiUser />
                                            <p>Nguyễn Duy Dũng</p>
                                        </div>
                                    </div>
                                    <div className="new__info">
                                        <Link to="">
                                            <h2>Bí quyết tự làm bánh Pizza ngon như nhà hàng</h2>
                                            <p>
                                                Pizza là một trong những món ăn nhanh phổ biến nhất trên thế giới.
                                                Trên thực tế hiện nay có thể tìm thấy món ăn này ở bất cứ quốc gia nào mà bạn đặt chân đến
                                            </p>
                                            <div className="new__button">
                                                <Link to="" className="href__button">
                                                    <button type="button">Đọc tiếp <MdOutlineTrendingFlat /></button>
                                                </Link>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4" data-aos="fade-up">
                            <div className="new__item">
                                <div className="news__image">
                                    <img src="/assets/images/news.jpg" alt="News" />
                                </div>
                                <div className="new__content">
                                    <div className="new__author">
                                        <div className="date">
                                            <MdDateRange />
                                            <p>19-05-2024</p>
                                        </div>
                                        <div className="author">
                                            <PiUser />
                                            <p>Nguyễn Duy Dũng</p>
                                        </div>
                                    </div>
                                    <div className="new__info">
                                        <Link to="">
                                            <h2>Bí quyết tự làm bánh Pizza ngon như nhà hàng</h2>
                                            <p>
                                                Pizza là một trong những món ăn nhanh phổ biến nhất trên thế giới.
                                                Trên thực tế hiện nay có thể tìm thấy món ăn này ở bất cứ quốc gia nào mà bạn đặt chân đến
                                            </p>
                                            <div className="new__button">
                                                <Link to="" className="href__button">
                                                    <button type="button">Đọc tiếp <MdOutlineTrendingFlat /></button>
                                                </Link>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4" data-aos="fade-up">
                            <div className="new__item">
                                <div className="news__image">
                                    <img src="/assets/images/news.jpg" alt="News" />
                                </div>
                                <div className="new__content">
                                    <div className="new__author">
                                        <div className="date">
                                            <MdDateRange />
                                            <p>19-05-2024</p>
                                        </div>
                                        <div className="author">
                                            <PiUser />
                                            <p>Nguyễn Duy Dũng</p>
                                        </div>
                                    </div>
                                    <div className="new__info">
                                        <Link to="">
                                            <h2>Bí quyết tự làm bánh Pizza ngon như nhà hàng</h2>
                                            <p>
                                                Pizza là một trong những món ăn nhanh phổ biến nhất trên thế giới.
                                                Trên thực tế hiện nay có thể tìm thấy món ăn này ở bất cứ quốc gia nào mà bạn đặt chân đến
                                            </p>
                                            <div className="new__button">
                                                <Link to="" className="href__button">
                                                    <button type="button">Đọc tiếp <MdOutlineTrendingFlat /></button>
                                                </Link>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default memo(HomePage);