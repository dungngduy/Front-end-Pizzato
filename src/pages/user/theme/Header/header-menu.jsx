import Login from "pages/user/LoginPage/login/login";
import { memo, useState, useEffect, useContext } from "react";
import ReactDOM from "react-dom";
import {
    AiOutlineSearch,
    AiOutlineUser,
    AiOutlineShoppingCart,
    AiOutlineClose
} from 'react-icons/ai';
import { Link, useLocation } from "react-router-dom";
import AxiosInstance from "utils/apiServers";
import { formatCurrencyVND, formatImage } from "utils/format";
import { ROUTER } from "utils/router";
import { CartContext } from "components/add-to-cart";

const HeaderMenu = () => {
    const location = useLocation();
    const [isSearchVisible, setSearchVisible] = useState(false);
    const [isLoginVisible, setLoginVisible] = useState(false);
    const [isCartVisible, setCartVisible] = useState(false);
    const [user, setUser] = useState(null);
    const { cart } = useContext(CartContext);

    // Menu
    const [Menus, setMenus] = useState([
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
            child: []
        },
        {
            name: "Bài viết",
            path: ROUTER.USER.BLOG,
        },
        {
            name: "Chính sách",
            path: ROUTER.USER.POLICY,
        }
    ]);

    useEffect(() => {
        AxiosInstance.get('/categories')
            .then((res) => {
                setMenus(preMenu => {
                    const newMenus = [...preMenu];

                    newMenus[2] = {
                        ...newMenus[2],
                        child: res.data.categories.map(category => ({
                            name: category.name,
                            path: `${ROUTER.USER.CATEGORY}/${category.id}`
                        }))
                    };

                    return newMenus;
                });
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    useEffect(() => {
        // Kiểm tra localStorage
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser)); // Parse dữ liệu nếu cần
        }
    }, []);

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

    const toggleCartPopup = () => {
        setCartVisible(!isCartVisible);
    };

    const closeCartPopup = () => {
        setCartVisible(false);
    };

    const totalPrice = cart.reduce(
        (total, item) => total + item.price * item.quantity, 0
    );

    return (
        <div>
            <div className="header__menu__wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3 col-lg-3">
                            <div className="header__logo w-[190px] h-[120px]">
                                <Link to={""}>
                                    <img className="w-full h-full" src="/assets/images/logo-pizzato.png" alt="Logo" />
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
                                <li onClick={toggleSearchPopup}><AiOutlineSearch className="icon__search__container" /></li>
                                {user ? (
                                    <li>
                                        <Link to="/profile/info">
                                            <img
                                                src={user.image ? user.image : "https://t4.ftcdn.net/jpg/03/49/49/79/360_F_349497933_Ly4im8BDmHLaLzgyKg2f2yZOvJjBtlw5.jpg"}
                                                alt="User Avatar"
                                                className="w-[30px] h-[30px] rounded-full"
                                            />
                                        </Link>
                                    </li>
                                ) : (
                                    <li onClick={toggleLoginPopup}>
                                        <AiOutlineUser className="icon__search__container" />
                                    </li>
                                )}
                                <li onClick={toggleCartPopup}>
                                    <AiOutlineShoppingCart className="icon__search__container" />
                                    <span className="cart__count">{cart.length}</span>

                                    {isCartVisible && (
                                        <ul className="popup__cart" data-aos="fade-up">
                                            <div className="flex justify-between items-center">
                                                <h2 className="font-bold text-[20px]">Giỏ hàng của tôi</h2>
                                                <span onClick={closeCartPopup}><AiOutlineClose /></span>
                                            </div>
                                            <div className="popup__cart__content">
                                                {
                                                    cart.length > 0 ? (
                                                        cart.map((item, index) => {
                                                            return (
                                                                <li key={index} className="popup__cart__item">
                                                                    <Link to="">
                                                                        <img src={formatImage(item.image)} alt={item.name} />
                                                                        <div className="popup__cart__item__details">
                                                                            <p className="font-bold hover:text-[#BC9A6C] transition duration-300 text-[16px]">
                                                                                {item.name}
                                                                            </p>
                                                                            <span className="text-[12px]">
                                                                                Giá: <strong className="text-[#ff0000]">{formatCurrencyVND(item.price)}</strong> | {item.quantity}
                                                                            </span>
                                                                        </div>
                                                                    </Link>
                                                                </li>
                                                            );
                                                        })
                                                    ) : (
                                                        <img
                                                            className="w-[180px] h-[150px] mx-auto"
                                                            src="/assets/images/empty-cart.webp"
                                                            alt=""
                                                        />
                                                    )
                                                }
                                            </div>

                                            <div className="flex justify-between items-center mt-2">
                                                <h3 className="font-bold">Tổng tiền:</h3>
                                                <span className="text-[#ff0000] font-bold">{formatCurrencyVND(totalPrice)}</span>
                                            </div>
                                            <div className="w-full flex flex-col mt-4">
                                                <Link to="/cart" className="popup__cart__btn">Xem chi tiết</Link>
                                                <Link to="/checkout" className="popup__checkout__btn">Thanh toán</Link>
                                            </div>
                                        </ul>
                                    )}
                                </li>
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