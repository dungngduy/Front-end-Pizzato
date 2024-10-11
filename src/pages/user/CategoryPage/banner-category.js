import Breadcrumb from 'components/breadcrumb';
import { memo } from 'react';
import { ROUTER } from 'utils/router';

const BannerCategory = () => {
    const breadcrumbItems = [
        { title: 'Trang chủ', url: ROUTER.USER.HOME },
        { title: 'Danh mục', url: ROUTER.USER.CATEGORY, className: 'focus__link' },
    ];
    
    return (
        <Breadcrumb
            backgroundImage="/assets/images/banners/banner-category.jpg"
            title="Danh sách món ăn"
            items={breadcrumbItems}
        />
    );
};

export default memo(BannerCategory);