import Login from "pages/user/LoginPage/login/login";
import { memo, useState } from "react";
import ReactDOM from "react-dom";
import { 
    AiOutlineSearch,
    AiOutlineUser,
    AiOutlineShoppingCart
} from 'react-icons/ai';
import { Link, useLocation } from "react-router-dom";
import { ROUTER } from "utils/router";

const HeaderMenu = () => {
    const location = useLocation();

    // Menu
    const [Menus] = useState([
        {
            name: "Trang chủ",
            path: ROUTER.USER.HOME,
        },
        {
            name: "Giới thiệu",
            path: ROUTER.USER.ABOUT,
        },
        {
            name: "Thực đơn",
            path: ROUTER.USER.CATEGORY,
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
            path: ROUTER.USER.BLOG,
        },
        {
            name: "Liên hệ",
            path: ROUTER.USER.CONTACT,
        }
    ]);

    const [isSearchVisible, setSearchVisible] = useState(false);
    const [isLoginVisible, setLoginVisible] = useState(false);

    // Toggle popup tìm kiếm món ăn
    const toggleSearchPopup = () => {
        setSearchVisible(!isSearchVisible);
    };

    const closeSearchPopup = () => {
        setSearchVisible(false);
    };

    const toggleLoginPopup = () => {
        setLoginVisible(!isLoginVisible);
    };

    const closeLoginPopup = () => {
        setLoginVisible(false);
    };

    return (
        <div>
            <div className="header__menu__wrapper">
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
                                            const isActive = location.pathname === menu.path;

                                            return (
                                                <li key={index} className={isActive ? "active" : ""}>
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
                                <li onClick={toggleLoginPopup}><AiOutlineUser /></li>
                                <li><AiOutlineShoppingCart /> <span>10</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Popup tìm kiếm */}
            {isSearchVisible && ReactDOM.createPortal(
                <div>
                    <div className="overlay active" onClick={closeSearchPopup}></div>
                    <div className="search-popup active" data-aos="fade-down">
                        <form action="#">
                            <div className="popup-content">
                                <input type="text" placeholder="Tìm kiếm món ăn tại đây..." />
                                <button type="submit">Tìm kiếm</button>
                            </div>
                        </form>
                    </div>
                </div>,
                document.body
            )}

            {/* Popup đăng nhập */}
            {isLoginVisible && ReactDOM.createPortal(
                <div>
                    <div className="overlay active" onClick={closeLoginPopup}></div>
                    <Login />
                </div>,
                document.body
            )}
        </div>
    );
};

export default memo(HeaderMenu);