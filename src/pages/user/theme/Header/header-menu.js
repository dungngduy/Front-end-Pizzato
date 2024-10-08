import { memo, useState } from "react";
import ReactDOM from "react-dom";
import { 
    AiOutlineSearch,
    AiOutlineUser,
    AiOutlineShoppingCart
} from 'react-icons/ai';
import { Link, useNavigate } from "react-router-dom";
import { ROUTER } from "utils/router";

const HeaderMenu = () => {
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

    // Hàm reoload trang
    const history = useNavigate();

    const handlePageChange = (url) => {
        history(url);
        window.location.reload();
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
                                            return (
                                                <li key={index} className={index === 0 ? "active" : ""}>
                                                    <Link to={menu.path} onClick={() => handlePageChange(menu.path)}>{menu.name}</Link>
                                                    {
                                                        menu.child && (
                                                            <ul className="header__menu__dropdown">
                                                                {menu.child.map((childItem, childKey) => (
                                                                    <li key={`${index}-${childKey}`}>
                                                                        <Link to={childItem.path} onClick={() => handlePageChange(childItem.path)}>{childItem.name}</Link>
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
            {isSearchVisible && ReactDOM.createPortal(
                <div>
                    <div className="overlay active" onClick={closePopup}></div>
                    <div className="search-popup active" data-aos="fade-up">
                        <div className="popup-content">
                            <input type="text" placeholder="Tìm kiếm món ăn tại đây..." />
                            <button onClick={closePopup}>Tìm kiếm</button>
                        </div>
                    </div>
                </div>,
                document.body // Render ra ngoài DOM của component hiện tại
            )}
        </div>
    );
};

export default memo(HeaderMenu);