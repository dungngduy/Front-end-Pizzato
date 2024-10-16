import { memo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Rate, Segmented, Select, Input, Checkbox, Slider, Tag, Pagination } from 'antd';
import { AppstoreOutlined, BarsOutlined, ArrowRightOutlined } from '@ant-design/icons';
import { BsFillShareFill, BsSuitHeart, BsHandbag } from "react-icons/bs";

const { Search } = Input;
const onSearch = (value, _e, info) => console.log(info?.source, value);

const ListProduct = () => {
    const [viewMode, setViewMode] = useState('Kanban');

    const options=[
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

    const [inputValue, setInputValue] = useState([20, 50]);
    const onChange = (newValue) => {
        setInputValue(newValue);
    };

    return (
        <div className="container">
            <div className="row category__container">
                <div className="col-xl-9">
                    <div className="row">
                        <div className="col-xl-6 sort__by">
                            <div className="sort__by__title">
                                <p>Sắp xếp theo:</p>
                            </div>
                            <div className="sort__by__box">
                                <Select
                                    defaultValue="1"
                                    style={{
                                        width: 200,
                                    }}
                                    options={options}
                                />
                            </div>
                        </div>
                        <div className="col-xl-6 segmented__category">
                            <div className="title__segmented">
                                <p>Hiển thị theo:</p>
                            </div>
                            <div className="segmented__box">
                                <Segmented
                                    className="segmented__category"
                                    defaultValue="Kanban"
                                    options={[
                                        {
                                            value: 'Kanban',
                                            icon: <AppstoreOutlined />,
                                        },
                                        {
                                            value: 'List',
                                            icon: <BarsOutlined />,
                                        },                                      
                                    ]}
                                    onChange={setViewMode}
                                />
                            </div>
                        </div>
                    </div>
                    <div className={`list__product ${viewMode === 'List' ? 'list-view' : 'kanban-view'}`}>
                        <div className={`${viewMode === 'Kanban' ? 'row-grid-4' : 'row'}`}>
                            <div className={`${viewMode === 'Kanban' ? 'g-xl-4' : 'col-xl-12'}`}>
                                <div className="product__item">
                                    <div className="product__item__image">
                                        <img src="/assets/images/products/product-1.jpg" alt="Product-1" />
                                        {viewMode === 'Kanban' && (
                                            <div className="product__item__icons">
                                            <BsFillShareFill />
                                            <BsHandbag />
                                            <BsSuitHeart />
                                            </div>
                                        )}
                                    </div>
                                    <Link to={""}>
                                        <div className="product__item__info">
                                            {viewMode === 'List' && (
                                                <div className={`${viewMode === 'List'}`}>
                                                    <p className="product__item__category-name">
                                                        <span>Danh mục 1</span>
                                                    </p>
                                                </div>
                                            )}
                                            <div className="product__item__name">
                                                <h2>Pizza Beef BBQ nhafbcd jkbadfjkabw jbwfjaibe</h2>
                                                <p className="product__item__description">
                                                    Bò xay hầm sốt BBQ, Ngô ngọt Mỹ, Phomai Mozzarella
                                                    Bò xay hầm sốt BBQ, Ngô ngọt Mỹ, Phomai Mozzarella
                                                    Bò xay hầm sốt BBQ, Ngô ngọt Mỹ, Phomai Mozzarella
                                                    Bò xay hầm sốt BBQ, Ngô ngọt Mỹ, Phomai Mozzarella
                                                </p>
                                            </div>
                                            <div className="product__item__rating-and-price">
                                                <div className="product__item__price">
                                                    <p>
                                                        <del>400.000đ - 500.000đ</del><br />
                                                        <span>150.000đ - 200.000đ</span>
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
                            <div className={`${viewMode === 'Kanban' ? 'g-xl-4' : 'col-xl-12'}`}>
                                <div className="product__item">
                                    <div className="product__item__image">
                                        <img src="/assets/images/products/product-1.jpg" alt="Product-1" />
                                        {viewMode === 'Kanban' && (
                                            <div className="product__item__icons">
                                            <BsFillShareFill />
                                            <BsHandbag />
                                            <BsSuitHeart />
                                            </div>
                                        )}
                                    </div>
                                    <Link to={""}>
                                        <div className="product__item__info">
                                            {viewMode === 'List' && (
                                                <div className={`${viewMode === 'List'}`}>
                                                    <p className="product__item__category-name">
                                                        <span>Danh mục 1</span>
                                                    </p>
                                                </div>
                                            )}
                                            <div className="product__item__name">
                                                <h2>Pizza Beef BBQ nhafbcd jkbadfjkabw jbwfjaibe</h2>
                                                <p className="product__item__description">
                                                    Bò xay hầm sốt BBQ, Ngô ngọt Mỹ, Phomai Mozzarella
                                                    Bò xay hầm sốt BBQ, Ngô ngọt Mỹ, Phomai Mozzarella
                                                    Bò xay hầm sốt BBQ, Ngô ngọt Mỹ, Phomai Mozzarella
                                                    Bò xay hầm sốt BBQ, Ngô ngọt Mỹ, Phomai Mozzarella
                                                </p>
                                            </div>
                                            <div className="product__item__rating-and-price">
                                                <div className="product__item__price">
                                                    <p>
                                                        <del>400.000đ - 500.000đ</del><br />
                                                        <span>150.000đ - 200.000đ</span>
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
                            <div className={`${viewMode === 'Kanban' ? 'g-xl-4' : 'col-xl-12'}`}>
                                <div className="product__item">
                                    <div className="product__item__image">
                                        <img src="/assets/images/products/product-1.jpg" alt="Product-1" />
                                        {viewMode === 'Kanban' && (
                                            <div className="product__item__icons">
                                            <BsFillShareFill />
                                            <BsHandbag />
                                            <BsSuitHeart />
                                            </div>
                                        )}
                                    </div>
                                    <Link to={""}>
                                        <div className="product__item__info">
                                            {viewMode === 'List' && (
                                                <div className={`${viewMode === 'List'}`}>
                                                    <p className="product__item__category-name">
                                                        <span>Danh mục 1</span>
                                                    </p>
                                                </div>
                                            )}
                                            <div className="product__item__name">
                                                <h2>Pizza Beef BBQ nhafbcd jkbadfjkabw jbwfjaibe</h2>
                                                <p className="product__item__description">
                                                    Bò xay hầm sốt BBQ, Ngô ngọt Mỹ, Phomai Mozzarella
                                                    Bò xay hầm sốt BBQ, Ngô ngọt Mỹ, Phomai Mozzarella
                                                    Bò xay hầm sốt BBQ, Ngô ngọt Mỹ, Phomai Mozzarella
                                                    Bò xay hầm sốt BBQ, Ngô ngọt Mỹ, Phomai Mozzarella
                                                </p>
                                            </div>
                                            <div className="product__item__rating-and-price">
                                                <div className="product__item__price">
                                                    <p>
                                                        <del>400.000đ - 500.000đ</del><br />
                                                        <span>150.000đ - 200.000đ</span>
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
                            <div className={`${viewMode === 'Kanban' ? 'g-xl-4' : 'col-xl-12'}`}>
                                <div className="product__item">
                                    <div className="product__item__image">
                                        <img src="/assets/images/products/product-1.jpg" alt="Product-1" />
                                        {viewMode === 'Kanban' && (
                                            <div className="product__item__icons">
                                            <BsFillShareFill />
                                            <BsHandbag />
                                            <BsSuitHeart />
                                            </div>
                                        )}
                                    </div>
                                    <Link to={""}>
                                        <div className="product__item__info">
                                            {viewMode === 'List' && (
                                                <div className={`${viewMode === 'List'}`}>
                                                    <p className="product__item__category-name">
                                                        <span>Danh mục 1</span>
                                                    </p>
                                                </div>
                                            )}
                                            <div className="product__item__name">
                                                <h2>Pizza Beef BBQ nhafbcd jkbadfjkabw jbwfjaibe</h2>
                                                <p className="product__item__description">
                                                    Bò xay hầm sốt BBQ, Ngô ngọt Mỹ, Phomai Mozzarella
                                                    Bò xay hầm sốt BBQ, Ngô ngọt Mỹ, Phomai Mozzarella
                                                    Bò xay hầm sốt BBQ, Ngô ngọt Mỹ, Phomai Mozzarella
                                                    Bò xay hầm sốt BBQ, Ngô ngọt Mỹ, Phomai Mozzarella
                                                </p>
                                            </div>
                                            <div className="product__item__rating-and-price">
                                                <div className="product__item__price">
                                                    <p>
                                                        <del>400.000đ - 500.000đ</del><br />
                                                        <span>150.000đ - 200.000đ</span>
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
                            <div className={`${viewMode === 'Kanban' ? 'g-xl-4' : 'col-xl-12'}`}>
                                <div className="product__item">
                                    <div className="product__item__image">
                                        <img src="/assets/images/products/product-1.jpg" alt="Product-1" />
                                        {viewMode === 'Kanban' && (
                                            <div className="product__item__icons">
                                            <BsFillShareFill />
                                            <BsHandbag />
                                            <BsSuitHeart />
                                            </div>
                                        )}
                                    </div>
                                    <Link to={""}>
                                        <div className="product__item__info">
                                            {viewMode === 'List' && (
                                                <div className={`${viewMode === 'List'}`}>
                                                    <p className="product__item__category-name">
                                                        <span>Danh mục 1</span>
                                                    </p>
                                                </div>
                                            )}
                                            <div className="product__item__name">
                                                <h2>Pizza Beef BBQ nhafbcd jkbadfjkabw jbwfjaibe</h2>
                                                <p className="product__item__description">
                                                    Bò xay hầm sốt BBQ, Ngô ngọt Mỹ, Phomai Mozzarella
                                                    Bò xay hầm sốt BBQ, Ngô ngọt Mỹ, Phomai Mozzarella
                                                    Bò xay hầm sốt BBQ, Ngô ngọt Mỹ, Phomai Mozzarella
                                                    Bò xay hầm sốt BBQ, Ngô ngọt Mỹ, Phomai Mozzarella
                                                </p>
                                            </div>
                                            <div className="product__item__rating-and-price">
                                                <div className="product__item__price">
                                                    <p>
                                                        <del>400.000đ - 500.000đ</del><br />
                                                        <span>150.000đ - 200.000đ</span>
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
                            <div className={`${viewMode === 'Kanban' ? 'g-xl-4' : 'col-xl-12'}`}>
                                <div className="product__item">
                                    <div className="product__item__image">
                                        <img src="/assets/images/products/product-1.jpg" alt="Product-1" />
                                        {viewMode === 'Kanban' && (
                                            <div className="product__item__icons">
                                            <BsFillShareFill />
                                            <BsHandbag />
                                            <BsSuitHeart />
                                            </div>
                                        )}
                                    </div>
                                    <Link to={""}>
                                        <div className="product__item__info">
                                            {viewMode === 'List' && (
                                                <div className={`${viewMode === 'List'}`}>
                                                    <p className="product__item__category-name">
                                                        <span>Danh mục 1</span>
                                                    </p>
                                                </div>
                                            )}
                                            <div className="product__item__name">
                                                <h2>Pizza Beef BBQ nhafbcd jkbadfjkabw jbwfjaibe</h2>
                                                <p className="product__item__description">
                                                    Bò xay hầm sốt BBQ, Ngô ngọt Mỹ, Phomai Mozzarella
                                                    Bò xay hầm sốt BBQ, Ngô ngọt Mỹ, Phomai Mozzarella
                                                    Bò xay hầm sốt BBQ, Ngô ngọt Mỹ, Phomai Mozzarella
                                                    Bò xay hầm sốt BBQ, Ngô ngọt Mỹ, Phomai Mozzarella
                                                </p>
                                            </div>
                                            <div className="product__item__rating-and-price">
                                                <div className="product__item__price">
                                                    <p>
                                                        <del>400.000đ - 500.000đ</del><br />
                                                        <span>150.000đ - 200.000đ</span>
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
                        </div>
                        <div className="pagination">
                            <Pagination defaultCurrent={1} total={50} />
                        </div>
                    </div>
                </div>
                <div className="col-xl-3">
                    <div className="category__sidebar">
                        <div className="category__sidebar__search">
                            <Search placeholder="Tìm kiếm món ăn" onSearch={onSearch} enterButton />
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
                        <div className="category__sidebar__hot-product" style={{ backgroundImage: `url("/assets/images/products/product-1.jpg")` }}>
                            <div className="overlay__hot-product">
                                <div className="content__hot-product">
                                    <div className="content__hot-product__title">
                                        <h2>Pizza Mozzarella siêu ngon</h2>
                                        <p>120.000đ - 150.000đ</p>
                                    </div>
                                    <div className="content__hot-product__link">
                                        <Link to={""}>Xem chi tiết <ArrowRightOutlined /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="category__sidebar__filter-price">
                            <h2>Lọc theo giá</h2>
                            <form action="#" method="post">
                                <Slider
                                    range
                                    defaultValue={[20, 50]}
                                    value={inputValue}
                                    onChange={onChange}
                                />
                                <p>Giá: <strong>{inputValue[0]}.000đ - {inputValue[1]}.000đ</strong></p>
                                <button type="submit">Lọc</button>
                            </form>
                        </div>
                        <div className="category__sidebar__lastest-product">
                            <h2>Đánh giá cao nhất</h2>
                            <div className="category__sidebar__lastest-product__item">
                                <Link to={""}>
                                    <div className="lastest-product__item__image">
                                        <img src="/assets/images/products/product-1.jpg" alt="Product 1" />
                                    </div>
                                    <div className="lastest-product__item__info">
                                        <h4 className="lastest-product__item__name">Pizza Mozzarella</h4>
                                        <Rate allowHalf disabled defaultValue={4.5} />
                                        <p className="lastest-product__item__price">120.000đ - 150.000đ</p>
                                    </div>
                                </Link>
                            </div>
                            <div className="category__sidebar__lastest-product__item">
                                <Link to={""}>
                                    <div className="lastest-product__item__image">
                                        <img src="/assets/images/products/product-1.jpg" alt="Product 1" />
                                    </div>
                                    <div className="lastest-product__item__info">
                                        <h4 className="lastest-product__item__name">Pizza Mozzarella</h4>
                                        <Rate allowHalf disabled defaultValue={4.5} />
                                        <p className="lastest-product__item__price">120.000đ - 150.000đ</p>
                                    </div>
                                </Link>
                            </div>
                            <div className="category__sidebar__lastest-product__item">
                                <Link to={""}>
                                    <div className="lastest-product__item__image">
                                        <img src="/assets/images/products/product-1.jpg" alt="Product 1" />
                                    </div>
                                    <div className="lastest-product__item__info">
                                        <h4 className="lastest-product__item__name">Pizza Mozzarella</h4>
                                        <Rate allowHalf disabled defaultValue={4.5} />
                                        <p className="lastest-product__item__price">120.000đ - 150.000đ</p>
                                    </div>
                                </Link>
                            </div>
                            <div className="category__sidebar__lastest-product__item">
                                <Link to={""}>
                                    <div className="lastest-product__item__image">
                                        <img src="/assets/images/products/product-1.jpg" alt="Product 1" />
                                    </div>
                                    <div className="lastest-product__item__info">
                                        <h4 className="lastest-product__item__name">Pizza Mozzarella</h4>
                                        <Rate allowHalf disabled defaultValue={4.5} />
                                        <p className="lastest-product__item__price">120.000đ - 150.000đ</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="category__sidebar__product-tags">
                            <h2>Tags</h2>
                            <div className="category__sidebar__product-tags__list">
                                <Tag color="#BC9A6C">Tag 1</Tag>
                                <Tag color="#BC9A6C">Tag 2</Tag>
                                <Tag color="#BC9A6C">Tag 3</Tag>
                                <Tag color="#BC9A6C">Tag 4</Tag>
                                <Tag color="#BC9A6C">Tag 5</Tag>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default memo(ListProduct);