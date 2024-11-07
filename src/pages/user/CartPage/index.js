import { memo } from "react";
import "assets/user/scss/category-page.scss"; 
import BannerCart from "./banner-cart";
import Cart from "./cart";
const CartPage = () => {
    return (
        <main>
            {/* Banner Cart */}
            <BannerCart />
            {/* Cart */}
            <Cart />
        </main>
    );
};

export default memo(CartPage);