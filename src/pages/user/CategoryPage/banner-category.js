import { memo } from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb } from 'antd';
import { ROUTER } from "utils/router";

const BannerCategory = () => {
    return (
        <div className="banner__category" style={{ backgroundImage: "url('/assets/images/banners/banner-category.jpg')" }}>
            <div className="overlay__banner__category">
                <div className="container banner__category__container">
                    <div className="row">
                        <div className="col-xl-12">
                            <h2>Danh sách món ăn</h2>
                            <div className="breadcrumb">
                                <Breadcrumb
                                    separator=">"
                                    items={[
                                        {
                                            title: <Link to={ROUTER.USER.HOME}>Trang chủ</Link>,
                                        },
                                        {
                                            title: <Link to={ROUTER.USER.CATEGORY} className='focus__link'>Danh mục</Link>,
                                        },
                                    ]}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default memo(BannerCategory);