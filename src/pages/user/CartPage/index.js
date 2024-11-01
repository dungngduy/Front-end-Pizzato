import { memo } from "react";
import "assets/user/scss/category-page.scss"; 
import BannerCart from "./banner-cart";
import Cart from "./cart";
import Checkout from "./checkout"
const CartPage = () => {
    return (
        <main>
            {/* Banner Cart */}
            <BannerCart />
            {/* Cart */}
            <Cart />
            {/* check out
            <Checkout/> */}
        </main>
    );
};

export default memo(CartPage);