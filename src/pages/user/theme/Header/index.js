import { memo, useState } from "react";
import 'assets/user/scss/home-page.scss';
import { 
    AiOutlineSearch,
    AiOutlineUser,
    AiOutlineShoppingCart
} from 'react-icons/ai';
import { Link } from "react-router-dom";
import { ROUTER } from "utils/router";
import HeaderTop from "./header-top";

const Header = () => {
    // Menu
    const [Menus] = useState([
        {
            name: "Trang chủ",
            path: ROUTER.USER.HOME,
        },
        {
            name: "Giới thiệu",
            path: ROUTER.USER.HOME,
        },
        {
            name: "Thực đơn",
            path: "",
            isShowSubMenu: false,
            child: [
                {
                    name: "Pasta",
                    path: "",
                },
                {
                    name: "Pizza",
                    path: "",
                },
                {
                    name: "Breakfast",
                    path: "",
                },
                {
                    name: "Desserts",
                    path: "",
                }
            ]
        },
        {
            name: "Bài viết",
            path: ROUTER.USER.HOME,
        },
        {
            name: "Liên hệ",
            path: ROUTER.USER.HOME,
        }
    ]);

    // Popup tìm kiếm món ăn
    const [isSearchVisible, setSearchVisible] = useState(false);

    const toggleSearchPopup = () => {
        setSearchVisible(!isSearchVisible);
    };

    const closePopup = () => {
        setSearchVisible(false);
    };

    return (
        <header>
            <HeaderTop />
            <div className="header__menu__wrapper" data-aos="fade-up">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3 col-lg-3">
                            <div className="header__logo">
                                <Link to={""}>
                                    <img src="/assets/images/logo-pizzato.webp" alt="Logo" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <div className="header__menu">
                                <ul>
                                    {
                                        Menus.map((menu, index) => {
                                            return (
                                                <li key={index} className={index === 0 ? "active" : ""}>
                                                    <Link to={menu.path}>{menu.name}</Link>
                                                    {
                                                        menu.child && (
                                                            <ul className="header__menu__dropdown">
                                                                {menu.child.map((childItem, childKey) => (
                                                                    <li key={`${index}-${childKey}`}>
                                                                        <Link to={childItem.path}>{childItem.name}</Link>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        )
                                                    }
                                                </li>
                                            );
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 search__container">
                            <ul>
                                <li onClick={toggleSearchPopup}><AiOutlineSearch /></li>
                                <li><AiOutlineUser /></li>
                                <li><AiOutlineShoppingCart /> <span>10</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Popup tìm kiếm */}
            {isSearchVisible && (
                <div>
                    <div className="overlay active" onClick={closePopup}></div>
                    <div className="search-popup active">
                        <div className="popup-content">
                            <input type="text" placeholder="Tìm kiếm món ăn tại đây..." />
                            <button onClick={closePopup}>Tìm kiếm</button>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};

export default memo(Header);