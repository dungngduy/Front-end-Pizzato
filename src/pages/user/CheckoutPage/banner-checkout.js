import Breadcrumb from "components/breadcrumb";
import { memo } from "react";
import { ROUTER } from "utils/router";

const BannerCheckout = () => {
    const breadcrumbItems = [
        { title: "Trang chủ", url: ROUTER.USER.HOME },
        { title: "Thanh toán", url: ROUTER.USER.CHECKOUT, className: "focus__link" },
    ];

    return (
        <Breadcrumb
            backgroundImage="/assets/images/banners/banner-category.jpg"
            title="Thanh toán"
            items={breadcrumbItems}
        />
    );
};

export default memo(BannerCheckout);