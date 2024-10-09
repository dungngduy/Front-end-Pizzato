import { memo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Rate, Segmented, Select } from 'antd';
import { AppstoreOutlined, BarsOutlined } from '@ant-design/icons';

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

    return (
        <div className="container">
            <div className="row">
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
                        <div className="row">
                            <div className={`col-xl-${viewMode === 'Kanban' ? '4' : '12'}`}>
                                <div className="product__item">
                                    <Link to={""}>
                                        <div className="product__item__image">
                                            <img src="/assets/images/products/product-1.jpg" alt="Product-1" />
                                        </div>
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
                            <div className={`col-xl-${viewMode === 'Kanban' ? '4' : '12'}`}>
                                <div className="product__item">
                                    <Link to={""}>
                                        <div className="product__item__image">
                                            <img src="/assets/images/products/product-1.jpg" alt="Product-1" />
                                        </div>
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
                            <div className={`col-xl-${viewMode === 'Kanban' ? '4' : '12'}`}>
                                <div className="product__item">
                                    <Link to={""}>
                                        <div className="product__item__image">
                                            <img src="/assets/images/products/product-1.jpg" alt="Product-1" />
                                        </div>
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
                            <div className={`col-xl-${viewMode === 'Kanban' ? '4' : '12'}`}>
                                <div className="product__item">
                                    <Link to={""}>
                                        <div className="product__item__image">
                                            <img src="/assets/images/products/product-1.jpg" alt="Product-1" />
                                        </div>
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
                            <div className={`col-xl-${viewMode === 'Kanban' ? '4' : '12'}`}>
                                <div className="product__item">
                                    <Link to={""}>
                                        <div className="product__item__image">
                                            <img src="/assets/images/products/product-1.jpg" alt="Product-1" />
                                        </div>
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
                            <div className={`col-xl-${viewMode === 'Kanban' ? '4' : '12'}`}>
                                <div className="product__item">
                                    <Link to={""}>
                                        <div className="product__item__image">
                                            <img src="/assets/images/products/product-1.jpg" alt="Product-1" />
                                        </div>
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
                    </div>
                </div>
            </div>
        </div>
    );
};

export default memo(ListProduct);