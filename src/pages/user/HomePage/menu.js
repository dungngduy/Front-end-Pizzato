import { memo, useState } from "react";
import { Card } from "antd";
import { Link } from "react-router-dom";

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
            <div className="col-xl-4" data-aos="zoom-in">
                <div className="menu__item__main">
                    <img src="/assets/images/menu-items/pizza-1.png" alt="Pizza-1" />
                </div>
            </div>
            <div className="col-xl-8">
                <div className="row">
                    <div className="col-6 col-xl-6">
                        <div className="menu__item" data-aos="fade-left">
                            <Link to={''}>
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
                            </Link>
                        </div>
                        <div className="menu__item" data-aos="fade-left">
                            <Link to={''}>
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
                            </Link>
                        </div>
                        <div className="menu__item" data-aos="fade-left">
                            <Link to={''}>
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
                            </Link>
                        </div>
                    </div>
                    <div className="col-6 col-xl-6">
                        <div className="menu__item" data-aos="fade-left">
                            <Link to={''}>
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
                            </Link>
                        </div>
                        <div className="menu__item" data-aos="fade-left">
                            <Link to={''}>
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
                            </Link>
                        </div>
                        <div className="menu__item" data-aos="fade-left">
                            <Link to={''}>
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
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ),
    tab2: (
        <div className="row tab__content">
            <div className="col-xl-4" data-aos="zoom-in">
                <div className="menu__item__main">
                    <img src="/assets/images/menu-items/pizza-2.png" alt="Pizza-2" />
                </div>
            </div>
            <div className="col-xl-8">
                <div className="row">
                    <div className="col-6 col-xl-6">
                        <div className="menu__item" data-aos="fade-left">
                            <Link to={''}>
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
                            </Link>
                        </div>
                        <div className="menu__item" data-aos="fade-left">
                            <Link to={''}>
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
                            </Link>
                        </div>
                        <div className="menu__item" data-aos="fade-left">
                            <Link to={''}>
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
                            </Link>
                        </div>
                    </div>
                    <div className="col-6 col-xl-6">
                        <div className="menu__item" data-aos="fade-left">
                            <Link to={''}>
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
                            </Link>
                        </div>
                        <div className="menu__item" data-aos="fade-left">
                            <Link to={''}>
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
                            </Link>
                        </div>
                        <div className="menu__item" data-aos="fade-left">
                            <Link to={''}>
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
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ),
    tab3: (
        <div className="row tab__content">
            <div className="col-xl-4" data-aos="zoom-in">
                <div className="menu__item__main">
                    <img src="/assets/images/menu-items/pizza-3.png" alt="Pizza-3" />
                </div>
            </div>
            <div className="col-xl-8">
                <div className="row">
                    <div className="col-6 col-xl-6">
                        <div className="menu__item" data-aos="fade-left">
                            <Link to={''}>
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
                            </Link>
                        </div>
                        <div className="menu__item" data-aos="fade-left">
                            <Link to={''}>
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
                            </Link>
                        </div>
                        <div className="menu__item" data-aos="fade-left">
                            <Link to={''}>
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
                            </Link>
                        </div>
                    </div>
                    <div className="col-6 col-xl-6">
                        <div className="menu__item" data-aos="fade-left">
                            <Link to={''}>
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
                            </Link>
                        </div>
                        <div className="menu__item" data-aos="fade-left">
                            <Link to={''}>
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
                            </Link>
                        </div>
                        <div className="menu__item" data-aos="fade-left">
                            <Link to={''}>
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
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ),
    tab4: (
        <div className="row tab__content">
            <div className="col-xl-4" data-aos="zoom-in">
                <div className="menu__item__main">
                    <img src="/assets/images/menu-items/pizza-4.png" alt="Pizza-4" />
                </div>
            </div>
            <div className="col-xl-8">
                <div className="row">
                    <div className="col-6 col-xl-6">
                        <div className="menu__item" data-aos="fade-left">
                            <Link to={''}>
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
                            </Link>
                        </div>
                        <div className="menu__item" data-aos="fade-left">
                            <Link to={''}>
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
                            </Link>
                        </div>
                        <div className="menu__item" data-aos="fade-left">
                            <Link to={''}>
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
                            </Link>
                        </div>
                    </div>
                    <div className="col-6 col-xl-6">
                        <div className="menu__item" data-aos="fade-left">
                            <Link to={''}>
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
                            </Link>
                        </div>
                        <div className="menu__item" data-aos="fade-left">
                            <Link to={''}>
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
                            </Link>
                        </div>
                        <div className="menu__item" data-aos="fade-left">
                            <Link to={''}>
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
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ),
    tab5: (
        <div className="row tab__content">
            <div className="col-xl-4" data-aos="zoom-in">
                <div className="menu__item__main">
                    <img src="/assets/images/menu-items/pizza-5.png" alt="Pizza-5" />
                </div>
            </div>
            <div className="col-xl-8">
                <div className="row">
                    <div className="col-6 col-xl-6">
                        <div className="menu__item" data-aos="fade-left">
                            <Link to={''}>
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
                            </Link>
                        </div>
                        <div className="menu__item" data-aos="fade-left">
                            <Link to={''}>
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
                            </Link>
                        </div>
                        <div className="menu__item" data-aos="fade-left">
                            <Link to={''}>
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
                            </Link>
                        </div>
                    </div>
                    <div className="col-6 col-xl-6">
                        <div className="menu__item" data-aos="fade-left">
                            <Link to={''}>
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
                            </Link>
                        </div>
                        <div className="menu__item" data-aos="fade-left">
                            <Link to={''}>
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
                            </Link>
                        </div>
                        <div className="menu__item" data-aos="fade-left">
                            <Link to={''}>
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
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ),
    tab6: (
        <div className="row tab__content">
            <div className="col-xl-4" data-aos="zoom-in">
                <div className="menu__item__main">
                    <img src="/assets/images/menu-items/pizza-6.png" alt="Pizza-6" />
                </div>
            </div>
            <div className="col-xl-8">
                <div className="row">
                    <div className="col-6 col-xl-6">
                        <div className="menu__item" data-aos="fade-left">
                            <Link to={''}>
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
                            </Link>
                        </div>
                        <div className="menu__item" data-aos="fade-left">
                            <Link to={''}>
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
                            </Link>
                        </div>
                        <div className="menu__item" data-aos="fade-left">
                            <Link to={''}>
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
                            </Link>
                        </div>
                    </div>
                    <div className="col-6 col-xl-6">
                        <div className="menu__item" data-aos="fade-left">
                            <Link to={''}>
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
                            </Link>
                        </div>
                        <div className="menu__item" data-aos="fade-left">
                            <Link to={''}>
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
                            </Link>
                        </div>
                        <div className="menu__item" data-aos="fade-left">
                            <Link to={''}>
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
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ),
};

const Menu = () => {
    const [activeTabKey1, setActiveTabKey1] = useState('tab1');
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
                    tabList={tabList}
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