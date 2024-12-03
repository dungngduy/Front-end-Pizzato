import Breadcrumb from 'components/breadcrumb';
import { memo } from 'react';
import { ROUTER } from 'utils/router';

const BannerCategory = () => {
    const breadcrumbItems = [
        { title: 'Trang chủ', url: ROUTER.USER.HOME },
        { title: 'Giới thiệu', url: ROUTER.USER.ABOUT, className: 'focus__link' },
    ];
    
    return (
        <Breadcrumb
            backgroundImage="/assets/images/breadcrumbs/breadcrumb-3.jpg"
            title="Giới thiệu"
            items={breadcrumbItems}
        />
    );
};

export default memo(BannerCategory);