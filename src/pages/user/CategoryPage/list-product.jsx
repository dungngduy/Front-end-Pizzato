import React, { memo, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Rate, Segmented, Select, Slider, Pagination, Input, Checkbox, Tag } from 'antd';
import { AppstoreOutlined, BarsOutlined, ArrowRightOutlined } from '@ant-design/icons';
import { BsFillShareFill, BsSuitHeart, BsHandbag } from 'react-icons/bs';
import { formatCurrencyVND, formatImage } from 'utils/format';
import useIncrementView from 'components/increment-view';
import AxiosInstance from 'utils/apiServers';

// Destructure Search from Input
const { Search } = Input;

const ListProduct = () => {
    const [viewMode, setViewMode] = useState('Kanban');
    const [inputValue, setInputValue] = useState([0, 500000]);
    const [menus, setMenus] = useState([]);
    const [pizzaRating, setPizzaRating] = useState(null);
    const [pizzaRatingOnTop, setPizzaRatingOnTop] = useState([]);
    const [filteredMenus, setFilteredMenus] = useState([]);
    const { incrementView } = useIncrementView();
    const [currentPage, setCurrentPage] = useState(1);
    const [totalProduct, setTotalItems] = useState(0);
    const [searchTerm, setSearchTerm] = useState('');
    const pageSize = 9;

    const options = [
        {
            value: '1',
            label: 'Mới nhất',
        },
        {
            value: '2',
            label: 'Phổ biến nhất',
        },
        {
            value: '3',
            label: 'Bán chạy nhất',
        },
        {
            value: '4',
            label: 'Giá cả tăng dần',
        },
        {
            value: '5',
            label: 'Giá cả giảm dần',
        },
    ];

    useEffect(() => {
        AxiosInstance.get(`/menus?currentPage=${currentPage}&pageSize=${pageSize}`)
            .then(res => {
                setMenus(res.data.menus);
                setTotalItems(res.data.totalPizza);
                setFilteredMenus(res.data.menus);
            })
            .catch(err => console.error(err));
    }, [currentPage]);

    useEffect(() => {
        const filtered = menus.filter(menu =>
            menu.offer_price >= inputValue[0] && menu.offer_price <= inputValue[1]
        );
        setFilteredMenus(filtered);
    }, [inputValue, menus]);

    useEffect(() => {
        if (searchTerm) {
            const filteredBySearch = menus.filter(menu =>
                menu.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredMenus(filteredBySearch);
        } else {
            setFilteredMenus(menus); // Reset the filter when searchTerm is cleared
        }
    }, [searchTerm, menus]);

    const handlePageChange = (page) => setCurrentPage(page);
    const onChangePrice = (newValue) => setInputValue(newValue);
    const onSearch = (value) => {
        setSearchTerm(value); // Set searchTerm here
        setCurrentPage(1);  // Reset to first page when searching
    };

    useEffect(() => {
        AxiosInstance.get(`/pizza-rating`)
            .then(res => {
                setPizzaRating(res.data.productRating);
            })
            .catch(err => console.error(err));
    }, []);

    useEffect(() => {
        AxiosInstance.get(`/pizza-rating-on-top`)
            .then(res => {
                setPizzaRatingOnTop(res.data.productRating);
            })
            .catch(err => console.error(err));
    }, []);

    const handleProductClick = (productId) => {
        incrementView(productId);
    };

    return (
        <div className="container">
            <div className="row category__container">
                <div className="col-xl-9">
                    <div className="row">
                        <div className="col-xl-6 sort__by">
                            <p>Sắp xếp theo:</p>
                            <Select
                                defaultValue="1"
                                style={{ width: 200 }}
                                options={options}
                            />
                        </div>
                        <div className="col-xl-6 segmented__category">
                            <p>Hiển thị theo:</p>
                            <Segmented
                                className="segmented__category"
                                defaultValue="Kanban"
                                options={[{ value: 'Kanban', icon: <AppstoreOutlined /> }, { value: 'List', icon: <BarsOutlined /> }]}
                                onChange={setViewMode}
                            />
                        </div>
                    </div>
                    <div className={`list__product ${viewMode === 'List' ? 'list-view' : 'kanban-view'}`}>
                        <div className={`${viewMode === 'Kanban' ? 'row-grid-4' : 'row'}`}>
                            {filteredMenus.map((menu, index) => (
                                <div key={index} className={`${viewMode === 'Kanban' ? 'g-xl-4' : 'col-xl-12'}`}>
                                    <div className="product__item">
                                        <div className="product__item__image">
                                            <Link onClick={() => handleProductClick(menu.id)} to={`/detail/${menu.id}`}>
                                                <img src={formatImage(menu.thumb_image)} alt={menu.thumb_image} />
                                                {viewMode === 'Kanban' && (
                                                    <div className="product__item__icons">
                                                        <BsFillShareFill />
                                                        <BsHandbag />
                                                        <BsSuitHeart />
                                                    </div>
                                                )}
                                            </Link>
                                        </div>
                                        <Link onClick={() => handleProductClick(menu.id)} to={`/detail/${menu.id}`}>
                                            <div className="product__item__info">
                                                {viewMode === 'List' && (
                                                    <div className={`${viewMode === 'List'}`}>
                                                        <p className="product__item__category-name">
                                                            <span>{menu.category_name}</span>
                                                        </p>
                                                    </div>
                                                )}
                                                <div className="product__item__name">
                                                    <h2>{menu.name}</h2>
                                                    <p className="product__item__description">
                                                        {menu.short_description}
                                                    </p>
                                                </div>
                                                <div className="product__item__rating-and-price">
                                                    <div className="product__item__price">
                                                        <p>
                                                            <del>{formatCurrencyVND(menu.price)}</del><br />
                                                            <span>{formatCurrencyVND(menu.offer_price)}</span>
                                                        </p>
                                                    </div>
                                                    <div className="product__item__rating">
                                                        <Rate allowHalf disabled defaultValue={4.5} />
                                                        {viewMode === 'List' && (
                                                            <span className="rating__count">(10 đánh giá)</span>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="pagination">
                            <Pagination
                                current={currentPage}
                                pageSize={pageSize}
                                total={totalProduct}
                                onChange={handlePageChange}
                            />
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 category__sidebar">
                    <div className="category__sidebar__search">
                        <Search
                            placeholder="Tìm kiếm món ăn"
                            onSearch={onSearch}
                            enterButton
                        />
                    </div>
                    <div className="category__sidebar__list">
                        <h2>Danh mục</h2>
                        <div className="category__sidebar__list__item">
                            <div className="list__checked">
                                <Checkbox><span className="list__checked__name">Pizza 1</span></Checkbox>
                            </div>
                            <div className="list__checked">
                                <Checkbox><span className="list__checked__name">Pizza 2</span></Checkbox>
                            </div>
                            <div className="list__checked">
                                <Checkbox><span className="list__checked__name">Pizza 3</span></Checkbox>
                            </div>
                            <div className="list__checked">
                                <Checkbox><span className="list__checked__name">Pizza 4</span></Checkbox>
                            </div>
                            <div className="list__checked">
                                <Checkbox><span className="list__checked__name">Pizza 5</span></Checkbox>
                            </div>
                            <div className="list__checked">
                                <Checkbox><span className="list__checked__name">Pizza 6</span></Checkbox>
                            </div>
                        </div>
                    </div>
                    <div className="category__sidebar__hot-product" style={{ backgroundImage: pizzaRating?.thumb_image ? `url(${pizzaRating.thumb_image})` : '' }}>
                        <div className="overlay__hot-product">
                            {pizzaRating ? (
                                <div className="content__hot-product" key={pizzaRating.id}>
                                    <div className="content__hot-product__title">
                                        <h2>{pizzaRating.name}</h2>
                                        <p>{formatCurrencyVND(pizzaRating.offer_price)}</p>
                                    </div>
                                    <div className="content__hot-product__link">
                                        <Link to={`/product/${pizzaRating.id}`}>
                                            Xem chi tiết <ArrowRightOutlined />
                                        </Link>
                                    </div>
                                </div>
                            ) : (
                                <p>Đang tải dữ liệu...</p>
                            )}
                        </div>
                    </div>
                    <div className="category__sidebar__filter-price">
                        <h2>Lọc theo giá</h2>
                        <form action="#" method="post">
                            <Slider
                                range
                                min={0}
                                max={5000000}
                                value={inputValue}
                                onChange={onChangePrice}
                            />
                            <p>Giá: <strong>{formatCurrencyVND(inputValue[0])} - {formatCurrencyVND(inputValue[1])}</strong></p>
                        </form>
                    </div>
                    <div className="category__sidebar__lastest-product">
                        <h2>Đánh giá cao nhất</h2>
                        {pizzaRatingOnTop.map((pizza, index) => (
                            <div key={index} className="category__sidebar__lastest-product__item">
                                <Link to={""}>
                                    <div className="lastest-product__item__image">
                                        <img src={formatImage(pizza.thumb_image)} alt={pizza.name} />
                                    </div>
                                    <div className="lastest-product__item__info">
                                        <h4 className="lastest-product__item__name">{pizza.name}</h4>
                                        <Rate allowHalf disabled defaultValue={pizza.avg_rating} />
                                        <p className="lastest-product__item__price">{formatCurrencyVND(pizza.offer_price)}</p>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                    <div className="category__sidebar__product-tags">
                        <h2>Tags</h2>
                        <div className="category__sidebar__product-tags__list">
                            <Tag color="#BC9A6C">Pizza</Tag>
                            <Tag color="#BC9A6C">Pizza ngon</Tag>
                            <Tag color="#BC9A6C">Hải sản</Tag>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default memo(ListProduct);
