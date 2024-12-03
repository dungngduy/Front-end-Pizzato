import Breadcrumb from 'components/breadcrumb';
import { memo } from 'react';
import { ROUTER } from 'utils/router';

const BannerCategory = () => {
    const breadcrumbItems = [
        { title: 'Trang chủ', url: ROUTER.USER.HOME },
        { title: 'Bài viết', url: ROUTER.USER.CONTACT, className: 'focus__link' },
    ];
    
    return (
        <Breadcrumb
            backgroundImage="/assets/images/breadcrumbs/breadcrumb-3.jpg"
            title="Bài viết"
            items={breadcrumbItems}
        />
    );
};

export default memo(BannerCategory);