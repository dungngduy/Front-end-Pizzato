import Breadcrumb from 'components/breadcrumb';
import { memo } from 'react';
import { ROUTER } from 'utils/router';

const BannerDetail = () => {
    const breadcrumbItems = [
        { title: 'Trang chủ', url: ROUTER.USER.HOME },
        { title: 'Chi tiết món ăn', url: ROUTER.USER.DETAIL, className: 'focus__link' },
    ];
    
    return (
        <Breadcrumb
            backgroundImage="/assets/images/banners/banner-category.jpg"
            title="Yummy Chicken Chup"
            items={breadcrumbItems}
        />
    );
};

export default memo(BannerDetail);