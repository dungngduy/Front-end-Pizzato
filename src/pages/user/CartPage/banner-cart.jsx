import Breadcrumb from 'components/breadcrumb';
import { memo } from 'react';
import { ROUTER } from 'utils/router';

const BannerCart = () => {
    const breadcrumbItems = [
        { title: 'Trang chủ', url: ROUTER.USER.HOME },
        { title: 'Giỏ hàng', url: ROUTER.USER.CART, className: 'focus__link' },
    ];
    
    return (
        <Breadcrumb
            backgroundImage="/assets/images/breadcrumbs/breadcrumb-2.webp"
            title="Giỏ hàng"
            items={breadcrumbItems}
        />
    );
};

export default memo(BannerCart);