import React, { memo, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Rate, Segmented, Select, Slider, Pagination, Input } from 'antd'; // Import Input here
import { AppstoreOutlined, BarsOutlined } from '@ant-design/icons';
import { BsFillShareFill, BsSuitHeart, BsHandbag } from 'react-icons/bs';
import { formatCurrencyVND, formatImage } from 'utils/format';
import AxiosInstance from 'utils/apiServers';

// Destructure Search from Input
const { Search } = Input;

const ListProduct = () => {
    const [viewMode, setViewMode] = useState('Kanban');
    const [inputValue, setInputValue] = useState([20000, 500000]);
    const [menus, setMenus] = useState([]);
    const [filteredMenus, setFilteredMenus] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalProduct, setTotalItems] = useState(0);
    const [searchTerm, setSearchTerm] = useState('');
    const pageSize = 9;

    // Mock options for sorting
    const sortOptions = [
        { value: '1', label: 'Giá: Thấp đến Cao' },
        { value: '2', label: 'Giá: Cao đến Thấp' },
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
                                options={sortOptions}
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
                                        <Link to={`/detail/${menu.id}`}>
                                            <img src={formatImage(menu.thumb_image)} alt={menu.name} />
                                            {viewMode === 'Kanban' && (
                                                <div className="product__item__icons">
                                                    <BsFillShareFill />
                                                    <BsHandbag />
                                                    <BsSuitHeart />
                                                </div>
                                            )}
                                        </Link>
                                        <div className="product__item__info">
                                            {viewMode === 'List' && (
                                                <p className="product__item__category-name">
                                                    <span>{menu.category_name}</span>
                                                </p>
                                            )}
                                            <h2>{menu.name}</h2>
                                            <p>{menu.short_description}</p>
                                            <p>
                                                <del>{formatCurrencyVND(menu.price)}</del>
                                                <span>{formatCurrencyVND(menu.offer_price)}</span>
                                            </p>
                                            <Rate allowHalf disabled defaultValue={4.5} />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <Pagination
                            current={currentPage}
                            pageSize={pageSize}
                            total={totalProduct}
                            onChange={handlePageChange}
                        />
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
                    <div>
                        <h2>Lọc theo giá</h2>
                        <Slider
                            range
                            min={0}
                            max={10000000}
                            value={inputValue}
                            onChange={onChangePrice}
                        />
                        <p>
                            Giá: <strong>{formatCurrencyVND(inputValue[0])} - {formatCurrencyVND(inputValue[1])}</strong>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default memo(ListProduct);
