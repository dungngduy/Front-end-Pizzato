import { memo } from "react";
import { Helmet } from "react-helmet-async";
import "assets/user/scss/category-page.scss";
import BannerCart from "./banner-cart";
import Cart from "./cart";
const CartPage = () => {
    return (
        <>
            <Helmet>
                <title>Giỏ hàng - Pizzato</title>
                <meta name="description" content="Đây là trang giỏ hàng của website." />
            </Helmet>
            <main>
                {/* Banner Cart */}
                <BannerCart />
                {/* Cart */}
                <Cart />
            </main>
        </>
    );
};

export default memo(CartPage);